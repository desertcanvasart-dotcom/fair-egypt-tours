import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "@/components/icons";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";

const COPY = {
  en: { title: "This page wandered off into the desert.", text: "We couldn't find the page you were looking for — it may have moved, or the link is out of date.", home: "Back to home", tours: "Browse tours", dests: "Destinations", quote: "Get a fair quote" },
  es: { title: "Esta página se perdió en el desierto.", text: "No pudimos encontrar la página que buscabas — puede que se haya movido o que el enlace esté desactualizado.", home: "Volver al inicio", tours: "Ver tours", dests: "Destinos", quote: "Pide un presupuesto" },
  pt: { title: "Esta página se perdeu no deserto.", text: "Não conseguimos encontrar a página que você procurava — ela pode ter mudado ou o link estar desatualizado.", home: "Voltar ao início", tours: "Ver passeios", dests: "Destinos", quote: "Peça um orçamento" },
} as const;

export default async function NotFound() {
  const locale = await getLocale();
  const c = COPY[locale] ?? COPY.en;
  return (
    <>
      <Header />
      <section className="sec notfound">
        <div className="shell">
          <div className="notfound__in">
            <span className="notfound__code">404</span>
            <h1 className="display">{c.title}</h1>
            <p>{c.text}</p>
            <div className="notfound__links">
              <Link href={localeHref(locale, "/")} className="btn btn--solid">{c.home} <ArrowRight size={16} /></Link>
              <Link href={localeHref(locale, "/tours")} className="btn btn--outline">{c.tours}</Link>
              <Link href={localeHref(locale, "/destinations")} className="btn btn--outline">{c.dests}</Link>
              <Link href={localeHref(locale, "/booking")} className="btn btn--outline">{c.quote}</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
