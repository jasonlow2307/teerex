import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enTranslation from "./locales/en/en.json";
import zhTranslation from "./locales/cn/cn.json";
import msTranslation from "./locales/ms/ms.json";
import taTranslation from "./locales/ta/ta.json";

// Configure i18n
i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // initialize i18next
  .init({
    debug: false, // Set to true for development
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: enTranslation,
      },
      zh: {
        translation: zhTranslation,
      },
      ms: {
        translation: msTranslation,
      },
      ta: {
        translation: taTranslation,
      },
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
