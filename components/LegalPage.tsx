import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import type { LegalDoc } from "@/lib/legal-content";

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <Header />

      <section className="leghero">
        <div className="shell">
          <Breadcrumb items={[{ label: doc.crumb }]} />
          <div className="kicker"><i>—</i> <span>{doc.heroKicker}</span> <span className="ln" /></div>
          <h1>{doc.heroTitle}</h1>
        </div>
      </section>

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
