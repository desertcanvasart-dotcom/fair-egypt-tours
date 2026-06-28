import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import type { LegalDoc } from "@/lib/legal-content";

const HERO =
  "https://images.unsplash.com/photo-1542379653-b928db1b4956?auto=format&fit=crop&w=1900&q=85";

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <Header />
      <PageHero
        kicker={doc.heroKicker}
        title={doc.heroTitle}
        image={HERO}
        crumbs={[{ label: doc.crumb }]}
      />

      <section className="sec">
        <div className="shell legal">
          <p className="legal__updated">{doc.updated}</p>
          <p className="legal__intro reveal">{doc.intro}</p>

          {doc.sections.map((s) => (
            <div className="legal__sec reveal" key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paras?.map((p, i) => <p key={i}>{p}</p>)}
              {s.bullets?.length ? (
                <ul>
                  {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
