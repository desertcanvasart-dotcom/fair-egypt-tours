import Link from "next/link";
import type { Destination } from "@/lib/destinations";
import { ArrowRight } from "./icons";

export default function DestinationCard({ d, index }: { d: Destination; index: number }) {
  return (
    <Link className="dtile reveal" data-delay={(index % 4) + 1} href={`/destinations/${d.slug}`}>
      <div className="img" style={{ backgroundImage: `url('${d.cardImage}')` }} />
      <span className="dnum">{String(index + 1).padStart(2, "0")}</span>
      <span className="dcount">{d.tourCount} tours</span>
      <div className="dtile__b">
        <h3>{d.name}</h3>
        <p>{d.region}</p>
        <span className="dgo">Explore <span className="c"><ArrowRight size={14} /></span></span>
      </div>
    </Link>
  );
}
