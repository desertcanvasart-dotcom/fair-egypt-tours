import type { Locale } from "./i18n";

// The tour `category` field and the TourCategory `name` field must stay equal
// for matching, so both are translated through this one shared map.
export const categoryLabels: Record<string, Record<Locale, string>> = {
  "Pyramids & Giza Tours": {
    en: "Pyramids & Giza Tours",
    es: "Tours de Pirámides y Guiza",
    pt: "Passeios de Pirâmides e Gizé",
  },
  "Cairo City Tours": {
    en: "Cairo City Tours",
    es: "Tours por la Ciudad de El Cairo",
    pt: "Passeios pela Cidade do Cairo",
  },
  "Desert & Oasis Adventures": {
    en: "Desert & Oasis Adventures",
    es: "Aventuras de Desierto y Oasis",
    pt: "Aventuras de Deserto e Oásis",
  },
  "Alexandria Day Tours": {
    en: "Alexandria Day Tours",
    es: "Excursiones de un Día a Alejandría",
    pt: "Passeios de um Dia a Alexandria",
  },
};

export function categoryLabel(enName: string, locale: Locale): string {
  return categoryLabels[enName]?.[locale] ?? enName;
}
