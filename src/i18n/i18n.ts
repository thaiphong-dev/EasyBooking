import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: require("../../public/locales/en/common.json"),
  },
  vi: {
    translation: require("../../public/locales/vi/common.json"),
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});
