import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import Interactive3DTilt from "./Interactive3DTilt";

export const SmileAssessmentWizard = () => {
  const { lang } = useLanguage();
  const { openBooking } = useBooking();

  const [step, setStep] = useState(1);
  const [complaint, setComplaint] = useState(null);
  const [priority, setPriority] = useState(null);

  const stepsData = {
    uz: {
      badge: "ONLINE TABASSUM TAHLILI",
      title: "O'zingizga Mos Muolajani 1 Daqiqada Aniqlang",
      subtitle: "3 ta oddiy savolga javob bering va Dr. Olimjon Tojibayev tavsiya etadigan optimal davolash yo'nalishini bilib oling.",
      step1Title: "1-qadam: Sizni nima bezovta qilmoqda?",
      complaints: [
        { id: "implant", label: "Tish yo'qotilgan yoki olingan", icon: "🦷", rec: "implant" },
        { id: "aligners", label: "Tishlar qiyshiq, ko'rinmas to'g'irlash kerak", icon: "✨", rec: "aligners" },
        { id: "braces", label: "Murakkab prikus, breket qo'ymoqchiman", icon: "📐", rec: "braces" },
        { id: "veneers", label: "Gollivud tabassumi va vinirlar kerak", icon: "💎", rec: "veneers" },
        { id: "therapy", label: "Tishda karies yoki og'riq bor", icon: "🛡️", rec: "therapy" },
        { id: "whitening", label: "Tishlarni oppoq oqartirish", icon: "🌟", rec: "whitening" },
      ],
      step2Title: "2-qadam: Siz uchun eng muhim mezon qaysi?",
      priorities: [
        { id: "painless", label: "100% og'riqsiz va qulay bo'lishi", icon: "😌" },
        { id: "invisible", label: "Atrofdagilarga umuman sezilmasligi", icon: "👁️" },
        { id: "speed", label: "Imkon qadar tez va aniq bajarilishi", icon: "⚡" },
        { id: "longevity", label: "Umrbod yoki uzoq yillik kafolat", icon: "🏆" },
      ],
      resultTitle: "Siz uchun tavsiya etilgan dastlabki reja:",
      restart: "Qaytadan tahlil qilish",
      bookCta: "Shifokor bilan 3D ko'rikka yozilish →",
    },
    ru: {
      badge: "ОНЛАЙН-ПОДБОР ЛЕЧЕНИЯ",
      title: "Подберите идеальное лечение за 1 минуту",
      subtitle: "Ответьте на 3 простых вопроса и узнайте подходящее направление лечения у Д-ра Олимжона Тожибаева.",
      step1Title: "Шаг 1: Что именно вас беспокоит?",
      complaints: [
        { id: "implant", label: "Отсутствует один или несколько зубов", icon: "🦷", rec: "implant" },
        { id: "aligners", label: "Кривизна зубов, хочу незаметные капы", icon: "✨", rec: "aligners" },
        { id: "braces", label: "Сложный прикус, нужны брекеты", icon: "📐", rec: "braces" },
        { id: "veneers", label: "Хочу голливудскую улыбку и виниры", icon: "💎", rec: "veneers" },
        { id: "therapy", label: "Боль в зубе или подозрение на кариес", icon: "🛡️", rec: "therapy" },
        { id: "whitening", label: "Хочу белоснежное отбеливание", icon: "🌟", rec: "whitening" },
      ],
      step2Title: "Шаг 2: Что для вас важнее всего?",
      priorities: [
        { id: "painless", label: "Абсолютно без боли и страха", icon: "😌" },
        { id: "invisible", label: "Максимальная незаметность для окружающих", icon: "👁️" },
        { id: "speed", label: "Быстрый и прогнозируемый результат", icon: "⚡" },
        { id: "longevity", label: "Пожизненная надёжность и гарантия", icon: "🏆" },
      ],
      resultTitle: "Рекомендованное направление лечения:",
      restart: "Пройти тест заново",
      bookCta: "Записаться на 3D диагностику →",
    },
    en: {
      badge: "ONLINE SMILE ASSESSMENT",
      title: "Find Your Ideal Treatment in 1 Minute",
      subtitle: "Answer a couple of simple questions to receive Dr. Olimjon Tojibayev's recommended treatment pathway.",
      step1Title: "Step 1: What is your primary dental concern?",
      complaints: [
        { id: "implant", label: "Missing one or more natural teeth", icon: "🦷", rec: "implant" },
        { id: "aligners", label: "Crooked teeth, prefer invisible aligners", icon: "✨", rec: "aligners" },
        { id: "braces", label: "Complex bite issues, interested in braces", icon: "📐", rec: "braces" },
        { id: "veneers", label: "Dreaming of a Hollywood smile / veneers", icon: "💎", rec: "veneers" },
        { id: "therapy", label: "Toothache or suspected dental cavity", icon: "🛡️", rec: "therapy" },
        { id: "whitening", label: "Professional teeth whitening", icon: "🌟", rec: "whitening" },
      ],
      step2Title: "Step 2: What matters most to you?",
      priorities: [
        { id: "painless", label: "100% gentle and painless care", icon: "😌" },
        { id: "invisible", label: "Discrete aesthetics with zero metal", icon: "👁️" },
        { id: "speed", label: "Fast, precise, and digital workflow", icon: "⚡" },
        { id: "longevity", label: "Lifetime durability and warranty", icon: "🏆" },
      ],
      resultTitle: "Your Recommended Pathway:",
      restart: "Retake Assessment",
      bookCta: "Schedule 3D Digital Consultation →",
    },
  }[lang] || stepsData.uz;

  const handleSelectComplaint = (item) => {
    setComplaint(item);
    setStep(2);
  };

  const handleSelectPriority = (item) => {
    setPriority(item);
    setStep(3);
  };

  const handleRestart = () => {
    setStep(1);
    setComplaint(null);
    setPriority(null);
  };

  return (
    <section className="w-full py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary-light border border-brandLilac/40 shadow-xs mb-2 uppercase">
            {stepsData.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            {stepsData.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {stepsData.subtitle}
          </p>
        </div>

        <Interactive3DTilt
          maxTilt={4}
          perspective={1400}
          scale={1.01}
          glare={false}
          className="w-full"
        >
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brandLilac/30 shadow-luxury">
          {/* Step Indicators */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  s === step
                    ? "w-10 bg-primary"
                    : s < step
                    ? "w-6 bg-brandAmethyst"
                    : "w-6 bg-slate-200"
                }`}
              />
            ))}
          </div>

          {/* Step 1: Complaint */}
          {step === 1 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 text-center">
                {stepsData.step1Title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stepsData.complaints.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectComplaint(item)}
                    className="p-4 rounded-2xl bg-[#FAF7FD] border border-brandLilac/30 hover:border-brandAmethyst hover:bg-brandLilac-light transition-all flex items-center gap-3.5 text-left text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Priority */}
          {step === 2 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 text-center">
                {stepsData.step2Title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stepsData.priorities.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectPriority(item)}
                    className="p-4 rounded-2xl bg-[#FAF7FD] border border-brandLilac/30 hover:border-brandAmethyst hover:bg-brandLilac-light transition-all flex items-center gap-3.5 text-left text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Result */}
          {step === 3 && complaint && (
            <div className="text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-light text-primary mx-auto flex items-center justify-center text-3xl mb-3 shadow-xs">
                {complaint.icon}
              </div>
              <span className="text-xs font-bold text-brandAmethyst uppercase tracking-wider block mb-1">
                {stepsData.resultTitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {complaint.label}
              </h3>
              {priority && (
                <p className="text-xs text-slate-500 mt-1">
                  Afzallik: {priority.label}
                </p>
              )}

              <div className="p-4 rounded-2xl bg-purple-50/70 border border-brandLilac/30 max-w-md mx-auto my-6 text-xs text-slate-700 leading-relaxed text-left">
                Dr. Olimjon Tojibayev ko'rigida 3D skanerlash o'tkaziladi va sizga eng xavfsiz hamda mukammal natija beruvchi reja tuziladi.
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => openBooking({ service: complaint.rec, note: `Online tahlil: ${complaint.label}` })}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-brandPurple to-brandAmethyst shadow-purple transition-all"
                >
                  {stepsData.bookCta}
                </button>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl font-bold text-xs text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {stepsData.restart}
                </button>
              </div>
            </div>
          )}
          </div>
        </Interactive3DTilt>
      </div>
    </section>
  );
};

export default SmileAssessmentWizard;
