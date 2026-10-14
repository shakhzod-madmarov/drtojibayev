import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://drtojibayev.uz";

const years = getYearsOfExperience();

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "Dr. Olimjon Tojibayev — Vrach Stomatolog | Цифровой Стоматолог | 7 Yillik Tajriba",
      description: `Dr. Olimjon Tojibayev — 7 yillik klinik tajribaga ega raqamli stomatolog (Цифровой Стоматолог). Dental implantatsiya, shaffof elaynerlar, breketlar, tsirkon va keramik koronka, vinirlar, protezlar, tish oqartirish va 100% og'riqsiz davolash. Smile Dental Group, Andijon. Tel: +998 90 541 97 57, +998 93 418 97 57.`,
    },
    ru: {
      title: "Д-р Олимжон Тожибаев — Цифровой Стоматолог | 7 Лет Опыта | Андижан",
      description: `Врач-стоматолог Д-р Олимжон Тожибаев (Цифровой Стоматолог). 7 лет клинической практики. 3D цифровое сканирование, имплантация, прозрачные элайнеры, брекеты, циркониевые коронки, виниры, лечение без боли. Smile Dental Group. Тел: +998 90 541 97 57.`,
    },
    en: {
      title: "Dr. Olimjon Tojibayev — Digital Dentist & Implant Specialist | 7 Years Experience",
      description: `Dr. Olimjon Tojibayev — digital dentist with 7+ years of clinical excellence. 3D intraoral scanning, dental implants, clear aligners, orthodontic braces, zirconia crowns, veneers, painless therapy. Smile Dental Group, Andijan. Tel: +998 90 541 97 57.`,
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. Olimjon Tojibayev | Raqamli Stomatologiya",
      description:
        "Dental implantatsiya, shaffof elaynerlar, breket tizimlari, tsirkon va keramik koronka, estetik vinirlar, tish protezlari, professional tish oqartirish va 100% og'riqsiz davolash.",
    },
    ru: {
      title: "Услуги Цифровой Стоматологии — Д-р Олимжон Тожибаев",
      description:
        "Полный спектр услуг: цифровая имплантация, прозрачные элайнеры, брекеты, циркониевые и керамические коронки, виниры, протезы, отбеливание и лечение зубов без боли.",
    },
    en: {
      title: "Digital Dental Services & Treatments — Dr. Olimjon Tojibayev",
      description:
        "Cutting-edge digital dentistry: dental implants, clear aligners, orthodontic braces, zirconia & ceramic crowns, veneers, dentures, whitening, and 100% gentle painless therapy.",
    },
  },
  about: {
    uz: {
      title: `Dr. Olimjon Tojibayev Haqida — ${years} Yillik Tajribaga Ega Raqamli Stomatolog`,
      description: `Dr. Olimjon Tojibayev — raqamli stomatologiya, implantologiya va estetik tabassum bo'yicha ${years} yillik tajribaga ega mutaxassis. Smile Dental Group, Andijon.`,
    },
    ru: {
      title: `О Докторе Олимжоне Тожибаеве — Цифровой Стоматолог | ${years} Лет Практики`,
      description: `Д-р Олимжон Тожибаев — ведущий специалист по цифровой стоматологии, имплантации и эстетической реставрации. ${years} лет успешной клинической практики. Smile Dental Group.`,
    },
    en: {
      title: `About Dr. Olimjon Tojibayev — Digital Dentist with ${years} Years Experience`,
      description: `Learn more about Dr. Olimjon Tojibayev, specializing in 3D digital dentistry, guided implants, clear aligners, and aesthetic smile design with ${years} years of experience.`,
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil — Dr. Olimjon Tojibayev | Smile Dental Group Andijon",
      description:
        "Dr. Olimjon Tojibayev qabuli — Smile Dental Group (Andijon, 1-kichik daha 8-A Kanechka). Tel: +998 90 541 97 57, +998 93 418 97 57, Telegram: @Dr_Tadjibayev, Instagram: @dr_tojibayev.",
    },
    ru: {
      title: "Контакты и Запись — Д-р Олимжон Тожибаев | Smile Dental Group Андижан",
      description:
        "Приём Д-ра Олимжона Тожибаева в Smile Dental Group (г. Андижан, 1-й микрорайон 8-А Канечка). Телефоны: +998 90 541 97 57, +998 93 418 97 57, Telegram: @Dr_Tadjibayev.",
    },
    en: {
      title: "Contact & Appointments — Dr. Olimjon Tojibayev | Smile Dental Group",
      description:
        "Visit Dr. Olimjon Tojibayev at Smile Dental Group (1st Microdistrict 8-A Kanechka, Andijan). Phones: +998 90 541 97 57, +998 93 418 97 57, Telegram: @Dr_Tadjibayev.",
    },
  },
  booking: {
    uz: {
      title: "Onlayn Qabulga Yozilish — Dr. Olimjon Tojibayev | Smile Dental Group",
      description:
        "Dr. Olimjon Tojibayev qabuliga onlayn yozilish. Qulay sana va bo'sh soatni tanlang, navbatsiz qabulga yoziling. Tel: +998 90 541 97 57.",
    },
    ru: {
      title: "Онлайн Запись на Приём — Д-р Олимжон Тожибаев | Андижан",
      description:
        "Удобная онлайн-запись к цифровому стоматологу Д-ру Олимжону Тожибаеву без очередей. Телефоны: +998 90 541 97 57, +998 93 418 97 57.",
    },
    en: {
      title: "Book Online Appointment — Dr. Olimjon Tojibayev | Andijan",
      description:
        "Reserve your digital dental consultation with Dr. Olimjon Tojibayev. Fast, hassle-free booking. Phone: +998 90 541 97 57.",
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
