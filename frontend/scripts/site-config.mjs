/**
 * Single source of truth for the public route table.
 *
 * Consumed by:
 *   - scripts/generate-sitemap.mjs (writes dist/sitemap.xml after `vite build`)
 *   - scripts/prerender.mjs        (renders each route × language to static HTML)
 */

export const SITE_ORIGIN = "https://drtojibayev.uz";

export const LANGS = ["uz", "ru", "en"];
export const DEFAULT_LANG = "uz";

/** Turn a canonical (Uzbek) path into its equivalent in `lang`. */
export const localizePath = (routePath = "/", lang = DEFAULT_LANG) => {
  const clean = routePath.startsWith("/") ? routePath : `/${routePath}`;
  if (lang === DEFAULT_LANG) return clean;
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
};

export const ROUTES = [
  {
    path: "/",
    changefreq: "weekly",
    priority: "1.0",
    image: {
      src: "public/dr_tojibayev_og.png",
      title: "Dr. Olimjon Tojibayev — Цифровой Стоматолог (7 Yillik Tajriba)",
      caption: "Dr. Olimjon Tojibayev shaxsiy qabuli. 3D skanerlash, implantlar, elaynerlar va og'riqsiz davolash (Smiles Dental Group bazasida, Andijon).",
    },
  },
  {
    path: "/services",
    changefreq: "weekly",
    priority: "0.9",
    image: {
      src: "src/assets/clinic_room.webp",
      title: "Stomatologik Xizmatlar — Dr. Olimjon Tojibayev",
      caption: "Dental implantatsiya, elaynerlar, breketlar, tsirkon koronkalar, vinirlar va og'riqsiz terapiya.",
    },
  },
  {
    path: "/about",
    changefreq: "monthly",
    priority: "0.9",
    image: {
      src: "src/assets/business_card_front.jpg",
      title: "Dr. Olimjon Tojibayev Haqida — 7 Yillik Klinik Tajriba",
      caption: "Dr. Olimjon Tojibayev — raqamli stomatologiya, biotitan implantatsiya va shaxsiy kafolat.",
    },
  },
  {
    path: "/contact",
    changefreq: "monthly",
    priority: "0.85",
  },
  {
    path: "/booking",
    changefreq: "weekly",
    priority: "0.85",
  },
  {
    path: "/qabul",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/services/digital-dentistry",
    changefreq: "monthly",
    priority: "0.85",
    image: {
      src: "src/assets/clinic_room.webp",
      title: "Raqamli Stomatologiya & 3D Diagnostika — Dr. Olimjon Tojibayev",
      caption: "3D intraoral skanerlash va kompyuterda tabassum dizayni",
    },
  },
  {
    path: "/services/dental-implant",
    changefreq: "monthly",
    priority: "0.85",
    image: {
      src: "src/assets/treatment_implant.webp",
      title: "Dental Implantatsiya (Biotitan) — Dr. Olimjon Tojibayev",
      caption: "Biotitan implantlar bilan yo'qotilgan tishlarni og'riqsiz tiklash",
    },
  },
  {
    path: "/services/elaynerlar",
    changefreq: "monthly",
    priority: "0.85",
    image: {
      src: "src/assets/treatment_aligners.webp",
      title: "Shaffof Elaynerlar (Ko'rinmas Kapalar) — Dr. Olimjon Tojibayev",
      caption: "Breketsiz tishlarni to'g'irlashning zamonaviy usuli",
    },
  },
  {
    path: "/services/breketlar",
    changefreq: "monthly",
    priority: "0.85",
    image: {
      src: "src/assets/treatment_braces.webp",
      title: "Breket Tizimlari — Dr. Olimjon Tojibayev",
      caption: "Metall, keramika va sapfir breketlar bilan tishlarni to'g'irlash",
    },
  },
  {
    path: "/services/tsirkon-keramika-koronka",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_crowns.webp",
      title: "Tsirkon va Keramika Koronkalar — Dr. Olimjon Tojibayev",
      caption: "CAD/CAM kompyuterli frezerlash orqali yuqori mustahkamlikdagi qoplamalar",
    },
  },
  {
    path: "/services/vinirlar",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_veneers.webp",
      title: "Estetik Keramik Vinirlar — Dr. Olimjon Tojibayev",
      caption: "Gollivud tabassumi va tish shakli hamda rangini mukammallashtirish",
    },
  },
  {
    path: "/services/protezlar",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_dentures.webp",
      title: "Zamonaviy Tish Protezlari — Dr. Olimjon Tojibayev",
      caption: "Byugel va elastik neylon protezlar",
    },
  },
  {
    path: "/services/ogriqsiz-terapiya",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_therapy.webp",
      title: "Og'riqsiz Terapiya va Plombalash — Dr. Olimjon Tojibayev",
      caption: "Karies va asab kanallarini 100% og'riqsiz davolash",
    },
  },
  {
    path: "/services/tish-oqartirish",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_whitening.webp",
      title: "Professional Tish Oqartirish — Dr. Olimjon Tojibayev",
      caption: "Emalga zarar yetkazmasdan tishlarni 6-8 tongacha oqartirish",
    },
  },
];
