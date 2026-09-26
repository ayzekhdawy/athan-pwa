import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';
import {
  DEFAULT_LOCALE,
  getLocaleMeta,
  isSupportedLocale,
  supportedLocales,
  translate
} from './translate.js';

export { supportedLocales, translate, getLocaleMeta };

const STORAGE_KEY = 'azan-locale';

// Saved choice first, then the device language, then English
function detectInitialLocale() {
  if (!browser) return DEFAULT_LOCALE;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && isSupportedLocale(saved)) return saved;

  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const language of preferred) {
    const base = String(language || '').toLowerCase().split('-')[0];
    if (isSupportedLocale(base)) return base;
  }

  return DEFAULT_LOCALE;
}

function applyDocumentLocale(value) {
  if (!browser) return;
  document.documentElement.lang = value;
}

function createLocaleStore() {
  const initial = detectInitialLocale();
  const { subscribe, set } = writable(initial);
  applyDocumentLocale(initial);

  return {
    subscribe,
    set: (value) => {
      if (!isSupportedLocale(value)) return;
      if (browser) {
        localStorage.setItem(STORAGE_KEY, value);
      }
      applyDocumentLocale(value);
      set(value);
    }
  };
}

export const locale = createLocaleStore();

// Usage in components: {$t('settings.title')} or $t('clock.until', { prayer })
export const t = derived(locale, ($locale) => (key, params, fallback) => translate($locale, key, params, fallback));

// Formatting details (Intl locale, 12/24h clock, first day of week) for the active language
export const localeMeta = derived(locale, ($locale) => getLocaleMeta($locale));
