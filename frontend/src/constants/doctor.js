/**
 * Single source of truth for Dr. Olimjon Tojibayev's credentials, career facts, and clinic hours.
 */
export const DOCTOR_INFO = {
  name: "Dr. Olimjon Tojibayev",
  shortName: "Dr. Tojibayev",
  fullName: "Tojibayev Olimjon",
  titleLang: {
    uz: "Shifokor-Stomatolog · Implantolog va Ortodont",
    ru: "Врач-Стоматолог · Эксперт по имплантации и ортодонтии",
    en: "Dental Surgeon · Implantologist & Orthodontist",
  },
  titles: {
    uz: "Shifokor-Stomatolog · Implantolog va Ortodont",
    ru: "Врач-Стоматолог · Эксперт по имплантации и ортодонтии",
    en: "Dental Surgeon · Implantologist & Orthodontist",
  },
  specialtiesText: "Dental Implant · Shaffof Elayner · Breket · Tsirkon & Keramika · Vinirlar · Og'riqsiz Davolash",
  specialtiesTextLang: {
    uz: "3D diagnostika · Biotitan implantlar · Shaffof elaynerlar · Breketlar · Tsirkon koronkalar · Estetik vinirlar · Og'riqsiz davolash",
    ru: "3D диагностика · Дентальная имплантация · Элайнеры · Брекеты · Циркониевые коронки · Виниры · Бережная терапия",
    en: "3D Diagnostics · Dental Implants · Clear Aligners · Braces · Zirconia Crowns · Aesthetic Veneers · Gentle Therapy",
  },
  careerStartYear: 2019, // 7+ years of clinical experience in 2026
  experienceYears: 7,
  clinicName: "Smile Dental Group",
  clinicLocation: {
    uz: "Smile Dental Group · Andijon shaxar, 1-kichik daxa 8-A Kanechka",
    ru: "Smile Dental Group · г. Андижан, 1-й микрорайон 8-А Канечка",
    en: "Smile Dental Group · 1st Microdistrict 8-A Kanechka, Andijan",
  },
  phone: "+998 (90) 541-97-57",
  phoneDisplay: "+998 90 541 97 57",
  phoneHref: "tel:+998905419757",
  phoneRaw: "+998905419757",
  secondaryPhone: "+998 (93) 418-97-57",
  secondaryPhoneDisplay: "+998 93 418 97 57",
  secondaryPhoneHref: "tel:+998934189757",
  secondaryPhoneRaw: "+998934189757",
  telegramUrl: "https://t.me/Dr_Tadjibayev",
  telegramHandle: "@Dr_Tadjibayev",
  telegramAltHandle: "@DR_TOJIBAYEV",
  instagramUrl: "https://www.instagram.com/dr_tojibayev/",
  instagramHandle: "@dr_tojibayev",
  googleReviewUrl: "https://g.page/r/CT4WIpgczx7rECE/review",
  googleMapsUrl: "https://g.page/r/CT4WIpgczx7rECE",
  email: "olimjon.tojibayev@mail.ru",
  siteUrl: "https://drtojibayev.uz",
  medinsonSiteId: "p2jrhduc5m",
  medinsonLicense: "MedInson-Dentist-20260730-125936-E5DB24",
};

export const getYearsOfExperience = () => 7;

export const OPENING_HOURS = {
  weekdays: { opens: "08:30", closes: "18:30" },
  labels: {
    uz: {
      days: "Dushanba – Shanba",
      hours: "08:30 – 18:30",
      full: "Dushanba – Shanba: 08:30 – 18:30",
      sunday: "Yakshanba — oldindan yozilish bo'yicha",
    },
    ru: {
      days: "Понедельник – Суббота",
      hours: "08:30 – 18:30",
      full: "Понедельник – Суббота: 08:30 – 18:30",
      sunday: "Воскресенье — по предварительной записи",
    },
    en: {
      days: "Monday – Saturday",
      hours: "08:30 – 18:30",
      full: "Monday – Saturday: 08:30 – 18:30",
      sunday: "Sunday — by prior appointment",
    },
  },
};

export const getExperienceText = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} лет клинического опыта`;
  if (lang === "en") return `${years} Years of Clinical Excellence`;
  return `${years} yillik klinik tajriba`;
};

export const getExperienceBadge = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} Лет Опыта`;
  if (lang === "en") return `${years} Years Experience`;
  return `${years} Yillik Tajriba`;
};

export const getHeroTag = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} Лет Опыта · Личный Приём · Андижан`;
  if (lang === "en") return `${years} Years Clinical Practice · Dedicated Care · Andijan`;
  return `${years} Yillik Tajriba · Shaxsiy Qabul · Andijon`;
};

export const getServicesTag = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} ЛЕТ ПРАКТИКИ · ДЕНТАЛЬНАЯ ИМПЛАНТАЦИЯ И ЭСТЕТИКА УЛЫБКИ`;
  if (lang === "en") return `${years} YEARS EXPERIENCE · GUIDED IMPLANTS & AESTHETIC SMILES`;
  return `${years} YILLIK TAJRIBA · DENTAL IMPLANTATSIYA VA ESTETIK TABASSUM`;
};
