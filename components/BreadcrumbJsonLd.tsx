const SITE_URL = "https://www.fairegypttours.com";

/** Emits BreadcrumbList structured data. "Home" is prepended automatically. */
export default function BreadcrumbJsonLd({ items }: { items: { name: string; url?: string }[] }) {
  const list = [{ name: "Home", url: "/" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.url ? { item: `${SITE_URL}${it.url}` } : {}),
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
