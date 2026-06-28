import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import PostCard from "@/components/PostCard";
import { blogCategories, type Post } from "@/lib/blog";
import { postsI18n } from "@/lib/posts-i18n";
import { getPosts } from "@/lib/cms";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";
import { ArrowRight } from "@/components/icons";

const HERO =
  "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1900&q=85";

const LIST_META: Record<string, { title: string; desc: string }> = {
  en: { title: "The Fair Egypt Tours Blog", desc: "Itineraries, guides, food, and honest tips for travelling Egypt." },
  es: { title: "El blog de Fair Egypt Tours", desc: "Itinerarios, guías, gastronomía y consejos honestos para viajar por Egipto." },
  pt: { title: "O blog da Fair Egypt Tours", desc: "Itinerários, guias, gastronomia e dicas honestas para viajar pelo Egito." },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = LIST_META[locale];
  const url = localeHref(locale, "/blog");
  return {
    title: meta.title,
    description: meta.desc,
    alternates: { canonical: url },
    openGraph: { title: meta.title, description: meta.desc, url },
  };
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const locale = await getLocale();
  const m = t(locale).blog;
  const loc = (p: Post): Post => (locale === "en" ? p : { ...p, ...(postsI18n[p.slug]?.[locale] ?? {}) });

  const posts = (await getPosts()).map(loc);
  const { category } = await searchParams;
  const active = category && blogCategories.includes(category) ? category : "All";
  const isAll = active === "All";
  const featured = isAll ? posts.find((p) => p.featured) : undefined;
  const list = (isAll ? posts : posts.filter((p) => p.category === active)).filter((p) => !(isAll && p.featured));

  const catLabel = (c: string) => (m.cats as Record<string, string>)[c] ?? c;
  const catHref = (c: string) => (c === "All" ? localeHref(locale, "/blog") : localeHref(locale, `/blog?category=${encodeURIComponent(c)}`));

  return (
    <>
      <Header />
      <PageHero
        kicker={m.kicker}
        title={<>{m.titleLead} <em>{m.titleEm}</em></>}
        subtitle={m.sub}
        image={HERO}
        crumbs={[{ label: m.kicker }]}
      />

      <section className="sec">
        <div className="shell">
          <div className="filters">
            {blogCategories.map((c) => (
              <a key={c} href={catHref(c)} className={c === active ? "is-active" : ""}>{catLabel(c)}</a>
            ))}
          </div>

          {isAll && featured ? (
            <div className="bfeature reveal">
              <div className="bfeature__media">
                <div className="img" style={{ backgroundImage: `url('${featured.image}')` }} />
                <span className="bfeature__cat">{m.featured} · {catLabel(featured.category)}</span>
              </div>
              <div className="bfeature__b">
                <div className="bcard__meta">
                  <span>{featured.date}</span><span className="dot" /><span>{featured.readTime}</span>
                </div>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <a href={localeHref(locale, `/blog/${featured.slug}`)} className="btn btn--solid" style={{ alignSelf: "flex-start" }}>
                  {m.readArticle} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ) : null}

          {list.length === 0 && !featured ? (
            <div className="tours-empty">
              <h3 className="subhead">{m.emptyTitle}</h3>
              <p>{m.emptyText}</p>
              <a href={localeHref(locale, "/booking")} className="btn btn--solid">{m.planTrip} <ArrowRight size={16} /></a>
            </div>
          ) : (
            <div className="bgrid">
              {list.map((p, i) => (
                <PostCard key={p.slug} post={p} delay={(i % 3) + 1} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
