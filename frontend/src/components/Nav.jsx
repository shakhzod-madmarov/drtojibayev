import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { LANGS } from "../utils/language";
import { IconPhone } from "./MedicalIcons";
import { useModalA11y } from "../hooks/useModalA11y";
import { getA11yLabels } from "../constants/a11yLabels";
import { DOCTOR_INFO } from "../constants/doctor";

const Nav = ({ onOpenBooking, topOffset = 0 }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, changeLanguage } = useLanguage();
  const to = useLocalizedPath();
  const a11y = getA11yLabels(lang);
  const closeDrawer = () => setShowMenu(false);
  useModalA11y(showMenu, closeDrawer);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  const navLinks = [
    { path: "/", label: { uz: "Bosh Sahifa", ru: "Главная", en: "Home" } },
    { path: "/services", label: { uz: "Xizmatlar", ru: "Услуги", en: "Services" } },
    { path: "/about", label: { uz: "Shifokor Haqida", ru: "О Враче", en: "About Doctor" } },
    { path: "/contact", label: { uz: "Aloqa & Manzil", ru: "Контакты", en: "Contact" } },
  ];

  const handleBookingClick = () => {
    if (showMenu) closeDrawer();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      navigate(to("/booking"));
    }
  };

  const bookingBtnLabel = {
    uz: "Qabulga Yozilish",
    ru: "Записаться",
    en: "Book Visit",
  }[lang] || "Qabulga Yozilish";

  return (
    <>
      <header
        style={{ top: `${topOffset}px` }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-brandLilac/30 py-2.5"
            : "bg-[#FAF7FD]/90 backdrop-blur-md border-b border-brandLilac/20 py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <Logo className="h-9 sm:h-10 shrink-0" />

          {/* Desktop Navigation Links — Airy, typographic luxury design */}
          <nav
            aria-label={a11y.mainNavigation}
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={to(link.path)}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-1.5 text-[13.5px] xl:text-[14px] transition-colors duration-150 ${
                    isActive
                      ? "text-primary font-bold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-slate-600 font-medium hover:text-primary"
                  }`
                }
              >
                {link.label[lang]}
              </NavLink>
            ))}
          </nav>

          {/* Action Hub (Compact Phone + Language + Booking Button) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Direct Phone Call: Compact 1-tap button on laptop/tablet viewports, expands on 2xl */}
            <a
              href={DOCTOR_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 h-9 px-2.5 2xl:px-3 rounded-xl text-xs font-semibold text-primary bg-[#FAF7FD] border border-brandLilac/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 group shadow-2xs"
              aria-label={a11y.callClinic}
              title={`${DOCTOR_INFO.phoneDisplay} (Dr. Olimjon Tojibayev)`}
            >
              <IconPhone className="w-3.5 h-3.5 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="hidden 2xl:inline font-mono tracking-tight font-medium">
                {DOCTOR_INFO.phoneDisplay}
              </span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-xl bg-white border border-brandLilac/30 shadow-2xs">
              {LANGS.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => changeLanguage(code)}
                  className={`px-2 py-1 text-[11px] font-bold rounded-lg transition-all ${
                    lang === code
                      ? "bg-primary text-white shadow-2xs"
                      : "text-slate-500 hover:text-primary"
                  }`}
                  aria-label={`${a11y.languageSwitcher}: ${code.toUpperCase()}`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Booking CTA Button */}
            <button
              type="button"
              onClick={handleBookingClick}
              className="hidden sm:inline-flex items-center justify-center px-3.5 sm:px-4 h-9 rounded-xl text-xs sm:text-[13px] font-bold text-white bg-gradient-to-r from-brandPurple via-brandAmethyst to-brandLavender hover:from-[#3A1A4F] hover:to-brandAmethyst shadow-purple transition-all duration-200 active:scale-95 shrink-0"
            >
              {bookingBtnLabel}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setShowMenu(!showMenu)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-primary hover:bg-brandLilac-light focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={showMenu ? a11y.closeMenu : a11y.openMenu}
              aria-expanded={showMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {showMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] bg-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 lg:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <Logo className="h-8" />
            <button
              type="button"
              onClick={closeDrawer}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label={a11y.closeMenu}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={to(link.path)}
                end={link.path === "/"}
                onClick={closeDrawer}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-primary bg-primary-light"
                      : "text-slate-700 hover:text-primary hover:bg-slate-50"
                  }`
                }
              >
                {link.label[lang]}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
          <a
            href={DOCTOR_INFO.phoneHref}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-primary bg-primary-light border border-brandLilac/40"
          >
            <IconPhone className="w-3.5 h-3.5" />
            <span>{DOCTOR_INFO.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={handleBookingClick}
            className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brandPurple to-brandAmethyst shadow-purple text-center"
          >
            {bookingBtnLabel}
          </button>

          <p className="text-[11px] text-center text-slate-400">
            {lang === "ru"
              ? "Д-р Олимжон Тожибаев · На базе Smile Dental Group"
              : lang === "en"
              ? "Dr. Olimjon Tojibayev · At Smile Dental Group"
              : "Dr. Olimjon Tojibayev · Smile Dental Group bazasida"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Nav;
