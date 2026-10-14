import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://drtojibayev.uz";

const years = getYearsOfExperience();

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "Dr. Olimjon Tojibayev — Shifokor-Stomatolog | Implantolog & Ortodont | Andijon",
      description: `Dr. Olimjon Tojibayev — ${years} yillik tajribaga ega shifokor-stomatolog, implantolog va ortodont. 3D skanerlash, og'riqsiz biotitan implantlar, shaffof elaynerlar, tsirkon tojlar va samimiy shaxsiy muolaja. Andijon (Smile Dental Group bazasida). Tel: +998 90 541 97 57.`,
    },
    ru: {
      title: "Д-р Олимжон Тожибаев — Врач-Стоматолог | Имплантолог & Ортодонт | Андижан",
      description: `Врач-стоматолог Д-р Олимжон Тожибаев — ${years} лет успешной клинической практики. 3D сканирование без слепков, надёжные импланты, элайнеры, циркониевые коронки и лечение зубов без боли. Андижан (Smile Dental Group). Тел: +998 90 541 97 57.`,
    },
    en: {
      title: `Dr. Olimjon Tojibayev — Dental Surgeon | Implantologist & Orthodontist`,
      description: `Dr. Olimjon Tojibayev — Dental surgeon with ${years}+ years of clinical excellence. 3D digital scans, dental implants, clear aligners, zirconia crowns, and gentle, stress-free care. Andijan. Tel: +998 90 541 97 57.`,
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. Olimjon Tojibayev | Shaxsiy Muolajalar",
      description:
        "Dental implantatsiya, shaffof elaynerlar, breket tizimlari, tsirkon tojlar, estetik vinirlar va 100% og'riqsiz davolash. Dr. Olimjon Tojibayev shaxsiy qabuli.",
    },
    ru: {
      title: "Стоматологические Услуги — Д-р Олимжон Тожибаев | Личный Приём",
      description:
        "Имплантация, прозрачные элайнеры, брекеты, циркониевые коронки, эстетические виниры и лечение зубов без боли. Персональный приём Д-ра Олимжона Тожибаева.",
    },
    en: {
      title: "Dental Treatments & Services — Dr. Olimjon Tojibayev | Personal Care",
      description:
        "Dental implants, clear aligners, braces, zirconia crowns, aesthetic veneers, and 100% gentle therapy by Dr. Olimjon Tojibayev.",
    },
  },
  about: {
    uz: {
      title: `Dr. Olimjon Tojibayev Haqida — Tajribali Shifokor-Stomatolog`,
      description: `Dr. Olimjon Tojibayev haqida: shifokorlik falsafasi, ${years} yillik klinik tajriba, og'riqsiz 3D raqamli stomatologiya va har bir bemorga samimiy shaxsiy e'tibor.`,
    },
    ru: {
      title: `О Докторе Олимжоне Тожибаеве — Врач-Стоматолог, Имплантолог`,
      description: `О докторе Олимжоне Тожибаеве: врачебная философия, ${years} лет клинической практики, бережное лечение зубов и современные 3D технологии в Андижане.`,
    },
    en: {
      title: `About Dr. Olimjon Tojibayev — Dental Surgeon & Implantologist`,
      description: `Learn about Dr. Olimjon Tojibayev: clinical philosophy, ${years}+ years of dental excellence, tooth preservation, and compassionate care in Andijan.`,
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil — Dr. Olimjon Tojibayev (Andijon)",
      description:
        "Dr. Olimjon Tojibayev shaxsiy qabuliga yozilish — Smile Dental Group (Andijon, 1-kichik daha 8-A Kanechka). Tel: +998 90 541 97 57, +998 93 418 97 57, Telegram: @Dr_Tadjibayev.",
    },
    ru: {
      title: "Контакты и Локация — Д-р Олимжон Тожибаев (Андижан)",
      description:
        "Запись на личный приём к Д-ру Олимжону Тожибаеву — клиника Smile Dental Group (Андижан, 1-й мкрн 8-А Канечка). Телефоны: +998 90 541 97 57, +998 93 418 97 57, Telegram: @Dr_Tadjibayev.",
    },
    en: {
      title: "Contact & Location — Dr. Olimjon Tojibayev (Andijan)",
      description:
        "Book personal appointment with Dr. Olimjon Tojibayev — Smile Dental Group (Andijan, 1st Microdistrict 8-A Kanechka). Phones: +998 90 541 97 57, +998 93 418 97 57, Telegram: @Dr_Tadjibayev.",
    },
  },
  booking: {
    uz: {
      title: "Onlayn Qabulga Yozilish — Dr. Olimjon Tojibayev",
      description:
        "Dr. Olimjon Tojibayev qabuliga qulay vaqtni tanlang. 3D raqamli skanerlash, og'riqsiz muolaja va navbatsiz shaxsiy qabul. Tel: +998 90 541 97 57.",
    },
    ru: {
      title: "Онлайн Запись на Приём — Д-р Олимжон Тожибаев",
      description:
        "Удобная онлайн-запись на персональный приём к Д-ру Олимжону Тожибаеву без очередей. 3D сканирование и лечение без боли. Телефоны: +998 90 541 97 57, +998 93 418 97 57.",
    },
    en: {
      title: "Book Online Appointment — Dr. Olimjon Tojibayev",
      description:
        "Reserve your personal consultation with Dr. Olimjon Tojibayev. Fast online booking, 3D scan, and gentle care. Phone: +998 90 541 97 57.",
    },
  },
  notFound: {
    uz: {
      title: "Sahifa topilmadi (404) — Dr. Olimjon Tojibayev",
      description: "Siz qidirgan sahifa topilmadi. Bosh sahifaga qaytishingiz mumkin.",
    },
    ru: {
      title: "Страница не найдена (404) — Д-р Олимжон Тожибаев",
      description: "Запрошенная страница не найдена. Вернитесь на главную страницу.",
    },
    en: {
      title: "Page Not Found (404) — Dr. Olimjon Tojibayev",
      description: "The page you are looking for does not exist. Please return to the homepage.",
    },
  },
};
