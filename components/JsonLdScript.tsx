/** Inline a JSON-LD structured-data block (server-rendered for SEO/GEO). */
export default function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
