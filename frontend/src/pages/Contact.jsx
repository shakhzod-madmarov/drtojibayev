import React from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import { useClinicHours } from "../lib/medinsonBooking";
import { PAGE_SEO } from "../constants/seo";
import Seo from "../components/Seo";
import { buildContactPageSchema } from "../utils/structuredData";
import ClinicLocationMap from "../components/ClinicLocationMap";
import {
  IconPhone,
  IconTelegram,
  IconInstagram,
} from "../components/MedicalIcons";

const Contact = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.contact[lang] || PAGE_SEO.contact.uz;
  const hours = useClinicHours(lang);

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "Контакты" : lang === "en" ? "Contact" : "Aloqa va Manzil", path: "/contact" },
  ];
  const contactSchema = buildContactPageSchema(lang, breadcrumbs);

  return (
    <div className="py-6 sm:py-10 space-y-12">
      <Seo
        title={seo.title}
        description={seo.description}
        schemaJson={contactSchema}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span>/</span>
        <span className="text-primary font-bold" aria-current="page">
          {lang === "ru" ? "Контакты" : lang === "en" ? "Contact" : "Aloqa va Manzil"}
        </span>
      </nav>

      {/* Header */}
      <header className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary-light border border-brandLilac/40 shadow-xs mb-1 uppercase">
          {lang === "uz" ? "BEVOSITA BOG'LANISH" : lang === "ru" ? "ПРЯМАЯ СВЯЗЬ" : "DIRECT HOTLINE"}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {lang === "uz" ? "Aloqa va Qabulga Yozilish" : lang === "ru" ? "Контакты и Запись на Приём" : "Contact & Appointments"}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {lang === "uz"
            ? "Dr. Olimjon Tojibayev qabuliga telefon, Telegram (@Dr_Tadjibayev), Instagram yoki onlayn jadval orqali navbatsiz yozilishingiz mumkin."
            : lang === "ru"
            ? "Свяжитесь с Д-ром Олимжоном Тожибаевым по телефону, через Telegram (@Dr_Tadjibayev) или запишитесь через онлайн-расписание."
            : "Connect with Dr. Olimjon Tojibayev via phone, Telegram (@Dr_Tadjibayev), Instagram, or our online appointment scheduler."}
        </p>
        <div className="pt-2">
          <Link
            to={to("/booking")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-brandPurple to-brandAmethyst hover:scale-102 active:scale-98 text-white text-xs sm:text-sm font-bold shadow-purple transition-all"
          >
            <span>{lang === "uz" ? "Onlayn Jadvaldan Vaqt Tanlash" : lang === "ru" ? "Онлайн Расписание и Запись" : "Book Online via Schedule"}</span>
            <span>→</span>
          </Link>
        </div>
      </header>

      {/* 4 Contact Cards */}
      <section aria-label={lang === "uz" ? "Aloqa vositalari" : lang === "ru" ? "Способы связи" : "Contact Methods"} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Phone 1 */}
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-brandLilac/30 shadow-card hover:shadow-purple transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center">
              <IconPhone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {lang === "uz" ? "Asosiy Telefon" : lang === "ru" ? "Основной Телефон" : "Primary Phone"}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {hours.full}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="inline-block text-base font-bold font-mono text-primary hover:underline"
          >
            {DOCTOR_INFO.phoneDisplay}
          </a>
        </div>

        {/* Phone 2 */}
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-brandLilac/30 shadow-card hover:shadow-purple transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center">
              <IconPhone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {lang === "uz" ? "Qo'shimcha Raqam" : lang === "ru" ? "Дополнительный Номер" : "Secondary Hotline"}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === "uz" ? "Qabul xonasi" : lang === "ru" ? "Регистратура" : "Reception"}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.secondaryPhoneHref}
            className="inline-block text-base font-bold font-mono text-primary hover:underline"
          >
            {DOCTOR_INFO.secondaryPhoneDisplay}
          </a>
        </div>

        {/* Telegram */}
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-brandLilac/30 shadow-card hover:shadow-purple transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center">
              <IconTelegram className="w-6 h-6 text-sky-500" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Telegram
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === "uz" ? "24/7 tezkor xabarlar" : lang === "ru" ? "Быстрые ответы 24/7" : "Fast messaging 24/7"}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base font-bold text-sky-600 hover:underline"
          >
            {DOCTOR_INFO.telegramHandle}
          </a>
        </div>

        {/* Instagram */}
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-brandLilac/30 shadow-card hover:shadow-purple transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-500 flex items-center justify-center">
              <IconInstagram className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Instagram
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === "uz" ? "Bajarilgan ishlar va videolar" : lang === "ru" ? "Клинические работы и видео" : "Cases & Patient reviews"}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base font-bold text-pink-600 hover:underline"
          >
            {DOCTOR_INFO.instagramHandle}
          </a>
        </div>
      </section>

      {/* Clinic Location Map */}
      <ClinicLocationMap />
    </div>
  );
};

export default Contact;
