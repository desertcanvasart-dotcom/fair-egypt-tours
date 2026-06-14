import type { MetadataRoute } from "next";

const SITE_URL = "https://www.fairegypttours.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard search engines
      { userAgent: ["Googlebot", "Bingbot", "DuckDuckBot", "Slurp"], allow: "/" },
      // AI search + training crawlers — allowed so the brand is discoverable to
      // users asking AI assistants for recommendations.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          "CCBot",
          "cohere-ai",
          "Bytespider",
          "Amazonbot",
          "Meta-ExternalAgent",
        ],
        allow: "/",
      },
      // Aggressive SEO scrapers we don't need
      { userAgent: ["AhrefsBot", "SemrushBot", "DotBot", "MJ12bot"], disallow: "/" },
      // Everyone else: allow public site, keep operational routes private
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/", "/login"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
