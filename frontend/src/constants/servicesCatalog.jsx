import React from "react";
import {
  DentalImplantFixture,
  DentalBracesIcon,
  DentalVeneerCrown,
  DentalToothMolar,
  DentalDenturesIcon,
  DentalAlignersIcon,
  DentalWhiteningZoom,
  DentalDigitalScannerIcon,
} from "../components/MedicalIcons";
import { assets } from "../assets/assets";

export const SERVICES_CATALOG = [
  {
    id: "digital-dentistry",
    icon: <DentalDigitalScannerIcon className="w-7 h-7 text-primary" />,
    image: assets.clinic_room,
    badge: {
      uz: "3D RAQAMLI SKANERLASH",
      ru: "3D ЦИФРОВОЕ СКАНИРОВАНИЕ",
      en: "3D DIGITAL SCANNING",
    },
    techTag: {
      uz: "CAD/CAM & 3D Intraoral",
      ru: "CAD/CAM и 3D Интраоральный",
      en: "CAD/CAM & 3D Intraoral",
    },
    featurePill: {
      uz: "100% Aniq 3D Model",
      ru: "100% Точная 3D Модель",
      en: "100% Precise 3D Model",
    },
    badgeTheme: {
      badgeBg: "bg-purple-950/85 text-purple-300 border-purple-400/50",
      warrantyBg: "bg-purple-900/80 text-purple-200 border-purple-400/40",
      accentGlow: "hover:shadow-purple-500/10",
    },
    category: {
      uz: "Raqamli Texnologiyalar",
      ru: "Цифровые Технологии",
      en: "Digital Technologies",
    },
    title: {
      uz: "Raqamli Stomatologiya & 3D Diagnostika",
      ru: "Цифровая Стоматология и 3D Диагностика",
      en: "Digital Dentistry & 3D Diagnostics",
    },
    shortDesc: {
      uz: "Eski noqulay gips qoliplarsiz, og'iz bo'shlig'ini bir necha daqiqada 3D intraoral skaner yordamida skanerlash va kelajakdagi tabassumni ekranda modellashtirish.",
      ru: "Без неприятных слепочных масс: быстрое 3D интраоральное сканирование зубов и компьютерное моделирование вашей идеальной улыбки.",
      en: "No uncomfortable putty molds: ultra-fast 3D digital intraoral scanning and computer simulation of your dream smile in real time.",
    },
    duration: { uz: "15-20 daqiqa", ru: "15-20 минут", en: "15-20 mins" },
    warranty: { uz: "Maksimal aniqlik", ru: "Максимальная точность", en: "Maximum precision" },
    highlights: {
      uz: [
        "Mikron darajasidagi aniqlik: xatoliklarsiz raqamli o'lchov",
        "Muolajadan oldin natijani 3D ekranda ko'rish imkoniyati",
        "Ko'ngil aynishi va noqulayliklarsiz tezkor skanerlash",
        "Implant, elayner va tojlar uchun ideal moslashuv kafolati",
      ],
      ru: [
        "Высочайшая микроная точность цифрового оттиска",
        "Визуализация результата лечения на 3D экране до начала процедур",
        "Без рвотного рефлекса и неприятных слепочных масс",
        "Идеальная посадка коронок, виниров и навигационных шаблонов",
      ],
      en: [
        "Micron-level digital precision for flawless dental restorations",
        "Virtual smile preview on 3D monitor before starting treatment",
        "Gag-free, comfortable, and lightning-fast digital scanning",
        "Guaranteed seamless fit for implants, aligners, and crowns",
      ],
    },
  },
  {
    id: "dental-implant",
    icon: <DentalImplantFixture className="w-7 h-7 text-primary" />,
    image: assets.treatment_implant,
    badge: {
      uz: "PREMIUM BIOTITAN",
      ru: "ПРЕМИУМ БИОТИТАН",
      en: "PREMIUM BIOTITANIUM",
    },
    techTag: {
      uz: "Navigatsion Jarrohlik",
      ru: "Навигационная Хирургия",
      en: "Guided Surgery",
    },
    featurePill: {
      uz: "Suyak Integratsiyasi 99.6%",
      ru: "Приживаемость 99.6%",
      en: "99.6% Integration",
    },
    badgeTheme: {
      badgeBg: "bg-purple-950/85 text-purple-300 border-purple-400/50",
      warrantyBg: "bg-emerald-950/85 text-emerald-300 border-emerald-400/50",
      accentGlow: "hover:shadow-purple-500/10",
    },
    category: {
      uz: "Dental Implantologiya",
      ru: "Дентальная Имплантология",
      en: "Dental Implantology",
    },
    title: {
      uz: "Dental Implantatsiya (Biotitan Tizimlari)",
      ru: "Дентальная Имплантация Зубов (Биотитан)",
      en: "Dental Implants (Titanium Systems)",
    },
    shortDesc: {
      uz: "Yo'qotilgan tishlarni qo'shni tishlarga zarar yetkazmasdan, premium biotitan implantlar bilan og'riqsiz va ishonchli tiklash.",
      ru: "Восстановление утраченных зубов без обточки соседних с помощью премиальных титановых имплантов с пожизненной гарантией.",
      en: "Restore missing teeth without grinding adjacent natural teeth using high-grade biocompatible titanium implants.",
    },
    duration: { uz: "20-30 daqiqa (1 qabul)", ru: "20-30 минут (1 визит)", en: "20-30 mins (1 visit)" },
    warranty: { uz: "Umrbod rasmiy kafolat", ru: "Пожизненная гарантия", en: "Lifetime warranty" },
    highlights: {
      uz: [
        "3D kompyuter tomografiyasi va navigatsion shablonlar asosida aniq o'rnatish",
        "2 bosqichli mikro-anesteziya: muolaja davomida 100% og'riqsiz",
        "7 yillik amaliy tajriba va 99.6% suyak bilan birikish ko'rsatkichi",
        "Tabiiy tish kabi chaynash kuchini to'liq tiklash",
      ],
      ru: [
        "Установка по 3D навигационным шаблонам с ювелирной точностью",
        "Двухэтапная анестезия: абсолютно комфортно и без боли",
        "7 лет клинического опыта и приживаемость свыше 99.6%",
        "Полное восстановление естественной эстетики и жевательной функции",
      ],
      en: [
        "Guided computer navigation surgery for pin-point placement",
        "Two-stage gentle local anesthesia: completely pain-free",
        "7+ years of surgical experience with over 99.6% osseointegration",
        "Full restoration of natural appearance and chewing power",
      ],
    },
  },
  {
    id: "elaynerlar",
    icon: <DentalAlignersIcon className="w-7 h-7 text-brandAmethyst" />,
    image: assets.treatment_aligners,
    badge: {
      uz: "SHAFFOF KAPALAR",
      ru: "ПРОЗРАЧНЫЕ КАПЫ",
      en: "CLEAR ALIGNERS",
    },
    techTag: {
      uz: "Ko'rinmas Ortodontiya",
      ru: "Невидимая Ортодонтия",
      en: "Invisible Orthodontics",
    },
    featurePill: {
      uz: "Estetik va Qulay",
      ru: "Эстетично и Комфортно",
      en: "Comfortable & Discrete",
    },
    badgeTheme: {
      badgeBg: "bg-purple-950/85 text-purple-300 border-purple-400/50",
      warrantyBg: "bg-indigo-950/85 text-indigo-300 border-indigo-400/50",
      accentGlow: "hover:shadow-purple-500/10",
    },
    category: {
      uz: "Raqamli Ortodontiya",
      ru: "Цифровая Ортодонтия",
      en: "Digital Orthodontics",
    },
    title: {
      uz: "Shaffof Elaynerlar (Ko'rinmas Tish To'g'irlash)",
      ru: "Прозрачные Элайнеры (Невидимое Выравнивание)",
      en: "Clear Aligners (Invisible Teeth Straightening)",
    },
    shortDesc: {
      uz: "Metall qulflarsiz, atrofdagilarga umuman sezilmaydigan shaffof kapalar yordamida tishlarni qulay va tez to'g'irlash.",
      ru: "Выравнивание зубов без металлических замков: незаметные прозрачные капы, которые легко снимать во время еды.",
      en: "Straighten your teeth invisibly without metal brackets using custom 3D-designed transparent aligner trays.",
    },
    duration: { uz: "Har 2 haftada kapa yangilash", ru: "Смена кап каждые 2 недели", en: "Tray change every 2 weeks" },
    warranty: { uz: "Raqamli kafolatlangan natija", ru: "Гарантированный результат", en: "Guaranteed digital outcome" },
    highlights: {
      uz: [
        "100% shaffof tibbiy polimer: suhbat davomida hech kim sezmaydi",
        "Ovqatlanish va tish tozalash vaqtida oson yechiladi",
        "Og'iz shilliq qavatini tirnamaydi, noqulaylik tug'dirmaydi",
        "3D simulyatsiyada davolash muddatini va natijasini oldindan bilish",
      ],
      ru: [
        "Абсолютно прозрачны и незаметны для окружающих при общении",
        "Легко снимаются во время еды и чистки зубов",
        "Не натирают дёсны и не повреждают эмаль",
        "Прогнозируемый 3D результат ещё до начала ношения",
      ],
      en: [
        "Virtually invisible medical-grade polymer trays",
        "Removable for effortless eating, brushing, and flossing",
        "Zero friction or mucosal irritation for superior comfort",
        "Pre-computed 3D digital simulation shows exact treatment finish",
      ],
    },
  },
  {
    id: "breketlar",
    icon: <DentalBracesIcon className="w-7 h-7 text-brandAmethyst" />,
    image: assets.treatment_braces,
    badge: {
      uz: "METALL & KERAMIKA",
      ru: "МЕТАЛЛ И КЕРАМИКА",
      en: "METAL & CERAMIC",
    },
    techTag: {
      uz: "Zamonaviy Tizimlar",
      ru: "Современные Системы",
      en: "Modern Systems",
    },
    featurePill: {
      uz: "To'g'ri Prikus",
      ru: "Правильный Прикус",
      en: "Ideal Bite",
    },
    badgeTheme: {
      badgeBg: "bg-purple-950/85 text-purple-300 border-purple-400/50",
      warrantyBg: "bg-blue-950/85 text-blue-300 border-blue-400/50",
      accentGlow: "hover:shadow-purple-500/10",
    },
    category: {
      uz: "Klassik Ortodontiya",
      ru: "Классическая Ортодонтия",
      en: "Orthodontics",
    },
    title: {
      uz: "Zamonaviy Breket Tizimlari",
      ru: "Брекет-Системы (Металл, Керамика, Сапфир)",
      en: "Modern Braces Systems",
    },
    shortDesc: {
      uz: "Har qanday murakkablikdagi tish egriliklarini va noto'g'ri tishlash (prikus) holatlarini mustahkam va ishonchli to'g'irlash.",
      ru: "Исправление кривизны зубного ряда и патологий прикуса любой сложности с помощью надёжных металлических и керамических брекетов.",
      en: "Correction of complex tooth misalignment, crowding, and bite issues using reliable metal, sapphire, and ceramic braces.",
    },
    duration: { uz: "Qabul: 30-40 daqiqa", ru: "Приём: 30-40 минут", en: "Visit: 30-40 mins" },
    warranty: { uz: "Mukammal tishlash kafolati", ru: "Гарантия правильного прикуса", en: "Ideal occlusion warranty" },
    highlights: {
      uz: [
        "Metall, keramik va sapfir breketlarni tanlash imkoniyati",
        "O'zi ligaturlanuvchi (past ishqalanishli) zamonaviy texnologiya",
        "Yuz simmetriyasini va jag' profilini yaxshilash",
        "Davolash davomida doimiy shaxsiy nazorat",
      ],
      ru: [
        "Широкий выбор: классические металлические, эстетические керамические и сапфировые",
        "Самолигирующие замки для более мягкого и быстрого перемещения зубов",
        "Улучшение профиля лица и правильное распределение жевательной нагрузки",
        "Индивидуальный план активаций и постоянный врачебный контроль",
      ],
      en: [
        "Options in durable metal, discreet ceramic, and crystal sapphire",
        "Low-friction self-ligating brackets for faster, gentler movements",
        "Improves facial symmetry, jaw alignment, and joint health",
        "Dedicated monitoring and personalized progress check-ups",
      ],
    },
  },
  {
    id: "tsirkon-keramika-koronka",
    icon: <DentalVeneerCrown className="w-7 h-7 text-primary" />,
    image: assets.treatment_crowns,
    badge: {
      uz: "TSIRKON VA KERAMIKA",
      ru: "ЦИРКОНИЙ И КЕРАМИКА",
      en: "ZIRCONIA & CERAMIC",
    },
    techTag: {
      uz: "CAD/CAM Robotik Frezerlash",
      ru: "CAD/CAM Фрезеровка",
      en: "CAD/CAM Milling",
    },
    featurePill: {
      uz: "Tabiiy Shaffoflik",
      ru: "Натуральная Прозрачность",
      en: "Natural Translucency",
    },
    badgeTheme: {
      badgeBg: "bg-purple-950/85 text-purple-300 border-purple-400/50",
      warrantyBg: "bg-emerald-950/85 text-emerald-300 border-emerald-400/50",
      accentGlow: "hover:shadow-purple-500/10",
    },
    category: {
      uz: "Ortopediya & Protezlash",
      ru: "Ортопедия и Протезирование",
      en: "Prosthodontics",
    },
    title: {
      uz: "Tsirkon va Keramika Koronkalar",
      ru: "Циркониевые и Керамические Коронки",
      en: "Zirconia & Ceramic Dental Crowns",
    },
    shortDesc: {
      uz: "Qattiq yemirilgan yoki singan tishlarni tabiiy tish emalidan ajratib bo'lmaydigan, o'ta mustahkam tsirkoniy va keramik qoplamalar bilan tiklash.",
      ru: "Восстановление разрушенных зубов сверхпрочными коронками из диоксида циркония и безметалловой керамики с естественной эстетикой.",
      en: "Restoring broken or severely worn teeth with ultra-strong zirconia and all-ceramic crowns indistinguishable from natural enamel.",
    },
    duration: { uz: "2-3 bosqich", ru: "2-3 этапа", en: "2-3 visits" },
    warranty: { uz: "15 yildan ortiq chidamlilik", ru: "Служба более 15 лет", en: "15+ years durability" },
    highlights: {
      uz: [
        "Metallsiz konstruksiya: milk cheti qoraymaydi va ko'karmaydi",
        "Monolit tsirkoniyning olmosdek mustahkamligi",
        "Tabiiy tish emalining yorug'lik o'tkazuvchanligi va shaffofligi",
        "CAD/CAM kompyuterli frezerlash orqali mukammal jipslashish",
      ],
      ru: [
        "100% безметалловая основа: нет тёмного ободка у края десны",
        "Высочайшая прочность монолитного циркония против сколов",
        "Естественное преломление света и точный подбор цвета эмали",
        "Ювелирное прилегание благодаря цифровой фрезеровке CAD/CAM",
      ],
      en: [
        "Metal-free bio-compatible design with no dark gum-line margins",
        "Exceptional structural strength of solid monolithic zirconia",
        "Natural light translucency and personalized color matching",
        "CAD/CAM digital robotic milling ensuring airtight margin seal",
      ],
    },
  },
  {
    id: "vinirlar",
    icon: <DentalVeneerCrown className="w-7 h-7 text-primary" />,
    image: assets.treatment_veneers,
    badge: {
      uz: "E-MAX KERAMIKA",
      ru: "E-MAX КЕРАМИКА",
      en: "E-MAX CERAMIC",
    },
    techTag: {
      uz: "Gollivud Tabassumi",
      ru: "Голливудская Улыбка",
      en: "Hollywood Smile",
    },
    featurePill: {
      uz: "Ultra-Yupqa 0.3 mm",
      ru: "Ультратонкие 0.3 мм",
      en: "Ultra-Thin 0.3 mm",
    },
    badgeTheme: {
      badgeBg: "bg-purple-950/85 text-purple-300 border-purple-400/50",
      warrantyBg: "bg-teal-950/85 text-teal-300 border-teal-400/50",
      accentGlow: "hover:shadow-purple-500/10",
    },
    category: {
      uz: "Estetik Stomatologiya",
      ru: "Эстетическая Стоматология",
      en: "Aesthetic Dentistry",
    },
    title: {
      uz: "Estetik Keramik Vinirlar",
      ru: "Эстетические Керамические Виниры",
      en: "Aesthetic Ceramic Veneers",
    },
    shortDesc: {
      uz: "Tishlarning rangi, shakli, tirqishlari va mayda nuqsonlarini minimal charxlash bilan mukammal qilib o'zgartiruvchi ultra-yupqa keramik qoplamalar.",
      ru: "Ультратонкие керамические микропротезы для создания безупречной белизны, гармоничной формы зубов и лучезарной улыбки.",
      en: "Ultra-thin ceramic laminates that transform tooth color, spacing, shape, and proportions with minimal preparation.",
    },
    duration: { uz: "5-7 kun (2 qabul)", ru: "5-7 дней (2 визита)", en: "5-7 days (2 visits)" },
    warranty: { uz: "10-15 yil kafolatlangan porlash", ru: "10-15 лет идеальной белизны", en: "10-15 years flawless shine" },
    highlights: {
      uz: [
        "Minimal (0.3-0.5 mm) charxlash yoki charxlamasdan o'rnatish",
        "Qahva, choy va chekishdan aslo rangini o'zgartirmaydi",
        "Yuz tuzilishi va lab chizig'iga mos individual tabassum dizayni",
        "E-max press-keramikaning ajoyib tabiiyligi",
      ],
      ru: [
        "Минимальная щадящая обработка эмали (0.3-0.5 мм)",
        "Стойкость к пищевым красителям: чай, кофе и табак не окрашивают виниры",
        "Индивидуальный дизайн улыбки с учётом пропорций лица",
        "Непревзойдённая эстетика премиальной керамики IPS e.max",
      ],
      en: [
        "Gentle micro-preparation (0.3-0.5 mm) preserving tooth vitality",
        "Immune to stains from coffee, tea, berries, and tobacco",
        "Custom Digital Smile Design aligned to facial harmony and lips",
        "World-renowned aesthetics and glass-like gloss of IPS e.max",
      ],
    },
  },
  {
    id: "protezlar",
    icon: <DentalDenturesIcon className="w-7 h-7 text-brandAmethyst" />,
    image: assets.treatment_dentures,
    badge: {
      uz: "BYUGEL VA NEYLON",
      ru: "БЮГЕЛЬ И НЕЙЛОН",
      en: "CLASP & NYLON",
    },
    techTag: {
      uz: "Qulay Konstruksiya",
      ru: "Удобная Конструкция",
      en: "Ergonomic Design",
    },
    featurePill: {
      uz: "Yengil va Moslashuvchan",
      ru: "Лёгкие и Гибкие",
      en: "Light & Flexible",
    },
    badgeTheme: {
      badgeBg: "bg-purple-950/85 text-purple-300 border-purple-400/50",
      warrantyBg: "bg-amber-950/85 text-amber-300 border-amber-400/50",
      accentGlow: "hover:shadow-purple-500/10",
    },
    category: {
      uz: "Tish Protezlash",
      ru: "Протезирование Зубов",
      en: "Dentures & Prosthetics",
    },
    title: {
      uz: "Zamonaviy Tish Protezlari",
      ru: "Современные Зубные Протезы",
      en: "Modern Removable & Fixed Dentures",
    },
    shortDesc: {
      uz: "Ko'p sonli yoki to'liq yo'qotilgan tishlar o'rnini sifatli byugel, elastik neylon va akril protezlar yordamida tez hamda qulay tiklash.",
      ru: "Быстрое и доступное восстановление зубного ряда при частичном или полном отсутствии зубов с помощью современных мягких и прочных протезов.",
      en: "Restoring extensive tooth loss affordably and comfortably using state-of-the-art clasp, flexible nylon, and partial dentures.",
    },
    duration: { uz: "3-5 kun", ru: "3-5 дней", en: "3-5 days" },
    warranty: { uz: "5 yillik xizmat kafolati", ru: "Гарантия на конструкцию", en: "Prosthetic integrity warranty" },
    highlights: {
      uz: [
        "Egiluvchan va yengil neylon material: tez moslashish",
        "Mustahkam kasting byugel tizimlari: ovqat chaynash qulayligi",
        "Tabiiy tish milkiga to'liq mos keluvchi rang va shakl",
        "Tushib ketmaydigan ishonchli mahkamlash mexanizmlari",
      ],
      ru: [
        "Мягкие и эластичные нейлоновые материалы для быстрой адаптации",
        "Прочные бюгельные протезы с равномерным распределением нагрузки",
        "Натуральный цвет искусственной десны и зубов",
        "Надёжная фиксация и комфорт при разговоре и приёме пищи",
      ],
      en: [
        "Flexible, lightweight biocompatible nylon for swift adaptation",
        "Sturdy cast clasp frameworks distributing chewing pressure evenly",
        "Tissue-matched shade selection for discreet realism",
        "Stable retentive clasps preventing looseness while speaking",
      ],
    },
  },
  {
    id: "ogriqsiz-terapiya",
    icon: <DentalToothMolar className="w-7 h-7 text-primary" />,
    image: assets.treatment_therapy,
    badge: {
      uz: "100% OG'RIQSIZ",
      ru: "100% БЕЗ БОЛИ",
      en: "100% PAIN-FREE",
    },
    techTag: {
      uz: "Zamonaviy Terapiya",
      ru: "Современная Терапия",
      en: "Modern Endodontics",
    },
    featurePill: {
      uz: "Nano-Kompozit Plomba",
      ru: "Нано-Композит",
      en: "Nano-Composite",
    },
    badgeTheme: {
      badgeBg: "bg-purple-950/85 text-purple-300 border-purple-400/50",
      warrantyBg: "bg-emerald-950/85 text-emerald-300 border-emerald-400/50",
      accentGlow: "hover:shadow-purple-500/10",
    },
    category: {
      uz: "Terapevtik Stomatologiya",
      ru: "Терапевтическая Стоматология",
      en: "Restorative Dentistry",
    },
    title: {
      uz: "Og'riqsiz Terapiya va Plombalash",
      ru: "Безболезненная Терапия и Лечение Кариеса",
      en: "Painless Therapy & Restorations",
    },
    shortDesc: {
      uz: "Karies, pulpit va periodontitni nemis va yapon kompozitlari bilan 100% og'riqsiz davolash hamda tish anatomiyasini aniq tiklash.",
      ru: "Комфортное лечение кариеса и корневых каналов под надёжной анестезией с использованием премиальных фотополимерных пломб.",
      en: "Comfortable cavity and root canal treatments under gentle anesthesia with premium photopolymer composites restoring tooth anatomy.",
    },
    duration: { uz: "30-45 daqiqa", ru: "30-45 минут", en: "30-45 mins" },
    warranty: { uz: "5 yillik plomba kafolati", ru: "Гарантия на реставрацию", en: "Restoration warranty" },
    highlights: {
      uz: [
        "Zamonaviy karpula anesteziyasi: inyeksiya og'rig'i sezilmaydi",
        "Kariesni chuqur tozalash va asab kanallarini germetik to'ldirish",
        "Estetik tish do'mboqchalari va yoriqchalarini tabiiy tiklash",
        "Tish emalini mustahkamlovchi rem-terapiya",
      ],
      ru: [
        "Современная карпульная анестезия: укол не чувствуется вообще",
        "Тщательная обработка и герметичная обтурация корневых каналов",
        "Анатомическая художественная реставрация бугров зуба",
        "Реминерализация и защита здоровых тканей эмали",
      ],
      en: [
        "Gentle computer-controlled carpal anesthesia with zero sting",
        "Thorough disinfection and airtight canal obturation",
        "Artistic anatomical restoration matching original tooth cusps",
        "Remineralizing fluoride protocols safeguarding remaining enamel",
      ],
    },
  },
  {
    id: "tish-oqartirish",
    icon: <DentalWhiteningZoom className="w-7 h-7 text-primary" />,
    image: assets.treatment_whitening,
    badge: {
      uz: "XAVFSIZ OQARTIRISH",
      ru: "БЕЗОПАСНОЕ ОТБЕЛИВАНИЕ",
      en: "SAFE WHITENING",
    },
    techTag: {
      uz: "AirFlow & Professional Gel",
      ru: "AirFlow и Проф. Гели",
      en: "AirFlow & Professional Gel",
    },
    featurePill: {
      uz: "6-8 Ton Oqroq",
      ru: "На 6-8 Тонов Светлее",
      en: "6-8 Shades Brighter",
    },
    badgeTheme: {
      badgeBg: "bg-purple-950/85 text-purple-300 border-purple-400/50",
      warrantyBg: "bg-cyan-950/85 text-cyan-300 border-cyan-400/50",
      accentGlow: "hover:shadow-purple-500/10",
    },
    category: {
      uz: "Gigiyena va Estetika",
      ru: "Гигиена и Эстетика",
      en: "Hygiene & Cosmetics",
    },
    title: {
      uz: "Professional Tish Oqartirish",
      ru: "Профессиональное Отбеливание Зубов",
      en: "Professional Teeth Whitening",
    },
    shortDesc: {
      uz: "Tish emaliga mutlaqo ziyon yetkazmasdan, tish toshlari va dog'larni tozalash hamda tabassumni 6-8 tongacha oppoq qilish.",
      ru: "Безопасное профессиональное осветление эмали на 6-8 тонов с удалением зубного камня и налёта без вреда для зубов.",
      en: "Safe professional teeth whitening lifting stains and lightening enamel by 6-8 shades without sensitivity or damage.",
    },
    duration: { uz: "45-60 daqiqa", ru: "45-60 минут", en: "45-60 mins" },
    warranty: { uz: "1.5-2 yil saqlanuvchi oqlik", ru: "Стойкость 1.5-2 года", en: "1.5-2 years lasting brightness" },
    highlights: {
      uz: [
        "AirFlow apparati yordamida qora choy, qahva va tamaki dog'larini tozalash",
        "Emalni mustahkamlovchi minerallashtiruvchi kompozitsiyalar",
        "Sezuvchanliksiz xavfsiz fotodiodli va kimyoviy oqartirish",
        "Birinchi muolajaning o'zidayoq ko'zga ko'rinarli oppoq natija",
      ],
      ru: [
        "Аппаратная чистка AirFlow: удаление зубного камня, чая и табака",
        "Укрепление эмали реминерализирующим комплексом после процедуры",
        "Минимальная чувствительность и комфорт пациента",
        "Заметный белоснежный эффект сразу после первого сеанса",
      ],
      en: [
        "AirFlow deep cleansing removes persistent tea, coffee, and tobacco stains",
        "Post-treatment remineralization paste protects teeth against sensitivity",
        "Clinically tested gentle whitening agents safe for healthy enamel",
        "Noticeably brighter, sparkling smile immediately after one session",
      ],
    },
  },
];
