# Fair Egypt Tours — destination content research (for review)

Gathered 2026-06-21. **Nothing has been uploaded.** This is the review package; on your "go" I'll write it into the site.

8 destinations · attraction write-ups in the brand voice · 4 real hotels each (32 hotels) · images sourced.

| # | Destination | Attractions | Local imgs | Web imgs needed | Hotels |
|---|-------------|-------------|-----------|-----------------|--------|
| 01 | Cairo & Giza | 5 | all 5 | — | 4 ✅ real, mostly official photos |
| 02 | Luxor | 5 | 4 | Luxor Museum | 4 ✅ real |
| 03 | Aswan | 5 | all 5 | — | 4 ✅ real (2 official photos) |
| 04 | Abu Simbel | 6 | 3 | Qasr Ibrim, Wadi el-Seboua, Kalabsha | 4 ✅ (3 Abu Simbel + 1 Aswan base) |
| 05 | Alexandria | 5 | 2 | Greco-Roman Museum, Qaitbay, Montaza | 4 ✅ real (2 official photos) |
| 06 | North Coast | 5 | 0 | all 5 (Wikimedia) | 4 ✅ real |
| 07 | Sharm El Sheikh | 5 | 2–3 | Ras Muhammad, Naama Bay, Tiran, Mt Sinai | 4 ✅ real, all imgs verified |
| 08 | Siwa | 5 | 0 | all 5 (Wikimedia) | 4 ✅ real (2 official photos) |

## Key finding — hotel images
Attraction images are solid (your named local library + stable Wikimedia for gaps).
**Hotel images are the weak link.** Hotels don't host clean, permanent image URLs — most sit behind booking/Accor/Hilton CDNs that rotate, or serve relative paths. So per hotel I marked:
- ✅ = a concrete official image URL that fetched live (Cairo Longchamps & Golden Tulip, Aswan Basma & Pyramisa, Alexandria Windsor & Tolip, all 4 Sharm, Siwa Adrère & Kenooz, Cairo Pyramids View Inn).
- ⚠ = no stable URL; the booking/official page is given to pull a current photo from.

**Recommendation for the upload phase:** instead of hot-linking any hotel image (fragile + copyright-gray on a live site), **download the chosen photo for each hotel into the project** (e.g. `public/hotels/<slug>.jpg`) and serve it locally. Same for the Wikimedia attraction images (download into `public/attractions/`). That makes the site self-contained and fast, and avoids broken images when a CDN rotates. I'll do this during upload unless you'd rather hot-link.

## Notes
- Cairo's 4 hotels are REAL and replace the current placeholder Cairo hotels (Nile Pearl, etc. were invented).
- Ticket prices/hours are 2026 approximates — Egypt keeps adjusting prices and is moving to card-only at most sites.
- North Coast & Siwa are seasonal/remote — flagged in their files.
- Abu Simbel has 6 attractions (your list); the lesser Nubian temples (Qasr Ibrim, Wadi el-Seboua, Kalabsha) are cruise/boat sights — noted as such.

Read the per-destination files 01–08 for the full write-ups, hotel data and image URLs.
