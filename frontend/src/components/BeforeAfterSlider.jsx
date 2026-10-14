import React, { useState, useRef, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getA11yLabels } from "../constants/a11yLabels";
import { assets } from "../assets/assets";
import Interactive3DTilt from "./Interactive3DTilt";

const clamp = (n) => Math.max(0, Math.min(100, n));

const CASES = {
  veneers: {
    id: "veneers",
    label: { uz: "Vinir & Tsirkon", ru: "Виниры и Циркон", en: "Veneers & Zirconia" },
    tag: { uz: "Estetik Restavratsiya", ru: "Эстетическая Реставрация", en: "Aesthetic Restoration" },
    beforeImg: assets.treatment_therapy,
    afterImg: assets.treatment_veneers,
  },
  aligners: {
    id: "aligners",
    label: { uz: "Shaffof Elaynerlar", ru: "Элайнеры", en: "Clear Aligners" },
    tag: { uz: "Raqamli Ortodontiya", ru: "Цифровая Ортодонтия", en: "Digital Orthodontics" },
    beforeImg: assets.treatment_braces,
    afterImg: assets.treatment_aligners,
  },
  implant: {
    id: "implant",
    label: { uz: "Dental Implantatsiya", ru: "Имплантация", en: "Dental Implants" },
    tag: { uz: "Biotitan & Koronka", ru: "Биотитан и Коронка", en: "Titanium & Crown" },
    beforeImg: assets.hero_3d_tooth,
    afterImg: assets.treatment_implant,
  },
  whitening: {
    id: "whitening",
    label: { uz: "Tish Oqartirish", ru: "Отбеливание", en: "Teeth Whitening" },
    tag: { uz: "AirFlow & Lazer", ru: "AirFlow и Лазер", en: "AirFlow & Laser" },
    beforeImg: assets.treatment_dentures,
    afterImg: assets.treatment_whitening,
  },
};

export const BeforeAfterSlider = ({
  beforeLabel,
  afterLabel,
  title,
  subtitle,
}) => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const [activeCaseId, setActiveCaseId] = useState("veneers");
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const activeCase = CASES[activeCaseId] || CASES.veneers;

  const defaultBefore =
    beforeLabel ||
    (lang === "uz" ? "Oldin (Before)" : lang === "ru" ? "До лечения" : "Before");
  const defaultAfter =
    afterLabel ||
    (lang === "uz" ? "Keyin (Natija)" : lang === "ru" ? "После лечения" : "After Result");

  const defaultTitle =
    title ||
    (lang === "uz"
      ? "Raqamli Tabassum Natijalari"
      : lang === "ru"
      ? "Результаты Цифровой Трансформации Улыбки"
      : "Digital Smile Transformation Results");

  const defaultSub =
    subtitle ||
    (lang === "uz"
      ? "Slayderni suring va Dr. Olimjon Tojibayev tomonidan amalga oshirilgan natijalarni ko'ring."
      : lang === "ru"
      ? "Передвигайте ползунок, чтобы оценить ювелирную точность и эстетику работы Д-ра Олимжона Тожибаева."
      : "Drag the slider to compare clinical results delivered by Dr. Olimjon Tojibayev.");

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    try {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    } catch {
      /* ignore */
    }
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e) => {
    isDragging.current = false;
    try {
      if (e?.currentTarget?.hasPointerCapture?.(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      /* ignore */
    }
  };

  const handleKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 5;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setSliderPos((p) => clamp(p - step));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setSliderPos((p) => clamp(p + step));
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4 sm:px-6">
      <div className="text-center mb-8">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary-light border border-brandLilac/40 shadow-xs mb-2 uppercase">
          {lang === "uz" ? "KLINIK NATIJALAR" : lang === "ru" ? "КЛИНИЧЕСКИЕ РЕЗУЛЬТАТЫ" : "CLINICAL RESULTS"}
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
          {defaultTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
          {defaultSub}
        </p>

        {/* Case Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {Object.values(CASES).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveCaseId(item.id);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCaseId === item.id
                  ? "bg-primary text-white shadow-purple scale-102"
                  : "bg-white text-slate-700 hover:bg-brandLilac-light border border-brandLilac/30 shadow-xs"
              }`}
            >
              {item.label[lang]}
            </button>
          ))}
        </div>
      </div>

      <Interactive3DTilt
        maxTilt={6}
        perspective={1200}
        scale={1.01}
        glare={false}
        className="w-full"
      >
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="slider"
          aria-label={a11y.beforeAfterSlider}
          aria-valuenow={Math.round(sliderPos)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-luxury border-2 border-brandLilac/40 cursor-ew-resize select-none touch-none focus:outline-none focus:ring-2 focus:ring-primary group"
        >
          {/* After Image (Background) */}
          <img
            src={activeCase.afterImg}
            alt={defaultAfter}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          />

          {/* Before Image (Clipped overlay via modern CSS clip-path) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src={activeCase.beforeImg}
              alt={defaultBefore}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-[0_0_12px_rgba(76,35,101,0.5)] pointer-events-none"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          >
            {/* Central Pulsing Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-primary shadow-purple border-2 border-primary flex items-center justify-center font-bold text-sm animate-subtle-pulse">
              <span>⇄</span>
            </div>
          </div>

          {/* Category Tag Top Center */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-white/90 text-primary backdrop-blur-md border border-brandLilac/40 shadow-xs">
              {activeCase.tag[lang]}
            </span>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 pointer-events-none z-10">
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-black/65 text-white backdrop-blur-md shadow-xs">
              {defaultBefore}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 pointer-events-none z-10">
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-primary/90 text-white backdrop-blur-md shadow-purple">
              {defaultAfter}
            </span>
          </div>
        </div>
      </Interactive3DTilt>
    </div>
  );
};

export default BeforeAfterSlider;
