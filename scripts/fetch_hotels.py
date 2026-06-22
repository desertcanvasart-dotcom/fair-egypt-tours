"""
Fetch REAL, hotel-specific photos for each hotel and save up to 4 per hotel as
public/img/hotels/<slug>-1.jpg .. <slug>-4.jpg (optimized). Sources:
  - Wikimedia Commons (search the hotel by name, keep files whose title matches
    a keyword) — reliable for iconic/known hotels.
  - Direct official-site / CDN URLs for kept hotels.
Writes a manifest (slug -> [relative paths]) to scripts/hotels_manifest.json.
"""
import io, json, os, time, urllib.parse, urllib.request

OUT = "public/img/hotels"
MANIFEST = "scripts/hotels_manifest.json"
UA = "FairEgyptToursBot/1.0 (https://fairegypttours.com; content@fairegypttours.com)"
os.makedirs(OUT, exist_ok=True)

try:
    from PIL import Image
except Exception as e:
    raise SystemExit("Pillow required: " + str(e))

# slug -> (commons search term, [keyword tokens that must appear in file title])
COMMONS = {
    "marriott-mena-house": ("Mena House Hotel Giza", ["mena house"]),
    "cairo-marriott": ("Cairo Marriott Hotel Gezirah Palace", ["marriott", "gezirah"]),
    "nile-ritz-carlton": ("Nile Ritz Carlton Cairo", ["ritz", "nile hilton"]),
    "sofitel-winter-palace": ("Winter Palace Hotel Luxor", ["winter palace"]),
    "steigenberger-nile-palace-luxor": ("Steigenberger Nile Palace Luxor", ["steigenberger"]),
    "sonesta-st-george-luxor": ("Sonesta St George Luxor", ["sonesta"]),
    "sofitel-old-cataract": ("Old Cataract Hotel Aswan", ["cataract"]),
    "movenpick-aswan": ("Movenpick Resort Aswan", ["venpick"]),
    "steigenberger-cecil": ("Cecil Hotel Alexandria", ["cecil"]),
    "four-seasons-san-stefano": ("Four Seasons San Stefano Alexandria", ["four seasons", "san stefano"]),
    "windsor-palace-alexandria": ("Windsor Palace Hotel Alexandria", ["windsor"]),
    "seti-abu-simbel": ("Seti Abu Simbel Lake Resort", ["seti", "abu simbel"]),
}

# slug -> [direct image urls]
DIRECT = {
    "pyramids-view-inn": [
        "https://www.pyramidsviewinn.com/wp-content/uploads/2020/03/slide1.jpg",
        "https://www.pyramidsviewinn.com/wp-content/uploads/2020/03/slide2.jpg",
        "https://www.pyramidsviewinn.com/wp-content/uploads/2020/03/img1.jpg",
    ],
    "basma-hotel-aswan": [
        "https://basmahotel.com/wp-content/uploads/2026/02/613A3383-HDR-copy-scaled.jpg",
        "https://basmahotel.com/wp-content/uploads/2025/09/506387523_1166562618821337_7197303386454897411_n.jpg",
        "https://basmahotel.com/wp-content/uploads/2025/09/487455449_1108344261309840_8982101881190841866_n.jpg",
    ],
    "pyramisa-isis-island": [
        "https://lirp.cdn-website.com/5a376bf1/dms3rep/multi/opt/Isis+island+hotel+%2813%29-0e888d96-1920w.jpg",
        "https://lirp.cdn-website.com/5a376bf1/dms3rep/multi/opt/_DSC9846-1920w.jpg",
        "https://lirp.cdn-website.com/5a376bf1/dms3rep/multi/opt/Isis+island+hotel+%281%29-bd105489-1920w.jpg",
    ],
    "eskaleh-ecolodge": ["https://www.eskaleh.net/sites/eskaleh/files/1.jpg"],
    "tuya-hotel-abu-simbel": [],
    "sharm-holiday-resort": [
        "https://i0.wp.com/sharmholidayhotels.com/wp-content/uploads/2023/08/beach.jpg",
        "https://i0.wp.com/sharmholidayhotels.com/wp-content/uploads/2024/11/793d4f3f-93b4-493d-aaff-41446f814a1e.jpg",
    ],
    "naama-bay-resort": [
        "https://www.trophyhotels.com/img/naamaresort/beach.png",
        "https://www.trophyhotels.com/img/naamaresort/aqua.png",
    ],
    "reef-oasis-beach": [
        "https://lirp.cdn-website.com/672c5cde/dms3rep/multi/opt/Amr++Ibrahim+-+Beach+Resort+1-1920w.jpg",
        "https://lirp.cdn-website.com/672c5cde/dms3rep/multi/opt/Amr++Ibrahim+-+Beach+Resort++20-1920w.jpg",
    ],
    "coral-sea-holiday": [
        "https://assets.builderassets.com/site-media/825/waterworld-beach-3.jpg",
        "https://assets.builderassets.com/site-media/825/waterworld-aqua-3.jpg",
    ],
    "beau-site-matruh": ["https://beausite.b-cdn.net/photos/Facility/private-beach-1_1__lg.webp"],
    "al-alamein-hotel": ["https://www-alalameinhotel-com.azureedge.net/wp-content/uploads/2024/08/featured.jpg"],
    "porto-matrouh": ["https://lirp.cdn-website.com/52d4fe1d/dms3rep/multi/opt/PMatrouh+-+Overview+%286%29-1920w.jpg"],
    "porto-marina-alamein": ["https://lirp.cdn-website.com/52d4fe1d/dms3rep/multi/opt/portomarina-12-1920w.jpg"],
    "adrere-amellal": [
        "https://www.adrereamellal.com/adrere/wp-content/uploads/2019/08/adrere-amellal-eco-lodge-siwa.jpg",
        "https://www.adrereamellal.com/adrere/wp-content/uploads/2021/09/slider-adrere-night-in-siwa-oasis.jpg",
    ],
    "kenooz-shali-lodge": [
        "https://siwa.com/wp-content/uploads/2025/06/Shali-Lidge.jpg",
        "https://siwa.com/wp-content/uploads/2025/06/Shali-Lodge-Entrance-1.jpg",
    ],
    "taziry-ecovillages": ["https://www.taziry.com/wp-content/uploads/2017/11/5E3A7864.jpg"],
}


