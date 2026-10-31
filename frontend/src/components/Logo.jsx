import React from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { assets } from "../assets/assets";

const Logo = ({ className = "h-10 sm:h-11 w-auto", showText = true, isWhite = false }) => {
  const to = useLocalizedPath();
  const { lang } = useLanguage();

  const titleByLang = {
    uz: "SHIFOKOR-STOMATOLOG",
    ru: "ВРАЧ-СТОМАТОЛОГ",
    en: "DENTAL SURGEON",
  }[lang] || "SHIFOKOR-STOMATOLOG";

  return (
    <Link
      to={to("/")}
      className={`group flex items-center gap-2.5 sm:gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl transition-transform active:scale-95 ${className}`}
      aria-label="Dr. Olimjon Tojibayev — Raqamli Stomatolog"
    >
      <div
        className={`relative flex items-center justify-center p-1.5 rounded-2xl transition-all duration-300 shrink-0 ${
          isWhite
            ? "bg-white/10 backdrop-blur-xs border border-white/20 shadow-xs"
            : "bg-white shadow-xs border border-brandLilac/40 group-hover:border-primary group-hover:shadow-purple/20 group-hover:shadow-md"
        } w-9 h-9 sm:w-11 sm:h-11`}
      >
        <img
          src={assets.logoIcon}
          alt="Dr. Olimjon Tojibayev"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          width="44"
          height="44"
          loading="eager"
          decoding="async"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-serif text-[12.5px] min-[360px]:text-[14px] sm:text-[17px] font-bold tracking-tight transition-colors whitespace-nowrap ${
              isWhite ? "text-white" : "text-[#170E1E] group-hover:text-primary"
            }`}
          >
            Dr. Olimjon Tojibayev
          </span>
          <span
            className={`hidden min-[360px]:inline text-[8.5px] sm:text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap ${
              isWhite ? "text-brandLilac" : "text-brandAmethyst"
            }`}
          >
            {titleByLang}
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
