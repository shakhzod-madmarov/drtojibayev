import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://drtojibayev.uz";

const years = getYearsOfExperience();

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const getServiceSeo = (serviceId, lang = "uz") =>
  SERVICES_SEO[serviceId]?.[lang] || SERVICES_SEO[serviceId]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "Dr. Olimjon Tojibayev — Shifokor-Stomatolog | Implantolog & Ortodont | Andijon",
      description: `Dr. Olimjon Tojibayev — ${years} yillik tajribaga ega shifokor-stomatolog, implantolog va ortodont. 3D skanerlash, og'riqsiz biotitan implantlar, shaffof elaynerlar, tsirkon tojlar va samimiy shaxsiy muolaja. Andijon (Smile Dental Group bazasida). Tel: +998 90 541 97 57.`,
      keywords: "Dr Olimjon Tojibayev, stomatolog Andijon, implantolog Andijon, ortodont Andijon, tish davolash, tish ekish narxi, shaffof elaynerlar, breketlar, tsirkon koronka, vinirlar, ogriqsiz stomatologiya, Smile Dental Group Kanechka",
    },
    ru: {
      title: "Д-р Олимжон Тожибаев — Врач-Стоматолог | Имплантолог & Ортодонт | Андижан",
      description: `Врач-стоматолог Д-р Олимжон Тожибаев — ${years} лет успешной клинической практики. 3D сканирование без слепков, надёжные импланты, элайнеры, циркониевые коронки и лечение зубов без боли. Андижан (Smile Dental Group). Тел: +998 90 541 97 57.`,
      keywords: "доктор Олимжон Тожибаев, стоматолог Андижан, имплантолог Андижан, ортодонт Андижан, имплантация зубов цена, элайнеры, брекеты, циркониевые коронки, виниры Emax, лечение зубов без боли, клиника Smile Dental Group",
    },
    en: {
      title: "Dr. Olimjon Tojibayev — Dental Surgeon | Implantologist & Orthodontist",
      description: `Dr. Olimjon Tojibayev — Dental surgeon with ${years}+ years of clinical excellence. 3D digital scans, dental implants, clear aligners, zirconia crowns, and gentle, stress-free care. Andijan. Tel: +998 90 541 97 57.`,
      keywords: "Dr Olimjon Tojibayev, dentist in Andijan, dental surgeon Uzbekistan, dental implants Andijan, clear aligners, orthodontic braces, zirconia crowns, veneers, painless dentistry, Smile Dental Group",
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. Olimjon Tojibayev | Shaxsiy Muolajalar",
      description:
        "Dental implantatsiya, shaffof elaynerlar, breket tizimlari, tsirkon tojlar, estetik vinirlar va 100% og'riqsiz davolash. Dr. Olimjon Tojibayev shaxsiy qabuli.",
      keywords: "stomatologiya xizmatlari Andijon, dental implant, elayner, breket, tsirkon koronka, vinir, tish protezi, tish oqartirish, Dr Olimjon Tojibayev",
    },
    ru: {
      title: "Стоматологические Услуги — Д-р Олимжон Тожибаев | Личный Приём",
      description:
        "Имплантация, прозрачные элайнеры, брекеты, циркониевые коронки, эстетические виниры и лечение зубов без боли. Персональный приём Д-ра Олимжона Тожибаева.",
      keywords: "услуги стоматолога Андижан, имплантация зубов, прозрачные элайнеры, брекет системы, циркониевые коронки, виниры, протезирование, отбеливание зубов",
    },
    en: {
      title: "Dental Treatments & Services — Dr. Olimjon Tojibayev | Personal Care",
      description:
        "Dental implants, clear aligners, braces, zirconia crowns, aesthetic veneers, and 100% gentle therapy by Dr. Olimjon Tojibayev.",
      keywords: "dental services Andijan, dental implants, clear aligners, orthodontic braces, zirconia crowns, ceramic veneers, dentures, teeth whitening, Dr Olimjon Tojibayev",
    },
  },
  about: {
    uz: {
      title: `Dr. Olimjon Tojibayev Haqida — Tajribali Shifokor-Stomatolog`,
      description: `Dr. Olimjon Tojibayev haqida: shifokorlik falsafasi, ${years} yillik klinik tajriba, og'riqsiz 3D raqamli stomatologiya va har bir bemorga samimiy shaxsiy e'tibor.`,
      keywords: "Dr Olimjon Tojibayev tarjimai holi, shifokor stomatolog tajribasi, Andijon tibbiyot instituti, Smile Dental Group bosh vrachi",
    },
    ru: {
      title: `О Докторе Олимжоне Тожибаеве — Врач-Стоматолог, Имплантолог`,
      description: `О докторе Олимжоне Тожибаеве: врачебная философия, ${years} лет клинической практики, бережное лечение зубов и современные 3D технологии в Андижане.`,
      keywords: "Олимжон Тожибаев стоматолог биография, отзывы о враче, опыт работы стоматологом Андижан, Smile Dental Group",
    },
    en: {
      title: `About Dr. Olimjon Tojibayev — Dental Surgeon & Implantologist`,
      description: `Learn about Dr. Olimjon Tojibayev: clinical philosophy, ${years}+ years of dental excellence, tooth preservation, and compassionate care in Andijan.`,
      keywords: "about Dr Olimjon Tojibayev, dental surgeon biography, clinical philosophy, education, Smile Dental Group Andijan",
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil — Dr. Olimjon Tojibayev (Andijon)",
      description:
        "Dr. Olimjon Tojibayev shaxsiy qabuliga yozilish — Smile Dental Group (Andijon, 1-kichik daha 8-A Kanechka). Tel: +998 90 541 97 57, +998 93 418 97 57, Telegram: @Dr_Tadjibayev.",
      keywords: "Dr Olimjon Tojibayev manzili, stomatolog telefon raqami Andijon, Smile Dental Group Kanechka qayerda, stomatologiya lokatsiyasi",
    },
    ru: {
      title: "Контакты и Локация — Д-р Олимжон Тожибаев (Андижан)",
      description:
        "Запись на личный приём к Д-ру Олимжону Тожибаеву — клиника Smile Dental Group (Андижан, 1-й мкрн 8-А Канечка). Телефоны: +998 90 541 97 57, +998 93 418 97 57, Telegram: @Dr_Tadjibayev.",
      keywords: "контакты стоматолога Андижан, адрес Smile Dental Group Канечка, телефон Олимжона Тожибаева, схема проезда",
    },
    en: {
      title: "Contact & Location — Dr. Olimjon Tojibayev (Andijan)",
      description:
        "Book personal appointment with Dr. Olimjon Tojibayev — Smile Dental Group (Andijan, 1st Microdistrict 8-A Kanechka). Phones: +998 90 541 97 57, +998 93 418 97 57, Telegram: @Dr_Tadjibayev.",
      keywords: "contact Dr Olimjon Tojibayev, dental clinic address Andijan, phone number, clinic directions, Smile Dental Group",
    },
  },
  booking: {
    uz: {
      title: "Onlayn Qabulga Yozilish — Dr. Olimjon Tojibayev",
      description:
        "Dr. Olimjon Tojibayev qabuliga qulay vaqtni tanlang. 3D raqamli skanerlash, og'riqsiz muolaja va navbatsiz shaxsiy qabul. Tel: +998 90 541 97 57.",
      keywords: "stomatolog qabuliga yozilish Andijon, onlayn navbat stomatolog, Dr Olimjon Tojibayev qabuli",
    },
    ru: {
      title: "Онлайн Запись на Приём — Д-р Олимжон Тожибаев",
      description:
        "Удобная онлайн-запись на персональный приём к Д-ру Олимжону Тожибаеву без очередей. 3D сканирование и лечение без боли. Телефоны: +998 90 541 97 57, +998 93 418 97 57.",
      keywords: "онлайн запись к стоматологу Андижан, записаться на прием, прием доктора Олимжона Тожибаева",
    },
    en: {
      title: "Book Online Appointment — Dr. Olimjon Tojibayev",
      description:
        "Reserve your personal consultation with Dr. Olimjon Tojibayev. Fast online booking, 3D scan, and gentle care. Phone: +998 90 541 97 57.",
      keywords: "book dental appointment Andijan, online dentist booking Uzbekistan, schedule visit Dr Olimjon Tojibayev",
    },
  },
  notFound: {
    uz: {
      title: "Sahifa topilmadi (404) — Dr. Olimjon Tojibayev",
      description: "Siz qidirgan sahifa topilmadi. Bosh sahifaga qaytishingiz mumkin.",
      keywords: "404 sahifa topilmadi, Dr Olimjon Tojibayev",
    },
    ru: {
      title: "Страница не найдена (404) — Д-р Олимжон Тожибаев",
      description: "Запрошенная страница не найдена. Вернитесь на главную страницу.",
      keywords: "404 страница не найдена, Д-р Олимжон Тожибаев",
    },
    en: {
      title: "Page Not Found (404) — Dr. Olimjon Tojibayev",
      description: "The page you are looking for does not exist. Please return to the homepage.",
      keywords: "404 page not found, Dr Olimjon Tojibayev",
    },
  },
};

