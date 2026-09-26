import test from 'node:test';
import assert from 'node:assert/strict';
import { getDailyVerseIndex, stripBasmala, verseReferences } from '../src/lib/stores/verses.js';

test('the verse of the day stays the same all day and changes the next day', () => {
  const morning = new Date(2026, 8, 27, 6, 0);
  const night = new Date(2026, 8, 27, 23, 59);
  const tomorrow = new Date(2026, 8, 28, 0, 1);

  assert.equal(getDailyVerseIndex(morning), getDailyVerseIndex(night));
  assert.equal(getDailyVerseIndex(tomorrow), (getDailyVerseIndex(morning) + 1) % verseReferences.length);
});

test('the Basmala is removed from the first ayah of a surah only', () => {
  const basmala = 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ';
  const ikhlas = 'قُلْ هُوَ ٱللَّهُ أَحَدٌ';

  assert.equal(stripBasmala(`${basmala} ${ikhlas}`, 112, 1), ikhlas);
  assert.equal(stripBasmala(ikhlas, 112, 1), ikhlas);
  assert.equal(stripBasmala(`${basmala} x`, 112, 2), `${basmala} x`);
  assert.equal(stripBasmala(basmala, 1, 1), basmala);
});
