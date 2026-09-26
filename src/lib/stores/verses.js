// Curated VERY SHORT verses only - one line max
export const verseReferences = [
  '94:5',    // For indeed, with hardship comes ease
  '94:6',    // Indeed, with hardship comes ease
  '55:13',   // So which of the favors of your Lord would you deny?
  '94:8',    // And to your Lord direct your longing
  '51:21',   // And in yourselves. Will you not then see?
  '89:28',   // Return to your Lord, well-pleased and pleasing
  '112:1',   // Say, He is Allah, the One
  '112:2',   // Allah, the Eternal Refuge
  '73:8',    // And devote yourself to Him with complete devotion
  '93:3',    // Your Lord has not forsaken you, nor has He detested
  '94:1',    // Did We not expand for you your breast?
  '108:1',   // Indeed, We have granted you al-Kawthar
  '93:4',    // And the Hereafter is better for you than the first
];

const FALLBACK_EDITION = 'en.sahih';
const CACHE_PREFIX = 'azan-verse:';
const BASMALA_WORDS = 4;

// Same verse for the whole day, so it reads as a "verse of the day"
export function getDailyVerseIndex(date = new Date()) {
  const localDay = Math.floor((date.getTime() - date.getTimezoneOffset() * 60000) / 86400000);
  return localDay % verseReferences.length;
}

function readCache(key) {
  if (typeof localStorage === 'undefined') return null;
  try {
    const saved = localStorage.getItem(CACHE_PREFIX + key);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function writeCache(key, verse) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(verse));
  } catch {
    // Storage full or unavailable; the verse is simply fetched again next time.
  }
}

// The API prefixes the first ayah of each surah with the Basmala; show the ayah on its own
export function stripBasmala(text, surah, ayah) {
  if (ayah !== 1 || surah === 1 || surah === 9) return text;
  const words = text.trim().split(/\s+/);
  return words[0]?.startsWith('بِسْمِ') && words.length > BASMALA_WORDS
    ? words.slice(BASMALA_WORDS).join(' ')
    : text;
}

async function requestVerse(reference, edition) {
  const response = await fetch(
    `https://api.alquran.cloud/v1/ayah/${reference}/editions/quran-uthmani,${edition}`
  );
  const data = await response.json();
  if (data.code !== 200 || !Array.isArray(data.data) || data.data.length < 2) return null;

  const [arabicData, translationData] = data.data;
  const surah = arabicData.surah.number;
  const ayah = arabicData.numberInSurah;

  return {
    arabic: stripBasmala(arabicData.text, surah, ayah),
    translation: translationData.text,
    surah,
    ayah,
    reference
  };
}

// Arabic text plus a translation from the given alquran.cloud edition, cached on the device
export async function fetchVerse(reference, edition = FALLBACK_EDITION) {
  const key = `${reference}:${edition}`;
  const cached = readCache(key);
  if (cached) return cached;

  try {
    const verse = await requestVerse(reference, edition);
    if (verse) {
      writeCache(key, verse);
      return verse;
    }
    // Edition unavailable: show English this time without caching it under the requested edition
    return edition === FALLBACK_EDITION ? null : await requestVerse(reference, FALLBACK_EDITION);
  } catch (e) {
    console.error('Failed to fetch verse:', e);
    return null;
  }
}
