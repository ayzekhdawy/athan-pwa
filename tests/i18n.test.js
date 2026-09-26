import test from 'node:test';
import assert from 'node:assert/strict';
import { dictionaries, translate, getLocaleMeta } from '../src/lib/i18n/translate.js';

function collectKeys(node, prefix = '') {
  if (Array.isArray(node) || typeof node !== 'object' || node === null) {
    return [prefix];
  }

  return Object.entries(node).flatMap(([key, value]) => collectKeys(value, prefix ? `${prefix}.${key}` : key));
}

test('every locale defines the same keys as English', () => {
  const englishKeys = collectKeys(dictionaries.en).sort();

  for (const [locale, dictionary] of Object.entries(dictionaries)) {
    assert.deepEqual(collectKeys(dictionary).sort(), englishKeys, `${locale} is out of sync with en`);
  }
});

test('list values keep their length across locales', () => {
  for (const [locale, dictionary] of Object.entries(dictionaries)) {
    assert.equal(dictionary.hijriMonths.length, 12, `${locale} hijriMonths`);
    assert.equal(dictionary.meta.weekdayLabels.length, 7, `${locale} weekdayLabels`);
  }
});

test('translate interpolates params and falls back to English, then the fallback', () => {
  assert.equal(translate('tr', 'clock.until', { prayer: 'Öğle' }), 'Öğle vaktine');
  assert.equal(translate('en', 'date.daysAhead', { count: 3 }), '3 days ahead');
  assert.equal(translate('xx', 'prayers.fajr'), 'Fajr');
  assert.equal(translate('tr', 'themes.dark.unknown', null, 'Custom Theme'), 'Custom Theme');
  assert.equal(translate('tr', 'missing.key'), 'missing.key');
});

test('Turkish uses a 24-hour clock and Monday-first weeks', () => {
  const meta = getLocaleMeta('tr');
  assert.equal(meta.dateLocale, 'tr-TR');
  assert.equal(meta.hour12, false);
  assert.equal(meta.weekStartsOn, 1);
});
