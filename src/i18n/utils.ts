import { ui, defaultLang } from './ui';

export { defaultLang };

export function getI18nPaths() {
  return [
    { params: { lang: undefined } },
    { params: { lang: 'en' } },
  ];
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
