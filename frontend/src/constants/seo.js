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
      title: "Dr. Olimjon Tojibayev — Andijonda Stomatologiya & Shifokor-Stomatolog | Smiles Dental Group",
      description: `Andijonda zamonaviy stomatologiya va shifokor qabuli: Dr. Olimjon Tojibayev (Tojiboyev Olimjon). ${years} yillik tajriba, 3D raqamli skanerlash, og'riqsiz biotitan implantlar, shaffof elaynerlar, tsirkon tojlar. Smiles Dental Group (Kanechka 8-A). Tel: +998 90 541 97 57.`,
      keywords: "andijonda stomatolog, andijonda stomatologiya, stomatologiya andijon, andijon stomatologiya klinikalari, andijon stomatologlari, tish klinikasi andijon, stomatologiya kanechka, dr olimjon tojibayev, dr olimjon tojiboyev, olimjon tojiboyev stomatolog, stomatolog tojiboyev, olimjon tojibayev stomatologiya, tish qoyish, tish qo'yish narxi, oq tish qo'yish narxi 2026, tish karonkalari, tish koronkalari, tishga karonka kiygizish narxi, tish qoplama, tish olish, tish sug'urish, tish oldirish narxi, og'riqsiz tish olish andijon, aql tishini olish, kechki payt tishim ogriyapti, kechasi tish og'rishi, kechki stomatologiya andijon, tish og'rig'i qoldirish, tish og'rig'iga dori, tish sinishi, tish qimirlashi, aql tishi og'rig'i, donolik tishi oldirish, milk qonashi, milk shishishi flyus, tish zirqirashi, issiq sovuqqa tish og'rishi, plomba tushib qolsa, tish breketlari, tish briketi, breket turlari va narxlari 2026, breketlar andijon narxi, shaffof elaynerlar narxi, tish tekislash, tish implanti, tish implantatsiyasi narxi 2026, implant tish turlari va narxlari 2026 qaysi biri yaxshi, tish ekish narxi andijon, biotitan implant, tsirkon tish qo'yish, metallokeramika andijon, vinirlar andijon, tish plombalash narxi, og'riqsiz tish davolash, 3d skaner stomatologiya, tish oqartirish andijon, tish tozalash air flow, tish protezlari andijon, byugel protez, neylon protez, homiladorlikda tish davolash, tish soldirish, old tishim tushib qoldi, Smiles Dental Group Andijon, eng yaxshi stomatolog andijon, arzon va sifatli stomatologiya andijon, bolalar stomatologi andijon, shoshilinch stomatologiya andijon, тиш куйиш, тиш олиш, тиш брекетлари, тиш коронкалари, кечки пайт тишим огрияпти, тиш импланти, тишим огрияпти, тиш огриги",
    },
    ru: {
      title: "Д-р Олимжон Тожибаев — Стоматология и Стоматолог в Андижане | Smiles Dental Group",
      description: `Стоматология в Андижане и личный приём врача-стоматолога Д-ра Олимжона Тожибаева (Тожибоева / Таджибаева). ${years} лет опыта, 3D сканирование без слепков, безболезненная имплантация зубов, прозрачные элайнеры, циркониевые коронки. Smiles Dental Group (Канечка). Тел: +998 90 541 97 57.`,
      keywords: "стоматология в андижане, стоматолог андижан, стоматологические клиники андижана, лучший стоматолог в андижане, стоматология канечка, доктор Олимжон Тожибаев, Олимжон Тожибоев стоматолог, доктор Олимжон Тожибоев, стоматолог Тожибоев, Олим Таджибаев, вставить зуб цена андижан, сколько стоит вставить зуб, коронка на зуб цена, коронки циркониевые виды и цены 2026, удалить зуб цена андижан, удаление зуба мудрости цена, болит зуб вечером что делать, ночная зубная боль, дежурный стоматолог андижан, брекеты виды и цены 2026 какие лучше, зубные импланты виды и цены 2026 какой лучше поставить, болит зуб андижан, острая зубная боль что делать, как снять зубную боль дома, зуб мудрости болит, удалить зуб мудрости без боли, кровоточат десны, опухла десна флюс, шатается зуб, сломался зуб под корень, откололся зуб, зуб реагирует на горячее и холодное, выпала пломба, больно ли удалять нерв, имплантолог Андижан, ортодонт Андижан, имплантация зубов цена андижан, поставить зубной имплант, элайнеры цена андижан, брекеты андижан, циркониевые коронки цена, виниры Emax, лечение кариеса без боли, световая пломба андижан, чистка зубов андижан, air flow отбеливание, съемные зубные протезы, бюгельные протезы, протезирование зубов андижан, клиника Smiles Dental Group, частная стоматология андижан, круглосуточная стоматология андижан, лечение зубов при беременности, зубной врач андижан",
    },
    en: {
      title: "Dr. Olimjon Tojibayev — Dental Clinic & Dentist in Andijan | Smiles Dental Group",
      description: `Modern dental clinic and dental surgeon in Andijan, Uzbekistan: Dr. Olimjon Tojibayev. ${years}+ years of clinical excellence, 60-second 3D digital scans, pain-free dental implants, clear invisible aligners, and monolithic zirconia crowns at Smiles Dental Group (Kanechka). Tel: +998 90 541 97 57.`,
      keywords: "dentist in andijan, dental clinic andijan, best dentist andijan, stomatology andijan, toothache relief andijan, severe tooth pain emergency, night toothache remedy, tooth crown cost 2026, zirconia crown vs metal ceramic, painless tooth extraction andijan, wisdom tooth removal painless, dental braces types and prices 2026, clear aligners vs braces, dental implant types and cost 2026, replace missing tooth, broken tooth repair, bleeding gums treatment, sensitive teeth to hot and cold, lost filling replacement, dental implants andijan uzbekistan, clear aligners andijan, Dr Olimjon Tojibayev, Dr Olimjon Tojiboyev, dental surgeon Uzbekistan, orthodontic braces andijan, zirconia crowns andijan, porcelain veneers, painless dentistry, emergency dentist andijan, root canal therapy, teeth whitening, dentures in andijan, dental clinic kanechka, Smiles Dental Group Andijan, pregnancy dental care, dental tourism uzbekistan",
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. Olimjon Tojibayev | Shaxsiy Muolajalar",
      description:
        "Dental implantatsiya, shaffof elaynerlar, breket tizimlari, tsirkon tojlar, estetik vinirlar va 100% og'riqsiz davolash. Dr. Olimjon Tojibayev shaxsiy qabuli.",
      keywords: "stomatologiya xizmatlari Andijon, tish qoyish narxi, tish karonkalari, tish olish narxi, tish breketlari narxi 2026, tish implanti narxi, kechki payt tishim ogriyapti, tish ekish implantatsiya, shaffof elaynerlar, breket tizimlari, tsirkon qoplamalar, estetik vinirlar, tish protezlari, og'riqsiz tish davolash, karies va pulpit, aql tishini sug'urish, tish oqartirish, air flow tozalash, tish zirqirashi, milk qonashi davolash, 3d raqamli stomatologiya, Dr Olimjon Tojibayev xizmatlari, Smiles Dental Group",
    },
    ru: {
      title: "Стоматологические Услуги — Д-р Олимжон Тожибаев | Личный Приём",
      description:
        "Имплантация, прозрачные элайнеры, брекеты, циркониевые коронки, эстетические виниры и лечение зубов без боли. Персональный приём Д-ра Олимжона Тожибаева.",
      keywords: "услуги стоматолога Андижан, болит зуб куда пойти, имплантация зубов под ключ, прозрачные элайнеры, брекет системы, циркониевые коронки, виниры emax, съемные протезы, лечение кариеса и пульпита без боли, удаление зуба мудрости без боли, лечение кровоточивости десен, отбеливание зубов, 3D сканирование, Д-р Олимжон Тожибаев, клиника Smiles Dental Group",
    },
    en: {
      title: "Dental Treatments & Services — Dr. Olimjon Tojibayev | Personal Care",
      description:
        "Dental implants, clear aligners, braces, zirconia crowns, aesthetic veneers, and 100% gentle therapy by Dr. Olimjon Tojibayev.",
      keywords: "dental services Andijan, toothache emergency treatment, dental implants, clear aligners, orthodontic braces, zirconia crowns, aesthetic ceramic veneers, dental prosthetics, painless dentistry, wisdom tooth extraction, gum bleeding therapy, root canal, teeth whitening, 3D intraoral scanning, Dr Olimjon Tojibayev",
    },
  },
  about: {
    uz: {
      title: `Dr. Olimjon Tojibayev (Tojiboyev) Haqida — Shifokor-Stomatolog`,
      description: `Dr. Olimjon Tojibayev (Tojiboyev Olimjon) haqida: shifokorlik falsafasi, ${years} yillik klinik tajriba, og'riqsiz 3D raqamli stomatologiya va har bir bemorga samimiy shaxsiy e'tibor.`,
      keywords: "Dr Olimjon Tojibayev, Dr Olimjon Tojiboyev, Olimjon Tojiboyev stomatolog, shifokor tarjimai holi, ADTI Andijon davlat tibbiyot instituti, stomatolog staji 7 yil, Smiles Dental Group bosh vrachi, tajribali implantolog ortodont Andijon, vrach stomatolog Tojiboyev sharhlar",
    },
    ru: {
      title: `О Докторе Олимжоне Тожибаеве (Тожибоеве) — Врач-Стоматолог`,
      description: `О докторе Олимжоне Тожибаеве (Тожибоеве / Таджибаеве): врачебная философия, ${years} лет клинической практики, бережное лечение зубов и современные 3D технологии в Андижане.`,
      keywords: "Олимжон Тожибаев стоматолог, Олимжон Тожибоев стоматолог, доктор Олимжон Тожибоев, биография врача, образование АГМИ Андижан, опыт работы 7 лет, главный врач Smiles Dental Group, отзывы о стоматологе Тожибаеве, имплантолог ортодонт Андижан",
    },
    en: {
      title: `About Dr. Olimjon Tojibayev (Tojiboyev) — Dental Surgeon`,
      description: `Learn about Dr. Olimjon Tojibayev (Tojiboyev): clinical philosophy, ${years}+ years of dental excellence, tooth preservation, and compassionate care in Andijan.`,
      keywords: "about Dr Olimjon Tojibayev, Dr Olimjon Tojiboyev, dental surgeon biography, clinical credentials, Andijan State Medical Institute, 7 years clinical experience, Smiles Dental Group chief dentist, patient reviews Andijan",
    },
  },
  contact: {
    uz: {
      title: "Andijonda Stomatologiya Manzili va Aloqa — Dr. Olimjon Tojibayev | Smiles Dental Group",
      description:
        "Dr. Olimjon Tojibayev qabuliga yozilish — Smiles Dental Group (Andijon shahri, 1-kichik daha 8-A Kanechka). Tel: +998 90 541 97 57, +998 93 418 97 57, Telegram: @Dr_Tadjibayev. Google va Yandex xaritalarda qulay marshrut.",
      keywords: "andijonda stomatologiya manzili, andijonda stomatolog telefon, stomatologiya kanechka qayerda, 1-kichik daha 8-A bino, Smiles Dental Group lokatsiyasi, Dr Olimjon Tojibayev manzili, tish klinikasi telefon raqami, xaritada stomatologiya, shoshilinch stomatolog aloqa",
    },
    ru: {
      title: "Адрес Стоматологии в Андижане и Контакты — Д-р Олимжон Тожибаев | Smiles Dental Group",
      description:
        "Запись на приём к Д-ру Олимжону Тожибаеву — клиника Smiles Dental Group (Андижан, 1-й мкрн 8-А Канечка). Телефоны: +998 90 541 97 57, +998 93 418 97 57, Telegram: @Dr_Tadjibayev. Маршрут на Google и Яндекс Картах.",
      keywords: "стоматология в андижане адрес, контакты стоматолога андижан, адрес smiles dental group канечка, 1-й микрорайон дом 8-А, телефон олимжона тожибаева, как доехать до стоматологии, стоматология андижан номер телефона, экстренная стоматология контакты",
    },
    en: {
      title: "Dental Clinic Location & Contact in Andijan — Dr. Olimjon Tojibayev | Smiles Dental Group",
      description:
        "Book personal appointment with Dr. Olimjon Tojibayev at Smiles Dental Group (Andijan, 1st Microdistrict 8-A Kanechka). Phones: +998 90 541 97 57, +998 93 418 97 57, Telegram: @Dr_Tadjibayev. Google & Yandex Maps directions.",
      keywords: "dentist in andijan address, dental clinic andijan location, contact Dr Olimjon Tojibayev, Smiles Dental Group Kanechka directions, phone number, emergency dental contact Andijan",
    },
  },
  booking: {
    uz: {
      title: "Onlayn Qabulga Yozilish — Dr. Olimjon Tojibayev (Tojiboyev)",
      description:
        "Dr. Olimjon Tojibayev (Tojiboyev) qabuliga qulay vaqtni tanlang. 3D raqamli skanerlash, og'riqsiz muolaja va navbatsiz shaxsiy qabul. Tel: +998 90 541 97 57.",
      keywords: "stomatolog qabuliga yozilish Andijon, onlayn navbat stomatolog, Dr Olimjon Tojibayev qabuli, tish do'xtiriga yozilish, bepul 3d konsultatsiya, Smiles Dental Group qabul jadvali, navbatsiz stomatolog",
    },
    ru: {
      title: "Онлайн Запись на Приём — Д-р Олимжон Тожибаев (Тожибоев)",
      description:
        "Удобная онлайн-запись на персональный приём к Д-ру Олимжону Тожибаеву (Тожибоеву) без очередей. 3D сканирование и лечение без боли. Телефоны: +998 90 541 97 57, +998 93 418 97 57.",
      keywords: "онлайн запись к стоматологу Андижан, записаться на прием к врачу, прием доктора Олимжона Тожибаева, запись на имплантацию, бесплатная 3D консультация, стоматология без очередей Андижан",
    },
    en: {
      title: "Book Online Appointment — Dr. Olimjon Tojibayev (Tojiboyev)",
      description:
        "Reserve your personal consultation with Dr. Olimjon Tojibayev. Fast online booking, 3D scan, and gentle care. Phone: +998 90 541 97 57.",
      keywords: "book dental appointment Andijan, online dentist booking Uzbekistan, schedule visit Dr Olimjon Tojibayev, free 3D consultation, Smiles Dental Group booking",
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
      description: "Noqulay gips qoliplarisiz 60 soniyali 3D skanerlash va kelajakdagi tabassumni ekranda ko'rish. Dr. Olimjon Tojibayev (Smiles Dental Group, Andijon). Tel: +998 90 541 97 57.",
      keywords: "3D stomatologiya Andijon, intraoral skaner, gipssiz tish o'lchov olish, tish o'lchashda ko'ngil aynishi, kompyuterda tabassumni ko'rish, raqamli stomatolog Olimjon Tojibayev, tabassum dizayni DSD, 3d tish modeli, virtual konsultatsiya, Smiles Dental Group",
    },
    ru: {
      title: "3D Сканирование Зубов и Цифровая Диагностика в Андижане — Д-р Олимжон Тожибаев",
      description: "Цифровой 3D слепок зубов за 60 секунд без рвотного рефлекса и слепочной массы. Компьютерный дизайн улыбки у Д-ра Олимжона Тожибаева в Андижане. Тел: +998 90 541 97 57.",
      keywords: "3D сканирование зубов Андижан, цифровая стоматология Андижан, интраоральный сканер, слепки зубов без рвотного рефлекса, снимок зубов без слепков, моделирование улыбки DSD, стоматолог Олимжон Тожибаев",
    },
    en: {
      title: "3D Intraoral Scanning & Digital Dentistry in Andijan — Dr. Olimjon Tojibayev",
      description: "Putty-free 60-second optical 3D digital impressions and smile visualization. Personalized care by Dr. Olimjon Tojibayev at Smiles Dental Group, Andijan. Call +998 90 541 97 57.",
      keywords: "digital dentistry Andijan, 3D intraoral scanner Uzbekistan, digital smile design, putty-free optical impressions, gag reflex dental impression, preview smile, Dr Olimjon Tojibayev, dental clinic Andijan",
    },
  },
  "dental-implant": {
    uz: {
      title: "Dental Implantatsiya Andijon — Og'riqsiz Biotitan Implantlar | Dr. Olimjon Tojibayev",
      description: "Andijonda og'riqsiz biotitan implant qo'yish (99.6% qabul qilish). 3D navigatsion aniqlik va ikki bosqichli mikro-anesteziya. Dr. Olimjon Tojibayev. Tel: +998 90 541 97 57.",
      keywords: "tish implanti, tish implantatsiyasi narxi 2026, implant tish turlari va narxlari 2026 qaysi biri yaxshi, dental implantatsiya Andijon, tish ekish narxi Andijon, tish ekish og'ritadimi, tish qo'yish narxi, tish olish va darhol implant, old tishim tushib qoldi, bitta tish yo'q nima qilish kerak, tish soldirish narxi, implant tish narxlari, ogriqsiz tish implantatsiyasi, bir kunda tish ekish, bir bosqichli implantatsiya, biotitan implantlar, osstem implant, straumann implant, implantolog stomatolog Olimjon Tojibayev, Smiles Dental Group, suyak yetishmovchiligi, sinus lifting Andijon, tishsizlikni tiklash, тиш импланти",
    },
    ru: {
      title: "Имплантация Зубов в Андижане — Биотитановые Импланты под Ключ | Д-р Олимжон Тожибаев",
      description: "Бережная дентальная имплантация в Андижане без боли за 15-20 минут под 2-этапной анестезией. Приживаемость 99.6%. Д-р Олимжон Тожибаев (Smiles Dental Group). Тел: +998 90 541 97 57.",
      keywords: "зубные импланты виды и цены 2026 какой лучше, имплантация зубов Андижан цена, поставить зубной имплант цена Андижан, вставить зуб цена андижан, выпал передний зуб что делать, больно ли ставить имплант, зубные импланты под ключ, одномоментная имплантация, корейские импланты, швейцарские импланты, стоматолог имплантолог Олимжон Тожибаев, имплантация без боли, синус лифтинг Андижан",
    },
    en: {
      title: "Dental Implants in Andijan — Biocompatible Titanium Restorations | Dr. Olimjon Tojibayev",
      description: "Painless computer-guided dental implants in Andijan (99.6% osseointegration). 2-stage gentle anesthesia. Dr. Olimjon Tojibayev at Smiles Dental Group. Tel: +998 90 541 97 57.",
      keywords: "dental implant types and cost 2026, dental implants Andijan, replace missing tooth, missing front tooth replacement, does dental implant hurt, dental surgeon Uzbekistan, titanium tooth implant, immediate implant placement, bone grafting, sinus lift, painless dental surgery, Dr Olimjon Tojibayev",
    },
  },
  "elaynerlar": {
    uz: {
      title: "Shaffof Elaynerlar Andijon — Breketsiz Tish To'g'irlash | Dr. Olimjon Tojibayev",
      description: "Ko'rinmas shaffof kapalar orqali tish qatorini tekislash va prikusni to'g'irlash. Breketlarsiz, qulay va estetik. Dr. Olimjon Tojibayev (Andijon). Tel: +998 90 541 97 57.",
      keywords: "shaffof elaynerlar Andijon, elayner narxi Andijon, tishlarim qiyshiq, tishni breketsiz to'g'irlash, tish to'g'irlash kapa, breketsiz tish to'g'irlash, ko'rinmas elaynerlar narxi, simsiz tish to'g'irlash, ortodont Olimjon Tojibayev, shaffof kapalar, qiyshiq tishlarni tekislash, prikus to'g'irlash, kattalar uchun tish to'g'irlash",
    },
    ru: {
      title: "Элайнеры в Андижане — Исправление Прикуса Прозрачными Капами | Д-р Олимжон Тожибаев",
      description: "Выравнивание зубов и прикуса прозрачными незаметными элайнерами без брекетов в Андижане. Компьютерный 3D план у Д-ра Олимжона Тожибаева. Тел: +998 90 541 97 57.",
      keywords: "элайнеры Андижан цена, кривые зубы как выровнять без брекетов, прозрачные капы для зубов, исправление прикуса без брекетов, невидимые капы цена, выравнивание зубов взрослым, ортодонт Олимжон Тожибаев, выравнивание зубов Андижан, элайнеры для взрослых",
    },
    en: {
      title: "Clear Aligners in Andijan — Invisible Teeth Straightening | Dr. Olimjon Tojibayev",
      description: "Discreet clear aligner therapy for straighter teeth and bite correction without fixed braces. Consultation with Dr. Olimjon Tojibayev in Andijan. Tel: +998 90 541 97 57.",
      keywords: "clear aligners Andijan, fix crooked teeth without braces, invisible braces Uzbekistan, removable aligner trays, teeth straightening aligners, bite correction without braces, adult teeth straightening, orthodontist Dr Olimjon Tojibayev",
    },
  },
  "breketlar": {
    uz: {
      title: "Breket Tizimlari Andijon — Metall, Keramika va Sapfir Breketlar | Dr. Olimjon Tojibayev",
      description: "Murakkab tishlash anomaliyalari va qiyshiq tishlarni ishonchli to'g'irlash. Metall, oq keramika va sapfir breketlar. Dr. Olimjon Tojibayev (Andijon). Tel: +998 90 541 97 57.",
      keywords: "tish breketlari, tish briketi, breket turlari va narxlari 2026, breket turlari qaysi biri yaxshi, breket narxlari Andijon, prikus noto'g'ri, jag' qiyshiqligi, breket qancha vaqt taqiladi, breket og'ritadimi, metall breket narxi, keramika breket, sapfir breket, tish prikusini tekislash, arzon breketlar andijon, bolalar breketi, ortodont shifokor Andijon, Dr Olimjon Tojibayev, qiyshiq tishlarni to'g'irlash, yuz simmetriyasi, тиш брекетлари",
    },
    ru: {
      title: "Брекеты в Андижане — Металлические, Керамические и Сапфировые | Д-р Олимжон Тожибаев",
      description: "Исправление самых сложных дефектов прикуса и неровных зубов. Керамические, сапфировые и классические брекеты у Д-ра Олимжона Тожибаева (Андижан). Тел: +998 90 541 97 57.",
      keywords: "брекеты виды и цены 2026 какие лучше, брекеты в Андижане цена, неправильный прикус лечение, сколько носить брекеты, больно ли ставить брекеты, металлические брекеты, керамические брекеты, сапфировые брекеты, исправление прикуса у детей и взрослых, ортодонт Андижан Олимжон Тожибаев, выравнивание зубов",
    },
    en: {
      title: "Orthodontic Braces in Andijan — Metal, Ceramic & Sapphire | Dr. Olimjon Tojibayev",
      description: "Comprehensive orthodontic treatment for misaligned teeth and severe bite discrepancies. High-grade bracket systems by Dr. Olimjon Tojibayev in Andijan. Tel: +998 90 541 97 57.",
      keywords: "dental braces types and prices 2026, orthodontic braces Andijan, overbite correction, crooked teeth braces, how long to wear braces, metal braces, ceramic braces Uzbekistan, sapphire braces, bite correction dentist, malocclusion therapy, Dr Olimjon Tojibayev",
    },
  },
  "tsirkon-keramika-koronka": {
    uz: {
      title: "Tsirkon va Keramika Koronkalar Andijon — 15+ Yillik Mustahkamlik | Dr. Olimjon Tojibayev",
      description: "Monolit tsirkoniy va press-keramika tish qoplamalari. 0.01 mm zargarlik aniqligi, tabiiy emal rangi va chirishga qarshi chidamlilik. Andijon. Tel: +998 90 541 97 57.",
      keywords: "tish karonkalari, tish koronkalari, tish koronkasi narxi, tishga karonka kiygizish narxi, tish qoplama narxi, oq tish qo'yish narxi 2026, sirkoniy yoki metallokeramika qaysi biri yaxshi, tsirkon koronkalar Andijon narxi, singan tishni tiklash, tish sinib qolsa nima qilish kerak, tish yemirilishi, old tishga qoplama, tsirkon tish qo'yish, monolit tsirkoniy, keramika tish qoplamasi, metallokeramika andijon, tsirkoniy dioksid, stomatolog ortoped Olimjon Tojibayev, tish ko'prigi most narxi, tish qo'yish Andijon, тиш коронкалари, тиш куйиш",
    },
    ru: {
      title: "Циркониевые Коронки в Андижане — Монолитный Цирконий и Керамика | Д-р Олимжон Тожибаев",
      description: "Сверхпрочные коронки из диоксида циркония и керамики с гарантией 15+ лет. Идеальная эстетика без темной каймы у десны в Андижане. Тел: +998 90 541 97 57.",
      keywords: "коронка на зуб цена, коронки виды и цены 2026, поставить коронку из циркония, цирконий или металлокерамика что лучше, циркониевые коронки Андижан цена, сломался зуб под корень, скол зуба восстановить, коронка на передний зуб, коронки из диоксида циркония, керамические зубы, металлокерамика или цирконий, протезирование зубов Андижан, зубной мост, реставрация скола зуба, стоматолог Олимжон Тожибаев",
    },
    en: {
      title: "Zirconia & Ceramic Crowns in Andijan — Natural Aesthetic Restorations | Dr. Olimjon Tojibayev",
      description: "High-precision monolithic zirconia and ceramic dental crowns lasting 15+ years. Biocompatible, natural enamel translucency. Dr. Olimjon Tojibayev, Andijan. Tel: +998 90 541 97 57.",
      keywords: "tooth crown cost 2026, zirconia crown vs metal ceramic, zirconia crowns Andijan, broken tooth repair, chipped front tooth crown, tooth cap cost, monolithic zirconia restorations, ceramic dental caps Uzbekistan, metal-free dental crowns, tooth bridge, Dr Olimjon Tojibayev",
    },
  },
  "vinirlar": {
    uz: {
      title: "Estetik Keramik Vinirlar Andijon — Gollivud Tabassumi | Dr. Olimjon Tojibayev",
      description: "E-max press-keramik vinirlar (0.3-0.5 mm). Tishlarning rangi, shakli va oraliqlarini sarg'aymaydigan tabiiy oqlik bilan mukammallashtirish. Andijon. Tel: +998 90 541 97 57.",
      keywords: "keramik vinirlar Andijon narxi, old tishlarim sarg'aygan, tish orasidagi tirqish diastema yopish, Gollivud tabassumi narxi, Emax vinirlar, tishga vinir qo'yish narxi, old tishlarni chiroyli qilish, kompozit vinir, estetik stomatologiya Andijon, Dr Olimjon Tojibayev, sarg'aygan tishlarni oqartirish",
    },
    ru: {
      title: "Керамические Виниры в Андижане — Голливудская Улыбка E-max | Д-р Олимжон Тожибаев",
      description: "Ультратонкие керамические виниры E-max (0.3-0.5 мм) для безупречной белизны и гармонии улыбки. Не темнеют от кофе и чая. Д-р Олимжон Тожибаев (Андижан). Тел: +998 90 541 97 57.",
      keywords: "виниры в Андижане цена, щель между зубами диастема закрыть, потемнели передние зубы, голливудская улыбка цена, керамические виниры E-max, виниры на передние зубы, эстетическая реставрация зубов, закрытие диастемы щели между зубами, стоматолог Олимжон Тожибаев",
    },
    en: {
      title: "Porcelain Veneers in Andijan — E-max Smile Makeover | Dr. Olimjon Tojibayev",
      description: "Ultra-thin E-max press-ceramic veneers (0.3-0.5 mm) restoring flawless tooth shape, alignment, and long-lasting brightness. Dr. Olimjon Tojibayev, Andijan. Tel: +998 90 541 97 57.",
      keywords: "porcelain veneers Andijan, gap between front teeth fix, yellow teeth makeover, Hollywood smile cost, IPS E-max dental veneers Uzbekistan, aesthetic dental laminates, diastema closure, front teeth makeover, Dr Olimjon Tojibayev",
    },
  },
  "protezlar": {
    uz: {
      title: "Zamonaviy Tish Protezlari Andijon — Byugel, Neylon va Akril | Dr. Olimjon Tojibayev",
      description: "Tushib ketmaydigan, yengil va qulay olinadigan tish protezlari. To'liq chaynash qobiliyati va samimiy shaxsiy e'tibor. Smiles Dental Group, Andijon. Tel: +998 90 541 97 57.",
      keywords: "tish protezlari Andijon narxi, tishlarim to'kilib ketgan nima qilish kerak, olinadigan tish yasatish, yumshoq tish protezi, protez tushib ketishi, byugel protez narxi, neylon elastik protez, olinadigan tish protezi, akril tish protezi, butun jag' protezi, tish yasatish Andijon, tishsizlikni davolash, stomatolog ortoped",
    },
    ru: {
      title: "Зубные Протезы в Андижане — Бюгельные, Нейлоновые и Акриловые | Д-р Олимжон Тожибаев",
      description: "Комфортное и надежное съемное протезирование зубов в Андижане. Легкие нейлоновые и бюгельные конструкции с идеальной фиксацией. Тел: +998 90 541 97 57.",
      keywords: "зубные протезы Андижан цена, вставная челюсть цена, съемные мягкие протезы, нет зубов чем жевать, бюгельное протезирование, нейлоновые протезы, мягкие съемные протезы зубов, полные зубные протезы, протезирование при отсутствии зубов, стоматолог ортопед Андижан",
    },
    en: {
      title: "Dental Prosthetics in Andijan — Clasp, Nylon & Acrylic Dentures | Dr. Olimjon Tojibayev",
      description: "Secure, lightweight removable dentures restoring full masticatory function and oral comfort. Dr. Olimjon Tojibayev at Smiles Dental Group, Andijan. Tel: +998 90 541 97 57.",
      keywords: "dentures Andijan, false teeth cost, flexible nylon dentures Uzbekistan, clasp byugel prosthetics, full arch dentures, missing all teeth dentures, removable dental plates, geriatric dentistry, Dr Olimjon Tojibayev",
    },
  },
  "ogriqsiz-terapiya": {
    uz: {
      title: "Og'riqsiz Tish Davolash Andijon — Karies, Pulpit va Plombalash | Dr. Olimjon Tojibayev",
      description: "Tishlarni saqlab qolishga qaratilgan 100% og'riqsiz davolash. Ikki bosqichli mikro-anesteziya va nano-kompozit estetik plombalar. Andijon. Tel: +998 90 541 97 57.",
      keywords: "kechki payt tishim ogriyapti, kechki payt ogriyapti, kechasi tish og'rishi, tish olish, tish olish narxi 2026, og'riqsiz tish olish, tish sug'urish narxi, tish oldirish, aql tishini olish, kechki stomatologiya andijon, tish og'rig'ini zudlik bilan qoldirish, og'riqsiz tish davolash Andijon, tishim ogriyapti nima qilsam bo'ladi, tish og'rig'i qoldirish, tish og'rig'iga dori, tish asabi og'rishi, nervni o'ldirish og'ritadimi, tish kovagi qora dog', tish zirqirashi, issiq sovuqqa tish og'rishi, plomba tushib qolsa, homiladorlikda tish davolash, tish plombalash narxi, karies davolash andijon, pulpit kanal tozalash, yorug'lik plomba svetovoy, shoshilinch tish shifokori, stomatolog Olimjon Tojibayev, tish emalini mustahkamlash, тиш олиш, кечки пайт тишим огрияпти",
    },
    ru: {
      title: "Лечение Зубов без Боли в Андижане — Кариес, Пульпит, Пломбирование | Д-р Олимжон Тожибаев",
      description: "Бережное терапевтическое лечение зубов с сохранением корней. Двухэтапная анестезия без боли, нанокомпозитные световые пломбы в Андижане. Тел: +998 90 541 97 57.",
      keywords: "удалить зуб цена, удаление зуба цена андижан, болит зуб вечером что делать, ночная зубная боль как снять, острая зубная боль помощь ночью, дежурный стоматолог андижан, удаление зуба без боли, лечение зубов без боли Андижан, болит зуб что делать как снять боль, ноет зуб ночью, зуб реагирует на холодное и горячее, выпала пломба поставить новую, удаление нерва зуба больно ли, лечение кариеса и пульпита, световая пломба Андижан, лечение каналов зуба, острая зубная боль помощь, спасение зуба, лечение зубов при беременности, стоматолог терапевт Олимжон Тожибаев",
    },
    en: {
      title: "Painless Dental Therapy in Andijan — Gentle Caries & Root Canal Care | Dr. Olimjon Tojibayev",
      description: "Conservative tooth-preserving treatment for caries and pulpitis under two-stage gentle anesthesia. Natural nano-composite restorations. Andijan. Tel: +998 90 541 97 57.",
      keywords: "night toothache remedy, toothache in the evening, emergency dental pain, painless tooth extraction, wisdom tooth removal cost, painless dentistry Andijan, toothache relief, severe tooth pain home remedy, cavity filling fallen out, does root canal hurt, tooth hurts to hot and cold, pregnancy safe dental care, emergency toothache relief, cavity filling Uzbekistan, root canal therapy, painless nerve removal, nano-composite fillings, gentle dentist, Dr Olimjon Tojibayev",
    },
  },
  "tish-oqartirish": {
    uz: {
      title: "Xavfsiz Tish Oqartirish Andijon — Emalni Asrovchi Apparatli Oqartirish | Dr. Olimjon Tojibayev",
      description: "6-8 tongacha xavfsiz apparatli tish oqartirish va emalni minerallar bilan boyituvchi rem-terapiya. Dr. Olimjon Tojibayev (Smiles Dental Group, Andijon). Tel: +998 90 541 97 57.",
      keywords: "tish oqartirish Andijon narxi, tish sarg'ayishi sabablari, qora choy kashandalik dog'lari, tish toshini oldirish og'ritadimi, tish yuvganda milk qonashi, og'izdan hid kelishi sababi, apparatli tish oqartirish, air flow tish tozalash, tish toshini tozalash narxi, emalga zararsiz oqartirish, ultratovushli tozalash, tish gigiyenasi, estetik stomatologiya Andijon",
    },
    ru: {
      title: "Отбеливание Зубов в Андижане — Безопасное Клиническое Осветление Эмали | Д-р Олимжон Тожибаев",
      description: "Осветление зубов на 6-8 тонов под контролем врача с последующей реминерализацией эмали. Без повышенной чувствительности. Андижан. Тел: +998 90 541 97 57.",
      keywords: "отбеливание зубов в Андижане цена, пожелтели зубы от кофе и сигарет, кровоточат десны при чистке, неприятный запах изо рта как избавиться, больно ли снимать зубной камень, профессиональная чистка зубов, ультразвуковая чистка зубного камня, чистка Air Flow Андижан, безопасное отбеливание эмали, осветление зубов, стоматолог Олимжон Тожибаев",
    },
    en: {
      title: "Clinical Teeth Whitening in Andijan — Safe In-Office Enamel Brightening | Dr. Olimjon Tojibayev",
      description: "Professional in-office teeth whitening brightening smiles by up to 6-8 shades with enamel-strengthening remineralization. Dr. Olimjon Tojibayev, Andijan. Tel: +998 90 541 97 57.",
      keywords: "teeth whitening Andijan, remove coffee and smoke stains, bleeding gums while brushing, bad breath causes and cure, does tartar scaling hurt, professional dental bleaching Uzbekistan, ultrasound scaling and AirFlow polishing, safe tooth brightening, dental hygiene, Dr Olimjon Tojibayev",
    },
  },
};
