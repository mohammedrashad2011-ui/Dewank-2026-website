// Visual identities Dewank designed. Shared by the Work pages (AR and EN) and the
// mini visual identity offer showcase. Copy describes only what each board shows.

export type IdentityLocale = "ar" | "en";

type Localized = Record<IdentityLocale, string>;

type IdentityEntry = {
  key: string;
  name: Localized;
  sector: Localized;
  summary: Localized;
  /** File name in public/work and public/en/work, without extension. */
  file: string;
  /** Intrinsic size of the large image. A file-800.webp version also exists. */
  width: number;
  height: number;
  /** Accent used by the offer showcase glow and progress line. */
  accent: string;
};

const entries: IdentityEntry[] = [
  {
    key: "reachwayad",
    name: { ar: "ReachwayAD", en: "ReachwayAD" },
    sector: { ar: "التسويق والإعلان", en: "Marketing and advertising" },
    summary: {
      ar: "هوية مؤسسية تجمع بين الثقة والحركة، مطبقة عبر القرطاسية ونقاط الحضور الرقمية.",
      en: "A corporate identity that balances trust with movement, applied across stationery and digital touchpoints.",
    },
    file: "reachwayad-remastered", width: 1448, height: 1086, accent: "#d2a64c",
  },
  {
    key: "clinika",
    name: { ar: "Clinika", en: "Clinika" },
    sector: { ar: "الجمال والعناية", en: "Beauty and care" },
    summary: {
      ar: "هوية راقية لقطاع الجمال بملامح تحريرية هادئة وتطبيقات تعزز الثقة والانطباع الأول.",
      en: "A refined identity for the beauty sector, with a calm editorial character and applications that build trust from the first impression.",
    },
    file: "clinika-remastered", width: 1448, height: 1086, accent: "#e7aecb",
  },
  {
    key: "arab-sun",
    name: { ar: "Arab Sun", en: "Arab Sun" },
    sector: { ar: "السفر والسياحة", en: "Travel and tourism" },
    summary: {
      ar: "نظام بصري يستلهم الشمس والحركة العربية، مطبق على التغليف والمواد المطبوعة.",
      en: "A visual system inspired by the sun and Arabian movement, applied to packaging and printed materials.",
    },
    file: "arab-sun-remastered", width: 1448, height: 1086, accent: "#e6b553",
  },
  {
    key: "dar-al-safa",
    name: { ar: "دار الصفاء", en: "Dar Al Safa" },
    sector: { ar: "الرعاية الصحية", en: "Healthcare" },
    summary: {
      ar: "هوية طبية دافئة تجمع بين الرعاية والاحتراف عبر اللافتات والقرطاسية ونقاط الاستقبال.",
      en: "A warm medical identity that balances care and professionalism across signage, stationery and reception points.",
    },
    file: "dar-al-safa-remastered", width: 1448, height: 1086, accent: "#86bdb3",
  },
  {
    key: "glowmore",
    name: { ar: "Glowmore", en: "Glowmore" },
    sector: { ar: "الجمال والعناية بالبشرة", en: "Beauty and skincare" },
    summary: {
      ar: "هوية راقية بالعربية والإنجليزية لعلامة جمال وعناية بالبشرة، مطبقة على العبوات والأكياس وبطاقات المنتجات.",
      en: "A refined bilingual identity for a beauty and skincare brand, applied to jars, shopping bags and product tags.",
    },
    file: "glowmore", width: 1448, height: 965, accent: "#d9a98e",
  },
  {
    key: "vivantura",
    name: { ar: "Vivantura", en: "Vivantura" },
    sector: { ar: "السفر وأسلوب الحياة", en: "Travel and lifestyle" },
    summary: {
      ar: "هوية لعلامة سفر وأسلوب حياة تجمع المغامرة والطبيعة والرقي، مطبقة على بطاقات الأعمال والحقائب والعبوات.",
      en: "An identity for a travel and lifestyle brand that blends adventure, nature and refinement, applied to business cards, tote bags and bottles.",
    },
    file: "vivantura", width: 1448, height: 965, accent: "#9cba84",
  },
  {
    key: "poppy-kidz-books",
    name: { ar: "Poppy KidZ Books", en: "Poppy KidZ Books" },
    sector: { ar: "نشر كتب الأطفال", en: "Children's publishing" },
    summary: {
      ar: "هوية دافئة لدار نشر كتب للأطفال، بزهرة الخشخاش رمزًا للخيال والنمو، مطبقة على الأغلفة والحقائب والفواصل.",
      en: "A warm identity for a children's book publisher, with a poppy flower as a symbol of imagination and growth, applied to covers, tote bags and bookmarks.",
    },
    file: "poppy-kidz-books", width: 1448, height: 965, accent: "#ec7140",
  },
  {
    key: "ikhtiyar",
    name: { ar: "اختيار", en: "Ikhtiyar" },
    sector: { ar: "الصيانة العامة · البحرين", en: "General maintenance · Bahrain" },
    summary: {
      ar: "هوية لشركة خدمات صيانة عامة في البحرين تجمع رمز الأداة مع حضور مؤسسي واثق، مطبقة على لافتة الاستقبال.",
      en: "An identity for a general maintenance company in Bahrain that pairs a tool motif with a confident corporate presence, applied to reception signage.",
    },
    file: "ikhtiyar-maintenance", width: 1448, height: 815, accent: "#d4ac55",
  },
];

export type IdentityItem = {
  key: string;
  name: string;
  sector: string;
  summary: string;
  image: string;
  imageSmall: string;
  width: number;
  height: number;
  ratio: string;
  accent: string;
};

export function identityPortfolio(locale: IdentityLocale): IdentityItem[] {
  const base = locale === "en" ? "/en/work/" : "/work/";
  return entries.map((entry) => ({
    key: entry.key,
    name: entry.name[locale],
    sector: entry.sector[locale],
    summary: entry.summary[locale],
    image: `${base}${entry.file}.webp`,
    imageSmall: `${base}${entry.file}-800.webp`,
    width: entry.width,
    height: entry.height,
    ratio: `${entry.width} / ${entry.height}`,
    accent: entry.accent,
  }));
}

/** Layout classes for the identities added after the original four Work page cards. */
const workLayout: Record<string, string> = {
  glowmore: "pf-card pf-7",
  vivantura: "pf-card pf-5 pf-lift",
  "poppy-kidz-books": "pf-card pf-5",
  ikhtiyar: "pf-card pf-7 pf-lift",
};

/** The four newer identities, shaped for the Work page card grid. */
export function newWorkIdentityProjects(locale: IdentityLocale) {
  return identityPortfolio(locale)
    .filter((item) => item.key in workLayout)
    .map((item) => ({
      name: item.name,
      sector: item.sector,
      image: item.image,
      imageSmall: item.imageSmall,
      ratio: item.ratio,
      className: `${item.key} ${workLayout[item.key]}`,
      summary: item.summary,
    }));
}
