import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// import { getLocales } from 'react-native-localize';

const getDeviceLocale = (callback: (lang: string) => void): void => {
    // const localeList = getLocales().map(locale => locale.languageTag);
    // console.log('localeList', localeList);
    // TODO
    callback('ru');
};

const languageDetector: i18next.LanguageDetectorAsyncModule = {
    type: 'languageDetector',
    async: true,
    detect: getDeviceLocale,
    init: () => {},
    cacheUserLanguage: () => {},
};

import en from 'app/i18n/en';
import ru from 'app/i18n/ru';

i18next
.use(languageDetector)
.use(initReactI18next)
.init({
    fallbackLng: 'en',
    debug: true,
    resources: {
        en,
        ru,
    },
    react: {
        // bindI18n: "languageChanged",
        transEmptyNodeValue: '',
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;
