import Link from "next/link";
import type { Hotel } from "@/lib/hotels";
import { Star, Pin, ArrowRight } from "./icons";

export default function HotelCard({ hotel, delay = 1 }: { hotel: Hotel; delay?: number }) {
  return (
    <Link className="hcard reveal" data-delay={delay} href={`/hotels/${hotel.slug}`}>
      <div className="hcard__media">
        <div className="img" style={{ backgroundImage: `url('${hotel.image}')` }} />
        <span className="hcard__stars" aria-label={`${hotel.stars} star`}>
          {Array.from({ length: hotel.stars }).map((_, i) => <Star key={i} size={11} />)}
        </span>
        <span className="hcard__cat">{hotel.category}</span>
      </div>
      <div className="hcard__b">
        <span className="hcard__loc"><Pin size={12} /> {hotel.area}</span>
        <h3>{hotel.name}</h3>
        <div className="hcard__amen">
          {hotel.amenities.slice(0, 3).map((a) => <span key={a}>{a}</span>)}
        </div>
        <div className="hcard__foot">
          <span className="hcard__loc"><Pin size={12} /> {hotel.city}</span>
          <span className="hcard__go">View <ArrowRight size={15} /></span>
        </div>
      </div>
    </Link>
  );
}
