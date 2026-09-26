import en from './locales/en.js';
import tr from './locales/tr.js';

export const DEFAULT_LOCALE = 'en';

export const dictionaries = { en, tr };

// Shown in the language picker in each language's own name
export const supportedLocales = [
  { id: 'en', label: 'English' },
  { id: 'tr', label: 'Türkçe' }
];

export function isSupportedLocale(value) {
  return Object.prototype.hasOwnProperty.call(dictionaries, value);
}

function lookup(dictionary, key) {
  return key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dictionary);
}

function interpolate(template, params) {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name) => (name in params ? String(params[name]) : match));
}

// Resolve a key for a locale, falling back to English, then to `fallback`, then to the key itself
export function translate(locale, key, params, fallback) {
  const value = lookup(dictionaries[locale], key) ?? lookup(dictionaries[DEFAULT_LOCALE], key);

  if (typeof value === 'string') return interpolate(value, params);
  if (value !== undefined) return value;
  return fallback ?? key;
}

export function getLocaleMeta(locale) {
  return (dictionaries[locale] || dictionaries[DEFAULT_LOCALE]).meta;
}
