import React from "react";
import { Link } from "react-router-dom";
import { useLocalizedPath } from "../context/LanguageContext";
import { assets } from "../assets/assets";

const Logo = ({ className = "h-11 sm:h-12 w-auto", showText = true, isWhite = false }) => {
  const to = useLocalizedPath();

  return (
    <Link
      to={to("/")}
      className="group flex items-center gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl transition-transform active:scale-95"
      aria-label="Dr. Olimjon Tojibayev — Vrach Stomatolog"
    >
      <div className="relative flex items-center justify-center p-1 rounded-2xl bg-white shadow-sm border border-brandLilac/30 group-hover:border-brandAmethyst/50 transition-all duration-300">
        <img
          src={assets.logo}
          alt="Dr. Olimjon Tojibayev Logo"
          className={`${className} object-contain`}
          width="48"
          height="48"
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
