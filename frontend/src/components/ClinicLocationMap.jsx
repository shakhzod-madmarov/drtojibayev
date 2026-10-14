import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { PRIMARY_CLINIC } from "../constants/clinics";
import { DOCTOR_INFO, OPENING_HOURS } from "../constants/doctor";
import { IconLocationPin, IconClock, IconPhone } from "./MedicalIcons";

export const ClinicLocationMap = () => {
  const { lang } = useLanguage();

  const labels = {
    uz: {
      badge: "AMALIYOT VA QABUL MANZILI",
      title: "Dr. Olimjon Tojibayev Shaxsiy Qabuli",
      subtitle: "Dr. Olimjon Tojibayev bemorlarni Andijon shahrida, zamonaviy uskunalar bilan jihozlangan Smile Dental Group klinikasida shaxsan qabul qiladi.",
      addressTitle: "Manzil:",
      landmarkTitle: "Mo'ljal:",
      hoursTitle: "Qabul vaqti:",
      openGoogle: "Google Xaritada ochish ↗",
      openYandex: "Yandex Xaritada ochish ↗",
      callUs: "Qo'ng'iroq qilish",
      telegram: "Telegram orqali yozish",
    },
    ru: {
      badge: "ЛОКАЦИЯ И ПРИЁМ",
      title: "Личный Приём Д-ра Олимжона Тожибаева",
      subtitle: "Приём проходит в г. Андижан на базе клиники Smile Dental Group, оснащенной передовыми цифровыми 3D технологиями.",
      addressTitle: "Адрес:",
      landmarkTitle: "Ориентир:",
      hoursTitle: "Часы приёма:",
      openGoogle: "Открыть в Google Картах ↗",
      openYandex: "Открыть в Яндекс Картах ↗",
      callUs: "Позвонить",
      telegram: "Написать в Telegram",
    },
    en: {
      badge: "PRACTICE LOCATION",
      title: "Dr. Olimjon Tojibayev's Practice",
      subtitle: "Dr. Olimjon Tojibayev personally receives patients in Andijan, hosted at Smile Dental Group with state-of-the-art digital dentistry systems.",
      addressTitle: "Address:",
      landmarkTitle: "Landmark:",
      hoursTitle: "Working Hours:",
      openGoogle: "Open in Google Maps ↗",
      openYandex: "Open in Yandex Maps ↗",
      callUs: "Call Hotline",
      telegram: "Message on Telegram",
    },
  }[lang] || labels.uz;

  return (
    <section className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary-light border border-brandLilac/40 shadow-xs mb-3 uppercase">
            {labels.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            {labels.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {labels.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Info Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border border-brandLilac/30 shadow-luxury flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-brandAmethyst tracking-wider uppercase block mb-1">
                  Smile Dental Group
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {PRIMARY_CLINIC.dentistOffice[lang]}
                </h3>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <IconLocationPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{labels.addressTitle}</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">{PRIMARY_CLINIC.address[lang]}</p>
                  <p className="text-xs text-slate-500 mt-0.5">({PRIMARY_CLINIC.landmark[lang]})</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <IconClock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{labels.hoursTitle}</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">{OPENING_HOURS.labels[lang].days}</p>
                  <p className="text-xs font-mono font-bold text-primary mt-0.5">{OPENING_HOURS.labels[lang].hours}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{OPENING_HOURS.labels[lang].sunday}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-primary transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <IconPhone className="w-4 h-4" />
                  </span>
                  <span className="font-mono">{DOCTOR_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={DOCTOR_INFO.secondaryPhoneHref}
                  className="flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-primary transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <IconPhone className="w-4 h-4" />
                  </span>
                  <span className="font-mono">{DOCTOR_INFO.secondaryPhoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
              <a
                href={PRIMARY_CLINIC.maps.googleFull}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl text-center text-xs font-bold text-slate-700 bg-[#FAF7FD] hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                {labels.openGoogle}
              </a>
              <a
                href={PRIMARY_CLINIC.maps.yandex}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl text-center text-xs font-bold text-white bg-primary hover:bg-primary-hover transition-colors shadow-xs"
              >
                {labels.openYandex}
              </a>
            </div>
          </div>

          {/* Right Map View */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-luxury border border-brandLilac/30 min-h-[380px] sm:min-h-[440px] relative bg-slate-100">
            <iframe
              title="Smile Dental Group Andijon Map"
              src="https://yandex.uz/map-widget/v1/org/smiles_dental_group/10769129756/?ll=72.334718%2C40.744156&z=16"
              className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicLocationMap;