def fetch(url, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=35) as r:
                return r.read()
        except Exception:
            time.sleep(1.5 * (i + 1))
    return None


def commons_urls(term, keywords, want=6):
    q = urllib.parse.quote(term)
    api = ("https://commons.wikimedia.org/w/api.php?action=query&generator=search"
           f"&gsrsearch={q}&gsrlimit=12&gsrnamespace=6&prop=imageinfo"
           "&iiprop=url&iiurlwidth=1600&format=json")
    raw = fetch(api)
    if not raw:
        return []
    try:
        data = json.loads(raw)
    except Exception:
        return []
    pages = (data.get("query") or {}).get("pages") or {}
    # Commons "index" preserves search rank
    ordered = sorted(pages.values(), key=lambda p: p.get("index", 999))
    out = []
    for p in ordered:
        title = p.get("title", "")
        low = title.lower()
        if not low.endswith((".jpg", ".jpeg", ".png")):
            continue
        if keywords and not any(k in low for k in keywords):
            continue
        info = (p.get("imageinfo") or [{}])[0]
        u = info.get("thumburl") or info.get("url")
        if u:
            out.append(u)
        if len(out) >= want:
            break
    return out


def save(slug, urls, cap=4):
    saved = []
    n = 0
    for u in urls:
        if n >= cap:
            break
        b = fetch(u)
        if not b:
            continue
        try:
            im = Image.open(io.BytesIO(b)); im.load()
            if im.width < 500 or im.height < 360:
                continue
            im = im.convert("RGB")
            im.thumbnail((1600, 1600))
            n += 1
            rel = f"/img/hotels/{slug}-{n}.jpg"
            im.save(f"{OUT}/{slug}-{n}.jpg", "JPEG", quality=82, optimize=True, progressive=True)
            saved.append(rel)
        except Exception:
            continue
    return saved


manifest = {}
slugs = sorted(set(list(COMMONS.keys()) + list(DIRECT.keys())))
for slug in slugs:
    urls = []
    if slug in COMMONS:
        term, kw = COMMONS[slug]
        urls += commons_urls(term, kw)
        time.sleep(1.0)
    urls += DIRECT.get(slug, [])
    # de-dupe preserving order
    seen = set(); urls = [u for u in urls if not (u in seen or seen.add(u))]
    saved = save(slug, urls)
    manifest[slug] = saved
    print(f"  {slug}: {len(saved)} image(s)" + ("" if saved else "  <-- NONE"))

with open(MANIFEST, "w") as f:
    json.dump(manifest, f, indent=2)
print("manifest ->", MANIFEST)
