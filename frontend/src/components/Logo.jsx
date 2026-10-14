import React from "react";
import { Link } from "react-router-dom";
import { useLocalizedPath } from "../context/LanguageContext";
import { assets } from "../assets/assets";

const Logo = ({ className = "h-11 sm:h-12 w-auto", showText = true, isWhite = false }) => {
  const to = useLocalizedPath();

  return (
    <Link
      to={to("/")}
      className={`group flex items-center gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl transition-transform active:scale-95 ${className}`}
      aria-label="Dr. Olimjon Tojibayev — Vrach Stomatolog"
    >
      <div
        className={`relative flex items-center justify-center p-1.5 rounded-2xl transition-all duration-300 shrink-0 ${
          isWhite
            ? "bg-white/10 backdrop-blur-xs border border-white/20 shadow-xs"
            : "bg-white shadow-xs border border-brandLilac/40 group-hover:border-primary group-hover:shadow-purple/20 group-hover:shadow-md"
        } w-11 h-11 sm:w-12 sm:h-12`}
      >
        <img
          src={assets.logoIcon}
          alt="Dr. Olimjon Tojibayev"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          width="48"
          height="48"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-serif text-lg sm:text-xl font-bold tracking-tight transition-colors ${
              isWhite ? "text-white" : "text-[#170E1E] group-hover:text-primary"
            }`}
          >
            Olimjon Tojibayev
          </span>
          <span
            className={`text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase ${
              isWhite ? "text-brandLilac" : "text-brandAmethyst"
            }`}
          >
            VRACH STOMATOLOG
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
