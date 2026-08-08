import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


import en from "./locales/en";
import hi from "./locales/hi";
import or from "./locales/or";

const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
  or: {
    translation: or,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "hi", "or"],

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "ap_lang",
    },
  });

export default i18n;