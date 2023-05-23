import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos de idioma
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'es', // Idioma de respaldo si no se encuentra la traducción
    interpolation: {
      escapeValue: false // Permite el uso de HTML en las traducciones
    }
  });

export default i18n;
