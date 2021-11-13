import i18n from 'i18next';
import Backend from 'i18next-http-backend';
// import XHR from 'i18next-xhr-backend';

// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const language = navigator.language.split('-')[0];

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: false,
    },
    ns: ['Header', 'Main', 'LoginAndRegister', 'Product', 'Edit'],
    fallbackLng: 'en',
    lng: language,
    debug: true,
    // whitelist: availableLanguages,
    detection: {
      order: ['cookie', 'localStorage', 'sessionStorage'],
      caches: ['cookie'],
      // checkWhitelist: true,
    },
    interpolation: {
      escapeValue: false,
    },
    // Backend: {
    //   loadPath: './locales/en/',
    //   addPath: './locales/ru/',
    //   allowMultiLoading: true,
    // },
  });

export default i18n;
