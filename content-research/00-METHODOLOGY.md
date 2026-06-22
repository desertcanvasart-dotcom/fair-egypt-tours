# Content methodology — SEO + GEO + AI citation (applied to destination pages)

Core principle: **write self-contained, specific, well-structured factual blocks a machine can lift out of context and a human can trust.** Same reasons Google ranks it, AI engines cite it, LLMs quote it accurately.

Load-bearing facts:
- Princeton/GT GEO paper (KDD 2024): top levers = **citations, quotations, statistics** (+30–41%). Keyword stuffing ≈ 0. GEO disproportionately helps lower-ranked pages (a 5th-ranked source +115%).
- Semrush 2025: clarity (+32.8%), E-E-A-T (+30.6%), Q&A format (+25.5%), section structure (+22.9%), structured data (+21.6%); promotional tone **−26.2%**.

How we applied it in `lib/destinations.ts` + the destination page:
1. **Answer-first intro** (~50 words, a concrete number, no clichés) → also the meta description source.
2. **Quick-facts box** (`quickFacts`) — region, best months, ideal days, signature, base.
3. **Question-headed overview** (`overview[].heading` phrased as real queries: "Why visit…", "When should you go…", "How many days…"), each answer-first.
4. **Things to do** — each attraction its own self-contained block with a first-hand/operator detail and a specific number; restate the place name (no orphan pronouns).
5. **First-hand operator voice** ("we plan", "our guides", "we'd book") = the E-E-A-T Experience signal a scraper can't fake.
6. **FAQ** (`faqs`) — 6–7 specific Q&As, answer-first, 40–60 words, mined from real traveller questions; powers FAQPage schema.
7. **Unique `metaTitle` (≤60 chars) + `metaDescription` (140–160)** per destination.
8. **Structured data** already on page: TouristDestination + includesAttraction (TouristAttraction), FAQPage, BreadcrumbList.

Avoid: clichés ("hidden gem", "nestled", "perched", "bucket list", "rich tapestry"), interchangeable filler, fabricated facts, promotional brochure tone, keyword stuffing, doorway/near-duplicate pages. Verify every place, price, opening hour; date soft figures.

Full research with sources: see the agent dossier (saved in this folder's git history / transcript).
