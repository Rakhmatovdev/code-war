import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend"; 
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) 
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "kr", "ru", "uz"],
    fallbackLng: "uz", 
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], 
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
