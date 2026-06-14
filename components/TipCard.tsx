import Link from "next/link";
import type { Tip } from "@/lib/tips";
import { ArrowRight } from "./icons";

export default function TipCard({ tip, delay = 1 }: { tip: Tip; delay?: number }) {
  return (
    <Link className="bcard reveal" data-delay={delay} href={`/travel-tips/${tip.slug}`}>
      <div className="bcard__media">
        <div className="img" style={{ backgroundImage: `url('${tip.image}')` }} />
        <span className="bcard__cat">{tip.category}</span>
      </div>
      <div className="bcard__b">
        <div className="bcard__meta">
          <span>{tip.readTime}</span><span className="dot" /><span>Updated {tip.updated}</span>
        </div>
        <h3>{tip.title}</h3>
        <p>{tip.excerpt}</p>
        <span className="bcard__more">Read guide <ArrowRight size={15} /></span>
      </div>
    </Link>
  );
}
