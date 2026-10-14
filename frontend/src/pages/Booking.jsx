import React from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import Seo from "../components/Seo";
import InlineBookingSection from "../components/InlineBookingSection";
import { DOCTOR_INFO, getYearsOfExperience } from "../constants/doctor";
import { useClinicHours } from "../lib/medinsonBooking";
import { buildBookingPageSchema } from "../utils/structuredData";
import { PAGE_SEO } from "../constants/seo";
import {
  IconPhone,
  IconShieldCheck,
} from "../components/MedicalIcons";

const Booking = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const years = getYearsOfExperience();
  const seo = PAGE_SEO.booking[lang] || PAGE_SEO.booking.uz;
  const hours = useClinicHours(lang);

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "Запись на приём" : lang === "en" ? "Appointment Booking" : "Qabulga yozilish", path: "/booking" },
  ];
  const bookingSchema = buildBookingPageSchema ? buildBookingPageSchema(lang, breadcrumbs) : null;

  return (
    <div className="py-6 sm:py-10 space-y-10">
      <Seo
        title={seo.title}
        description={seo.description}
        schemaJson={bookingSchema}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span>/</span>
        <span className="text-primary font-bold" aria-current="page">
          {lang === "ru" ? "Запись на приём" : lang === "en" ? "Appointment Booking" : "Qabulga yozilish"}
        </span>
      </nav>

      {/* Doctor Summary Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brandLilac/30 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-black uppercase border border-brandLilac/40">
              {DOCTOR_INFO.name}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              {years} {lang === "uz" ? "Yillik Tajriba" : lang === "ru" ? "Лет Опыта" : "Years Experience"}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif tracking-tight">
            {lang === "uz"
              ? "Dr. Olimjon Tojibayev Qabuliga Onlayn Yozilish"
              : lang === "ru"
              ? "Онлайн Запись на Приём к Д-ру Олимжону Тожибаеву"
              : "Book Online Appointment with Dr. Olimjon Tojibayev"}
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Smile Dental Group (Andijon). 3D intraoral skanerlash, implantlar, elaynerlar, breketlar va 100% og'riqsiz davolash. Bo'sh soatni tanlang va navbatsiz qabulga yoziling."
              : lang === "ru"
              ? "Smile Dental Group (Андижан). 3D сканирование, имплантация, прозрачные элайнеры, брекеты и лечение без боли. Выберите удобный день и время."
              : "Smile Dental Group (Andijan). 3D intraoral scans, implants, aligners, braces, and gentle care with zero waiting."}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-1">
            <span className="flex items-center gap-1.5">
              <span className="text-base">💻</span>
              <span>Цифровой Стоматолог</span>
            </span>
            <span className="flex items-center gap-1.5">
              <IconShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Smile Dental Group</span>
            </span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-purple-50/70 border border-brandLilac/30 text-xs space-y-2 shrink-0 text-center sm:text-left">
          <p className="font-bold text-slate-900">{hours.full}</p>
          <p className="text-slate-500">{hours.sunday}</p>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="inline-flex items-center gap-2 font-mono font-bold text-primary hover:underline pt-1 text-sm"
          >
            <IconPhone className="w-4 h-4 text-primary" />
            <span>{DOCTOR_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main Interactive Booking Section */}
      <InlineBookingSection />
    </div>
  );
};

export default Booking;
