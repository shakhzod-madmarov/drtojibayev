import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { DOCTOR_INFO } from "../constants/doctor";
import { IconPhone, IconTelegram, IconInstagram } from "./MedicalIcons";
import { getA11yLabels } from "../constants/a11yLabels";

const FloatingActionHub = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();
  const { openBooking } = useBooking();
  const a11y = getA11yLabels(lang);

  const toggleLabel = {
    uz: isOpen ? "Bog'lanishni yopish" : "Tezkor bog'lanish",
    ru: isOpen ? "Закрыть меню связи" : "Быстрая связь",
    en: isOpen ? "Close contact options" : "Quick contact",
  }[lang];

  const bookLabel = {
    uz: "Qabulga yozilish",
    ru: "Записаться на приём",
    en: "Book appointment",
  }[lang];

  return (
    <aside
      aria-label={a11y.quickActions}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 print:hidden select-none"
    >
      {/* Expanded Action Items */}
      {isOpen && (
        <div className="flex flex-col items-end gap-2.5 mb-1 animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Online Booking Button */}
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              openBooking();
            }}
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-slate-800 shadow-luxury border border-brandLilac/40 hover:bg-brandLilac-light transition-all active:scale-95 text-xs font-bold"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span>{bookLabel}</span>
            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </span>
          </button>

          {/* Telegram Button */}
          <a
            href={DOCTOR_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={a11y.telegramChat}
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-slate-800 shadow-luxury border border-brandLilac/40 hover:bg-sky-50 transition-all active:scale-95 text-xs font-bold"
          >
            <span>Telegram</span>
            <span className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <IconTelegram className="w-4 h-4 text-white" />
            </span>
          </a>

          {/* Instagram Button */}
          <a
            href={DOCTOR_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={a11y.instagramPage}
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-slate-800 shadow-luxury border border-brandLilac/40 hover:bg-pink-50 transition-all active:scale-95 text-xs font-bold"
          >
            <span>Instagram</span>
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <IconInstagram className="w-4 h-4 text-white" />
            </span>
          </a>

          {/* Direct Phone Call Button */}
          <a
            href={DOCTOR_INFO.phoneHref}
            aria-label={a11y.callClinic}
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-slate-800 shadow-luxury border border-brandLilac/40 hover:bg-emerald-50 transition-all active:scale-95 text-xs font-bold"
          >
            <span className="font-mono">{DOCTOR_INFO.phoneDisplay}</span>
            <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <IconPhone className="w-4 h-4" />
            </span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={toggleLabel}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-purple transition-all duration-300 active:scale-95 ${
          isOpen
            ? "bg-slate-800 rotate-90"
            : "bg-gradient-to-r from-brandPurple via-brandAmethyst to-brandLavender hover:scale-105"
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>
    </aside>
  );
};

export default FloatingActionHub;
