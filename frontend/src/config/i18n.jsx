import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend"
import { supportedLngs } from "./langs";

i18n.use(HttpBackend)
.use(initReactI18next).init({
  supportedLngs,
  fallbackLng: "en",
  lng: "en",
  keySeparator: false,
  backend:{
    loadPath:'/locales/{{lng}}/{{ns}}.json'
  },
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;