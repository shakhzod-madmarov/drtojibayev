import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import Seo from "../components/Seo";
import InlineBookingSection from "../components/InlineBookingSection";
import ClinicLocationMap from "../components/ClinicLocationMap";
import FaqAccordion from "../components/FaqAccordion";
import { buildHomePageSchema } from "../utils/structuredData";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import DigitalDentistryFeatures from "../components/DigitalDentistryFeatures";
import Doctor3DCard from "../components/Doctor3DCard";
import Interactive3DCostCalculator from "../components/Interactive3DCostCalculator";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import SmileAssessmentWizard from "../components/SmileAssessmentWizard";
import Interactive3DTilt from "../components/Interactive3DTilt";

/* ═══════════════════════════════════════════════════════════════════
   HERO SECTION — DR. OLIMJON TOJIBAYEV
   ═══════════════════════════════════════════════════════════════════ */
const HeroSection = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const T = {
    uz: {
      badge: "🔹️Цифровой Стоматолог · 7 Yillik Tajriba",
      doctorName: DOCTOR_INFO.name,
      specialtyTitle: "Raqamli Stomatolog · Implantolog · Ortodont",
      headline: "Raqamli Stomatologiya & Mukammal Tabassum Muhandisligi",
      subtitle:
        "7 yillik klinik tajriba. 3D intraoral skanerlash, premium biotitan implantlar, shaffof elaynerlar, zamonaviy breketlar, tsirkon koronkalar va Smile Dental Group klinikasida 100% og'riqsiz davolash.",
      ctaBook: "Qabulga Yozilish",
      ctaServices: "Xizmatlarni Ko'rish",
      stat1Num: "7+ Yil",
      stat1Label: "Klinik Tajriba",
      stat2Num: "5,000+",
      stat2Label: "Muvaffaqiyatli Davolash",
      stat3Num: "99.6%",
      stat3Label: "Suyak Integratsiyasi",
      stat4Num: "100%",
      stat4Label: "Og'riqsiz Muolaja",
      floatBadge1: "🔬 3D Skaner (0.01mm)",
      floatBadge2: "🦷 Shaffof Elayner & Implant",
    },
    ru: {
      badge: "🔹️Цифровой Стоматолог · 7 Лет Опыта",
      doctorName: DOCTOR_INFO.name,
      specialtyTitle: "Цифровой Стоматолог · Имплантолог · Ортодонт",
      headline: "Цифровая Стоматология и Создание Вашей Идеальной Улыбки",
      subtitle:
        "7 лет клинической практики. 3D интраоральное сканирование, дентальная имплантация, прозрачные элайнеры, брекеты, циркониевые коронки и бережное лечение зубов в Smile Dental Group.",
      ctaBook: "Записаться на Приём",
      ctaServices: "Все Услуги",
      stat1Num: "7+ Лет",
      stat1Label: "Клинического Опыта",
      stat2Num: "5,000+",
      stat2Label: "Пациентов с Улыбкой",
      stat3Num: "99.6%",
      stat3Label: "Приживаемость",
      stat4Num: "100%",
      stat4Label: "Без Боли и Страха",
      floatBadge1: "🔬 3D Сканер (0.01мм)",
      floatBadge2: "🦷 Элайнеры и Импланты",
    },
    en: {
      badge: "🔹️Digital Dentist · 7+ Years Experience",
      doctorName: DOCTOR_INFO.name,
      specialtyTitle: "Digital Dentist · Implantologist · Orthodontist",
      headline: "Precision Digital Dentistry & Flawless Aesthetic Smiles",
      subtitle:
        "7+ years of clinical excellence. 3D intraoral scanning, titanium dental implants, clear aligners, orthodontic braces, zirconia crowns, and gentle care at Smile Dental Group.",
      ctaBook: "Book Appointment",
      ctaServices: "Explore Services",
      stat1Num: "7+ Yrs",
      stat1Label: "Clinical Mastery",
      stat2Num: "5,000+",
      stat2Label: "Treated Patients",
      stat3Num: "99.6%",
      stat3Label: "Bone Integration",
      stat4Num: "100%",
      stat4Label: "Painless & Gentle",
      floatBadge1: "🔬 3D Scanner (0.01mm)",
      floatBadge2: "🦷 Clear Aligners & Implants",
    },
  };
  const t = T[lang] || T.uz;

  return (
    <section className="relative w-full pt-8 sm:pt-14 pb-16 sm:pb-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-purple-100/60 via-purple-50/20 to-transparent -z-10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Col */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light border border-brandLilac/40 shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-primary tracking-wide">
                {t.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-bold text-slate-900 leading-[1.12] tracking-tight mb-5">
              {t.headline}
            </h1>

            {/* Doctor Credentials Subhead */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brandAmethyst mb-3">
              <span className="font-bold text-slate-900">{t.doctorName}</span>
              <span>·</span>
              <span>{t.specialtyTitle}</span>
              <span>·</span>
              <span>Smile Dental Group</span>
            </div>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-8">
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-brandPurple via-brandAmethyst to-brandLavender hover:scale-102 active:scale-98 shadow-purple transition-all text-center flex items-center justify-center gap-2"
              >
                <span>{t.ctaBook}</span>
                <span>→</span>
              </button>

              <Link
                to={to("/services")}
                className="px-6 py-3.5 rounded-2xl font-bold text-sm text-slate-700 bg-white hover:bg-brandLilac-light border border-brandLilac/40 transition-colors text-center shadow-xs"
              >
                {t.ctaServices}
              </Link>
            </div>

            {/* Key Facts / Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-brandLilac/20">
              <div>
                <span className="text-xl sm:text-2xl font-bold font-serif text-primary block">
                  {t.stat1Num}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.stat1Label}</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-serif text-primary block">
                  {t.stat2Num}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.stat2Label}</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-serif text-emerald-600 block">
                  {t.stat3Num}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.stat3Label}</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-serif text-primary block">
                  {t.stat4Num}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.stat4Label}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Col (Interactive 3D Card / Business Card Preview) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative purple gradient orb */}
              <div className="absolute -inset-3 bg-gradient-to-r from-brandPurple via-brandAmethyst to-brandLilac rounded-3xl opacity-30 blur-2xl -z-10 animate-pulse-subtle" />

              {/* Floating 3D Badge Top-Left */}
              <div className="absolute -top-3.5 -left-2 sm:-left-4 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-brandLilac/50 shadow-luxury text-[11px] font-bold text-slate-800 flex items-center gap-2 animate-float-slow z-20 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>{t.floatBadge1}</span>
              </div>

              {/* Floating 3D Badge Bottom-Right */}
              <div className="absolute -bottom-3.5 -right-2 sm:-right-4 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-brandLilac/50 shadow-luxury text-[11px] font-bold text-primary flex items-center gap-1.5 animate-float-3d z-20 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>{t.floatBadge2}</span>
              </div>

              <Interactive3DTilt
                maxTilt={10}
                perspective={1000}
                scale={1.02}
                glare={true}
                className="w-full"
              >
                <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-brandLilac/40 shadow-luxury flex flex-col gap-5 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={assets.logo}
                        alt="Dr. Olimjon Tojibayev"
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <h3 className="font-serif font-bold text-base text-slate-900 leading-tight">
                          Olimjon Tojibayev
                        </h3>
                        <p className="text-[11px] font-bold text-brandAmethyst tracking-wider uppercase">
                          Цифровой Стоматолог
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      7 Yillik Tajriba
                    </span>
                  </div>

                  <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-brandLilac/30 shadow-xs relative group">
                    {/* Laser Scanner Beam */}
                    <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-brandLilac to-transparent shadow-[0_0_12px_#7F5D99] animate-laser-scan pointer-events-none z-10 opacity-75" />

                    <img
                      src={assets.businessCardFront}
                      alt="Dr. Olimjon Tojibayev Vizitka"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-xs text-[10px] text-white font-mono z-10">
                      Smile Dental Group
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-400">Asosiy xizmatlar:</span>
                      <span className="font-bold text-slate-800">Implant · Elayner · Breket</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-400">Estetika:</span>
                      <span className="font-bold text-slate-800">Tsirkon · Vinirlar · Oqartirish</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-400">Joylashuv:</span>
                      <span className="font-bold text-primary">Andijon, 1-kichik daxa 8-A</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary-hover shadow-purple transition-all text-center hover:scale-102 active:scale-98"
                  >
                    Onlayn Qabulga Yozilish →
                  </button>
                </div>
              </Interactive3DTilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   MAIN HOME PAGE
   ═══════════════════════════════════════════════════════════════════ */
const Home = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const labels = {
    uz: {
      servicesBadge: "STOMATOLOGIYA YO'NALISHLARI",
      servicesTitle: "Dr. Olimjon Tojibayev Xizmatlari",
      servicesSub: "Raqamli diagnostikadan tortib to'liq tabassumni tiklashgacha bo'lgan barcha zamonaviy xizmatlar.",
      viewAll: "Barcha Xizmatlar Ro'yxati →",
      bookNow: "Qabulga yozilish",
    },
    ru: {
      servicesBadge: "НАПРАВЛЕНИЯ ЛЕЧЕНИЯ",
      servicesTitle: "Услуги Д-ра Олимжона Тожибаева",
      servicesSub: "От 3D цифровой диагностики до полного восстановления эстетики и функции улыбки.",
      viewAll: "Смотреть все услуги →",
      bookNow: "Записаться",
    },
    en: {
      servicesBadge: "CLINICAL SPECIALTIES",
      servicesTitle: "Dr. Olimjon Tojibayev's Treatments",
      servicesSub: "From 3D digital smile simulation to complete dental reconstructions.",
      viewAll: "View All Treatments →",
      bookNow: "Book Now",
    },
  }[lang] || labels.uz;

  return (
    <>
      <Seo page="home" schemaJson={buildHomePageSchema(lang)} />

      {/* 1. Hero Section */}
      <HeroSection onOpenBooking={onOpenBooking} />

      {/* 2. Digital Dentistry Innovation Showcase */}
      <DigitalDentistryFeatures />

      {/* 3. Services Catalog Overview Grid */}
      <section className="w-full py-14 sm:py-20 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary-light border border-brandLilac/40 shadow-xs mb-3 uppercase">
                {labels.servicesBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                {labels.servicesTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
                {labels.servicesSub}
              </p>
            </div>

            <Link
              to={to("/services")}
              className="text-xs sm:text-sm font-bold text-primary hover:text-brandAmethyst flex items-center gap-1.5 transition-colors self-start md:self-auto"
            >
              {labels.viewAll}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_CATALOG.slice(0, 6).map((service) => (
              <Interactive3DTilt
                key={service.id}
                maxTilt={6}
                perspective={950}
                scale={1.02}
                glare={true}
                className="h-full"
              >
                <div className="h-full p-6 rounded-3xl bg-white border border-brandLilac/30 shadow-card hover:shadow-purple hover:border-brandAmethyst/40 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-5 relative">
                      <img
                        src={service.image}
                        alt={service.title[lang]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-primary backdrop-blur-xs shadow-xs">
                          {service.featurePill[lang]}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-brandAmethyst uppercase tracking-wider block mb-1">
                      {service.category[lang]}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {service.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDesc[lang]}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      ⏱ {service.duration[lang]}
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenBooking(service.id)}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-primary bg-primary-light hover:bg-brandAmethyst hover:text-white transition-all shadow-xs"
                    >
                      {labels.bookNow}
                    </button>
                  </div>
                </div>
              </Interactive3DTilt>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Doctor Profile & 3D Flippable Business Card */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Doctor3DCard />
        </div>
      </section>

      {/* 5. Interactive Cost & Timeline Calculator */}
      <Interactive3DCostCalculator />

      {/* 6. Before / After Smile Transformation */}
      <BeforeAfterSlider />

      {/* 7. Online Smile Assessment Wizard */}
      <SmileAssessmentWizard />

      {/* 8. Online Booking System Section */}
      <InlineBookingSection />

      {/* 9. Clinic Location Map */}
      <ClinicLocationMap />

      {/* 10. Frequently Asked Questions */}
      <FaqAccordion />
    </>
  );
};

export default Home;
