import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Interactive3DTilt from "./Interactive3DTilt";
import {
  IconScannerOptical3D,
  IconVirtualSmile,
  IconPrecisionTarget,
  IconAligners,
  IconCadCamRobotics,
  IconShieldCheck,
} from "./MedicalIcons";

const renderStepIcon = (idx, className = "w-5 h-5") => {
  switch (idx) {
    case 0:
      return <IconScannerOptical3D className={className} />;
    case 1:
      return <IconVirtualSmile className={className} />;
    case 2:
      return <IconCadCamRobotics className={className} />;
    case 3:
      return <IconShieldCheck className={className} />;
    default:
      return <IconScannerOptical3D className={className} />;
  }
};

const renderFeatureIcon = (idx, className = "w-6 h-6") => {
  switch (idx) {
    case 0:
      return <IconScannerOptical3D className={className} />;
    case 1:
      return <IconVirtualSmile className={className} />;
    case 2:
      return <IconPrecisionTarget className={className} />;
    case 3:
      return <IconAligners className={className} />;
    default:
      return <IconScannerOptical3D className={className} />;
  }
};

export const DigitalDentistryFeatures = () => {
  const { lang } = useLanguage();

  const content = {
    uz: {
      badge: "INNOVATSION TEXNOLOGIYALAR",
      title: "Nega aynan Raqamli Stomatologiya?",
      subtitle:
        "Eski uslubdagi noqulay gips qoliplar va noaniqliklar o'rniga, Dr. Olimjon Tojibayev zamonaviy kompyuter texnologiyalari orqali 100% aniq va og'riqsiz natijaga erishadi.",
      workflowBadge: "RAQAMLI PROTOKOL",
      workflowTitle: "Dr. Olimjon Tojibayevning 4 Bosqichli Raqamli Protokoli",
      workflowSubtitle:
        "Diagnostikadan to yakuniy natijagacha to'liq kompyuter nazorati ostida amalga oshiriladi.",
      steps: [
        {
          step: "01",
          title: "3D Skanerlash",
          desc: "60 soniyada butun jag'ning mikron aniqlikdagi raqamli 3D modeli olinadi.",
        },
        {
          step: "02",
          title: "AI Tabassum Dizayni",
          desc: "Yuz anatomiyasiga mos kelajakdagi tabassum 3D ekranda modellashtiriladi.",
        },
        {
          step: "03",
          title: "CAD/CAM Ishlab Chiqarish",
          desc: "Robotik frezerlash va 3D printer yordamida o'ta aniq shablon va konstruktsiyalar yaratiladi.",
        },
        {
          step: "04",
          title: "Og'riqsiz O'rnatish",
          desc: "Navigatsion shablon bo'yicha 100% og'riqsiz va ideal burchakda o'rnatiladi.",
        },
      ],
      features: [
        {
          tag: "3D Skanerlash",
          title: "Intraoral 3D Skaner",
          desc: "Ko'ngil aynishi va noqulaylik keltiruvchi gips massalarisiz, og'iz bo'shlig'i bir necha soniyada mikron aniqlikda raqamlashtiriladi.",
        },
        {
          tag: "DSD Texnologiyasi",
          title: "Virtual Tabassum Dizayni",
          desc: "Muolaja boshlanishidan oldin kelajakdagi tabassumingiz shakli va oqligini kompyuter ekranida 3D ko'rinishda tanlash imkoniyati.",
        },
        {
          tag: "0.1 mm Aniqlik",
          title: "Navigatsion Implantatsiya",
          desc: "3D jarrohlik shablonlari orqali implantlar asab va qon tomirlariga tegmasdan, ideal burchak va chuqurlikda o'rnatiladi.",
        },
        {
          tag: "Ko'rinmas Kapalar",
          title: "Raqamli Elayner Tizimi",
          desc: "Har bir bosqichdagi tish harakati sun'iy intellekt va 3D dastur orqali oldindan hisoblab chiqilgan shaffof kapalar bilan to'g'irlanadi.",
        },
      ],
      workflowLocation: "Andijon · Shaxsiy Amaliyot",
      cardAuthor: "Dr. Olimjon Tojibayev",
      cardBadge: "Shaxsiy Qabul ✓",
    },
    ru: {
      badge: "ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ",
      title: "Почему именно Цифровая Стоматология?",
      subtitle:
        "Вместо неприятных слепков и долгого ожидания, Д-р Олимжон Тожибаев применяет передовые компьютерные технологии для абсолютно точного и безболезненного лечения.",
      workflowBadge: "ЦИФРОВОЙ ПРОТОКОЛ",
      workflowTitle: "4-Шаговый Цифровой Протокол Д-ра Тожибаева",
      workflowSubtitle:
        "Полный компьютерный контроль от первого скана челюсти до вашей финальной идеальной улыбки.",
      steps: [
        {
          step: "01",
          title: "3D Сканирование",
          desc: "Оптический 3D снимок всей челюсти за 60 секунд без рвотного рефлекса и слепков.",
        },
        {
          step: "02",
          title: "Виртуальный Дизайн",
          desc: "3D моделирование формы и оттенка зубов с учетом индивидуальных черт лица.",
        },
        {
          step: "03",
          title: "CAD/CAM Фрезеровка",
          desc: "Роботизированное изготовление коронок и 3D хирургических шаблонов с точностью до микрона.",
        },
        {
          step: "04",
          title: "Безболезненная Установка",
          desc: "100% безопасная и безболезненная фиксация с идеальным прилеганием.",
        },
      ],
      features: [
        {
          tag: "3D Сканирование",
          title: "Интраоральный 3D Сканер",
          desc: "Никаких рвотных рефлексов от слепочной массы: сканирование всей челюсти за 60 секунд с ювелирной точностью.",
        },
        {
          tag: "Технология DSD",
          title: "Виртуальный Дизайн Улыбки",
          desc: "Возможность увидеть и согласовать свою будущую улыбку на 3D экране ещё до первого прикосновения бормашины.",
        },
        {
          tag: "Точность 0.1 мм",
          title: "Навигационная Имплантация",
          desc: "Установка имплантатов по индивидуальным 3D хирургическим шаблонам гарантирует безопасность и быстрое приживление.",
        },
        {
          tag: "Прозрачные Капы",
          title: "Цифровая Элайнер-Система",
          desc: "Компьютерный расчёт движения каждого зуба: лечение проходит незаметно для окружающих и без боли.",
        },
      ],
      workflowLocation: "Андижан · Личная практика",
      cardAuthor: "Д-р Олимжон Тожибаев",
      cardBadge: "Личный Приём ✓",
    },
    en: {
      badge: "INNOVATIVE TECHNOLOGIES",
      title: "Why Choose Digital Dentistry?",
      subtitle:
        "Say goodbye to messy putty impressions. Dr. Olimjon Tojibayev uses cutting-edge 3D computer technology for painless precision and predictable results.",
      workflowBadge: "DIGITAL PROTOCOL",
      workflowTitle: "Dr. Tojibayev's 4-Step Digital Workflow",
      workflowSubtitle:
        "End-to-end computer-guided precision from initial digital scan to your confident smile.",
      steps: [
        {
          step: "01",
          title: "3D Intraoral Scan",
          desc: "High-precision 3D scan of your dental arches captured in 60 seconds with micron precision.",
        },
        {
          step: "02",
          title: "AI Smile Simulation",
          desc: "Digital smile design tailored to your unique facial proportions on screen before treatment.",
        },
        {
          step: "03",
          title: "CAD/CAM Robotic Milling",
          desc: "Surgical templates and ceramic crowns crafted with automated micron tolerances.",
        },
        {
          step: "04",
          title: "Painless Delivery",
          desc: "Smooth, comfortable guided placement with guaranteed long-lasting fit and aesthetics.",
        },
      ],
      features: [
        {
          tag: "3D Scanning",
          title: "Intraoral 3D Scanner",
          desc: "Zero gag reflex or messy impression pastes: full digital arch scan captured in 60 seconds with micron precision.",
        },
        {
          tag: "DSD Technology",
          title: "Virtual Smile Design",
          desc: "Preview, adjust, and approve your brand new smile on a 3D digital monitor before any treatment begins.",
        },
        {
          tag: "0.1 mm Precision",
          title: "Guided 3D Implant Placement",
          desc: "Custom surgical 3D templates ensure implants are positioned safely away from nerves at the optimal depth.",
        },
        {
          tag: "Clear Trays",
          title: "Digital Aligner Protocols",
          desc: "Every tooth movement is digitally simulated and manufactured with medical-grade transparent aligners.",
        },
      ],
      workflowLocation: "Andijan · Private Practice",
      cardAuthor: "Dr. Olimjon Tojibayev",
      cardBadge: "Personal Care ✓",
    },
  }[lang] || content.uz;

  return (
    <section className="w-full py-14 sm:py-20 relative overflow-hidden">
      {/* Background glow and subtle cyber grid */}
      <div className="absolute inset-0 digital-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary-light border border-brandLilac/40 shadow-xs mb-3 uppercase">
            {content.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            {content.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* 4-Step Interactive Digital Workflow Strip */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-brandLilac/40 shadow-luxury">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-brandLilac/20 gap-2">
            <div>
              <span className="text-[11px] font-bold text-brandAmethyst tracking-wider uppercase block">
                {content.workflowBadge}
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                {content.workflowTitle}
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-light text-primary border border-brandLilac/40">
              {content.workflowLocation}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {content.steps.map((st, i) => (
              <div
                key={i}
                className="relative p-5 rounded-2xl bg-purple-50/50 hover:bg-white border border-brandLilac/30 hover:border-brandAmethyst/40 hover:shadow-card transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-primary text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                    {st.step}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white border border-brandLilac/30 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-2xs">
                    {renderStepIcon(i, "w-4 h-4")}
                  </div>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors mb-1">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Interactive 3D Tilt Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.features.map((feat, idx) => (
            <Interactive3DTilt
              key={idx}
              maxTilt={8}
              perspective={900}
              scale={1.03}
              glare={true}
              className="h-full"
            >
              <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-brandLilac/30 shadow-card hover:shadow-purple hover:border-brandAmethyst/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7FD] border border-brandLilac/40 text-primary flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all shadow-xs">
                    {renderFeatureIcon(idx, "w-6 h-6")}
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-primary bg-primary-light border border-brandLilac/30 mb-2.5">
                    {feat.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-primary font-bold">
                  <span>{content.cardAuthor}</span>
                  <span className="text-brandAmethyst text-[11px] font-semibold">{content.cardBadge}</span>
                </div>
              </div>
            </Interactive3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalDentistryFeatures;
