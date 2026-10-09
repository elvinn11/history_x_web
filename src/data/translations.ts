import type { Language } from '../types/history';

export const TRANSLATIONS: Record<Language, {
  siteTitle: string;
  siteSubtitle: string;
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  beginJourney: string;
  exploreOrbit: string;
  scrollPrompt: string;
  timelineNav: string;
  orbitNav: string;
  mapNav: string;
  sourcesNav: string;
  archiveNav: string;
  soundOn: string;
  soundOff: string;
  yearDisplayPrefix: string;
  keyFiguresLabel: string;
  locationLabel: string;
  saveToArchive: string;
  savedInArchive: string;
  exploreEra: string;
  askAIGuide: string;
  deepDiveClose: string;
  aiGuideTitle: string;
  aiGuideSubtitle: string;
  aiInputPlaceholder: string;
  currentViewingContext: string;
  sourcesModalTitle: string;
  sourcesModalSubtitle: string;
  archiveDrawerTitle: string;
  archiveEmptyMessage: string;
  clearArchive: string;
  mapTitle: string;
  mapSubtitle: string;
  mapNote: string;
  allPeriods: string;
  viewDetails: string;
  backwardScrollNotice: string;
  temporalScrubber: string;
  returnToPresent: string;
}> = {
  az: {
    siteTitle: 'Azərbaycan Tarixi',
    siteSubtitle: 'İnteraktiv Rəqəmsal Muzey & Zaman Səyahəti',
    heroBadge: '2020-Cİ İLDƏN B.E.Ə. 12,000-Cİ İLƏ QƏDƏR',
    heroHeading: 'AZƏRBAYCAN TARİXİ: ZAMANIN DƏRİNLİYİNƏ SƏYAHƏT',
    heroSubheading: '2020-ci ilin müasir zəfərindən başlayaraq qədim Şirvanşahlara, Atabəylərə, Qafqaz Albaniyasına və Qobustanın ilkin şəfəqinə qədər zamanı geriyə fırladın.',
    beginJourney: 'Zaman Səyahətinə Başla (2020)',
    exploreOrbit: 'Kosmik Orbit Naviqatoru',
    scrollPrompt: 'Zamanı geriyə fırlatmaq üçün aşağı diyirləyin',
    timelineNav: 'Xronoloji Səyahət',
    orbitNav: 'Kosmik Orbit',
    mapNav: 'Tarixi Xəritə',
    sourcesNav: 'Akademik Mənbələr',
    archiveNav: 'Mənim Arxivim',
    soundOn: 'Səsi Söndür',
    soundOff: 'Muzey Səs Mühiti',
    yearDisplayPrefix: 'TARİXİ ZAMAN KOORDİNATI:',
    keyFiguresLabel: 'TARİXİ ŞƏXSİYYƏTLƏR',
    locationLabel: 'MƏKAN & MƏRKƏZ',
    saveToArchive: 'Arxivə Saxla',
    savedInArchive: 'Arxivdə Saxlanıldı',
    exploreEra: 'Dövrü Araşdır',
    askAIGuide: 'AI Bələdçidən Soruş',
    deepDiveClose: 'Bağla',
    aiGuideTitle: 'Tarixçi AI — Rəqəmsal Bələdçi',
    aiGuideSubtitle: 'Azərbaycan tarixi haqqında nə bilmək istəyirsiniz?',
    aiInputPlaceholder: 'Tariximiz haqqında nə bilmək istəyirsiniz?',
    currentViewingContext: 'Aktiv Dövr Konteksti',
    sourcesModalTitle: 'Tarixi Mənbələr və Biblioqrafiya',
    sourcesModalSubtitle: 'Elmi arxivlər, UNESCO sənədləri və beynəlxalq akademik nəşrlər',
    archiveDrawerTitle: 'Saxlanılmış Arxiv Kolleksiyanız',
    archiveEmptyMessage: 'Hələ heç bir tarixi hadisə və ya sənəd saxlanılmayıb. Kartlardakı "Arxivə Saxla" düyməsini sıxın.',
    clearArchive: 'Arxivi Təmizlə',
    mapTitle: 'Azərbaycanın Tarixi Coğrafiyası',
    mapSubtitle: 'Minilliklər boyunca paytaxtlar, qalalar və sivilizasiya ocaqları',
    mapNote: 'Qeyd: Tarixi xəritələr fərqli dövrlərdəki dövlətlərin faktiki nüfuz dairələrini əks etdirir və müasir beynəlxalq sərhədlərdən fərqlənir.',
    allPeriods: 'Bütün Dövrlər',
    viewDetails: 'Ətraflı Bax',
    backwardScrollNotice: 'Aşağı diyirlədikcə keçmişə doğru səyahət edirsiniz',
    temporalScrubber: 'Zaman Xətti Tənzimləyicisi',
    returnToPresent: 'Müasir Dövrə Qayıt (2020)'
  },
  en: {
    siteTitle: 'History of Azerbaijan',
    siteSubtitle: 'Interactive Digital Museum & Time Odyssey',
    heroBadge: 'FROM 2020 CE TO 12,000 BCE',
    heroHeading: 'CHRONICLES OF AZERBAIJAN: A VOYAGE THROUGH MILLENNIA',
    heroSubheading: 'Embark on a reverse chronological voyage from the 2020 modern triumph backward through the Shirvanshahs, Atabegs, Caucasian Albania, and the prehistoric petroglyphic dawn of Gobustan.',
    beginJourney: 'Begin Journey (2020)',
    exploreOrbit: 'Cosmic Orbit Navigator',
    scrollPrompt: 'Scroll down to travel backward through time',
    timelineNav: 'Chronological Odyssey',
    orbitNav: 'Cosmic Orbit',
    mapNav: 'Historical Map',
    sourcesNav: 'Academic Sources',
    archiveNav: 'My Archive',
    soundOn: 'Mute Soundscape',
    soundOff: 'Museum Soundscape',
    yearDisplayPrefix: 'HISTORICAL TEMPORAL COORDINATE:',
    keyFiguresLabel: 'KEY HISTORICAL FIGURES',
    locationLabel: 'LOCATION & GEOGRAPHY',
    saveToArchive: 'Save to Archive',
    savedInArchive: 'Saved to Archive',
    exploreEra: 'Explore Era',
    askAIGuide: 'Ask AI Guide',
    deepDiveClose: 'Close',
    aiGuideTitle: 'Celestial Curator AI — History Guide',
    aiGuideSubtitle: 'How can I help you explore Azerbaijani history today?',
    aiInputPlaceholder: 'What do you want to know about our history?',
    currentViewingContext: 'Active Historical Context',
    sourcesModalTitle: 'Historical Sources & Bibliography',
    sourcesModalSubtitle: 'Archival records, UNESCO documentation, and verified historiography',
    archiveDrawerTitle: 'Your Saved Archival Collection',
    archiveEmptyMessage: 'No historical artifacts saved yet. Click "Save to Archive" on any milestone.',
    clearArchive: 'Clear Archive',
    mapTitle: 'Historical Geography of Azerbaijan',
    mapSubtitle: 'Citadels, dynastic capitals, and architectural monuments across millennia',
    mapNote: 'Note: Historical maps reflect fluctuating spheres of sovereignty and cultural regions, distinct from contemporary political boundaries.',
    allPeriods: 'All Periods',
    viewDetails: 'View Details',
    backwardScrollNotice: 'Scrolling downward travels backward into antiquity',
    temporalScrubber: 'Temporal Timeline Scrubber',
    returnToPresent: 'Return to Present (2020)'
  },
  ru: {
    siteTitle: 'История Азербайджана',
    siteSubtitle: 'Интерактивный Цифровой Музей и Путешествие во Времени',
    heroBadge: 'ОТ 2020 ГОДА ДО 12 000 ЛЕТ ДО Н.Э.',
    heroHeading: 'ИСТОРИЯ АЗЕРБАЙДЖАНА: СКВОЗЬ ТОЛЩУ ТЫСЯЧЕЛЕТИЙ',
    heroSubheading: 'Совершите обратное путешествие во времени: от современных событий 2020 года к Ширваншахам, Атабекам, Кавказской Албании и петроглифам Гобустана.',
    beginJourney: 'Начать Путешествие (2020)',
    exploreOrbit: 'Космический Орбитальный Навигатор',
    scrollPrompt: 'Прокручивайте вниз, чтобы отправиться в прошлое',
    timelineNav: 'Лента Времени',
    orbitNav: 'Космическая Орбита',
    mapNav: 'Историческая Карта',
    sourcesNav: 'Академические Источники',
    archiveNav: 'Мой Архив',
    soundOn: 'Выключить Звук',
    soundOff: 'Атмосферный Звук',
    yearDisplayPrefix: 'ВРЕМЕННАЯ КООРДИНАТА:',
    keyFiguresLabel: 'ИСТОРИЧЕСКИЕ ДЕЯТЕЛИ',
    locationLabel: 'МЕСТОПОЛОЖЕНИЕ И ЦЕНТР',
    saveToArchive: 'Сохранить в Архив',
    savedInArchive: 'В Архиве',
    exploreEra: 'Исследовать Эпоху',
    askAIGuide: 'Спросить ИИ-Гида',
    deepDiveClose: 'Закрыть',
    aiGuideTitle: 'ИИ-Куратор — Исторический Гид',
    aiGuideSubtitle: 'Что вы хотите узнать об истории Азербайджана?',
    aiInputPlaceholder: 'Что вы хотите узнать о нашей истории?',
    currentViewingContext: 'Активный Контекст Эпохи',
    sourcesModalTitle: 'Исторические Источники и Библиография',
    sourcesModalSubtitle: 'Архивные документы, реестры ЮНЕСКО и академические издания',
    archiveDrawerTitle: 'Ваша Архивная Коллекция',
    archiveEmptyMessage: 'В архиве пока ничего нет. Нажмите "Сохранить в Архив" на любой карточке.',
    clearArchive: 'Очистить Архив',
    mapTitle: 'Историческая География Азербайджана',
    mapSubtitle: 'Крепости, столицы династий и очаги цивилизации',
    mapNote: 'Примечание: Исторические карты отражают зоны влияния различных эпох и отличаются от современных границ.',
    allPeriods: 'Все Эпохи',
    viewDetails: 'Подробнее',
    backwardScrollNotice: 'Прокрутка вниз ведет в глубь веков',
    temporalScrubber: 'Временной Регулятор',
    returnToPresent: 'Вернуться в Настоящее (2020)'
  }
};
