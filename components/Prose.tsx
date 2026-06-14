import type { Section } from "@/lib/content";

/** Renders structured Section[] content into the .prose article style. */
export default function Prose({ sections }: { sections: Section[] }) {
  return (
    <div className="prose">
      {sections.map((s, i) => (
        <div key={i}>
          {s.heading ? <h2>{s.heading}</h2> : null}
          {s.paras?.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
          {s.quote ? <blockquote>{s.quote}</blockquote> : null}
          {s.list ? (
            s.ordered ? (
              <ol>{s.list.map((li, k) => <li key={k}>{li}</li>)}</ol>
            ) : (
              <ul>{s.list.map((li, k) => <li key={k}>{li}</li>)}</ul>
            )
          ) : null}
        </div>
      ))}
    </div>
  );
}
