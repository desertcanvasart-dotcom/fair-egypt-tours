import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import Prose from "@/components/Prose";
import PostCard from "@/components/PostCard";
import JsonLdScript from "@/components/JsonLdScript";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { ORG_ID } from "@/components/JsonLd";
import { getPost, getPosts, getPostSlugs } from "@/lib/cms";
import { site } from "@/lib/data";
import { Clock, Calendar, ArrowRight } from "@/components/icons";

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = await getPost(slug);
  if (!p) return {};
  const metaTitle = p.metaTitle?.trim();
  const description = p.metaDescription?.trim() || p.excerpt;
  return {
    title: metaTitle ? { absolute: metaTitle } : p.title,
    description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      title: metaTitle || `${p.title} | Fair Egypt Tours`,
      description,
      url: `/blog/${p.slug}`,
      type: "article",
      publishedTime: p.isoDate,
      modifiedTime: p.updatedIso ?? p.isoDate,
      authors: [p.author.name],
      images: [{ url: p.image }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getPost(slug);
  if (!p) notFound();

  const related = (await getPosts()).filter((x) => x.slug !== p.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    image: p.image,
    datePublished: p.isoDate,
    dateModified: p.updatedIso ?? p.isoDate,
    author: {
      "@type": "Person",
      name: p.author.name,
      ...(p.author.role ? { jobTitle: p.author.role } : {}),
      worksFor: { "@id": ORG_ID },
    },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${site.url}/blog/${p.slug}`,
  };
  const faqSchema = p.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <>
      <JsonLdScript data={schema} />
      {faqSchema ? <JsonLdScript data={faqSchema} /> : null}
      <BreadcrumbJsonLd items={[{ name: "Blog", url: "/blog" }, { name: p.title }]} />
      <Header />
      <PageHero
        kicker={`Blog · ${p.category}`}
        title={p.title}
        subtitle={p.excerpt}
        image={p.image}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: p.title }]}
        meta={[
          { icon: <Calendar size={16} />, label: p.date },
          { icon: <Clock size={16} />, label: p.readTime },
        ]}
      />

      <section className="sec">
        <div className="shell">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div className="byline" style={{ paddingBottom: 28, marginBottom: 32, borderBottom: "1px solid var(--line)" }}>
              <span className="av" style={{ backgroundImage: `url('${p.author.avatar}')` }} />
              <div>
                <b>{p.author.name}</b>
                <span>{p.author.role ?? "Fair Egypt Tours"}</span>
              </div>
              <time dateTime={p.isoDate} style={{ marginLeft: "auto", color: "var(--muted)", fontSize: 13 }}>{p.date}</time>
            </div>

            <Prose sections={p.body} />

            {p.related?.length ? (
              <div className="postrel">
                <h3>Keep planning your trip</h3>
                <ul>
                  {p.related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href}>{r.label} <ArrowRight size={14} /></Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {p.faqs?.length ? (
              <div className="postfaq">
                <h2>Frequently asked questions</h2>
                {p.faqs.map((f, i) => (
                  <div className="postfaq__i" key={i}>
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--sand)", paddingTop: 0 }}>
        <div className="shell" style={{ paddingTop: "clamp(72px,9vw,120px)" }}>
          <div className="sec-top">
            <div className="kicker reveal"><i>—</i> <span>Read next</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">More from the blog.</h2>
              <Link className="btn btn--outline reveal" data-delay="2" href="/blog">All articles <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="bgrid">
            {related.map((x, i) => <PostCard key={x.slug} post={x} delay={(i % 3) + 1} />)}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
