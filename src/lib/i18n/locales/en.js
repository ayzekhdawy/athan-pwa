export default {
  meta: {
    dateLocale: 'en-US',
    hour12: true,
    // 0 = Sunday, 1 = Monday
    weekStartsOn: 0,
    // Always listed Sunday first; the calendar rotates them using weekStartsOn
    weekdayLabels: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  },

  prayers: {
    fajr: 'Fajr',
    sunrise: 'Sunrise',
    dhuhr: 'Dhuhr',
    asr: 'Asr',
    maghrib: 'Maghrib',
    isha: 'Isha'
  },

  hijriMonths: [
    'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
    'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Shaban',
    'Ramadan', 'Shawwal', 'Dhu al-Qadah', 'Dhu al-Hijjah'
  ],

  countdown: {
    hoursMinutes: '{h}h {m}m',
    minutesSeconds: '{m}m {s}s'
  },

  date: {
    today: 'Today',
    tomorrow: 'Tomorrow',
    yesterday: 'Yesterday',
    daysAhead: '{count} days ahead',
    daysBack: '{count} days back',
    hijri: '{day} {month} {year} AH',
    previousDay: 'Previous day',
    nextDay: 'Next day',
    openCalendar: 'Open calendar',
    closeCalendar: 'Close calendar',
    chooseDate: 'Choose date',
    previousMonth: 'Previous month',
    nextMonth: 'Next month',
    backToToday: 'Back To Today'
  },

  clock: {
    until: 'until {prayer}',
    firstThirdEnd: '1st Third End',
    lastThird: 'Last Third',
    rotateToCalibrate: 'Rotate device to calibrate...',
    compassDenied: 'Compass permission denied',
    tapForFullClock: 'tap for full clock',
    next: 'Next'
  },

  indicators: {
    duhaUntil: 'Duha until {time}',
    qaylulaUntil: 'Qaylula until {time}',
    fridayDuaUntilMaghrib: "Jumu'ah Dua until Maghrib",
    firstThirdUntil: '1st Third until {time}',
    lastThirdUntilFajr: 'Last Third until Fajr'
  },

  settings: {
    title: 'Settings',
    open: 'Settings',
    close: 'Close settings',
    closeBackdrop: 'Close',
    language: 'Language',
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light',
    newBadge: 'NEW',
    notifications: 'Notifications',
    notificationsEnabled: 'Notifications Enabled',
    enableNotifications: 'Enable Notifications',
    updatingReminders: 'Updating reminders...',
    remindersAutoUpdate: 'Prayer reminders update automatically',
    gentleReminders: 'Get gentle reminders for each prayer',
    specialReminder: 'Special reminder',
    prayerAlert: 'Prayer alert',
    clockIndicators: 'Clock Indicators',
    sunrise: 'Sunrise',
    qibla: 'Qibla',
    compassNeedle: 'Compass needle',
    lastThird: 'Last Third',
    bestTimeForDua: 'Best time for dua',
    firstThirdEnd: '1st Third End',
    ishaPreferredEnd: 'Isha preferred end',
    fridayDua: "Jumu'ah Dua",
    asrToMaghrib: 'Asr to Maghrib',
    duha: 'Duha',
    morningPrayer: 'Morning prayer',
    qaylula: 'Qaylula',
    midDayRest: 'Mid-day rest',
    qiblaNote: 'Qibla is based on your selected city—we never track your live location. May be inaccurate within Makkah or while travelling.',
    compassDeniedSafari: 'Compass permission was denied. Enable it in Safari settings to use Qibla.',
    compassRequestFailed: 'Could not request compass permission right now.',
    labelSize: 'Clock Label Size',
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    calculationMethod: 'Calculation Method',
    yourAngles: 'Your angles',
    ishaMinutes: '{minutes}min',
    customAngles: 'Custom Angles',
    degrees: 'degrees',
    anglesHint: 'Degrees below horizon for twilight calculation',
    appName: 'Azan',
    tagline: 'Beautiful Islamic prayer times',
    tapToClose: 'tap anywhere to close'
  },

  methods: {
    MuslimWorldLeague: 'Muslim World League',
    Egyptian: 'Egyptian General Authority of Survey',
    Karachi: 'University of Islamic Sciences, Karachi',
    UmmAlQura: 'Umm al-Qura University, Makkah',
    Dubai: 'UAE General Authority of Islamic Affairs',
    Kuwait: 'Ministry of Awqaf, Kuwait',
    Qatar: 'Qatar Calendar House',
    NorthAmerica: 'Islamic Society of North America',
    MoonsightingCommittee: 'Moonsighting Committee Worldwide',
    Turkey: 'Diyanet İşleri Başkanlığı, Türkiye',
    Tehran: 'Institute of Geophysics, Tehran',
    Singapore: 'Islamic Religious Council of Singapore',
    Custom: 'Custom'
  },

  themes: {
    dark: {
      gold: 'Refined Gold',
      sakura: 'Sakura Night',
      starlight: 'Lunar Silk',
      ember: 'Ember Glow',
      rose: 'Rose Dawn',
      emerald: 'Emerald Night',
      ocean: 'Ocean Depth',
      twilight: 'Twilight Sapphire',
      coral: 'Coral Reef',
      manuscript: 'Medina Ink'
    },
    light: {
      gold: 'Ottoman Crimson',
      rose: 'Fajr Blush',
      emerald: 'Cedar Forest',
      ocean: 'Persian Tile',
      twilight: 'Iznik Cobalt',
      manuscript: 'Plum Manuscript'
    }
  },

  // Also used as the label inside push notifications
  notifications: {
    fajr: 'Fajr',
    dhuhr: 'Dhuhr',
    asr: 'Asr',
    maghrib: 'Maghrib',
    isha: 'Isha',
    sunrise: 'Sunrise',
    lastThird: 'Last Third',
    firstThirdEnd: '1st Third End',
    newIslamicMonth: 'New Islamic Month'
  },

  cities: {
    mecca: { name: 'Mecca', country: 'Saudi Arabia' },
    medina: { name: 'Medina', country: 'Saudi Arabia' },
    istanbul: { name: 'Istanbul', country: 'Turkey' },
    cairo: { name: 'Cairo', country: 'Egypt' },
    dubai: { name: 'Dubai', country: 'UAE' },
    london: { name: 'London', country: 'UK' }
  },

  citySelector: {
    close: 'Close',
    searchPlaceholder: 'Search city...',
    noResults: 'No cities found',
    tapToClose: 'tap anywhere to close'
  }
};
