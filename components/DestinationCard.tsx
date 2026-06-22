import Link from "next/link";
import type { Destination } from "@/lib/destinations";
import { ArrowRight } from "./icons";

export default function DestinationCard({ d, index }: { d: Destination; index: number }) {
  return (
    <Link className="dtile reveal" data-delay={(index % 4) + 1} href={`/destinations/${d.slug}`}>
      <div className="img" style={{ backgroundImage: `url('${d.cardImage}')` }} />
      <div className="dtile__b">
        <span className="dtile__k">{d.region}</span>
        <h3>{d.name}</h3>
        <span className="dtile__go">Explore guide <ArrowRight size={14} /></span>
      </div>
    </Link>
  );
}
