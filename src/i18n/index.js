import es from './es.js';
import en from './en.js';

const translations = { es, en };
let currentLanguage = 'es';

export function t(key, fallback = '') {
    const keys = key.split('.');
    let result = translations[currentLanguage];
    for (const k of keys) {
        if (result && result[k] !== undefined) {
            result = result[k];
        } else {
            return fallback || key;
        }
    }
    return result;
}

export function setLanguage(lang) {
    if (translations[lang]) currentLanguage = lang;
}

export function getCurrentLanguage() {
    return currentLanguage;
}
