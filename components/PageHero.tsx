import Breadcrumb, { type Crumb } from "./Breadcrumb";

type MetaItem = { icon?: React.ReactNode; label: string };

export default function PageHero({
  kicker,
  title,
  subtitle,
  image,
  crumbs,
  meta,
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  crumbs: Crumb[];
  meta?: MetaItem[];
}) {
  return (
    <section
      className="phero"
      style={{
        background: `linear-gradient(180deg,rgba(7,28,40,.62) 0%,rgba(7,28,40,.42) 45%,rgba(7,28,40,.82) 100%), url('${image}') center/cover`,
      }}
    >
      <div className="shell">
        <div className="phero__in">
          <Breadcrumb items={crumbs} />
          <div className="kicker"><i>—</i> <span>{kicker}</span> <span className="ln" /></div>
          <h1>{title}</h1>
          {subtitle ? <p className="phero__sub">{subtitle}</p> : null}
          {meta && meta.length > 0 ? (
            <div className="phero__meta">
              {meta.map((m, i) => (
                <span className="pm" key={i}>{m.icon}{m.label}</span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
