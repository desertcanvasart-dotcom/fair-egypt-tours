import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };
const base = (size = 18) => ({ width: size, height: size, viewBox: "0 0 24 24" });

export const LogoMark = ({ size = 46, ...p }: P) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true" {...p}>
    <circle cx="50" cy="50" r="46" stroke="#C9794A" strokeWidth="4" />
    <circle cx="50" cy="34" r="9" fill="#C9794A" />
    <path d="M30 62 L42 42 L54 62 Z" fill="#DDA45F" />
    <path d="M50 62 L62 46 L74 62 Z" fill="#A95F35" />
    <path d="M26 70 Q38 64 50 70 T74 70" stroke="#1F3A4A" strokeWidth="4" strokeLinecap="round" />
    <path d="M30 78 Q40 73 50 78 T70 78" stroke="#102B3A" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const LogoMarkLight = ({ size = 46, ...p }: P) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true" {...p}>
    <circle cx="50" cy="50" r="46" stroke="#C9794A" strokeWidth="4" />
    <circle cx="50" cy="34" r="9" fill="#C9794A" />
    <path d="M30 62 L42 42 L54 62 Z" fill="#DDA45F" />
    <path d="M50 62 L62 46 L74 62 Z" fill="#A95F35" />
    <path d="M26 70 Q38 64 50 70 T74 70" stroke="#7FA8B8" strokeWidth="4" strokeLinecap="round" />
    <path d="M30 78 Q40 73 50 78 T70 78" stroke="#5C8294" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const Star = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.8 20.9l1.6-6.8L2.2 8.9l6.9-.6z" />
  </svg>
);

export const Stars = ({ count = 5, size = 15 }: { count?: number; size?: number }) => (
  <span className="stars" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={size} />
    ))}
  </span>
);

export const ArrowRight = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export const Check = ({ size = 14, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const Plus = ({ size = 14, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const BadgeCheck = ({ size = 14, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);

export const PlusCircle = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

export const Shield = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M9 12l2 2 4-4" />
    <path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z" />
  </svg>
);

export const Car = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 13l2-5a2 2 0 012-1.4h10A2 2 0 0119 8l2 5" />
    <path d="M3 13h18v4H3z" />
    <circle cx="7.5" cy="17.5" r="1.5" />
    <circle cx="16.5" cy="17.5" r="1.5" />
  </svg>
);

export const Chat = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M21 11.5a8.5 8.5 0 01-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1121 11.5z" />
  </svg>
);

export const Coin = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

export const Pin = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 21s-7-5-7-11a7 7 0 0114 0c0 6-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Clock = ({ size = 13, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const User = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
    <path d="M16 11a4 4 0 10-8 0M4 20a7 7 0 0116 0" />
  </svg>
);

export const Calendar = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <path d="M3 9h18M8 2v4M16 2v4" />
  </svg>
);

export const Mail = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const Phone = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.4-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
  </svg>
);

export const Boat = ({ size = 14, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 17l9-14 9 14M3 17a4 4 0 008 0a4 4 0 008 0" />
  </svg>
);

export const Menu = ({ size = 20, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const Whatsapp = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} fill="currentColor" aria-hidden="true" {...p}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
  </svg>
);

export const Instagram = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} fill="currentColor" aria-hidden="true" {...p}>
    <path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
  </svg>
);
