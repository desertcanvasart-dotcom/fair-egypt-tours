import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import PostCard from "@/components/PostCard";
import { blogCategories } from "@/lib/blog";
import { getPosts } from "@/lib/cms";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "The Fair Egypt Tours Blog",
  description:
    "Stories, itineraries, and honest guides to travelling Egypt — from a 7-day route and Nile cruise tips to the best Egyptian food and realistic trip budgets.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Fair Egypt Tours Blog",
    description: "Itineraries, guides, food, and honest tips for travelling Egypt.",
    url: "/blog",
  },
};

const HERO =
  "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1900&q=85";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const posts = await getPosts();
  const { category } = await searchParams;
  const active = category && blogCategories.includes(category) ? category : "All";
  const featured = posts.find((p) => p.featured);
  const isAll = active === "All";
  const list = (isAll ? posts : posts.filter((p) => p.category === active)).filter(
    (p) => !(isAll && p.featured)
  );

  return (
    <>
      <Header />
      <PageHero
        kicker="Blog"
        title={<>Stories &amp; guides from <em>the ground.</em></>}
        subtitle="Itineraries, practical guides, food, and honest advice — written by our local team to help you travel Egypt better."
        image={HERO}
        crumbs={[{ label: "Blog" }]}
      />

      <section className="sec">
        <div className="shell">
          <div className="filters">
            {blogCategories.map((c) => (
              <a
                key={c}
                href={c === "All" ? "/blog" : `/blog?category=${encodeURIComponent(c)}`}
                className={c === active ? "is-active" : ""}
              >
                {c}
              </a>
            ))}
          </div>

          {isAll && featured ? (
            <div className="bfeature reveal">
              <div className="bfeature__media">
                <div className="img" style={{ backgroundImage: `url('${featured.image}')` }} />
                <span className="bfeature__cat">Featured · {featured.category}</span>
              </div>
              <div className="bfeature__b">
                <div className="bcard__meta">
                  <span>{featured.date}</span><span className="dot" /><span>{featured.readTime}</span>
                </div>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <a href={`/blog/${featured.slug}`} className="btn btn--solid" style={{ alignSelf: "flex-start" }}>
                  Read article <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ) : null}

          <div className="bgrid">
            {list.map((p, i) => (
              <PostCard key={p.slug} post={p} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
