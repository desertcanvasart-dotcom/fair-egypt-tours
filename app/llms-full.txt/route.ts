import { getPage, getDestinations, getTours, getPosts, getTips } from "@/lib/cms";

const SITE_URL = "https://www.fairegypttours.com";

// Extended llms-full.txt — deeper context for AI systems that want more detail.
export async function GET() {
  const [site, home, dests, tours, posts, tips] = await Promise.all([
    getPage("site"),
    getPage("home"),
    getDestinations(),
    getTours(),
    getPosts(),
    getTips(),
  ]);

  const L: string[] = [];
  L.push(`# ${site.name} — Full Context`, "");
  L.push(site.llmsIntro, "");

  L.push("## What we offer", "");
  L.push(site.llmsOffer, "");

  L.push("## Pricing and booking", "");
  L.push(site.llmsPricing, "");

  if (site.areaServed?.length) L.push("## Areas served", "", site.areaServed.join(", "), "");
  if (site.knowsAbout?.length) L.push("## Topics we specialise in", "", site.knowsAbout.join(", "), "");

  L.push("## Destinations", "");
  for (const d of dests) {
    L.push(`### ${d.name} (${SITE_URL}/destinations/${d.slug})`);
    L.push(d.intro, "");
  }

  L.push("## Tours", "");
  for (const t of tours) {
    L.push(`### ${t.title} — from $${t.price} (${SITE_URL}/tours/${t.slug})`);
    L.push(`${t.place}. ${t.duration}. ${t.summary}`, "");
  }

  if (tips.length) {
    L.push("## Travel tips", "");
    for (const t of tips) L.push(`- ${t.title}: ${t.excerpt} (${SITE_URL}/travel-tips/${t.slug})`);
    L.push("");
  }

  if (posts.length) {
    L.push("## Blog articles", "");
    for (const p of posts) L.push(`- ${p.title}: ${p.excerpt} (${SITE_URL}/blog/${p.slug})`);
    L.push("");
  }

  if (home.faqs?.length) {
    L.push("## Frequently asked questions", "");
    for (const f of home.faqs) L.push(`Q: ${f.q}`, `A: ${f.a}`, "");
  }

  L.push("## Contact", "");
  L.push(`Email: ${site.email}`);
  if (site.phone) L.push(`Phone: ${site.phone}`);
  if (site.whatsapp) L.push(`WhatsApp: ${site.whatsapp}`);
  L.push("");

  return new Response(L.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
