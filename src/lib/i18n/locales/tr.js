// Turkish — prayer names use the common Turkish terms (İmsak, Güneş, Öğle, İkindi, Akşam, Yatsı)
export default {
  meta: {
    dateLocale: 'tr-TR',
    hour12: false,
    weekStartsOn: 1,
    weekdayLabels: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct']
  },

  prayers: {
    fajr: 'İmsak',
    sunrise: 'Güneş',
    dhuhr: 'Öğle',
    asr: 'İkindi',
    maghrib: 'Akşam',
    isha: 'Yatsı'
  },

  hijriMonths: [
    'Muharrem', 'Safer', 'Rebiülevvel', 'Rebiülahir',
    'Cemaziyelevvel', 'Cemaziyelahir', 'Recep', 'Şaban',
    'Ramazan', 'Şevval', 'Zilkade', 'Zilhicce'
  ],

  countdown: {
    hoursMinutes: '{h} sa {m} dk',
    minutesSeconds: '{m} dk {s} sn'
  },

  date: {
    today: 'Bugün',
    tomorrow: 'Yarın',
    yesterday: 'Dün',
    daysAhead: '{count} gün sonra',
    daysBack: '{count} gün önce',
    hijri: '{day} {month} {year}',
    previousDay: 'Önceki gün',
    nextDay: 'Sonraki gün',
    openCalendar: 'Takvimi aç',
    closeCalendar: 'Takvimi kapat',
    chooseDate: 'Tarih seç',
    previousMonth: 'Önceki ay',
    nextMonth: 'Sonraki ay',
    backToToday: 'Bugüne Dön'
  },

  clock: {
    until: '{prayer} vaktine',
    firstThirdEnd: 'İlk Üçte Bir Sonu',
    lastThird: 'Son Üçte Bir',
    rotateToCalibrate: 'Kalibrasyon için cihazı döndürün...',
    compassDenied: 'Pusula izni reddedildi',
    tapForFullClock: 'tam saat için dokunun',
    next: 'Sıradaki'
  },

  indicators: {
    duhaUntil: 'Kuşluk vakti, {time} saatine kadar',
    qaylulaUntil: 'Kaylûle vakti, {time} saatine kadar',
    fridayDuaUntilMaghrib: 'Cuma duası vakti, akşama kadar',
    firstThirdUntil: 'Gecenin ilk üçte biri, {time} saatine kadar',
    lastThirdUntilFajr: 'Gecenin son üçte biri, imsaka kadar'
  },

  settings: {
    title: 'Ayarlar',
    open: 'Ayarlar',
    close: 'Ayarları kapat',
    closeBackdrop: 'Kapat',
    language: 'Dil',
    theme: 'Tema',
    dark: 'Koyu',
    light: 'Açık',
    newBadge: 'YENİ',
    notifications: 'Bildirimler',
    notificationsEnabled: 'Bildirimler Açık',
    enableNotifications: 'Bildirimleri Aç',
    updatingReminders: 'Hatırlatmalar güncelleniyor...',
    remindersAutoUpdate: 'Vakit hatırlatmaları otomatik güncellenir',
    gentleReminders: 'Her vakit için nazik hatırlatmalar alın',
    specialReminder: 'Özel hatırlatma',
    prayerAlert: 'Vakit uyarısı',
    clockIndicators: 'Saat Göstergeleri',
    sunrise: 'Güneş',
    qibla: 'Kıble',
    compassNeedle: 'Pusula iğnesi',
    lastThird: 'Son Üçte Bir',
    bestTimeForDua: 'Dua için en güzel vakit',
    firstThirdEnd: 'İlk Üçte Bir Sonu',
    ishaPreferredEnd: 'Yatsı için tercih edilen son',
    fridayDua: 'Cuma Duası',
    asrToMaghrib: 'İkindiden akşama',
    duha: 'Kuşluk',
    morningPrayer: 'Kuşluk namazı',
    qaylula: 'Kaylûle',
    midDayRest: 'Öğle istirahati',
    qiblaNote: 'Kıble seçtiğiniz şehre göre hesaplanır; anlık konumunuz asla takip edilmez. Mekke içinde veya yolculuk sırasında sapma olabilir.',
    compassDeniedSafari: 'Pusula izni reddedildi. Kıbleyi kullanmak için Safari ayarlarından izin verin.',
    compassRequestFailed: 'Pusula izni şu anda istenemedi.',
    labelSize: 'Saat Yazı Boyutu',
    small: 'Küçük',
    medium: 'Orta',
    large: 'Büyük',
    calculationMethod: 'Hesaplama Yöntemi',
    yourAngles: 'Kendi açılarınız',
    ishaMinutes: '{minutes} dk',
    customAngles: 'Özel Açılar',
    degrees: 'derece',
    anglesHint: 'Tan vakti hesabı için ufkun altındaki derece',
    appName: 'Azan',
    tagline: 'Zarif İslami namaz vakitleri',
    tapToClose: 'kapatmak için herhangi bir yere dokunun'
  },

  methods: {
    MuslimWorldLeague: 'Müslüman Dünya Birliği',
    Egyptian: 'Mısır Genel Ölçüm Kurumu',
    Karachi: 'İslami İlimler Üniversitesi, Karaçi',
    UmmAlQura: 'Ümmü’l-Kurâ Üniversitesi, Mekke',
    Dubai: 'BAE İslami İşler Genel Kurumu',
    Kuwait: 'Evkaf Bakanlığı, Kuveyt',
    Qatar: 'Katar Takvim Evi',
    NorthAmerica: 'Kuzey Amerika İslam Cemiyeti (ISNA)',
    MoonsightingCommittee: 'Uluslararası Hilal Gözlem Komitesi',
    Turkey: 'Diyanet İşleri Başkanlığı, Türkiye',
    Tehran: 'Jeofizik Enstitüsü, Tahran',
    Singapore: 'Singapur İslam Din Konseyi',
    Custom: 'Özel'
  },

  themes: {
    dark: {
      gold: 'Zarif Altın',
      sakura: 'Sakura Gecesi',
      starlight: 'Ay İpeği',
      ember: 'Kor Işıltısı',
      rose: 'Gül Şafağı',
      emerald: 'Zümrüt Gece',
      ocean: 'Okyanus Derinliği',
      twilight: 'Alacakaranlık Safiri',
      coral: 'Mercan Resifi',
      manuscript: 'Medine Mürekkebi'
    },
    light: {
      gold: 'Osmanlı Kırmızısı',
      rose: 'Fecir Pembesi',
      emerald: 'Sedir Ormanı',
      ocean: 'Acem Çinisi',
      twilight: 'İznik Kobaltı',
      manuscript: 'Mor Yazma'
    }
  },

  notifications: {
    fajr: 'İmsak',
    dhuhr: 'Öğle',
    asr: 'İkindi',
    maghrib: 'Akşam',
    isha: 'Yatsı',
    sunrise: 'Güneş',
    lastThird: 'Son Üçte Bir',
    firstThirdEnd: 'İlk Üçte Bir Sonu',
    newIslamicMonth: 'Yeni Hicri Ay'
  },

  cities: {
    mecca: { name: 'Mekke', country: 'Suudi Arabistan' },
    medina: { name: 'Medine', country: 'Suudi Arabistan' },
    istanbul: { name: 'İstanbul', country: 'Türkiye' },
    cairo: { name: 'Kahire', country: 'Mısır' },
    dubai: { name: 'Dubai', country: 'BAE' },
    london: { name: 'Londra', country: 'Birleşik Krallık' }
  },

  citySelector: {
    close: 'Kapat',
    searchPlaceholder: 'Şehir ara...',
    noResults: 'Şehir bulunamadı',
    tapToClose: 'kapatmak için herhangi bir yere dokunun'
  }
};
