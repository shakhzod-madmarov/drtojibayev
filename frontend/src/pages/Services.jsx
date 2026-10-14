import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { getServicesTag } from "../constants/doctor";
import { PAGE_SEO } from "../constants/seo";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import Seo from "../components/Seo";
import { buildServicesCatalogSchema } from "../utils/structuredData";
import Interactive3DCostCalculator from "../components/Interactive3DCostCalculator";
import SmileAssessmentWizard from "../components/SmileAssessmentWizard";
import { IconShieldCheck } from "../components/MedicalIcons";

const Services = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.services[lang] || PAGE_SEO.services.uz;

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: { uz: "Barcha Xizmatlar", ru: "Все Услуги", en: "All Services" } },
    { id: "digital", label: { uz: "Raqamli & 3D", ru: "Цифровые & 3D", en: "Digital & 3D" } },
    { id: "implant", label: { uz: "Dental Implant", ru: "Имплантация", en: "Implants" } },
    { id: "ortho", label: { uz: "Elayner & Breket", ru: "Элайнеры & Брекеты", en: "Orthodontics" } },
    { id: "aesthetics", label: { uz: "Tsirkon & Vinir", ru: "Цирконий & Виниры", en: "Crowns & Veneers" } },
    { id: "therapy", label: { uz: "Terapiya & Protez", ru: "Терапия & Протезы", en: "Therapy & Dentures" } },
  ];

  const filteredServices = SERVICES_CATALOG.filter((s) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "digital") return s.id.includes("digital");
    if (activeCategory === "implant") return s.id.includes("implant");
    if (activeCategory === "ortho") return s.id.includes("breket") || s.id.includes("elayner");
    if (activeCategory === "aesthetics") return s.id.includes("tsirkon") || s.id.includes("vinir") || s.id.includes("oqartirish");
    if (activeCategory === "therapy") return s.id.includes("terapiya") || s.id.includes("protez");
    return true;
  });

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar", path: "/services" },
  ];
  const catalogSchema = buildServicesCatalogSchema(SERVICES_CATALOG, lang, breadcrumbs);

  return (
    <div className="py-6 sm:py-10 space-y-12">
      <Seo
        title={seo.title}
        description={seo.description}
        schemaJson={catalogSchema}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span>/</span>
        <span className="text-primary font-bold" aria-current="page">
          {lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar"}
        </span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider bg-primary-light text-primary border border-brandLilac/40 shadow-xs">
          <IconShieldCheck className="w-3.5 h-3.5 text-primary" />
          <span>{getServicesTag(lang)}</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {lang === "uz"
            ? "Raqamli Stomatologik Xizmatlar Katalogi"
            : lang === "ru"
            ? "Каталог Услуг Цифровой Стоматологии"
            : "Digital Dental Services & Specialties"}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {lang === "uz"
            ? "Dr. Olimjon Tojibayev tomonidan 3D raqamli texnologiyalar asosida 100% og'riqsiz, aniq va kafolatli muolajalar. Smile Dental Group, Andijon."
            : lang === "ru"
            ? "Все виды современного безболезненного лечения, 3D сканирования, имплантации и ортодонтии у Д-ра Олимжона Тожибаева."
            : "All dental treatments performed with 3D digital precision, biocompatible materials, and gentle care by Dr. Olimjon Tojibayev."}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-2 pb-1 no-scrollbar scroll-touch">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === c.id
                ? "bg-primary text-white shadow-purple"
                : "bg-white text-slate-700 border border-brandLilac/30 hover:bg-brandLilac-light"
            }`}
          >
            {c.label[lang]}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="group p-6 rounded-3xl bg-white border border-brandLilac/30 shadow-card hover:shadow-purple hover:border-brandAmethyst/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-5 relative">
                <img
                  src={service.image}
                  alt={service.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-primary backdrop-blur-xs shadow-xs">
                    {service.featurePill[lang]}
                  </span>
                </div>
              </div>

              <span className="text-[11px] font-bold text-brandAmethyst uppercase tracking-wider block mb-1">
                {service.category[lang]}
              </span>
              <h2 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                {service.title[lang]}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                {service.shortDesc[lang]}
              </p>

              {/* Highlights */}
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                {service.highlights[lang]?.slice(0, 2).map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to={to(`/services/${service.id}`)}
                className="text-xs font-bold text-slate-600 hover:text-primary transition-colors"
              >
                {lang === "ru" ? "Подробнее →" : lang === "en" ? "Learn more →" : "Batafsil →"}
              </Link>
              <button
                type="button"
                onClick={() => onOpenBooking(service.id)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brandPurple to-brandAmethyst hover:opacity-95 transition-opacity shadow-xs"
              >
                {lang === "ru" ? "Записаться" : lang === "en" ? "Book Visit" : "Qabulga yozilish"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Calculator */}
      <Interactive3DCostCalculator />

      {/* Smile Assessment Wizard */}
      <SmileAssessmentWizard />
    </div>
  );
};

export default Services;
