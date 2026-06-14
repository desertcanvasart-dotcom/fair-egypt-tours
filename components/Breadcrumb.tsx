import { Fragment } from "react";
import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items, ink = false }: { items: Crumb[]; ink?: boolean }) {
  return (
    <nav className={`crumb${ink ? " crumb--ink" : ""}`} aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((c, i) => (
        <Fragment key={i}>
          <span className="sep" aria-hidden="true">/</span>
          {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
        </Fragment>
      ))}
    </nav>
  );
}
