import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import { PRIMARY_CLINIC } from "../constants/clinics";
import { assets } from "../assets/assets";
import { IconPhone, IconTelegram, IconInstagram, IconShieldCheck, IconAward } from "./MedicalIcons";

export const Doctor3DCard = () => {
  const { lang } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  const labels = {
    uz: {
      badge: "SHIFOKOR PROFILI",
      heading: "Dr. Olimjon Tojibayev",
      subheading: "Цифровой Стоматолог · Smile Dental Group",
      experience: "7+ Yillik Klinik Tajriba",
      flipPrompt: isFlipped ? "Old tomonini ko'rish (Front)" : "Tashrif qog'ozi orqa tomoni (Xizmatlar)",
      highlights: [
        "Raqamli 3D stomatologiya va navigatsion jarrohlik",
        "Shaffof elaynerlar va zamonaviy breket tizimlari",
        "Tsirkon va keramika koronkalar, estetik vinirlar",
        "100% og'riqsiz davolash va individual yondashuv",
      ],
      callDirect: "To'g'ridan-to'g'ri bog'lanish",
    },
    ru: {
      badge: "ПРОФИЛЬ ВРАЧА",
      heading: "Д-р Олимжон Тожибаев",
      subheading: "Цифровой Стоматолог · Smile Dental Group",
      experience: "7+ Лет Клинической Практики",
      flipPrompt: isFlipped ? "Показать лицевую сторону" : "Оборотная сторона визитки (Услуги)",
      highlights: [
        "Цифровая 3D стоматология и навигационная имплантация",
        "Прозрачные элайнеры и современные брекет-системы",
        "Циркониевые коронки, эстетические виниры",
        "100% лечение без боли и заботливый подход",
      ],
      callDirect: "Прямая связь с доктором",
    },
    en: {
      badge: "DOCTOR PROFILE",
      heading: "Dr. Olimjon Tojibayev",
      subheading: "Digital Dentist · Smile Dental Group",
      experience: "7+ Years Clinical Excellence",
      flipPrompt: isFlipped ? "View Front Side" : "View Back Side (Services List)",
      highlights: [
        "Precision 3D digital dentistry & guided implants",
        "Clear aligners and advanced orthodontic bracket systems",
        "Zirconia and all-ceramic crowns, aesthetic veneers",
        "100% gentle painless therapy and patient care",
      ],
      callDirect: "Direct Doctor Hotline",
    },
  }[lang] || labels.uz;

  return (
    <div className="w-full p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-brandLilac/30 shadow-luxury">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: 3D Flippable Business Card */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div
            className="w-full max-w-sm sm:max-w-md aspect-[16/10] relative cursor-pointer select-none perspective-1000 group"
            onClick={() => setIsFlipped(!isFlipped)}
            title="Click to flip business card"
          >
            <div
              className={`w-full h-full relative transition-transform duration-700 preserve-3d rounded-2xl shadow-luxury-lg border border-brandLilac/40 overflow-hidden ${
                isFlipped ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Card Front */}
              <div className="absolute inset-0 backface-hidden bg-white flex items-center justify-center">
                <img
                  src={assets.businessCardFront}
                  alt="Dr. Olimjon Tojibayev Vizitka - Oldi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-white flex items-center justify-center">
                <img
                  src={assets.businessCardBack}
                  alt="Dr. Olimjon Tojibayev Vizitka - Xizmatlar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Flip Button Control */}
          <button
            type="button"
            onClick={() => setIsFlipped(!isFlipped)}
            className="mt-3.5 inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary-light hover:bg-brandAmethyst-light px-4 py-1.5 rounded-full border border-brandLilac/40 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>{labels.flipPrompt}</span>
          </button>
        </div>

        {/* Right: Info, Credibility & Fast Contacts */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-light text-primary border border-brandLilac/40">
                {labels.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                <IconShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {labels.experience}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              {labels.heading}
            </h3>
            <p className="text-sm font-semibold text-brandAmethyst mt-0.5">
              {labels.subheading}
            </p>
          </div>

          <ul className="space-y-2.5 my-2">
            {labels.highlights.map((hl, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>

          <div className="p-4 rounded-2xl bg-purple-50/70 border border-brandLilac/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">
                {labels.callDirect}
              </span>
              <div className="flex items-center gap-3 mt-1">
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="font-mono text-sm font-bold text-primary hover:underline"
                >
                  {DOCTOR_INFO.phoneDisplay}
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href={DOCTOR_INFO.secondaryPhoneHref}
                  className="font-mono text-sm font-bold text-primary hover:underline"
                >
                  {DOCTOR_INFO.secondaryPhoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 shadow-xs transition-colors"
                aria-label="Telegram"
              >
                <IconTelegram className="w-4 h-4 text-white" />
              </a>
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 shadow-xs transition-colors"
                aria-label="Instagram"
              >
                <IconInstagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor3DCard;
