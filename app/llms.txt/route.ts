import { getPage, getDestinations, getTours } from "@/lib/cms";

const SITE_URL = "https://www.fairegypttours.com";

// Curated llms.txt — the editor's voice (from Site Settings) telling AI systems
// what the site is and how to read it. Not an auto-dumped sitemap.
export async function GET() {
  const [site, dests, tours] = await Promise.all([getPage("site"), getDestinations(), getTours()]);

  const corePages = [
    ["Tours", "/tours", "Browse fair-priced day tours and multi-day Egypt packages with prices up front."],
    ["Destinations", "/destinations", "In-depth travel guides to Egypt's regions — history, where to stay, what to do."],
    ["Travel Tips", "/travel-tips", "Practical advice: best time to visit, planning a first trip, visas, budgets."],
    ["Blog", "/blog", "Itineraries, guides and honest stories about travelling Egypt."],
    ["About", "/about", "Who we are, our story, and what 'fair' means to us."],
  ];

  const lines: string[] = [];
  lines.push(`# ${site.name}`, "");
  lines.push(site.llmsIntro, "");

  lines.push("## Core pages", "");
  lines.push(`- [Home](${SITE_URL}/): ${site.positioning}`);
  for (const [title, path, desc] of corePages) lines.push(`- [${title}](${SITE_URL}${path}): ${desc}`);
  lines.push("");

  if (dests.length) {
    lines.push("## Destination guides", "");
    for (const d of dests) lines.push(`- [${d.name}](${SITE_URL}/destinations/${d.slug}): ${d.tagline}`);
    lines.push("");
  }

  if (tours.length) {
    lines.push("## Featured tours", "");
    for (const t of tours) lines.push(`- [${t.title}](${SITE_URL}/tours/${t.slug}): ${t.place}, from $${t.price}.`);
    lines.push("");
  }

  lines.push("## What we offer", "");
  lines.push(site.llmsOffer, "");

  lines.push("## Pricing and booking", "");
  lines.push(site.llmsPricing, "");

  lines.push("## Contact", "");
  lines.push(`Email: ${site.email}`);
  if (site.phone) lines.push(`Phone: ${site.phone}`);
  if (site.whatsapp) lines.push(`WhatsApp: ${site.whatsapp}`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
