import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const DigitalDentistryFeatures = () => {
  const { lang } = useLanguage();

  const content = {
    uz: {
      badge: "INNOVATSION TEXNOLOGIYALAR",
      title: "Nega aynan Raqamli Stomatologiya?",
      subtitle:
        "Eski uslubdagi noqulay gips qoliplar va noaniqliklar o'rniga, Dr. Olimjon Tojibayev zamonaviy kompyuter texnologiyalari orqali 100% aniq va og'riqsiz natijaga erishadi.",
      features: [
        {
          icon: "🔬",
          tag: "3D Skanerlash",
          title: "Intraoral 3D Skaner",
          desc: "Ko'ngil aynishi va noqulaylik keltiruvchi gips massalarisiz, og'iz bo'shlig'i bir necha soniyada mikron aniqlikda raqamlashtiriladi.",
        },
        {
          icon: "💻",
          tag: "DSD Texnologiyasi",
          title: "Virtual Tabassum Dizayni",
          desc: "Muolaja boshlanishidan oldin kelajakdagi tabassumingiz shakli va oqligini kompyuter ekranida 3D ko'rinishda tanlash imkoniyati.",
        },
        {
          icon: "🎯",
          tag: "0.1 mm Aniqlik",
          title: "Navigatsion Implantatsiya",
          desc: "3D jarrohlik shablonlari orqali implantlar asab va qon tomirlariga tegmasdan, ideal burchak va chuqurlikda o'rnatiladi.",
        },
        {
          icon: "✨",
          tag: "Ko'rinmas Kapalar",
          title: "Raqamli Elayner Tizimi",
          desc: "Har bir bosqichdagi tish harakati sun'iy intellekt va 3D dastur orqali oldindan hisoblab chiqilgan shaffof kapalar bilan to'g'irlanadi.",
        },
      ],
    },
    ru: {
      badge: "ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ",
      title: "Почему именно Цифровая Стоматология?",
      subtitle:
        "Вместо неприятных слепков и долгого ожидания, Д-р Олимжон Тожибаев применяет передовые компьютерные технологии для абсолютно точного и безболезненного лечения.",
      features: [
        {
          icon: "🔬",
          tag: "3D Сканирование",
          title: "Интраоральный 3D Сканер",
          desc: "Никаких рвотных рефлексов от слепочной массы: сканирование всей челюсти за 60 секунд с ювелирной точностью.",
        },
        {
          icon: "💻",
          tag: "Технология DSD",
          title: "Виртуальный Дизайн Улыбки",
          desc: "Возможность увидеть и согласовать свою будущую улыбку на 3D экране ещё до первого прикосновения бормашины.",
        },
        {
          icon: "🎯",
          tag: "Точность 0.1 мм",
          title: "Навигационная Имплантация",
          desc: "Установка имплантатов по индивидуальным 3D хирургическим шаблонам гарантирует безопасность и быстрое приживление.",
        },
        {
          icon: "✨",
          tag: "Прозрачные Капы",
          title: "Цифровая Элайнер-Система",
          desc: "Компьютерный расчёт движения каждого зуба: лечение проходит незаметно для окружающих и без боли.",
        },
      ],
    },
    en: {
      badge: "INNOVATIVE TECHNOLOGIES",
      title: "Why Choose Digital Dentistry?",
      subtitle:
        "Say goodbye to messy putty impressions. Dr. Olimjon Tojibayev uses cutting-edge 3D computer technology for painless precision and predictable results.",
      features: [
        {
          icon: "🔬",
          tag: "3D Scanning",
          title: "Intraoral 3D Scanner",
          desc: "Zero gag reflex or messy impression pastes: full digital arch scan captured in 60 seconds with micron precision.",
        },
        {
          icon: "💻",
          tag: "DSD Technology",
          title: "Virtual Smile Design",
          desc: "Preview, adjust, and approve your brand new smile on a 3D digital monitor before any treatment begins.",
        },
        {
          icon: "🎯",
          tag: "0.1 mm Precision",
          title: "Guided 3D Implant Placement",
          desc: "Custom surgical 3D templates ensure implants are positioned safely away from nerves at the optimal depth.",
        },
        {
          icon: "✨",
          tag: "Clear Trays",
          title: "Digital Aligner Protocols",
          desc: "Every tooth movement is digitally simulated and manufactured with medical-grade transparent aligners.",
        },
      ],
    },
  }[lang] || content.uz;

  return (
    <section className="w-full py-14 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.features.map((feat, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-7 rounded-3xl bg-white border border-brandLilac/30 shadow-card hover:shadow-purple hover:border-brandAmethyst/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary-light border border-brandLilac/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-primary bg-primary-light mb-2">
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
                <span>Smile Dental Group</span>
                <span className="text-brandAmethyst">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalDentistryFeatures;
