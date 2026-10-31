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
        uz: `Shifokor-Stomatolog, Implantolog va Ortodont (${years} Yillik Tajriba)`,
        ru: `Врач-Стоматолог, Имплантолог и Ортодонт (${years} Лет Практики)`,
        en: `Dental Surgeon, Implantologist & Orthodontist (${years} Years Experience)`,
      },
      desc: {
        uz: "5,000+ dan ortiq bemorlarning tishlarini og'riqsiz davolash, biotitan implantlar, shaffof elaynerlar, breketlar va tsirkon qoplamalar bilan estetik tiklash. Smiles Dental Group, Andijon.",
        ru: "Более 5 000 успешных клинических случаев: цифровая имплантация, прозрачные элайнеры, брекеты, циркониевые коронки и бережное лечение в Smiles Dental Group.",
        en: "Over 5,000 restored smiles across guided implantology, clear aligners, aesthetic zirconia crowns, and gentle dentistry at Smiles Dental Group.",
      },
    },
    {
      year: {
        uz: "Raqamli Mutaxassislik",
        ru: "Цифровая Специализация",
        en: "Digital Dentistry Fellowship",
      },
      title: {
        uz: "3D Intraoral Diagnostika va Raqamli Ortodontiya",
        ru: "3D Интраоральная Диагностика и Цифровая Ортодонтия",
        en: "3D Intraoral Diagnostics & Digital Orthodontics",
      },
      desc: {
        uz: "Og'iz bo'shlig'i o'lchamlarini raqamli skanerlash, virtual tabassum dizayni (DSD) va navigatsion jarrohlik shablonlarini loyihalash bo'yicha maxsus tayyorgarlik.",
        ru: "Специализированная подготовка по цифровому моделированию улыбки DSD, 3D сканированию и хирургическим навигационным шаблонам.",
        en: "Advanced masterclasses in computer-guided 3D surgical templates, digital impression taking, and Digital Smile Design.",
      },
    },
    {
      year: {
        uz: "Klinik Amaliyot Bazasi",
        ru: "База Клинической Практики",
        en: "Clinical Practice Base",
      },
      title: {
        uz: "Smiles Dental Group — Andijon",
        ru: "Smiles Dental Group — Андижан",
        en: "Smiles Dental Group — Andijan",
      },
      desc: {
        uz: "Dr. Olimjon Tojibayev bemorlarni Andijon shahrida, eng ilg'or raqamli uskunalar bilan jihozlangan Smiles Dental Group klinikasida shaxsan qabul qiladi.",
        ru: "Д-р Олимжон Тожибаев ведёт личный приём пациентов в Андижане на базе передовой клиники Smiles Dental Group с новейшим 3D оснащением.",
        en: "Dr. Olimjon Tojibayev personally receives patients in Andijan, hosted at the high-tech Smiles Dental Group clinical facility.",
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
        uz: "Shaxsiy Kafolat va Nazorat",
        ru: "Личная Гарантия и Контроль",
        en: "Personal Warranty & Follow-up",
      },
      desc: {
        uz: "Har bir muolaja bevosita Dr. Olimjon Tojibayev tomonidan shaxsan bajariladi va shaxsiy sifat kafolati beriladi.",
        ru: "Каждая процедура выполняется лично доктором Тожибаевым с персональной гарантией качества.",
        en: "Every procedure is performed directly by Dr. Tojibayev with personal clinical accountability.",
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
        keywords={seo.keywords}
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
            ? `Dr. Olimjon Tojibayev — Shaxsiy Qabul va Yuksak Aniq Stomatologiya`
            : lang === "ru"
            ? `Д-р Олимжон Тожибаев — Личная практика и бережная стоматология`
            : `Dr. Olimjon Tojibayev — Dedicated Personal Dental Practice`}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {lang === "uz"
            ? "Har bir bemorga o'z yaqinimdek munosabatda bo'lish, qo'rquvsiz muhit va tishlarning tabiiy go'zalligini umrbod saqlab qolish — mening shaxsiy burchimdir."
            : lang === "ru"
            ? "Относиться к каждому пациенту как к близкому человеку, лечить без боли и сохранять природную красоту зубов — моё главное призвание."
            : "Treating every patient like family, eliminating fear, and preserving the natural beauty of your teeth is my personal clinical commitment."}
        </p>
      </header>

      {/* Doctor 3D Card Component */}
      <Doctor3DCard />

      {/* Professional Philosophy & Bio */}
      <section aria-labelledby="philosophy-heading" className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-brandLilac/30 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-12 space-y-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-primary-light text-primary border border-brandLilac/40 uppercase tracking-wider inline-block">
            {lang === "ru" ? "ФИЛОСОФИЯ ЛЕЧЕНИЯ" : lang === "en" ? "CLINICAL PHILOSOPHY" : "DAVOLASH FALSAFASI"}
          </span>
          <h2 id="philosophy-heading" className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            {lang === "uz"
              ? "Mening Shifokorlik Qoidam: Avval Inson, Keyin Muolaja"
              : lang === "ru"
              ? "Моё врачебное правило: сначала человек, затем лечение"
              : "My Clinical Philosophy: The Patient Always Comes First"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {lang === "uz"
              ? "Stomatolog kreslosi ko'pchilik uchun bolalikdagi og'riq va noxush xotiralar bilan bog'liq. Men o'z amaliyotimda bu qarashni butunlay o'zgartirishni maqsad qilganman. 7 yillik amaliy tajribam davomida men shuni angladimki, eng yaxshi natija — faqat shifokor va bemor o'rtasidagi to'liq ishonch, xotirjamlik va shoshilmasdan qilingan zargarlik mehnati orqali yaratiladi. Bizda ortiqcha keraksiz xizmatlar taklif qilinmaydi: agar tishingizni asrab qolish imkoni bo'lsa, oxirigacha uni saqlaymiz. Agar implant yoki to'g'irlash kerak bo'lsa — eng xavfsiz va uzoq yillik yo'lni tanlaymiz."
              : lang === "ru"
              ? "Стоматологическое кресло у многих ассоциируется с детским страхом и болью. В своей работе я поставил цель разрушить этот стереотип. За 7 лет практики я убедился: идеальный результат рождается только из искреннего доверия между врачом и пациентом, спокойной атмосферы и ювелирной точности. Я никогда не навязываю лишних процедур: если зуб можно спасти — мы боремся за него до конца. Если требуется имплантация или элайнеры — выбираем самое надёжное и щадящее решение на долгие годы."
              : "For many, a dental visit brings back childhood memories of anxiety and discomfort. In my practice, my mission is to completely change that experience. Over 7+ years of clinical work, I have found that the finest dental outcomes come from mutual trust, unhurried care, and jeweler-like precision. I never recommend unnecessary treatments: if a natural tooth can be preserved, we fight for it. When implants or aligners are needed, we choose the safest, longest-lasting path built to serve you for decades."}
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
      <section aria-labelledby="standards-heading" className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-brandLilac/30 shadow-luxury">
        <h2 id="standards-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
          {lang === "ru" ? "Личные стандарты лечения Д-ра Олимжона Тожибаева" : lang === "en" ? "Dr. Olimjon Tojibayev's Personal Clinical Standards" : "Dr. Olimjon Tojibayevning Shaxsiy Davolash Standartlari"}
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
            <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
              <span className="inline-block sm:w-36 shrink-0 text-xs font-mono font-bold text-primary bg-primary-light px-2.5 py-1.5 rounded-lg text-center border border-brandLilac/40 self-start">
                {item.year[lang]}
              </span>
              <div className="pb-6 border-b border-slate-100 flex-1 w-full">
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
