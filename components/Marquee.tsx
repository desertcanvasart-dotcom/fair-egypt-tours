import { Star, Shield, Car, Coin, Chat } from "./icons";

const items = [
  { icon: <Star size={18} className="star" />, text: <><b>4.9/5</b> from 2,140+ travellers</> },
  { icon: <Shield size={18} />, text: <><b>Licensed</b> tour operator</> },
  { icon: <Car size={18} />, text: <><b>Private</b> A/C transport</> },
  { icon: <Coin size={18} />, text: <><b>No hidden</b> costs</> },
  { icon: <Chat size={18} />, text: <><b>24/7</b> human support</> },
];

export default function Marquee() {
  return (
    <section className="marquee" aria-label="Why book with us">
      <div className="marquee__track">
        {[...items, ...items].map((it, i) => (
          <span className="mq" key={i}>
            {it.icon} {it.text}
          </span>
        ))}
      </div>
    </section>
  );
}
