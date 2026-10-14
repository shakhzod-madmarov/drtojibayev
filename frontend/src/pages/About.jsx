import React from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, getYearsOfExperience } from "../constants/doctor";
import { PAGE_SEO } from "../constants/seo";
import Seo from "../components/Seo";
import { buildDoctorProfileSchema } from "../utils/structuredData";
import ClinicLocationMap from "../components/ClinicLocationMap";
import Doctor3DCard from "../components/Doctor3DCard";
import {
  IconShieldCheck,
  IconGentleComfort,
  DentalDigitalScannerIcon,
  IconTrophyWarranty,
} from "../components/MedicalIcons";
import Interactive3DTilt from "../components/Interactive3DTilt";

const About = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.about[lang] || PAGE_SEO.about.uz;
  const years = getYearsOfExperience();

  const timeline = [
    {
      year: {
        uz: "2019 – Hozirgacha",
        ru: "2019 – По настоящее время",
        en: "2019 – Present",
      },
      title: {
        uz: `Цифровой Стоматолог, Implantolog va Ortodont (${years} Yillik Tajriba)`,
        ru: `Цифровой Стоматолог, Имплантолог и Ортодонт (${years} Лет Практики)`,
        en: `Digital Dentist & Implant Specialist (${years} Years Experience)`,
      },
      desc: {
        uz: "5,000+ dan ortiq bemorlarning tishlarini og'riqsiz davolash, biotitan implantlar, shaffof elaynerlar, breketlar va tsirkon qoplamalar bilan estetik tiklash. Smile Dental Group, Andijon.",
        ru: "Более 5 000 успешных клинических случаев: цифровая имплантация, прозрачные элайнеры, брекеты, циркониевые коронки и бережное лечение в Smile Dental Group.",
        en: "Over 5,000 restored smiles across guided implantology, clear aligners, aesthetic zirconia crowns, and gentle dentistry at Smile Dental Group.",
      },
    },
    {
      year: {
        uz: "Raqamli Mutaxassislik",
        ru: "Цифровая Специализация",
        en: "Digital Dentistry Fellowship",
      },
      title: {
        uz: "3D Intraoral Skanerlash va CAD/CAM Muhandisligi",
        ru: "3D Интраоральное Сканирование и CAD/CAM Инженерия",
        en: "3D Intraoral Scanning & CAD/CAM Systems",
      },
      desc: {
        uz: "Og'iz bo'shlig'i o'lchamlarini raqamli skanerlash, virtual tabassum dizayni (DSD) va navigatsion jarrohlik shablonlarini loyihalash bo'yicha maxsus tayyorgarlik.",
        ru: "Специализированная подготовка по цифровому моделированию улыбки DSD, 3D сканированию и хирургическим навигационным шаблонам.",
        en: "Advanced masterclasses in computer-guided 3D surgical templates, digital impression taking, and Digital Smile Design.",
      },
    },
    {
      year: {
        uz: "Klinik Amaliyot",
        ru: "Клиническая Практика",
        en: "Clinical Practice",
      },
      title: {
        uz: "Smile Dental Group — Andijon",
        ru: "Smile Dental Group — Андижан",
        en: "Smile Dental Group — Andijan",
      },
      desc: {
        uz: "Zamonaviy innovatsion uskunalar, eng yangi avlod sterilizatsiya protokollari va qulay muhitda bemorlarni qabul qilish.",
        ru: "Приём пациентов на передовом цифровом оборудовании в атмосфере максимального комфорта и заботы.",
        en: "Welcoming patients in a high-tech modern clinic with strict hospital-grade sterilization protocols.",
      },
    },
  ];

  const values = [
    {
      icon: <IconShieldCheck className="w-6 h-6 text-primary" />,
      title: {
        uz: "100% Sterillik va Xavfsizlik",
        ru: "100% Стерильность и Безопасность",
        en: "100% Sterility & Safety",
      },
      desc: {
        uz: "Har bir bemor uchun alohida kraft-paketda avtoklavlangan steril asboblar ko'z oldingizda ochiladi.",
        ru: "Индивидуальный крафт-пакет со стерильными инструментами вскрывается прямо перед пациентом.",
        en: "Autoclaved sterile instrument pouches are opened directly in front of each patient.",
      },
    },
    {
      icon: <IconGentleComfort className="w-6 h-6 text-primary" />,
      title: {
        uz: "2 Bosqichli Og'riqsiz Anesteziya",
        ru: "Двухэтапная Анестезия Без Боли",
        en: "Two-Stage Pain-Free Anesthesia",
      },
      desc: {
        uz: "Avval milk yuzasi muzlatuvchi mevali gel bilan og'riqsizlantiriladi, bemor inyeksiyani umuman sezmaydi.",
        ru: "Десна предварительно обрабатывается анестезирующим гелем: укол не ощущается вообще.",
        en: "Gums are first numbed with a gentle flavored topical gel, rendering local anesthesia completely painless.",
      },
    },
    {
      icon: <DentalDigitalScannerIcon className="w-6 h-6 text-primary" />,
      title: {
        uz: "Raqamli Aniqlik (No Gips)",
        ru: "Цифровая Точность Без Слепков",
        en: "Digital Precision (No Putty)",
      },
      desc: {
        uz: "Noqulay gips massalarisiz, zamonaviy 3D skaner orqali 60 soniyada tishlarning aniq modeli olinadi.",
        ru: "Никаких рвотных рефлексов: 3D сканирование полости рта за 60 секунд без слепочной массы.",
        en: "Fast, gag-free 3D digital scans capture teeth in 60 seconds without messy putty.",
      },
    },
    {
      icon: <IconTrophyWarranty className="w-6 h-6 text-primary" />,
      title: {
        uz: "Rasmiy Kafolat va Qo'llab-quvvatlash",
        ru: "Официальная Гарантия",
        en: "Official Clinical Warranty",
      },
      desc: {
        uz: "Barcha implantlar, koronkalar va rejalashtirilgan ortodontik davolashga rasmiy kafolat beriladi.",
        ru: "Официальная гарантия клиники на все имплантаты, ортопедические коронки и брекеты.",
        en: "Formal warranties covering implant fixtures, prosthodontic crowns, and alignment stability.",
      },
    },
  ];

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "О враче" : lang === "en" ? "About" : "Shifokor haqida", path: "/about" },
  ];
  const schema = buildDoctorProfileSchema(lang, breadcrumbs);

  return (
    <div className="py-6 sm:py-10 space-y-12">
      <Seo
        title={seo.title}
        description={seo.description}
        schemaJson={schema}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span>/</span>
        <span className="text-primary font-bold" aria-current="page">
          {lang === "ru" ? "О враче" : lang === "en" ? "About Doctor" : "Shifokor haqida"}
        </span>
      </nav>

      {/* Header with Primary H1 for SEO & Semantics */}
      <header className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary-light border border-brandLilac/40 shadow-xs uppercase">
          {lang === "uz" ? "SHIFOKOR HAQIDA" : lang === "ru" ? "О СПЕЦИАЛИСТЕ" : "ABOUT THE SPECIALIST"}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {lang === "uz"
            ? `Dr. Olimjon Tojibayev — ${years} Yillik Tajribaga Ega Raqamli Stomatolog`
            : lang === "ru"
            ? `Д-р Олимжон Тожибаев — Цифровой Стоматолог (${years} Лет Опыта)`
            : `Dr. Olimjon Tojibayev — Digital Dentist (${years} Years Experience)`}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {lang === "uz"
            ? "Smile Dental Group (Andijon). 3D intraoral skanerlash, biotitan implantlar, shaffof elaynerlar, zamonaviy breketlar va 100% og'riqsiz davolash."
            : lang === "ru"
            ? "Smile Dental Group (Андижан). 3D сканирование, имплантация, прозрачные элайнеры, брекеты и лечение без боли."
            : "Smile Dental Group (Andijan). Precision 3D scanning, guided implants, clear aligners, and gentle patient care."}
        </p>
      </header>

      {/* Doctor 3D Card Component */}
      <Doctor3DCard />

      {/* Professional Philosophy & Bio */}
      <section aria-labelledby="philosophy-heading" className="p-6 sm:p-10 rounded-3xl bg-white border border-brandLilac/30 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-12 space-y-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-primary-light text-primary border border-brandLilac/40 uppercase tracking-wider inline-block">
            {lang === "ru" ? "ФИЛОСОФИЯ ЛЕЧЕНИЯ" : lang === "en" ? "CLINICAL PHILOSOPHY" : "DAVOLASH FALSAFASI"}
          </span>
          <h2 id="philosophy-heading" className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            {lang === "uz"
              ? "Zamonaviy raqamli texnologiyalar inson salomatligi va go'zalligi xizmatida"
              : lang === "ru"
              ? "Передовые цифровые технологии на страже вашего здоровья и красоты"
              : "Modern Digital Technologies in Service of Your Health & Beauty"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {lang === "uz"
              ? "Dr. Olimjon Tojibayev — stomatologiyadagi eng zamonaviy yo'nalish — 'Raqamli Stomatologiya' (Digital Dentistry) bo'yicha ixtisoslashgan mutaxassis. 7 yillik amaliy tajriba davomida yuzlab murakkab implantatsiya, shaffof elaynerlar orqali tish qatorini to'g'irlash, tsirkon va keramik vinirlar o'rnatish muolajalarini muvaffaqiyatli yakunlagan. Har bir bemorga xuddi o'z yaqinidek g'amxo'rlik va 100% og'riqsiz muhit ta'minlanadi."
              : lang === "ru"
              ? "Д-р Олимжон Тожибаев — прогрессивный стоматолог, активно внедряющий цифровые методы диагностики и лечения. 7 лет практического опыта включают сотни успешных операций по имплантации, исправлению прикуса прозрачными элайнерами и эстетической реставрации коронками и винирами в клинике Smile Dental Group."
              : "Dr. Olimjon Tojibayev specializes in modern Digital Dentistry. Backed by 7+ years of dedicated clinical practice, he has helped thousands of patients regain confidence through computer-guided implants, discreet aligners, zirconia restorations, and zero-pain therapy."}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brandPurple to-brandAmethyst hover:scale-102 active:scale-98 shadow-purple transition-all"
            >
              {lang === "ru" ? "Записаться на консультацию" : lang === "en" ? "Book a Consultation" : "Konsultatsiyaga yozilish"}
            </button>
            <a
              href={DOCTOR_INFO.phoneHref}
              className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm text-slate-700 bg-[#FAF7FD] hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              {DOCTOR_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Clinical Values & Standards */}
      <section aria-labelledby="standards-heading" className="p-6 sm:p-10 rounded-3xl bg-white border border-brandLilac/30 shadow-luxury">
        <h2 id="standards-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
          {lang === "ru" ? "Принципы и стандарты работы" : lang === "en" ? "Core Principles & Patient Care" : "Ish Faoliyatimizdagi Asosiy Standartlar"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <Interactive3DTilt
              key={idx}
              maxTilt={8}
              perspective={900}
              scale={1.03}
              glare={true}
              className="h-full"
            >
              <article className="h-full p-5 rounded-2xl bg-[#FAF7FD] border border-brandLilac/30 flex flex-col justify-between hover:border-brandAmethyst/40 hover:shadow-card transition-all duration-300 group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-brandLilac/40 text-primary flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 transition-transform">
                    {val.icon}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2">
                    {val.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc[lang]}
                  </p>
                </div>
              </article>
            </Interactive3DTilt>
          ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section aria-labelledby="timeline-heading" className="p-6 sm:p-10 rounded-3xl bg-white border border-brandLilac/30 shadow-luxury">
        <h2 id="timeline-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
          {lang === "ru" ? "Профессиональный путь" : lang === "en" ? "Career & Experience Timeline" : "Shifokorning Professional Yo'li"}
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex gap-4 sm:gap-6 items-start">
              <span className="w-24 sm:w-28 shrink-0 text-xs font-mono font-bold text-primary bg-primary-light px-2.5 py-1.5 rounded-lg text-center border border-brandLilac/40">
                {item.year[lang]}
              </span>
              <div className="pb-6 border-b border-slate-100 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  {item.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clinic Location Map */}
      <ClinicLocationMap />
    </div>
  );
};

export default About;
