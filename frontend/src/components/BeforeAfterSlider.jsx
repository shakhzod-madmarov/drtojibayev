import React, { useState, useRef, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getA11yLabels } from "../constants/a11yLabels";
import { assets } from "../assets/assets";

const clamp = (n) => Math.max(0, Math.min(100, n));

export const BeforeAfterSlider = ({
  beforeImg = assets.hero_smile,
  afterImg = assets.treatment_veneers,
  beforeLabel,
  afterLabel,
  title,
  subtitle,
}) => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const defaultBefore =
    beforeLabel ||
    (lang === "uz" ? "Oldin" : lang === "ru" ? "До лечения" : "Before");
  const defaultAfter =
    afterLabel ||
    (lang === "uz" ? "Keyin" : lang === "ru" ? "Keyin (Natija)" : "After");

  const defaultTitle =
    title ||
    (lang === "uz"
      ? "Estetik Tabassum Natijasi"
      : lang === "ru"
      ? "Результат Эстетической Реставрации"
      : "Aesthetic Smile Transformation");

  const defaultSub =
    subtitle ||
    (lang === "uz"
      ? "Slayderni suring va raqamli stomatologiya orqali erishilgan natijani ko'ring"
      : lang === "ru"
      ? "Передвигайте ползунок, чтобы увидеть преображение улыбки"
      : "Drag the slider to compare the smile transformation");

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
    <div className="w-full max-w-3xl mx-auto my-8">
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
          {defaultTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          {defaultSub}
        </p>
      </div>

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
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-luxury border border-brandLilac/40 cursor-ew-resize select-none touch-none focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {/* After Image (Background) */}
        <img
          src={afterImg}
          alt={defaultAfter}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image (Clipped overlay via modern CSS clip-path) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={beforeImg}
            alt={defaultBefore}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          {/* Central Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-primary shadow-purple border-2 border-primary flex items-center justify-center font-bold text-xs">
            ⇄
          </div>
        </div>

        {/* Pills */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/60 text-white backdrop-blur-xs">
            {defaultBefore}
          </span>
        </div>
        <div className="absolute top-4 right-4 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/90 text-white backdrop-blur-xs shadow-xs">
            {defaultAfter}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
