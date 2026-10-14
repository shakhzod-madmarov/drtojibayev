import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, OPENING_HOURS } from "../constants/doctor";
import { PRIMARY_CLINIC } from "../constants/clinics";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import { IconPhone, IconTelegram, IconInstagram, IconLocationPin, IconClock } from "./MedicalIcons";

const Footer = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const labels = {
    quickLinks: { uz: "Bo'limlar", ru: "Разделы", en: "Navigation" },
    services: { uz: "Asosiy Xizmatlar", ru: "Услуги", en: "Services" },
    contact: { uz: "Aloqa & Manzil", ru: "Контакты", en: "Contacts" },
    workingHours: { uz: "Ish Vaqti", ru: "Режим Работы", en: "Working Hours" },
    allRightsReserved: {
      uz: "Barcha huquqlar himoyalangan.",
      ru: "Все права защищены.",
      en: "All rights reserved.",
    },
    licenseNote: {
      uz: "O'zbekiston Respublikasi Sog'liqni saqlash vazirligi tibbiy litsenziyasi asosida faoliyat yuritiladi.",
      ru: "Деятельность осуществляется на основании медицинской лицензии Министерства здравоохранения РУз.",
      en: "Operating in full compliance with healthcare licensing standards of the Ministry of Health of Uzbekistan.",
    },
  };

  const navLinks = [
    { path: "/", label: { uz: "Bosh Sahifa", ru: "Главная", en: "Home" } },
    { path: "/services", label: { uz: "Barcha Xizmatlar", ru: "Все Услуги", en: "All Services" } },
    { path: "/about", label: { uz: "Shifokor Haqida", ru: "О Враче", en: "About Doctor" } },
    { path: "/booking", label: { uz: "Onlayn Qabul", ru: "Онлайн Запись", en: "Online Booking" } },
    { path: "/contact", label: { uz: "Manzil va Xarita", ru: "Контакты и Карта", en: "Contact & Map" } },
  ];

  return (
    <footer className="w-full bg-[#170E1E] text-slate-300 border-t border-purple-900/40 pt-14 sm:pt-16 pb-[calc(3rem+env(safe-area-inset-bottom,0px))] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-purple-900/40">
          {/* Col 1: Brand & Doctor Profile */}
          <div className="flex flex-col gap-4">
            <Logo className="h-10 w-auto" isWhite={true} />
            <p className="text-sm text-slate-400 leading-relaxed mt-2">
              {lang === "ru"
                ? "Д-р Олимжон Тожибаев — персональный стоматолог по бережному сохранению зубов, имплантации и исправлению прикуса. Искренняя забота, деликатная анестезия и клиническая ответственность (Андижан, Smile Dental Group)."
                : lang === "en"
                ? "Dr. Olimjon Tojibayev — your personal dental surgeon specializing in tooth preservation, painless implants, and clear aligners. Empathetic care with uncompromising clinical standards (Andijan, Smile Dental Group)."
                : "Dr. Olimjon Tojibayev — tishlarni saqlab qolish, og'riqsiz biotitan implantlar va shaffof elaynerlar bo'yicha shaxsiy shifokoringiz. Har bir bemorga samimiy e'tibor va yuksak mas'uliyat (Andijon, Smile Dental Group bazasida)."}
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href={DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-sky-400 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <IconTelegram className="w-4 h-4" />
              </a>
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-pink-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
              <a
                href={DOCTOR_INFO.phoneHref}
                className="w-9 h-9 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <IconPhone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-white text-base font-bold tracking-tight mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brandAmethyst"></span>
              {labels.quickLinks[lang]}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={to(item.path)}
                    className="hover:text-brandLilac transition-colors flex items-center gap-2"
                  >
                    <span className="text-brandAmethyst">›</span>
                    {item.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div>
            <h3 className="text-white text-base font-bold tracking-tight mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brandAmethyst"></span>
              {labels.services[lang]}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_CATALOG.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={to(`/services/${service.id}`)}
                    className="hover:text-brandLilac transition-colors flex items-center gap-2"
                  >
                    <span className="text-brandAmethyst">›</span>
                    <span className="line-clamp-1">{service.title[lang]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-base font-bold tracking-tight mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brandAmethyst"></span>
              {labels.contact[lang]}
            </h3>

            <div className="flex items-start gap-3 text-sm">
              <IconLocationPin className="w-5 h-5 text-brandLilac shrink-0 mt-0.5" />
              <span>{PRIMARY_CLINIC.address[lang]} ({PRIMARY_CLINIC.landmark[lang]})</span>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <IconClock className="w-4 h-4 text-brandLilac shrink-0 mt-0.5" />
              <div>
                <p>{OPENING_HOURS.labels[lang].days}</p>
                <p className="text-brandLilac font-mono text-xs">{OPENING_HOURS.labels[lang].hours}</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-1.5">
              <a
                href={DOCTOR_INFO.phoneHref}
                className="text-white font-mono text-sm font-bold hover:text-brandLilac transition-colors"
              >
                {DOCTOR_INFO.phoneDisplay}
              </a>
              <a
                href={DOCTOR_INFO.secondaryPhoneHref}
                className="text-white font-mono text-sm font-bold hover:text-brandLilac transition-colors"
              >
                {DOCTOR_INFO.secondaryPhoneDisplay}
              </a>
              <span className="text-xs text-slate-400">{DOCTOR_INFO.email}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {DOCTOR_INFO.name}. {labels.allRightsReserved[lang]}
          </p>
          <p className="text-center sm:text-right text-[11px] text-slate-500">
            {labels.licenseNote[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