export const SERVICES_SEO = {
  "digital-dentistry": {
    uz: {
      title: "3D Intraoral Skanerlash & Raqamli Diagnostika Andijon — Dr. Olimjon Tojibayev",
      description: "Noqulay gips qoliplarisiz 60 soniyali 3D skanerlash va kelajakdagi tabassumni ekranda ko'rish. Dr. Olimjon Tojibayev (Smile Dental Group, Andijon). Tel: +998 90 541 97 57.",
      keywords: "3D stomatologiya Andijon, intraoral skaner, gipssiz tish o'lchov olish, raqamli stomatolog Olimjon Tojibayev, tabassum dizayni, Smile Dental Group",
    },
    ru: {
      title: "3D Сканирование Зубов и Цифровая Диагностика в Андижане — Д-р Олимжон Тожибаев",
      description: "Цифровой 3D слепок зубов за 60 секунд без рвотного рефлекса и слепочной массы. Компьютерный дизайн улыбки у Д-ра Олимжона Тожибаева в Андижане. Тел: +998 90 541 97 57.",
      keywords: "3D сканирование зубов Андижан, цифровая стоматология Андижан, интраоральный сканер, моделирование улыбки DSD, стоматолог Олимжон Тожибаев",
    },
    en: {
      title: "3D Intraoral Scanning & Digital Dentistry in Andijan — Dr. Olimjon Tojibayev",
      description: "Putty-free 60-second optical 3D digital impressions and smile visualization. Personalized care by Dr. Olimjon Tojibayev at Smile Dental Group, Andijan. Call +998 90 541 97 57.",
      keywords: "digital dentistry Andijan, 3D intraoral scanner Uzbekistan, digital smile design, Dr Olimjon Tojibayev, dental clinic Andijan",
    },
  },
  "dental-implant": {
    uz: {
      title: "Dental Implantatsiya Andijon — Og'riqsiz Biotitan Implantlar | Dr. Olimjon Tojibayev",
      description: "Andijonda og'riqsiz biotitan implant qo'yish (99.6% qabul qilish). 3D navigatsion aniqlik va ikki bosqichli mikro-anesteziya. Dr. Olimjon Tojibayev. Tel: +998 90 541 97 57.",
      keywords: "dental implantatsiya Andijon, tish ekish narxi Andijon, implant tish narxlari, ogriqsiz tish implantatsiyasi, implantolog stomatolog Olimjon Tojibayev, Smile Dental Group",
    },
    ru: {
      title: "Имплантация Зубов в Андижане — Биотитановые Импланты под Ключ | Д-р Олимжон Тожибаев",
      description: "Бережная дентальная имплантация в Андижане без боли за 15-20 минут под 2-этапной анестезией. Приживаемость 99.6%. Д-р Олимжон Тожибаев (Smile Dental Group). Тел: +998 90 541 97 57.",
      keywords: "имплантация зубов Андижан, поставить зубной имплант цена Андижан, зубные импланты под ключ, стоматолог имплантолог Олимжон Тожибаев, имплантация без боли",
    },
    en: {
      title: "Dental Implants in Andijan — Biocompatible Titanium Restorations | Dr. Olimjon Tojibayev",
      description: "Painless computer-guided dental implants in Andijan (99.6% osseointegration). 2-stage gentle anesthesia. Dr. Olimjon Tojibayev at Smile Dental Group. Tel: +998 90 541 97 57.",
      keywords: "dental implants Andijan, dental surgeon Uzbekistan, titanium tooth implant, painless dental surgery, Dr Olimjon Tojibayev",
    },
  },
  "elaynerlar": {
    uz: {
      title: "Shaffof Elaynerlar Andijon — Breketsiz Tish To'g'irlash | Dr. Olimjon Tojibayev",
      description: "Ko'rinmas shaffof kapalar orqali tish qatorini tekislash va prikusni to'g'irlash. Breketlarsiz, qulay va estetik. Dr. Olimjon Tojibayev (Andijon). Tel: +998 90 541 97 57.",
      keywords: "shaffof elaynerlar Andijon, elayner narxi, tish to'g'irlash kapa, breketsiz tish to'g'irlash, ortodont Olimjon Tojibayev, ko'rinmas elaynerlar",
    },
    ru: {
      title: "Элайнеры в Андижане — Исправление Прикуса Прозрачными Капами | Д-р Олимжон Тожибаев",
      description: "Выравнивание зубов и прикуса прозрачными незаметными элайнерами без брекетов в Андижане. Компьютерный 3D план у Д-ра Олимжона Тожибаева. Тел: +998 90 541 97 57.",
      keywords: "элайнеры Андижан цена, прозрачные капы для зубов, исправление прикуса без брекетов, ортодонт Олимжон Тожибаев, выравнивание зубов Андижан",
    },
    en: {
      title: "Clear Aligners in Andijan — Invisible Teeth Straightening | Dr. Olimjon Tojibayev",
      description: "Discreet clear aligner therapy for straighter teeth and bite correction without fixed braces. Consultation with Dr. Olimjon Tojibayev in Andijan. Tel: +998 90 541 97 57.",
      keywords: "clear aligners Andijan, invisible braces Uzbekistan, teeth straightening aligners, orthodontist Dr Olimjon Tojibayev",
    },
  },
  "breketlar": {
    uz: {
      title: "Breket Tizimlari Andijon — Metall, Keramika va Sapfir Breketlar | Dr. Olimjon Tojibayev",
      description: "Murakkab tishlash anomaliyalari va qiyshiq tishlarni ishonchli to'g'irlash. Metall, oq keramika va sapfir breketlar. Dr. Olimjon Tojibayev (Andijon). Tel: +998 90 541 97 57.",
      keywords: "breket narxlari Andijon, keramika breket, sapfir breket, tish prikusini tekislash, ortodont shifokor Andijon, Dr Olimjon Tojibayev",
    },
    ru: {
      title: "Брекеты в Андижане — Металлические, Керамические и Сапфировые | Д-р Олимжон Тожибаев",
      description: "Исправление самых сложных дефектов прикуса и неровных зубов. Керамические, сапфировые и классические брекеты у Д-ра Олимжона Тожибаева (Андижан). Тел: +998 90 541 97 57.",
      keywords: "брекеты в Андижане цена, керамические брекеты, сапфировые брекеты, исправление прикуса, ортодонт Андижан Олимжон Тожибаев",
    },
    en: {
      title: "Orthodontic Braces in Andijan — Metal, Ceramic & Sapphire | Dr. Olimjon Tojibayev",
      description: "Comprehensive orthodontic treatment for misaligned teeth and severe bite discrepancies. High-grade bracket systems by Dr. Olimjon Tojibayev in Andijan. Tel: +998 90 541 97 57.",
      keywords: "orthodontic braces Andijan, ceramic braces Uzbekistan, bite correction dentist, Dr Olimjon Tojibayev",
    },
  },
  "tsirkon-keramika-koronka": {
    uz: {
      title: "Tsirkon va Keramika Koronkalar Andijon — 15+ Yillik Mustahkamlik | Dr. Olimjon Tojibayev",
      description: "Monolit tsirkoniy va press-keramika tish qoplamalari. 0.01 mm zargarlik aniqligi, tabiiy emal rangi va chirishga qarshi chidamlilik. Andijon. Tel: +998 90 541 97 57.",
      keywords: "tsirkon koronkalar Andijon narxi, tsirkon tish qo'yish, keramika tish qoplamasi, tsirkoniy dioksid, stomatolog ortoped Olimjon Tojibayev, tish qo'yish Andijon",
    },
    ru: {
      title: "Циркониевые Коронки в Андижане — Монолитный Цирконий и Керамика | Д-р Олимжон Тожибаев",
      description: "Сверхпрочные коронки из диоксида циркония и керамики с гарантией 15+ лет. Идеальная эстетика без темной каймы у десны в Андижане. Тел: +998 90 541 97 57.",
      keywords: "циркониевые коронки Андижан цена, коронки из диоксида циркония, керамические зубы, протезирование зубов Андижан, стоматолог Олимжон Тожибаев",
    },
    en: {
      title: "Zirconia & Ceramic Crowns in Andijan — Natural Aesthetic Restorations | Dr. Olimjon Tojibayev",
      description: "High-precision monolithic zirconia and ceramic dental crowns lasting 15+ years. Biocompatible, natural enamel translucency. Dr. Olimjon Tojibayev, Andijan. Tel: +998 90 541 97 57.",
      keywords: "zirconia crowns Andijan, ceramic dental caps Uzbekistan, tooth restoration, Dr Olimjon Tojibayev",
    },
  },
  "vinirlar": {
    uz: {
      title: "Estetik Keramik Vinirlar Andijon — Gollivud Tabassumi | Dr. Olimjon Tojibayev",
      description: "E-max press-keramik vinirlar (0.3-0.5 mm). Tishlarning rangi, shakli va oraliqlarini sarg'aymaydigan tabiiy oqlik bilan mukammallashtirish. Andijon. Tel: +998 90 541 97 57.",
      keywords: "keramik vinirlar Andijon narxi, Emax vinirlar, Gollivud tabassumi, tishga vinir qo'yish, estetik stomatologiya Andijon, Dr Olimjon Tojibayev",
    },
    ru: {
      title: "Керамические Виниры в Андижане — Голливудская Улыбка E-max | Д-р Олимжон Тожибаев",
      description: "Ультратонкие керамические виниры E-max (0.3-0.5 мм) для безупречной белизны и гармонии улыбки. Не темнеют от кофе и чая. Д-р Олимжон Тожибаев (Андижан). Тел: +998 90 541 97 57.",
      keywords: "виниры в Андижане цена, керамические виниры E-max, голливудская улыбка, эстетическая реставрация зубов, стоматолог Олимжон Тожибаев",
    },
    en: {
      title: "Porcelain Veneers in Andijan — E-max Smile Makeover | Dr. Olimjon Tojibayev",
      description: "Ultra-thin E-max press-ceramic veneers (0.3-0.5 mm) restoring flawless tooth shape, alignment, and long-lasting brightness. Dr. Olimjon Tojibayev, Andijan. Tel: +998 90 541 97 57.",
      keywords: "porcelain veneers Andijan, E-max dental veneers Uzbekistan, Hollywood smile makeover, Dr Olimjon Tojibayev",
    },
  },
  "protezlar": {
    uz: {
      title: "Zamonaviy Tish Protezlari Andijon — Byugel, Neylon va Akril | Dr. Olimjon Tojibayev",
      description: "Tushib ketmaydigan, yengil va qulay olinadigan tish protezlari. To'liq chaynash qobiliyati va samimiy shaxsiy e'tibor. Smile Dental Group, Andijon. Tel: +998 90 541 97 57.",
      keywords: "tish protezlari Andijon narxi, byugel protez, neylon elastik protez, olinadigan tish protezi, tish yasatish Andijon, Dr Olimjon Tojibayev",
    },
    ru: {
      title: "Зубные Протезы в Андижане — Бюгельные, Нейлоновые и Акриловые | Д-р Олимжон Тожибаев",
      description: "Комфортное и надежное съемное протезирование зубов в Андижане. Легкие нейлоновые и бюгельные конструкции с идеальной фиксацией. Тел: +998 90 541 97 57.",
      keywords: "зубные протезы Андижан цена, бюгельное протезирование, нейлоновые протезы, съемные протезы зубов, стоматолог ортопед Андижан",
    },
    en: {
      title: "Dental Prosthetics in Andijan — Clasp, Nylon & Acrylic Dentures | Dr. Olimjon Tojibayev",
      description: "Secure, lightweight removable dentures restoring full masticatory function and oral comfort. Dr. Olimjon Tojibayev at Smile Dental Group, Andijan. Tel: +998 90 541 97 57.",
      keywords: "dentures Andijan, flexible nylon dentures Uzbekistan, dental prosthetics, Dr Olimjon Tojibayev",
    },
  },
  "ogriqsiz-terapiya": {
    uz: {
      title: "Og'riqsiz Tish Davolash Andijon — Karies, Pulpit va Plombalash | Dr. Olimjon Tojibayev",
      description: "Tishlarni saqlab qolishga qaratilgan 100% og'riqsiz davolash. Ikki bosqichli mikro-anesteziya va nano-kompozit estetik plombalar. Andijon. Tel: +998 90 541 97 57.",
      keywords: "og'riqsiz tish davolash Andijon, tish plombalash narxi, karies davolash, pulpit kanal tozalash, tish og'rig'i, stomatolog Olimjon Tojibayev",
    },
    ru: {
      title: "Лечение Зубов без Боли в Андижане — Кариес, Пульпит, Пломбирование | Д-р Олимжон Тожибаев",
      description: "Бережное терапевтическое лечение зубов с сохранением корней. Двухэтапная анестезия без боли, нанокомпозитные световые пломбы в Андижане. Тел: +998 90 541 97 57.",
      keywords: "лечение зубов без боли Андижан, лечение кариеса и пульпита, световая пломба Андижан, спасение зуба, стоматолог терапевт Олимжон Тожибаев",
    },
    en: {
      title: "Painless Dental Therapy in Andijan — Gentle Caries & Root Canal Care | Dr. Olimjon Tojibayev",
      description: "Conservative tooth-preserving treatment for caries and pulpitis under two-stage gentle anesthesia. Natural nano-composite restorations. Andijan. Tel: +998 90 541 97 57.",
      keywords: "painless dentistry Andijan, cavity filling Uzbekistan, root canal therapy, gentle dentist, Dr Olimjon Tojibayev",
    },
  },
  "tish-oqartirish": {
    uz: {
      title: "Xavfsiz Tish Oqartirish Andijon — Emalni Asrovchi Apparatli Oqartirish | Dr. Olimjon Tojibayev",
      description: "6-8 tongacha xavfsiz apparatli tish oqartirish va emalni minerallar bilan boyituvchi rem-terapiya. Dr. Olimjon Tojibayev (Smile Dental Group, Andijon). Tel: +998 90 541 97 57.",
      keywords: "tish oqartirish Andijon narxi, apparatli tish oqartirish, emalga zararsiz oqartirish, tish tozalash, estetik stomatologiya Andijon",
    },
    ru: {
      title: "Отбеливание Зубов в Андижане — Безопасное Клиническое Осветление Эмали | Д-р Олимжон Тожибаев",
      description: "Осветление зубов на 6-8 тонов под контролем врача с последующей реминерализацией эмали. Без повышенной чувствительности. Андижан. Тел: +998 90 541 97 57.",
      keywords: "отбеливание зубов в Андижане цена, безопасное отбеливание эмали, клиническое отбеливание зубов, стоматолог Олимжон Тожибаев",
    },
    en: {
      title: "Clinical Teeth Whitening in Andijan — Safe In-Office Enamel Brightening | Dr. Olimjon Tojibayev",
      description: "Professional in-office teeth whitening brightening smiles by up to 6-8 shades with enamel-strengthening remineralization. Dr. Olimjon Tojibayev, Andijan. Tel: +998 90 541 97 57.",
      keywords: "teeth whitening Andijan, professional dental bleaching Uzbekistan, safe tooth whitening, Dr Olimjon Tojibayev",
    },
  },
};
