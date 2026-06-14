import Link from "next/link";
import type { Hotel } from "@/lib/hotels";
import { Star, Pin, ArrowRight } from "./icons";

export default function HotelCard({ hotel, delay = 1 }: { hotel: Hotel; delay?: number }) {
  return (
    <Link className="hcard reveal" data-delay={delay} href={`/hotels/${hotel.slug}`}>
      <div className="hcard__media">
        <div className="img" style={{ backgroundImage: `url('${hotel.image}')` }} />
        <span className="hcard__stars" aria-label={`${hotel.stars} star`}>
          {Array.from({ length: hotel.stars }).map((_, i) => <Star key={i} size={12} />)}
        </span>
        <span className="hcard__city"><Pin size={12} /> {hotel.city}</span>
      </div>
      <div className="hcard__b">
        <h3>{hotel.name}</h3>
        <div className="hcard__rate"><Star size={14} style={{ color: "var(--clay)" }} /> <b>{hotel.rating}</b> · {hotel.reviewCount.toLocaleString()} reviews</div>
        <div className="hcard__amen">
          {hotel.amenities.slice(0, 3).map((a) => <span key={a}>{a}</span>)}
        </div>
        <div className="hcard__foot">
          <div className="pr"><small>from</small><b>${hotel.pricePerNight}</b> <i>/ night</i></div>
          <span className="gocircle"><ArrowRight size={16} /></span>
        </div>
      </div>
    </Link>
  );
}
