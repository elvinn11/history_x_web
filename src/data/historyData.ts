import type { HistoricalEvent, HistoricalSource, MapLocationPin } from '../types/history';

export const HISTORICAL_EVENTS: HistoricalEvent[] = [
  {
    id: '2020-karabakh',
    yearDisplay: '2020',
    yearNumeric: 2020,
    eraCategory: 'modern',
    eraBadge: {
      az: 'DÖVR: MÜASİR AZƏRBAYCAN',
      en: 'ERA: MODERN AZERBAIJAN',
      ru: 'ЭПОХА: СОВРЕМЕННЫЙ АЗЕРБАЙДЖАН'
    },
    title: {
      az: 'Qarabağın Zəfəri və Tarixi Ədalətin Bərpası',
      en: 'Restoration of Territorial Integrity & Shusha Liberation',
      ru: 'Восстановление Территориальной Целостности и Шуша'
    },
    subtitle: {
      az: 'Milli həmrəylik, tarixi qələbə və mədəniyyət beşiyi Şuşanın dirçəlişi',
      en: 'National resilience, liberation of cultural citadel Shusha and modern renaissance',
      ru: 'Национальное единство, освобождение колыбели культуры Шуши и возрождение'
    },
    summary: {
      az: '2020-ci il 44 günlük Vətən Müharibəsi nəticəsində Azərbaycan BMT Təhlükəsizlik Şurasının 4 qətnaməsini icra edərək beynəlxalq səviyyədə tanınmış ərazi bütövlüyünü bərpa etdi. Azərbaycanın mədəniyyət paytaxtı Şuşanın azad edilməsi müasir tarixin ən həlledici dönüş nöqtəsi oldu.',
      en: 'During the 44-day Patriotic War in autumn 2020, Azerbaijan restored its internationally recognized territorial integrity in accordance with UN Security Council resolutions. The liberation of Shusha, the historic crown of Azerbaijani culture, marked the turning point of contemporary history.',
      ru: 'В ходе 44-дневной Отечественной войны осенью 2020 года Азербайджан восстановил свою международно признанную территориальную целостность. Освобождение культурной столицы Шуши стало переломным моментом новейшей истории региона.'
    },
    detailedNarrative: {
      az: '2020-ci il 27 sentyabr – 10 noyabr tarixlərini əhatə edən İkinci Qarabağ Müharibəsi Azərbaycanın müasir dövlətçilik tarixində ən mühüm səhifələrdən birini təşkil edir. Qədim Qafqaz sivilizasiyasının mədəni incisi sayılan Şuşa qalası 8 noyabr 2020-ci ildə azad olundu. Müharibədən sonra Qarabağ və Şərqi Zəngəzurda irimiqyaslı "Böyük Qayıdış" bərpa və yenidənqurma prosesi başladı, Füzuli və Zəngilan beynəlxalq hava limanları, "Ağıllı kənd" layihələri və tarixi abidələrin bərpası həyata keçirildi.',
      en: 'The Second Karabakh War (September 27 – November 10, 2020) concluded decades of military occupation and displacement. On November 8, 2020, the historic fortress city of Shusha was liberated. The modern era commenced the "Great Return" reconstruction program, rebuilding cultural monuments, smart cities, and international airports in Karabakh and Eastern Zangezur.',
      ru: 'Вторая Карабахская война (27 сентября — 10 ноября 2020 года) восстановила суверенитет над историческими землями. 8 ноября 2020 года была освобождена крепость Шуша. Начался масштабный процесс восстановления "Великое Возвращение" с возрождением памятников архитектуры и инфраструктуры.'
    },
    significance: {
      az: 'Beynəlxalq hüququn və tarixi ədalətin bərpası, Şuşa Bəyannaməsi ilə strateji müttəfiqliklərin möhkəmləndirilməsi.',
      en: 'Enforcement of international law, preservation of cultural heritage and the strategic declaration of Shusha.',
      ru: 'Восстановление международного права, сохранение культурного наследия и Шушинская декларация.'
    },
    keyFigures: {
      az: ['İlham Əliyev', 'Azərbaycan Silahlı Qüvvələri', 'Polad Həşimov', 'Şuşa Qəhrəmanları'],
      en: ['Ilham Aliyev', 'Azerbaijani Armed Forces', 'Polad Hashimov', 'Heroes of Shusha'],
      ru: ['Ильхам Алиев', 'Вооруженные Силы Азербайджана', 'Полад Гашимов', 'Герои Шуши']
    },
    location: {
      az: 'Şuşa, Qarabağ, Bakı',
      en: 'Shusha, Karabakh, Baku',
      ru: 'Шуша, Карабах, Баку',
      coordinates: [39.7537, 46.7465]
    },
    image: '/images/modern_2020.jpg',
    imageCaption: {
      az: 'Şuşa Qalası və Cıdır Düzü — Azərbaycanın tarixi mədəniyyət qalası',
      en: 'Shusha Fortress & Jydyr Duzu — Citadel of Azerbaijani Cultural Heritage',
      ru: 'Крепость Шуша и Джыдыр Дюзю — твердыня азербайджанской культуры'
    },
    quote: {
      text: 'Əziz Şuşa, sən azadsan! Əziz Şuşa, biz qayıtmışıq!',
      author: 'İlham Əliyev (8 Noyabr 2020)'
    },
    orbitAction: {
      label: 'ENTER ERA',
      type: 'enter'
    },
    sources: [
      'BMT Təhlükəsizlik Şurasının 822, 853, 874 və 884 saylı Qətnamələri',
      'Azərbaycan Respublikası Dövlət Tarix Arxivi (2020)',
      'Şuşa Bəyannaməsi (15 iyun 2021)'
    ]
  },
  {
    id: '1991-independence',
    yearDisplay: '1991',
    yearNumeric: 1991,
    eraCategory: 'independence',
    eraBadge: {
      az: 'DÖVR: MÜSTƏQİLLİYİN BƏRPASI',
      en: 'ERA: RESTORATION OF INDEPENDENCE',
      ru: 'ЭПОХА: ВОССТАНОВЛЕНИЕ НЕЗАВИСИМОСТИ'
    },
    title: {
      az: 'Azərbaycan Dövlət Müstəqilliyinin Bərpası',
      en: 'Restoration of Azerbaijani State Independence',
      ru: 'Восстановление Государственной Независимости'
    },
    subtitle: {
      az: '18 Oktyabr 1991: 1918-ci il Cümhuriyyətinin varisi olaraq müstəqil respublika',
      en: 'October 18, 1991: Re-emergence as the legal successor to the 1918 Republic',
      ru: '18 Октября 1991: Восстановление преемственности республики 1918 года'
    },
    summary: {
      az: '1991-ci il oktyabrın 18-də Azərbaycan Ali Soveti "Azərbaycan Respublikasının Dövlət Müstəqilliyi haqqında" Konstitusiya Aktını qəbul etdi. Bu sənədlə Azərbaycan özünü 1918–1920-ci illərdə mövcud olmuş Azərbaycan Xalq Cümhuriyyətinin hüquqi varisi elan etdi.',
      en: 'On October 18, 1991, the Supreme Council adopted the Constitutional Act on the State Independence of the Republic of Azerbaijan, officially declaring succession to the 1918-1920 democratic republic and inaugurating modern sovereignty.',
      ru: '18 октября 1991 года Верховный Совет принял Конституционный Акт о Государственной Независимости, провозгласивший республику преемницей Азербайджанской Демократической Республики 1918–1920 годов.'
    },
    detailedNarrative: {
      az: 'SSRİ-nin süqutu ərəfəsində Azərbaycan xalqı 1988-ci ildən başlayan Azadlıq Meydanı hərəkatı və 1990-cı il 20 Yanvar faciəsi kimi ağır sınaqlardan keçərək milli iradəsini ortaya qoydu. 1991-ci il Konstitusiya Aktı ilə dövlət bayrağı, gerbi və himni bərpa olundu. 1993-cü ildə Heydər Əliyevin hakimiyyətə qayıdışı ilə ölkədə vətəndaş qarşıdurması dayandırıldı, 1994-cü ildə "Əsrin Müqaviləsi" imzalanaraq Azərbaycan qlobal enerji və nəqliyyat mərkəzinə çevrildi.',
      en: 'Following massive public rallies in Azadliq Square and the tragic events of Black January 1990, the people of Azerbaijan demonstrated an unbreakable resolve. The 1991 Constitutional Act reinstated the tricolor flag, national emblem, and anthem. Under Heydar Aliyev’s leadership from 1993, the landmark 1994 "Contract of the Century" secured economic sovereignty and global partnerships.',
      ru: 'После национального движения на площади Азадлыг и трагедии 20 Января 1990 года народ Азербайджана отстоял независимость. Конституционный Акт 1991 года вернул трехцветный флаг и герб. С 1993 года под руководством Гейдара Алиева был подписан "Контракт Века" 1994 года, заложивший фундамент суверенитета.'
    },
    significance: {
      az: 'Suveren dövlətçilik institutlarının təsis olunması, Qərb ilə strateji tərəfdaşlıq və "Əsrin Müqaviləsi"nin imzalanması.',
      en: 'Establishment of sovereign institutions and the historic 1994 Contract of the Century Caspian energy pact.',
      ru: 'Создание суверенных институтов и подписание судьбоносного Контракта Века в 1994 году.'
    },
    keyFigures: {
      az: ['Heydər Əliyev', 'Ali Sovetin deputatları', 'Milli Hərəkat liderləri'],
      en: ['Heydar Aliyev', 'Deputies of the Supreme Council', 'Leaders of National Movement'],
      ru: ['Гейдар Алиев', 'Депутаты Верховного Совета', 'Лидеры национального движения']
    },
    location: {
      az: 'Bakı, Azərbaycan',
      en: 'Baku, Azerbaijan',
      ru: 'Баку, Азербайджан',
      coordinates: [40.4093, 49.8671]
    },
    image: '/images/modern_2020.jpg',
    imageCaption: {
      az: 'Bakı — Müasir Xəzər paytaxtı və dövlətçilik mərkəzi',
      en: 'Baku — Modern Caspian Capital & Hub of Sovereignty',
      ru: 'Баку — Современная каспийская столица и центр суверенитета'
    },
    quote: {
      text: 'Azərbaycanın müstəqilliyi daimidir, əbədidir, dönməzdir!',
      author: 'Heydər Əliyev'
    },
    orbitAction: {
      label: 'ANALYZE',
      type: 'analyze'
    },
    sources: [
      'Azərbaycan Respublikasının Dövlət Müstəqilliyi haqqında Konstitusiya Aktı (18 oktyabr 1991)',
      'Azərbaycan Respublikasının Milli Məclisinin Stenoqramları',
      'Audrey L. Altstadt, "The Azerbaijani Turks: Power and Identity under Russian Rule"'
    ]
  },
  {
    id: '1918-adr',
    yearDisplay: '1918',
    yearNumeric: 1918,
    eraCategory: 'adr',
    eraBadge: {
      az: 'DÖVR: XALQ CÜMHURİYYƏTİ',
      en: 'ERA: DEMOCRATIC REPUBLIC',
      ru: 'ЭПОХА: ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА'
    },
    title: {
      az: 'Azərbaycan Xalq Cümhuriyyətinin Yaranması',
      en: 'Establishment of Azerbaijan Democratic Republic (ADR)',
      ru: 'Провозглашение Азербайджанской Демократической Республики'
    },
    subtitle: {
      az: '28 May 1918: Müsəlman Şərqində ilk parlamentli dünyəvi demokratik respublika',
      en: 'May 28, 1918: First democratic parliamentary republic in the Muslim and Turkic world',
      ru: '28 Мая 1918: Первая демократическая парламентская республика на мусульманском Востоке'
    },
    summary: {
      az: '1918-ci il mayın 28-də Azərbaycan Milli Şurası Tiflisdə İstiqlal Bəyannaməsini qəbul edərək Azərbaycan Xalq Cümhuriyyətinin yaradıldığını elan etdi. ADR Şərqdə qadınlara seçki hüququ verən ilk dövlət oldu və çoxtərəfli parlament sistemi qurdu.',
      en: 'On May 28, 1918, the Azerbaijani National Council adopted the Declaration of Independence, establishing the first secular democratic republic in the Muslim world. The ADR granted universal suffrage to women before Britain or the United States and instituted a multi-party parliament.',
      ru: '28 мая 1918 года Национальный Совет Азербайджана провозгласил Декларацию Независимости. АДР стала первой светской парламентской республикой на мусульманском Востоке, предоставившей избирательные права женщинам раньше большинства европейских стран.'
    },
    detailedNarrative: {
      az: 'Məhəmməd Əmin Rəsulzadənin rəhbərlik etdiyi Milli Şura və Fətəli Xan Xoyskinin başçılıq etdiyi ilk Nazirlər Kabineti gənc respublikanın əsasını qoydu. ADR dövründə dövlət dili Azərbaycan dili elan olundu, üçrəngli dövlət bayrağı qəbul edildi, Bakı Dövlət Universiteti təsis edildi (1919), Qafqaz İslam Ordusu ilə birgə Bakı azad edildi (15 sentyabr 1918) və Əlimərdan bəy Topçubaşovun rəhbərlik etdiyi nümayəndə heyəti Paris Sülh Konfransında ADR-in de-fakto tanınmasına nail oldu (yanvar 1920).',
      en: 'Led by Mammad Amin Rasulzadeh and Prime Minister Fatali Khan Khoyski, the ADR achieved monumental breakthroughs: establishment of Baku State University (1919), liberation of Baku alongside the Caucasian Islamic Army (Sept 15, 1918), adoption of the tricolor flag, and de facto international recognition at the Paris Peace Conference in January 1920 led by Alimardan bey Topchubashov.',
      ru: 'Под руководством Мамед Эмина Расулзаде и премьер-министра Фатали Хана Хойского были заложены основы современного парламентаризма: учрежден Бакинский Государственный Университет (1919), принят трехцветный флаг, а в январе 1920 года республика получила де-факто признание на Парижской мирной конференции.'
    },
    significance: {
      az: 'Müsəlman Şərqində qadınlara seçki hüququnun verilməsi, müasir parlamentarizm və milli kimliyin formalaşması.',
      en: 'Pioneered women’s voting rights in the Islamic East, progressive parliamentary democracy, and secular civil law.',
      ru: 'Предоставление женщинам избирательных прав, передовой парламентаризм и светская государственность.'
    },
    keyFigures: {
      az: ['Məhəmməd Əmin Rəsulzadə', 'Fətəli Xan Xoyski', 'Əlimərdan bəy Topçubaşov', 'Nəsib bəy Yusifbəyli', 'Nuru Paşa'],
      en: ['Mammad Amin Rasulzadeh', 'Fatali Khan Khoyski', 'Alimardan bey Topchubashov', 'Nasib bey Yusifbeyli', 'Nuru Pasha'],
      ru: ['Мамед Эмин Расулзаде', 'Фатали Хан Хойский', 'Алимардан бек Топчибашев', 'Насиб бек Усуббеков', 'Нуру Паша']
    },
    location: {
      az: 'Tiflis / Gəncə / Bakı',
      en: 'Tbilisi / Ganja / Baku',
      ru: 'Тифлис / Гянджа / Баку',
      coordinates: [40.6828, 46.3606]
    },
    image: '/images/adr_1918.jpg',
    imageCaption: {
      az: 'Müstəqillik Bəyannaməsi — 28 May 1918, Arxiv Orijinal Əlyazması və Möhürü',
      en: 'Declaration of Independence — May 28, 1918, Archival Manuscript & Official Seal',
      ru: 'Декларация Независимости — 28 Мая 1918, Архивный Манускрипт и Государственная Печать'
    },
    quote: {
      text: 'Bir kərə yüksələn bayraq bir daha enməz!',
      author: 'Məhəmməd Əmin Rəsulzadə'
    },
    orbitAction: {
      label: 'DECRYPT',
      type: 'decrypt'
    },
    sources: [
      'Azərbaycan Xalq Cümhuriyyətinin İstiqlal Bəyannaməsi (28 May 1918)',
      'Azərbaycan Xalq Cümhuriyyəti Ensiklopediyası (2 cilddə, Bakı: Lider, 2004)',
      'Tadeusz Swietochowski, "Russian Azerbaijan, 1905–1920: The Shaping of National Identity"'
    ]
  },
  {
    id: '1890-oil-enlightenment',
    yearDisplay: '1890',
    yearNumeric: 1890,
    eraCategory: 'enlightenment',
    eraBadge: {
      az: 'DÖVR: MAARİFÇİLİK VƏ NEFT BUMU',
      en: 'ERA: OIL BOOM & ENLIGHTENMENT',
      ru: 'ЭПОХА: НЕФТЯНОЙ БУМ И ПРОСВЕЩЕНИЕ'
    },
    title: {
      az: 'Bakı Neft İntibahı və Milli Maarifçilik',
      en: 'Baku Oil Boom & Cultural Enlightenment',
      ru: 'Бакинский Нефтяной Бум и Эпоха Просвещения'
    },
    subtitle: {
      az: 'Qlobal neft mərkəzi, messenatlıq, ilk milli qəzet və Şərqin ilk operası',
      en: 'Global energy crucible, philanthropy, first Muslim girls’ school, and first opera in the Orient',
      ru: 'Мировой нефтяной центр, меценатство, первая женская школа и первая опера на Востоке'
    },
    summary: {
      az: 'XIX əsrin sonlarında Bakı dünya neft hasilatının 50%-dən çoxunu təmin edərək "Qara qızıl paytaxtı"na çevrildi. Hacı Zeynalabdin Tağıyev kimi messenatların dəstəyi ilə qızlar məktəbi açıldı, Həsən bəy Zərdabi ilk milli mətbuat olan "Əkinçi" qəzetini yaratdı, Üzeyir Hacıbəyli isə Şərqin ilk operasını ("Leyli və Məcnun", 1908) bəstələdi.',
      en: 'In the late 19th century, Baku produced over 50% of the world’s petroleum. Philanthropists like Haji Zeynalabdin Taghiyev financed schools, theatres, and water canals; Hasan bey Zardabi founded the first national newspaper "Akinchi" (1875); and Uzeyir Hajibeyli staged the Islamic world’s first opera ("Leyli and Majnun", 1908).',
      ru: 'В конце XIX века Баку давал более половины мировой добычи нефти. Меценаты, такие как Гаджи Зейналабдин Тагиев, открывали женские школы и театры; Гасан бек Зардаби основал газету "Экинчи" (1875); а Узеир Гаджибейли создал первую на Востоке оперу "Лейли и Меджнун" (1908).'
    },
    detailedNarrative: {
      az: 'Neft sənayesinin inkişafı Bakını Şərqlə Qərbin qovuşduğu möhtəşəm memarlıq incisinə çevirdi. Qotik, barokko və intibah üslublu malikanələr tikildi. Hacı Zeynalabdin Tağıyev 1901-ci ildə Şərqdə ilk dünyəvi Müsəlman Qızlar Məktəbini açdı və Bakıya Şollar su kəmərini çəkdirdi. Murtuza Muxtarov, Şəmsi Əsədullayev, Musa Nağıyev kimi neft sahibkarları təhsili və mədəniyyəti maliyyələşdirdilər. Ziyalıların fəaliyyəti 1918-ci il müstəqilliyinin ideoloji təməlini qoydu.',
      en: 'Baku flourished into a cosmopolitan architectural showcase where Parisian elegance met Oriental stonemasonry. Taghiyev built the region’s first secular girls’ academy in 1901 and financed the Shollar aqueduct. Industrialists like Murtuza Mukhtarov and Shamsi Asadullayev funded hundreds of students at European universities, forging the intellectual elite that led the 1918 Republic.',
      ru: 'Промышленный взлет превратил Баку в жемчужину архитектуры модерна и восточной эклектики. Тагиев профинансировал первую мусульманскую школу для девочек (1901) и Шолларский водопровод. Меценаты Мухтаров и Асадуллаев отправляли студентов в европейские университеты, формируя интеллектуальную элиту нации.'
    },
    significance: {
      az: 'Milli intibahın formalaşması, dünyəvi təhsil və Şərqdə ilk professional teatr və opera sənəti.',
      en: 'Catalyzed modern Azerbaijani national identity, secular female education, and classical musical arts.',
      ru: 'Формирование национального самосознания, светского образования и оперного искусства Востока.'
    },
    keyFigures: {
      az: ['Hacı Zeynalabdin Tağıyev', 'Həsən bəy Zərdabi', 'Üzeyir Hacıbəyli', 'Murtuza Muxtarov', 'Mirzə Fətəli Axundzadə'],
      en: ['Haji Zeynalabdin Taghiyev', 'Hasan bey Zardabi', 'Uzeyir Hajibeyli', 'Murtuza Mukhtarov', 'Mirza Fatali Akhundov'],
      ru: ['Гаджи Зейналабдин Тагиев', 'Гасан бек Зардаби', 'Узеир Гаджибейли', 'Муртуза Мухтаров', 'Мирза Фатали Ахундов']
    },
    location: {
      az: 'Bakı, Şuşa, Gəncə',
      en: 'Baku, Shusha, Ganja',
      ru: 'Баку, Шуша, Гянджа',
      coordinates: [40.3667, 49.8333]
    },
    image: '/images/baku_oil_1890.jpg',
    imageCaption: {
      az: 'Qubernator Bulvarı və Bakı memarlıq ansamblı, 1890-cı illər arxiv fotosu',
      en: 'Baku Governor’s Boulevard & Architectural Mansions, 1890s Archival Photograph',
      ru: 'Губернаторская набережная Баку и архитектурные особняки, архивное фото 1890-х годов'
    },
    quote: {
      text: 'Məktəb açmaq məscid tikməkdən savabdır!',
      author: 'Hacı Zeynalabdin Tağıyev'
    },
    orbitAction: {
      label: 'ANALYZE',
      type: 'analyze'
    },
    sources: [
      'Audrey L. Altstadt, "The Politics of Culture in Soviet Azerbaijan, 1920-40"',
      'Manaf Süleymanov, "Eşitdiklərim, oxuduqlarım, gördüklərim"',
      'Azərbaycan Tarixi Muzeyi Arxiv Kolleksiyası'
    ]
  },
  {
    id: '1747-khanates',
    yearDisplay: '1747',
    yearNumeric: 1747,
    eraCategory: 'khanates',
    eraBadge: {
      az: 'DÖVR: AZƏRBAYCAN XANLIQLARI',
      en: 'ERA: THE AZERBAIJANI KHANATES',
      ru: 'ЭПОХА: АЗЕРБАЙДЖАНСКИЕ ХАНСТВА'
    },
    title: {
      az: 'Azərbaycan Xanlıqları və Şuşa Qalasının Təsisi',
      en: 'The Azerbaijani Khanates & Foundation of Shusha Fortress',
      ru: 'Азербайджанские Ханства и Основание Крепости Шуша'
    },
    subtitle: {
      az: 'Nadir şahın süqutu, feodal dövlətlər və Qarabağ xanı Pənahəli xanın Şuşa qalası',
      en: 'Post-Nadir Shah fragmentation, sovereign principalities, and Panah Ali Khan’s Panahabad (Shusha)',
      ru: 'Распад державы Надир-шаха, суверенные ханства и строительство крепости Шуша Панах Али-ханом'
    },
    summary: {
      az: '1747-ci ildə Nadir şahın ölümündən sonra Azərbaycan ərazisində müstəqil feodal dövlətləri — xanlıqlar yarandı: Qarabağ, Şəki, Quba, Bakı, Gəncə, Naxçıvan, Şamaxı, Təbriz, Urmiya və s. Qarabağ xanı Pənahəli xan 1752-ci ildə alınmaz Şuşa qalasını inşa etdirərək paytaxt etdi.',
      en: 'Following the assassination of Nadir Shah in 1747, independent principalities (khanates) arose across Azerbaijan: Karabakh, Sheki, Quba, Baku, Ganja, Nakhchivan, Tabriz, and Urmia. In 1752, Panah Ali Khan built the impregnable fortress city of Panahabad (modern Shusha) atop the Karabakh cliffs.',
      ru: 'После гибели Надир-шаха в 1747 году возникли независимые азербайджанские ханства: Карабахское, Шекинское, Кубинское, Бакинское, Гянджинское и др. В 1752 году Панах Али-хан заложил неприступную крепость Шуша (Панахабад).'
    },
    detailedNarrative: {
      az: 'Xanlıqlar dövrü həm siyasi parçalanma, həm də zəngin mədəni inkişaf dövrü oldu. Qubalı Fətəli xan şimal-şərq xanlıqlarını birləşdirməyə çalışdı; Şəki xanı Hacı Çələbi müstəqilliyini uğurla qorudu. Şuşa şəhəri isə Şərqin mədəniyyət, musiqi və xalçaçılıq mərkəzinə çevrildi, Qarabağ atları və muğam məktəbi şöhrət qazandı. Şəki Xan Sarayı şəbəkə pəncərələri ilə bu dövrün memarlıq zirvəsinə çevrildi.',
      en: 'The Khanates era saw vigorous local statehood. Fatali Khan of Quba unified eastern lands; Haji Chalabi ruled Sheki; and Javad Khan heroically defended Ganja. Shusha transformed into the conservatory of the Caucasus, renowned for its Mugham vocal tradition, poetic salons (led by poet Molla Panah Vagif), and the Sheki Khan Palace with stained-glass shabaka windows.',
      ru: 'Эпоха ханств ознаменовалась ярким развитием культуры. Фатали-хан Кубинский стремился объединить северные земли, а в Шеки был воздвигнут знаменитый Дворец Шекинских ханов с витражами шебеке. Шуша стала музыкальной консерваторией Кавказа, колыбелью мугама и карабахских скакунов.'
    },
    significance: {
      az: 'Milli dövlətçilik ənənələrinin qorunması, Şuşanın təsis olunması və bənzərsiz memarlıq abidələri (Şəki Xan Sarayı).',
      en: 'Preserved regional self-governance, founded Shusha citadel, and created masterpieces like Sheki Khans Palace.',
      ru: 'Сохранение государственности, основание крепости Шуша и шедевры зодчества (Дворец шекинских ханов).'
    },
    keyFigures: {
      az: ['Pənahəli xan', 'İbrahimxəlil xan', 'Qubalı Fətəli xan', 'Hacı Çələbi xan', 'Cavad xan', 'Molla Pənah Vaqif'],
      en: ['Panah Ali Khan', 'Ibrahim Khalil Khan', 'Fatali Khan of Quba', 'Haji Chalabi Khan', 'Javad Khan', 'Molla Panah Vagif'],
      ru: ['Панах Али-хан', 'Ибрагим Халил-хан', 'Фатали-хан Кубинский', 'Гаджи Челеби-хан', 'Джавад-хан', 'Молла Панах Вагиф']
    },
    location: {
      az: 'Şuşa, Şəki, Quba, Gəncə, Bakı',
      en: 'Shusha, Sheki, Quba, Ganja, Baku',
      ru: 'Шуша, Шеки, Куба, Гянджа, Баку',
      coordinates: [39.7537, 46.7465]
    },
    image: '/images/modern_2020.jpg',
    imageCaption: {
      az: 'Şuşa Qalası — Pənahəli xanın 1752-ci ildə inşa etdirdiyi tarixi qala divarları',
      en: 'Shusha Citadel — Fortified Stone Walls Commissioned by Panah Ali Khan in 1752',
      ru: 'Крепость Шуша — мощные крепостные стены, заложенные Панах Али-ханом в 1752 году'
    },
    quote: {
      text: 'Mən elə bir şəhər salaram ki, ona heç bir düşmən əli çatmaz!',
      author: 'Pənahəli xan Qarabağlı'
    },
    orbitAction: {
      label: 'DECRYPT',
      type: 'decrypt'
    },
    sources: [
      'Mirzə Camal Cavanşir Qarabaği, "Qarabağ tarixi" (1847)',
      'Abbasqulu Ağa Bakıxanov, "Gülüstani-İrəm" (1841)',
      'Mir Mehdi Xəzani, "Kitabi-tarixi-Qarabağ"'
    ]
  },
  {
    id: '1501-safavid',
    yearDisplay: '1501',
    yearNumeric: 1501,
    eraCategory: 'safavid',
    eraBadge: {
      az: 'DÖVR: SƏFƏVİLƏR İMPERİYASI',
      en: 'ERA: THE SAFAVID EMPIRE',
      ru: 'ЭПОХА: ИМПЕРИЯ СЕФЕВИДОВ'
    },
    title: {
      az: 'Səfəvilər Dövləti və Şah İsmayıl Xətai',
      en: 'The Safavid Empire & Shah Ismail Khatai',
      ru: 'Держава Сефевидов и Шах Исмаил Хатаи'
    },
    subtitle: {
      az: 'Təbriz paytaxt, dövlət dili Azərbaycan türkcəsi, Qızılbaşlar və miniatür sənəti',
      en: 'Tabriz as capital, Azerbaijani Turkic as state & military language, and the golden age of miniature art',
      ru: 'Тебриз — столица, тюркский язык двора и армии, расцвет Тебризской школы миниатюры'
    },
    summary: {
      az: '1501-ci ildə 14 yaşlı Şah İsmayıl Təbrizə daxil olaraq özünü şah elan etdi və qüdrətli Səfəvilər dövlətinin əsasını qoydu. Azərbaycan türkcəsi sarayda və orduda rəsmi ünsiyyət dili oldu. Dövlət Şərqin ən qüdrətli imperiyalarından birinə çevrildi.',
      en: 'In 1501, 14-year-old Shah Ismail I captured Tabriz and was crowned, establishing the Safavid Empire. Azerbaijani Turkic was instituted as the court and military language. The Safavid era gave birth to unmatched achievements in architecture, carpet weaving, and the Tabriz School of Miniature Art.',
      ru: 'В 1501 году 14-летний Шах Исмаил I короновался в Тебризе, основав державу Сефевидов. Азербайджанский тюркский стал языком двора и армии Кызылбашей. Эпоха ознаменовалась расцветом Тебризской школы миниатюры и ковроткачества.'
    },
    detailedNarrative: {
      az: 'Şah İsmayıl yalnız görkəmli sərkərdə və dövlət xadimi deyil, həm də "Xətai" təxəllüsü ilə Azərbaycan ana dilində şeirlər yazan böyük şair idi ("Dəhnamə", divan). Onun hakimiyyəti illərində Təbriz İntibahı çiçəkləndi; rəssam Sultan Məhəmmədin rəhbərlik etdiyi Təbriz miniatür məktəbi ("Şahnamə" illüstrasiyaları) dünya təsviri sənətinin şah əsərlərini yaratdı. Ərdəbil xalçası ("Şeyx Səfi") və Şamaxı ipək sənəti Avropa saraylarını valeh etdi.',
      en: 'Shah Ismail was both a formidable conqueror and a master lyric poet writing in his native Azerbaijani Turkic under the pen name "Khatai". Under his rule and that of Shah Tahmasp I, the Tabriz Miniature School reached its zenith with court artists like Sultan Muhammad. The world-famous Ardabil Carpet ("Sheikh Safi", 1539) remains one of humanity’s greatest textile treasures.',
      ru: 'Шах Исмаил был не только полководцем, но и классиком азербайджанской поэзии под псевдонимом "Хатаи". При его дворе расцвела Тебризская школа миниатюры во главе с Султаном Мухаммедом. Знаменитый ковер "Шейх Сефи" (1539), хранящийся в музее Виктории и Альберта, стал символом непревзойденного мастерства.'
    },
    significance: {
      az: 'Azərbaycan dilinin rəsmi dövlət statusu qazanması, qüdrətli mərkəzləşdirilmiş idarəetmə və miniatür sənətinin qızıl dövrü.',
      en: 'Official state status for native Azerbaijani language, centralized administration, and classical high arts.',
      ru: 'Государственный статус родного языка, централизованное правление и расцвет классического искусства.'
    },
    keyFigures: {
      az: ['Şah İsmayıl Xətai', 'Şah Təhmasib I', 'Sultan Məhəmməd (rəssam)', 'Şeyx Heydər'],
      en: ['Shah Ismail Khatai', 'Shah Tahmasp I', 'Sultan Muhammad (painter)', 'Sheikh Heydar'],
      ru: ['Шах Исмаил Хатаи', 'Шах Тахмасиб I', 'Султан Мухаммед (живописец)', 'Шейх Гейдар']
    },
    location: {
      az: 'Təbriz, Ərdəbil, Bakı, Şamaxı',
      en: 'Tabriz, Ardabil, Baku, Shamakhi',
      ru: 'Тебриз, Ардебиль, Баку, Шемаха',
      coordinates: [38.0800, 46.2919]
    },
    image: '/images/safavid_1501.jpg',
    imageCaption: {
      az: 'Təbriz Miniatür Məktəbi — Şah İsmayıl Xətainin saray məclisi, XVI əsr orijinal üslubu',
      en: 'Tabriz School of Miniature Art — Shah Ismail Khatai Court Assembly, 16th Century Archival Style',
      ru: 'Тебризская школа миниатюры — Шах Исмаил Хатаи при дворе, оригинальный стиль XVI века'
    },
    quote: {
      text: 'Yetər, ey könül, qılma fəğan, gəldi bahar...',
      author: 'Şah İsmayıl Xətai'
    },
    orbitAction: {
      label: 'ENTER ERA',
      type: 'enter'
    },
    sources: [
      'Vladimir Minorsky, "The Poetry of Shah Ismail I" (BSOAS, 1942)',
      'Oqtay Əfəndiyev, "Azərbaycan Səfəvilər dövləti" (Bakı, 1993)',
      'Roger Savory, "Iran under the Safavids" (Cambridge University Press)'
    ]
  },
  {
    id: '1400-shirvanshahs',
    yearDisplay: '1400',
    yearNumeric: 1400,
    eraCategory: 'medieval_shirvan',
    eraBadge: {
      az: 'DÖVR: ŞİRVANŞAHLAR SÜLALƏSİ',
      en: 'ERA: THE SHIRVANSHAHS DYNASTY',
      ru: 'ЭПОХА: ГОСУДАРСТВО ШИРВАНШАХОВ'
    },
    title: {
      az: 'Şirvanşahlar Dövləti və Bakı Qız Qalası',
      en: 'The Shirvanshahs Dynasty & Baku Citadel',
      ru: 'Государство Ширваншахов и Девичья Башня Баку'
    },
    subtitle: {
      az: 'İçərişəhər saray ansamblı, Qız Qalası, Şirvan-Abşeron memarlıq məktəbi',
      en: 'UNESCO Palace of the Shirvanshahs, Maiden Tower, and stone architectural brilliance',
      ru: 'Дворец Ширваншахов в Ичеришехер, Девичья башня и Ширвано-Апшеронская школа зодчества'
    },
    summary: {
      az: 'Şirvanşahlar dövləti (861–1538) İslam dünyasının ən uzunömürlü sülalələrindən biridir. Paytaxtı Şamaxıdan Bakıya köçürən Şirvanşahlar I İbrahim və I Xəlilullah dövründə Bakı İçərişəhərdə UNESCO incisi sayılan Şirvanşahlar Sarayı ansamblını inşa etdirdilər.',
      en: 'Ruling from 861 to 1538, the Shirvanshahs was one of the longest-lived dynasties in the Islamic world. Under rulers like Ibrahim I and Khalilullah I, Baku became their Caspian capital, culminating in the UNESCO World Heritage Palace of the Shirvanshahs and surrounding fortifications.',
      ru: 'Государство Ширваншахов (861–1538) — одна из древнейших династий исламского мира. При Ибрагиме I и Халилулле I столица была перенесена в Баку, где был воздвигнут ансамбль Дворца Ширваншахов в Ичеришехер, признанный шедевром ЮНЕСКО.'
    },
    detailedNarrative: {
      az: 'Şirvanşahlar dövrü Azərbaycan memarlığının daşyonma zirvəsidir. Divanxana, Şirvanşahlar türbəsi, Seyid Yəhya Bakuvi türbəsi, Şah məscidi və Murad darvazası Şirvan-Abşeron memarlıq üslubunun təkrarsız nümunələridir. Şirvanşahlar diplomatik məharətlə Teymurilər və Qızıl Orda kimi böyük imperiyalar arasında tarazlığı qoruyaraq ölkənin iqtisadi və mədəni inkişafını təmin etdilər. Xəzər dəniz ticarəti və İpək Yolu bu dövrdə çiçəkləndi.',
      en: 'The Shirvan-Absheron architectural school left an indelible imprint on stone. The Divankhana octagonal rotunda, the Royal Mausoleum, and the mysterious Maiden Tower (Qız Qalası) reflect extraordinary stonemasonry and astronomical alignments. Ibrahim I adroitly navigated relations with Timur and Tokhtamysh, shielding the realm and fostering Caspian maritime commerce.',
      ru: 'Ширвано-апшеронская архитектурная школа прославилась уникальной резьбой по известняку. Диванхане, усыпальница, мавзолей Сейида Яхья Бакуви и загадочная Девичья башня представляют собой вершины средневекового зодчества. Правители умелой дипломатией защищали край от разрушений и развивали торговлю на Шелковом пути.'
    },
    significance: {
      az: 'UNESCO Dünya İrsi siyahısına daxil edilmiş Şirvanşahlar Sarayı, daş memarlıq inciləri və Xəzər ticarətinin çiçəklənməsi.',
      en: 'UNESCO World Heritage Shirvanshah Complex, monumental Caspian coastal fortresses, and diplomatic resilience.',
      ru: 'Комплекс Дворца Ширваншахов (ЮНЕСКО), каспийские оборонительные крепости и расцвет зодчества.'
    },
    keyFigures: {
      az: ['I İbrahim', 'I Xəlilullah', 'Fərrux Yasar', 'Seyid Yəhya Bakuvi'],
      en: ['Ibrahim I', 'Khalilullah I', 'Farrukh Yassar', 'Seyid Yahya Bakuvi'],
      ru: ['Ибрагим I', 'Халилулла I', 'Фаррух Ясар', 'Сейид Яхья Бакуви']
    },
    location: {
      az: 'Bakı (İçərişəhər), Şamaxı, Dərbənd',
      en: 'Baku (Old City), Shamakhi, Derbent',
      ru: 'Баку (Ичеришехер), Шемаха, Дербент',
      coordinates: [40.3660, 49.8335]
    },
    image: '/images/shirvanshah_1400.jpg',
    imageCaption: {
      az: 'Şirvanşahlar Sarayı və Divanxana — İçərişəhər, Bakı (UNESCO Dünya İrsi)',
      en: 'Palace of the Shirvanshahs & Divankhana — Old City Baku (UNESCO World Heritage)',
      ru: 'Дворец Ширваншахов и Диванхане — Ичеришехер, Баку (Всемирное наследие ЮНЕСКО)'
    },
    quote: {
      text: 'Şirvan torpağı elmin, daşın və ədalətin qovuşduğu müqəddəs məkandır.',
      author: 'Şirvanşah I Xəlilullah kitabəsi'
    },
    orbitAction: {
      label: 'ENTER ERA',
      type: 'enter'
    },
    sources: [
      'Sara Aşurbəyli, "Şirvanşahlar dövləti" (Bakı: Elm, 1983)',
      'UNESCO World Heritage List — Walled City of Baku with the Shirvanshah’s Palace and Maiden Tower',
      'V. Minorsky, "A History of Sharvan and Darband in the 10th-11th Centuries"'
    ]
  },
  {
    id: '1186-eldiguzids',
    yearDisplay: '1186',
    yearNumeric: 1186,
    eraCategory: 'eldiguzids',
    eraBadge: {
      az: 'DÖVR: ELDƏNİZLƏR (ATABƏYLƏR)',
      en: 'ERA: THE ELDIGUZIDS (ATABEGS)',
      ru: 'ЭПОХА: АТАБЕКИ АЗЕРБАЙДЖАНА'
    },
    title: {
      az: 'Azərbaycan Atabəyləri Dövləti və Nizami Gəncəvi',
      en: 'The Eldiguzids (Atabegs of Azerbaijan) & Nizami Ganjavi',
      ru: 'Государство Атабеков Азербайджана и Низами Гянджеви'
    },
    subtitle: {
      az: 'Əcəmi Naxçıvani memarlığı, Möminə Xatun türbəsi və "Xəmsə" intibahı',
      en: 'Ajami Nakhchivani’s Momine Khatun masterpiece, Ganja renaissance, and Nizami’s Khamsa',
      ru: 'Шедевр Аджеми Нахчивани — мавзолей Момине Хатун и бессмертная "Хамсе" Низами Гянджеви'
    },
    summary: {
      az: 'Şəmsəddin Eldəniz tərəfindən əsası qoyulan Azərbaycan Atabəyləri dövləti (1136–1225) Naxçıvan, Təbriz və Həmədanı birləşdirən qüdrətli imperiyaya çevrildi. Bu dövrdə Əcəmi Naxçıvani Möminə Xatun türbəsini ucaltdı, dahi mütəfəkkir Nizami Gəncəvi isə Gəncədə ölməz "Xəmsə"sini yazdı.',
      en: 'Founded by Shamsaddin Eldiguz (1136–1225), the Atabegs of Azerbaijan united the land with capitals in Nakhchivan and Tabriz. Master architect Ajami Nakhchivani erected the breathtaking Momine Khatun Mausoleum, while universal genius Nizami Ganjavi composed his immortal "Khamsa" in Ganja.',
      ru: 'Государство Атабеков (Эльдегизидов, 1136–1225), основанное Шамсаддином Эльдегизом, охватывало обширные территории. Зодчий Аджеми Нахчивани возвел шедевр — мавзолей Момине Хатун, а великий мыслитель Низами Гянджеви создал в Гяндже бессмертную "Хамсе".'
    },
    detailedNarrative: {
      az: 'Atabəylər dövrü Azərbaycan intibahının qızıl əsridir. Naxçıvanda memar Əcəmi Əbubəkr oğlu Naxçıvani tərəfindən 1186-cı ildə inşa edilən Möminə Xatun türbəsi firuzəyi kaşıları və onguşəli kərpic mühəndisliyi ilə Şərq memarlığının möcüzəsi hesab olunur. Nizami Gəncəvi "Sirlər Xəzinəsi", "Xosrov və Şirin", "Leyli və Məcnun", "Yeddi Gözəl" və "İsgəndərnamə" poemaları ilə humanist fəlsəfəni ən yüksək poetik zirvəyə qaldırdı. Xaqani Şirvani və Məhsəti Gəncəvi də bu əsrin ulduzları idi.',
      en: 'The 12th century is celebrated as the Golden Renaissance of Azerbaijan. Ajami Nakhchivani’s decagonal Momine Khatun Mausoleum (1186) integrated turquoise glazed ceramic tiles with kufic epigraphy. Simultaneously in Ganja, Nizami Ganjavi elevated humanism, gender equality, and justice to universal heights through his five epic poems ("Khamsa"), mentoring world literature.',
      ru: 'XII век стал Золотым веком азербайджанского Ренессанса. Мавзолей Момине Хатун (1186) архитектора Аджеми с бирюзовой глазурью и куфическими надписями стал символом эпохи. Низами Гянджеви провозгласил гуманистические идеалы справедливости и любви в своей "Пятерице", а поэтесса Мехсети Гянджеви блистала в поэтических меджлисах.'
    },
    significance: {
      az: 'Möminə Xatun türbəsi kimi dünya memarlıq şahəsəri, Nizami Gəncəvinin dünya ədəbiyyatına bəxş etdiyi "Xəmsə" irsi.',
      en: 'The architectural pinnacle of Momine Khatun and Nizami Ganjavi’s enduring humanist masterpiece Khamsa.',
      ru: 'Мировой архитектурный шедевр Момине Хатун и гуманистическое наследие "Хамсе" Низами Гянджеви.'
    },
    keyFigures: {
      az: ['Şəmsəddin Eldəniz', 'Məhəmməd Cahan Pəhləvan', 'Qızıl Arslan', 'Möminə Xatun', 'Memar Əcəmi Naxçıvani', 'Nizami Gəncəvi'],
      en: ['Shamsaddin Eldiguz', 'Jahan Pahlavan', 'Qizil Arslan', 'Momine Khatun', 'Architect Ajami Nakhchivani', 'Nizami Ganjavi'],
      ru: ['Шамсаддин Эльдегиз', 'Джахан Пехлеван', 'Кызыл Арслан', 'Момине Хатун', 'Зодчий Аджеми Нахчивани', 'Низами Гянджеви']
    },
    location: {
      az: 'Naxçıvan, Gəncə, Təbriz',
      en: 'Nakhchivan, Ganja, Tabriz',
      ru: 'Нахчыван, Гянджа, Тебриз',
      coordinates: [39.2089, 45.4122]
    },
    image: '/images/eldiguzids_1186.jpg',
    imageCaption: {
      az: 'Möminə Xatun Türbəsi — Naxçıvan, Memar Əcəmi Naxçıvaninin 1186-cı il şah əsəri',
      en: 'Momine Khatun Mausoleum — Nakhchivan, 1186 Masterpiece by Architect Ajami Nakhchivani',
      ru: 'Мавзолей Момине Хатун — Нахчыван, шедевр зодчего Аджеми Нахчивани 1186 года'
    },
    quote: {
      text: 'Biz gedirik, dünya qalır. Biz ölürük, əsərimiz qalır.',
      author: 'Möminə Xatun türbəsi kitabəsi (Memar Əcəmi, 1186)'
    },
    orbitAction: {
      label: 'ANALYZE',
      type: 'analyze'
    },
    sources: [
      'Ziya Bünyadov, "Azərbaycan Atabəyləri dövləti (1136-1225)" (Bakı: Elm, 1984)',
      'C. E. Bosworth, "The Cambridge History of Iran, Vol. 5: The Saljuq and Mongol Periods"',
      'Nizami Gəncəvi İnstitutu, AMEA Elmi Nəşrləri'
    ]
  },
  {
    id: '0950-sajids-shaddadids',
    yearDisplay: '950',
    yearNumeric: 950,
    eraCategory: 'early_medieval',
    eraBadge: {
      az: 'DÖVR: SACİLƏR VƏ ŞƏDDADİLƏR',
      en: 'ERA: SAJIDS, SALARIDS & SHADDADIDS',
      ru: 'ЭПОХА: САДЖИДЫ И ШАДДАДИДЫ'
    },
    title: {
      az: 'Erkən Orta Əsrlər: Sacilər, Salarilər və Şəddadilər',
      en: 'Early Medieval States: Sajids, Salarids & Shaddadids',
      ru: 'Раннее Средневековье: Государства Саджидов и Шаддадидов'
    },
    subtitle: {
      az: 'Gəncənin yüksəlişi, Xudafərin körpüləri və müstəqil dövlətçiliyin bərpası',
      en: 'The rise of Ganja, historic Khudaferin bridges over Aras, and post-Caliphate revival',
      ru: 'Возвышение Гянджи, мосты Худаферин через Араз и возрождение государственности'
    },
    summary: {
      az: 'Ərəb xilafətinin zəifləməsindən sonra IX–XI əsrlərdə Azərbaycan torpaqlarında güclü yerli sülalələr hakimiyyətə gəldi: Sacilər, Salarilər və mərkəzi Gəncə olan Şəddadilər. Məhəmməd ibn Əbu Sac bütün tarixi Azərbaycan torpaqlarını vahid dövlətdə birləşdirdi.',
      en: 'Following the fragmentation of the Abbasid Caliphate, independent dynasties revitalized Azerbaijan in the 9th–11th centuries: the Sajids, Salarids, and the Shaddadids of Ganja. The Sajid ruler Muhammad ibn Abi’l-Saj unified the northern and southern lands into a single realm.',
      ru: 'После ослабления Арабского халифата в IX–XI веках возродилась независимость под правлением Саджидов, Саларидов и династии Шаддадидов со столицей в Гяндже. Мухаммад ибн Абу Садж впервые объединил все земли Азербайджана под единой властью.'
    },
    detailedNarrative: {
      az: 'Şəddadi hökmdarı Fəzl ibn Məhəmməd 1027-ci ildə Araz çayı üzərində məşhur Xudafərin körpüsünü (15 tağlı) inşa etdirdi. Bu körpü Şimalla Cənub arasında ticarət və mədəniyyət arteriyası oldu. Gəncə şəhəri qala divarları və məşhur Dəmir Darvazaları ilə güclü sənətkarlıq paytaxtına çevrildi (Dəmirçi İbrahim tərəfindən 1063-cü ildə tökülmüşdür). Bərdə, Təbriz və Ərdəbil beynəlxalq ipək ticarətinin mərkəzləri oldu.',
      en: 'In 1027, the Shaddadid ruler Fadl ibn Muhammad constructed the 15-span Khudaferin Bridge across the Aras River, connecting northern and southern territories on the silk trade routes. In 1063, blacksmith Ibrahim crafted the monumental Iron Gates of Ganja. Major urban hubs like Barda, Tabriz, and Ardabil anchored regional craft and learning.',
      ru: 'В 1027 году правитель Шаддадидов Фазл ибн Мухаммад построил 15-пролетный мост Худаферин через реку Араз, ставший важнейшим торговым узлом Шелкового пути. В 1063 году мастер Ибрагим отлил знаменитые Железные Врата Гянджи, защищавшие город.'
    },
    significance: {
      az: 'Bütün Azərbaycan torpaqlarının ilk dəfə vahid mərkəzdən idarəsi və Xudafərin körpüləri kimi mühəndislik nailiyyətləri.',
      en: 'Unified regional administrative consolidation and monumental civil engineering (Khudaferin bridges).',
      ru: 'Объединение исторических земель и выдающиеся инженерные сооружения (Худаферинские мосты).'
    },
    keyFigures: {
      az: ['Məhəmməd ibn Əbu Sac', 'Mərzban ibn Məhəmməd', 'Fəzl ibn Məhəmməd (Şəddadi)', 'Dəmirçi İbrahim'],
      en: ['Muhammad ibn Abi’l-Saj', 'Marzuban ibn Muhammad', 'Fadl ibn Muhammad', 'Blacksmith Ibrahim'],
      ru: ['Мухаммад ибн Абу Садж', 'Марзбан ибн Мухаммад', 'Фазл ибн Мухаммад', 'Кузнец Ибрагим']
    },
    location: {
      az: 'Gəncə, Xudafərin, Bərdə, Təbriz',
      en: 'Ganja, Khudaferin, Barda, Tabriz',
      ru: 'Гянджа, Худаферин, Барда, Тебриз',
      coordinates: [39.1500, 46.9333]
    },
    image: '/images/shirvanshah_1400.jpg',
    imageCaption: {
      az: 'Orta əsr müdafiə qalaları və tarixi körpülər şəbəkəsi',
      en: 'Medieval Fortifications & Historic Bridge Networks of Azerbaijan',
      ru: 'Средневековые оборонительные крепости и исторические мосты Азербайджана'
    },
    quote: {
      text: 'Arazın suları üzərində salınan daş körpülər xalqların və ellərin əbədi qovuşma yeridir.',
      author: 'Orta əsr salnaməsi'
    },
    orbitAction: {
      label: 'DECRYPT',
      type: 'decrypt'
    },
    sources: [
      'V. Minorsky, "Studies in Caucasian History" (Cambridge Oriental Series, 1953)',
      'Ziya Bünyadov, "Azərbaycan VII-IX əsrlərdə" (Bakı, 1989)',
      'Tarixi salnamələr: Əl-İstəxri və İbn Hövqəl əsərləri'
    ]
  },
  {
    id: '0400-caucasian-albania',
    yearDisplay: '400',
    yearNumeric: 400,
    eraCategory: 'caucasian_albania',
    eraBadge: {
      az: 'DÖVR: QAFQAZ ALBANIYASI',
      en: 'ERA: CAUCASIAN ALBANIA',
      ru: 'ЭПОХА: КАВКАЗСКАЯ АЛБАНИЯ'
    },
    title: {
      az: 'Qafqaz Albaniyası və Kiş Məbədi',
      en: 'Caucasian Albania & The Church of Kish',
      ru: 'Кавказская Албания и Храм в Кише'
    },
    subtitle: {
      az: '52 hərflik unikal əlifba, erkən xristianlıq, Qəbələ və Şəkinin qədim memarlığı',
      en: 'Unique 52-letter alphabet, early Christianity, capitals at Gabala & Barda, and ancient stone basilicas',
      ru: 'Уникальный 52-буквенный алфавит, раннее христианство, древняя Габала и храм в Кише'
    },
    summary: {
      az: 'Qafqaz Albaniyası (e.ə. IV əsr – b.e. VIII əsri) Şimali Azərbaycanın qədim dövlətidir. Paytaxtı Qəbələ, daha sonra Bərdə olmuşdur. 313-cü ildə Alban hökmdarı Urnayr xristianlığı dövlət dini qəbul etmiş, V əsrdə 52 hərfdən ibarət orijinal Alban əlifbası yaradılmışdır.',
      en: 'Caucasian Albania (4th c. BC – 8th c. AD) spanned northern Azerbaijan between the Greater Caucasus and the Kura River. With capitals at ancient Gabala and later Barda, King Urnayr declared Christianity the official faith in 313 AD. In the 5th century, a unique 52-letter Albanian script was developed.',
      ru: 'Кавказская Албания (IV в. до н.э. — VIII в. н.э.) — древнее государство на севере Азербайджана со столицами в Габале и Барде. В 313 году царь Урнайр принял христианство, а в V веке был создан оригинальный 52-буквенный албанский алфавит.'
    },
    detailedNarrative: {
      az: 'Şəkinin Kiş kəndində yerləşən Kiş məbədi Qafqazın "bütün kilsələrinin anası" hesab olunur və apostol Yeliseyin dövrünə bağlanır (arxeoloji qazıntılar məbədin təməlinin b.e. I-IV əsrlərinə aid olduğunu sübut etmişdir, Tur Heyerdalın iştirakı ilə tədqiq edilmişdir). Qafqaz Albaniyasının görkəmli hökmdarı Cavanşir (VII əsr) diplomatik məharətlə Bizans, Xəzər xaqanlığı və Ərəb xilafəti ilə əlaqələr quraraq ölkənin muxtariyyətini qorumuşdur. Sinay palimpsestlərində Alban əlifbası ilə yazılmış leksionari mətnləri aşkar edilmişdir.',
      en: 'The Church of Kish in Sheki, celebrated by explorer Thor Heyerdahl, stands upon sacred foundations dating back to the 1st–4th centuries. Albanian Prince Javanshir (7th century) preserved Albanian sovereignty through astute diplomacy between Byzantium, the Khazar Khaganate, and the Caliphate. The Caucasian Albanian palimpsests discovered on Mount Sinai deciphered their unique 52-letter Caucasian language.',
      ru: 'Храм в селении Киш (Шеки), исследованный при участии Тура Хейердала, считается древнейшей святыней Кавказа. В VII веке князь Джеваншир искусно лавировал между Византией, Хазарией и Халифатом. Открытие Синайских палимпсестов подтвердило подлинность и богатство албанской письменности.'
    },
    significance: {
      az: 'Kiş məbədi, 52 hərflik Alban əlifbası və Mingəçevir arxeoloji abidələri.',
      en: 'Preserved stone churches (Kish), the deciphered Caucasian Albanian alphabet, and royal necropolises.',
      ru: 'Древнейший храм Киш, 52-буквенная албанская письменность и археология Мингячевира.'
    },
    keyFigures: {
      az: ['Çar Urnayr', 'III Mömin Vaçaqan', 'Hökmdar Cavanşir', 'Tarixçi Musa Kalankatlı'],
      en: ['King Urnayr', 'Vachagan III the Pious', 'Prince Javanshir', 'Historian Movses Kaghankatvatsi'],
      ru: ['Царь Урнайр', 'Вачаган III Благочестивый', 'Князь Джеваншир', 'Историк Мовсес Каланкатуаци']
    },
    location: {
      az: 'Şəki (Kiş), Qəbələ, Bərdə, Mingəçevir',
      en: 'Sheki (Kish), Gabala, Barda, Mingachevir',
      ru: 'Шеки (Киш), Габала, Барда, Мингячевир',
      coordinates: [41.2494, 47.1947]
    },
    image: '/images/albania_400.jpg',
    imageCaption: {
      az: 'Kiş Məbədi — Şəki, Qafqaz Albaniyası memarlığının daş incisi (I-IV əsrlər)',
      en: 'Church of Kish — Sheki, Stone Masterpiece of Caucasian Albanian Architecture',
      ru: 'Храм в селении Киш — Шеки, каменный шедевр Кавказской Албании (I–IV вв.)'
    },
    quote: {
      text: 'Şərqin qapısı olan bu diyar möhkəm qalaları və müqəddəs məbədləri ilə ucalır.',
      author: 'Musa Kalankatlı ("Alban tarixi")'
    },
    orbitAction: {
      label: 'ANALYZE',
      type: 'analyze'
    },
    sources: [
      'Musa Kalankatlı, "Albaniya tarixi" (Movses Kaghankatvatsi, "History of the Aghvans")',
      'Ziya Bünyadov, "Azərbaycanın qədim və orta əsrlər tarixi"',
      'Jost Gippert, Wolfgang Schulze et al., "The Caucasian Albanian Palimpsests of Mount Sinai" (Turnhout: Brepols, 2008)'
    ]
  },
  {
    id: 'bc-0331-atropatene',
    yearDisplay: 'e.ə. 331',
    yearNumeric: -331,
    eraCategory: 'atropatene',
    eraBadge: {
      az: 'DÖVR: ATROPATENA DÖVLƏTİ',
      en: 'ERA: KINGDOM OF ATROPATENE',
      ru: 'ЭПОХА: ЦАРСТВО АТРОПАТЕНА'
    },
    title: {
      az: 'Atropatena və "Azərbaycan" Adının Tarixi Mənşəyi',
      en: 'Kingdom of Atropatene & Genesis of "Azerbaijan"',
      ru: 'Царство Атропатена и Происхождение Названия "Азербайджан"'
    },
    subtitle: {
      az: 'Makedoniyalı İsgəndərin dövrü, Atropatın müstəqilliyi və Odlar Yurdu etimologiyası',
      en: 'Alexander the Great era, Satrap Atropates, Gazaka sanctuary, and the land of sacred fire',
      ru: 'Эпоха Александра Македонского, царь Атропат, святилище Газака и Страна Огней'
    },
    summary: {
      az: 'E.ə. 331-ci ildə Qavqamel döyüşündən sonra sərkərdə Atropat Cənubi Azərbaycan ərazisində müstəqil dövlət qurdu. "Azərbaycan" toponimi məhz onun adı ilə bağlı olan "Atropatena" (orta fars dilində "Adurbadaqan", "Odun mühafizəçisi") sözündən yaranmışdır.',
      en: 'Following the Battle of Gaugamela in 331 BC, Satrap Atropates preserved independence across southern Azerbaijan and the Aras basin. The modern name "Azerbaijan" derives directly from "Atropatene" (via Middle Persian "Adurbadagan" — meaning "Guardian of the Holy Fire").',
      ru: 'После битвы при Гавгамелах в 331 г. до н.э. правитель Атропат сохранил независимость региона. Название "Азербайджан" происходит от "Атропатены" (среднеперс. "Адурбадаган" — "Хранитель Священного Огня").'
    },
    detailedNarrative: {
      az: 'Atropatena ellinizm dövründə Roma və Parfiya imperiyaları arasında müstəqil xarici siyasət yürüdən güclü dövlət idi. Paytaxtı Qazaka (Gazaka) şəhəri və burada yerləşən məşhur Azərgüşnasp atəşgahı zərdüştiliyin ən böyük ziyarətgahı idi. Strabon və Polibi kimi antik tarixçilər Atropatenanın güclü süvari ordusunu və zəngin təbii resurslarını qeyd etmişlər. Bu dövrdə Azərbaycan ərazisində sönməz neft və qaz məşəlləri kultu formalaşmışdır.',
      en: 'Atropatene maintained skilled independence between the Hellenistic Seleucids, Parthia, and Rome. Its capital Gazaka housed the revered Azargushnasp fire temple, the spiritual sanctum of Zoroastrian warrior kings. Renowned geographers Strabo and Polybius documented Atropatene’s formidable cavalry forces and the timeless eternal flames issuing from the Caspian earth.',
      ru: 'Атропатена вела искусную внешнюю политику между Римом и Парфией. В ее столице Газаке находился знаменитый храм Азергушнасп — главная святыня зороастризма. Античные географы Страбон и Полибий подробно описали мощную конницу Атропатены и священные огни региона.'
    },
    significance: {
      az: '"Azərbaycan" sözünün 2300 illik etimoloji mənşəyi, dövlətçilik və atəşpərəstlik məbədləri mədəniyyəti.',
      en: 'The 2,300-year linguistic origin of "Azerbaijan", sovereign diplomacy, and eternal fire sanctuaries.',
      ru: '2300-летнее происхождение имени "Азербайджан", суверенная дипломатия и культ вечных огней.'
    },
    keyFigures: {
      az: ['Atropat (dövlətin banisi)', 'Artabazan', 'Strabon (antik coğrafiyaşünas)'],
      en: ['Atropates (Founder)', 'Artabazanes', 'Strabo (Ancient Geographer)'],
      ru: ['Атропат (основатель)', 'Артабазан', 'Страбон (древнегреческий географ)']
    },
    location: {
      az: 'Qazaka, Urmiya hövzəsi, Araz boyu',
      en: 'Gazaka, Lake Urmia Basin, Aras Valley',
      ru: 'Газака, бассейн озера Урмия, долина Араза',
      coordinates: [37.1000, 46.5000]
    },
    image: '/images/eldiguzids_1186.jpg',
    imageCaption: {
      az: 'Qədim Atropatena memarlıq və daş məbəd ənənələri',
      en: 'Ancient Architectural Traditions & Stone Sanctuaries of Atropatene',
      ru: 'Древние архитектурные традиции и святилища Атропатены'
    },
    quote: {
      text: 'Bu ölkə Atropatın adı ilə adlandırıldı, çünki o, böyük padşahların heç birinə tabe olmadı.',
      author: 'Strabon ("Coğrafiya", XI kitab)'
    },
    orbitAction: {
      label: 'DECRYPT',
      type: 'decrypt'
    },
    sources: [
      'Strabon, "Geographica", Book XI (e.ə. I əsr)',
      'Polibi, "Tarix" (Historiae)',
      'İqrar Əliyev, "Oçerk istorii Atropatenı" (Baku, 1989)'
    ]
  },
  {
    id: 'bc-0850-manna',
    yearDisplay: 'e.ə. 850',
    yearNumeric: -850,
    eraCategory: 'manna',
    eraBadge: {
      az: 'DÖVR: MANNA DÖVLƏTİ',
      en: 'ERA: THE KINGDOM OF MANNA',
      ru: 'ЭПОХА: ГОСУДАРСТВО МАННА'
    },
    title: {
      az: 'Manna Dövləti və Həsənli Qızıl Camı',
      en: 'Kingdom of Manna & The Golden Bowl of Hasanlu',
      ru: 'Государство Манна и Золотая Чаша Хасанлу'
    },
    subtitle: {
      az: 'Azərbaycanın ilk mərkəzləşdirilmiş dövləti, İzirtu paytaxtı və tunc-dəmir metallurgiyası',
      en: 'Earliest unified state in Azerbaijan, capital Izirtu, and Bronze-to-Iron Age metallurgy mastery',
      ru: 'Первое централизованное государство на территории Азербайджана и металлургия бронзы'
    },
    summary: {
      az: 'E.ə. IX–VI əsrlərdə mövcud olmuş Manna dövləti Azərbaycanın tarixi ərazisində məlum olan ilk güclü mərkəzləşdirilmiş dövlətdir. Paytaxtı İzirtu şəhəri olmuş, Aşşur və Urartu kimi qüdrətli imperiyalarla mübarizədə müstəqilliyini qorumuşdur.',
      en: 'Flourishing from the 9th to 6th centuries BC, Manna was the earliest unified kingdom documented in Azerbaijani historical geography. Based at the fortified capital of Izirtu, Manna defended its autonomy against the Assyrian and Urartian empires.',
      ru: 'Существовавшее в IX–VI веках до н.э. царство Манна было первым централизованным государством региона. Со столицей Изирту оно успешно отстаивало независимость в противостоянии с Ассирией и Урарту.'
    },
    detailedNarrative: {
      az: 'Manna hökmdarları İranzu və Ullusunu dövləti güclü canişinliklərə bölərək mərkəzləşdirilmiş idarə sistemi yaratdılar. Manna sənətkarları zərgərlik, tunc və qızıl tökmə sənətində misilsiz zirvəyə çatmışdılar. Həsənli qazıntılarında aşkar edilən məşhur "Həsənli Qızıl Camı" və Ziviyə xəzinəsi qədim qanadlı öküzlər, aslanlar və mifoloji səhnələrlə bəzədilmiş dünya şöhrətli şah əsərlərdir. Mannalılar atçılıq və suvarma əkinçiliyində yüksək inkişaf etmişdilər.',
      en: 'Kings Iranzu and Ullusunu established robust provincial administration. Mannaean goldsmiths and metallurgists crafted world-renowned treasures, most notably the famed "Golden Bowl of Hasanlu" and the Ziwiye hoard, adorned with mythological winged deities, chariots, and solar bulls. Archaeological records prove their mastery of equine breeding and metallurgy.',
      ru: 'Цари Иранзу и Уллусуну создали сильную административную систему. Ремесленники Манны создавали шедевры ювелирного искусства: знаменитая "Золотая чаша Хасанлу" и сокровища Зивие с изображениями крылатых божеств стали вершинами древнего восточного искусства.'
    },
    significance: {
      az: 'Azərbaycanın ən qədim yazılı mənbələrdə təsdiqlənən dövləti və qədim tunc-qızıl sənətkarlığı.',
      en: 'Earliest cuneiform-attested statehood and extraordinary Bronze-Iron Age golden metalwork.',
      ru: 'Древнейшая государственность, зафиксированная в клинописи, и шедевры древней металлургии.'
    },
    keyFigures: {
      az: ['Çar İranzu', 'Çar Ullusunu', 'Aşıqan sənətkarları'],
      en: ['King Iranzu', 'King Ullusunu', 'Mannaean Master Smiths'],
      ru: ['Царь Иранзу', 'Царь Уллусуну', 'Мастера-металлурги Манны']
    },
    location: {
      az: 'İzirtu, Həsənli, Urmiya hövzəsi',
      en: 'Izirtu, Hasanlu, Lake Urmia Basin',
      ru: 'Изирту, Хасанлу, бассейн озера Урмия',
      coordinates: [37.0000, 45.4500]
    },
    image: '/images/safavid_1501.jpg',
    imageCaption: {
      az: 'Qədim Manna dövlətinin bədii qızıl və tunc sənətkarlıq ənənəsi',
      en: 'Ancient Goldsmith & Bronze Artistic Tradition of Manna',
      ru: 'Древние ювелирные и бронзовые традиции царства Манна'
    },
    quote: {
      text: 'İzirtu qalasının möhkəm bürcləri dağ zirvələri kimi ucalırdı.',
      author: 'Aşşur mixi yazı salnamələri (e.ə. IX əsr)'
    },
    orbitAction: {
      label: 'DECRYPT',
      type: 'decrypt'
    },
    sources: [
      'Aşşur mixi yazı kitabələri (III Salmanasar və II Sarqon salnamələri)',
      'Robert H. Dyson Jr., "The Golden Bowl of Hasanlu" (Penn Museum, 1959)',
      'S. Qaşqay, "Manna tarixi" (Bakı: Elm, 1993)'
    ]
  },
  {
    id: 'bc-12000-gobustan-azikh',
    yearDisplay: 'e.ə. 12000',
    yearNumeric: -12000,
    eraCategory: 'prehistory',
    eraBadge: {
      az: 'DÖVR: İBTİDAİ İCMA VƏ QOBUSTAN',
      en: 'ERA: PREHISTORY & GOBUSTAN',
      ru: 'ЭПОХА: ПЕРВОБЫТНЫЙ МИР И ГОБУСТАН'
    },
    title: {
      az: 'Qobustan Qayaüstü Rəsmləri və Azıx Mağarası',
      en: 'Gobustan Petroglyphs & Paleolithic Azikh Cave',
      ru: 'Наскальные Рисунки Гобустана и Азыхская Пещера'
    },
    subtitle: {
      az: '350,000 illik Azıxantrop, 6,000 qayaüstü rəsm, qədim "Yallı" rəqsi və "Qavaldaş"',
      en: '350,000-year-old Acheulean hominid in Azikh, 6,000 UNESCO petroglyphs, and ritual musical stones',
      ru: '350 000-летний азыхантроп, 6 000 петроглифов ЮНЕСКО, танец Яллы и музыкальный камень Гавалдаш'
    },
    summary: {
      az: 'Azərbaycan bəşəriyyətin ən qədim məskənlərindən biridir. Qarabağdakı Azıx mağarasında 350 min il əvvələ aid qədim insan çənə sümüyü ("Azıxantrop") aşkar edilmişdir. Bakı yaxınlığındakı Qobustan Milli Qoruğunda isə 15 min ildən çox tarixi əhatə edən 6 mindən artıq qayaüstü petroqlif — qədim ovçular, günəş qayıqları və rituallar qorunur.',
      en: 'Azerbaijan is among the cradle sites of human civilization. The Azikh Cave in Karabakh revealed a 350,000-year-old Acheulean proto-human jawbone ("Azikhantrop"). Near Baku, the Gobustan UNESCO National Historical-Artistic Reserve preserves over 6,000 rock petroglyphs chronicling ritual dances (ancestor of Yalli), solar reed boats, and prehistoric fauna.',
      ru: 'Азербайджан — одна из древнейших колыбелей человечества. В Азыхской пещере в Карабахе была обнаружена челюсть первобытного человека ("азыхантропа") возрастом более 350 000 лет. В Гобустане (ЮНЕСКО) сохранилось более 6 000 наскальных рисунков с древнейшим танцем Яллы и лодками.'
    },
    detailedNarrative: {
      az: 'Qobustanın daş divarlarına həkk olunmuş rəsmlər Mezolit dövründən orta əsrlərə qədər bəşər təxəyyülünün təkamülünü əks etdirir. Qədim insanların əl-ələ tutaraq rəqs etməsi müasir Azərbaycan "Yallı" milli rəqsinin ən qədim köklərini nümayiş etdirir. Burada həmçinin təbii musiqi aləti olan "Qavaldaş" — vurulduqda zəng səsi çıxaran rezonans daşı yerləşir. Norveç səyyahı Tur Heyerdal Qobustandakı qamış qayıq təsvirlərini görərək Skandinaviya vikinqlərinin əcdadlarının məhz buradan getdiyi fərziyyəsini irəli sürmüşdür. E.ə. I əsrə aid Roma XII İldırım Legionunun latın kitabəsi də Qobustandadır.',
      en: 'The petroglyphic galleries of Gobustan reveal ritual hunters, aurochs, gazelles, and linked dancers executing what is universally recognized as the prehistoric progenitor of the Azerbaijani folk dance "Yalli". Resonant limestone slabs known as "Gavaldash" served as Neolithic percussion instruments. World-renowned explorer Thor Heyerdahl posited that Scandinavian boat designs traced ancestry to Gobustan. A Latin rock inscription left by Emperor Domitian’s Legio XII Fulminata marks Rome’s easternmost frontier.',
      ru: 'Петроглифы Гобустана отображают тысячелетия эволюции человека. Изображение хоровода танцующих людей признано истоком азербайджанского народного танца "Яллы". Уникальный музыкальный камень "Гавалдаш" служил древнейшим ударным инструментом. Тур Хейердал выдвинул теорию о связи предков скандинавов с жителями Гобустана. Здесь же находится самая восточная латинская надпись Римского легиона XII Фульмината.'
    },
    significance: {
      az: 'UNESCO Ümumdünya İrsi, bəşəriyyətin ilkin beşiyi (Azıxantrop) və daş dövrünün musiqi-rəqs mədəniyyəti ("Qavaldaş" və "Yallı").',
      en: 'UNESCO World Heritage, cradle of early hominids, and earliest documented collective dance/music culture.',
      ru: 'Всемирное наследие ЮНЕСКО, колыбель человечества (Азых) и первобытное музыкальное искусство.'
    },
    keyFigures: {
      az: ['Paleolit dövrü insanları', 'Arxeoloq Məmmədəli Hüseynov (Azıx kəşfi)', 'İshaq Cəfərzadə (Qobustan kəşfi)', 'Tur Heyerdal'],
      en: ['Paleolithic Artists & Hunters', 'Archaeologist Mammadali Huseynov', 'Ishaq Jafarzadeh', 'Thor Heyerdahl'],
      ru: ['Первобытные охотники', 'Археолог Мамедали Гусейнов', 'Исхак Джафарзаде', 'Тур Хейердал']
    },
    location: {
      az: 'Qobustan (Bakı) / Azıx Mağarası (Xocavənd/Füzuli)',
      en: 'Gobustan (Baku) / Azikh Cave (Karabakh)',
      ru: 'Гобустан (Баку) / Азыхская пещера (Карабах)',
      coordinates: [40.1167, 49.3833]
    },
    image: '/images/gobustan_ancient.jpg',
    imageCaption: {
      az: 'Qobustan Qayaüstü Rəsmləri — Yallı rəqsi və qədim ov səhnələri (UNESCO Dünya İrsi)',
      en: 'Gobustan Rock Art Petroglyphs — Ancient Ritual Dance & Hunting Scenes (UNESCO World Heritage)',
      ru: 'Наскальные рисунки Гобустана — Обрядовый танец Яллы и сцены охоты (ЮНЕСКО)'
    },
    quote: {
      text: 'Qobustan — insan təxəyyülünün daş üzərində həkk olunmuş ən qədim kitabxanasıdır.',
      author: 'Tur Heyerdal'
    },
    orbitAction: {
      label: 'DECRYPT',
      type: 'decrypt'
    },
    sources: [
      'UNESCO World Heritage Centre — Gobustan Rock Art Cultural Landscape (Ref: 1076)',
      'Məmmədəli Hüseynov, "Azərbaycan arxeologiyası: Daş dövrü" (Bakı, 1975)',
      'İshaq Cəfərzadə, "Qobustan: Qayaüstü təsvirlər" (Bakı: Elm, 1973)',
      'Thor Heyerdahl, "Scandinavian Ancestry from the Caspian" (Baku, 1999)'
    ]
  }
];

export const HISTORICAL_SOURCES: HistoricalSource[] = [
  {
    id: 'src-1',
    title: 'Azərbaycan Xalq Cümhuriyyətinin İstiqlal Bəyannaməsi',
    author: 'Milli Şura (M. Ə. Rəsulzadə, F. X. Xoyski və b.)',
    year: '1918',
    type: 'archive',
    institution: 'Azərbaycan Respublikası Dövlət Tarix Arxivi (ARDTA)',
    description: '28 May 1918-ci il Tiflis İstiqlal Bəyannaməsinin ərəb və fransız əlifbası ilə rəsmi orijinal nüsxəsi.'
  },
  {
    id: 'src-2',
    title: 'Gobustan Rock Art Cultural Landscape (Inscription 1076)',
    author: 'UNESCO World Heritage Committee',
    year: '2007',
    type: 'unesco',
    institution: 'UNESCO World Heritage Centre, Paris',
    description: 'Qobustanın 6000-dən çox petroqlifinin və Mezolit-Neolit mədəniyyətinin beynəlxalq elmi sənədləşməsi.'
  },
  {
    id: 'src-3',
    title: 'Walled City of Baku with the Shirvanshah’s Palace and Maiden Tower',
    author: 'UNESCO World Heritage Committee',
    year: '2000',
    type: 'unesco',
    institution: 'UNESCO World Heritage Centre',
    description: 'Bakı İçərişəhər, Şirvanşahlar Sarayı və Qız Qalası memarlıq ansamblının qlobal irs reyestri.'
  },
  {
    id: 'src-4',
    title: 'Russian Azerbaijan, 1905–1920: The Shaping of National Identity in a Muslim Community',
    author: 'Prof. Tadeusz Swietochowski',
    year: '1985',
    type: 'academic',
    institution: 'Cambridge University Press',
    description: 'Azərbaycan milli kimliyinin, neft intibahının və ADR parlament dövlətçiliyinin fundamental akademik tədqiqi.'
  },
  {
    id: 'src-5',
    title: 'The Azerbaijani Turks: Power and Identity under Russian Rule',
    author: 'Prof. Audrey L. Altstadt',
    year: '1992',
    type: 'academic',
    institution: 'Hoover Institution Press, Stanford University',
    description: 'Azərbaycan xalqının çoxəsrlik tarixi, mədəniyyəti və müstəqillik mübarizəsinə dair ABŞ akademik monoqrafiyası.'
  },
  {
    id: 'src-6',
    title: 'Şirvanşahlar dövləti (VI–XVI əsrlər)',
    author: 'Sara Aşurbəyli',
    year: '1983',
    type: 'academic',
    institution: 'Azərbaycan Milli Elmlər Akademiyası (AMEA) Tarix İnstitutu',
    description: 'Şirvanşahlar sülaləsi, memarlıq məktəbi və Bakı şəhərinin orta əsr tarixinə dair ən əhatəli tədqiqat əsəri.'
  },
  {
    id: 'src-7',
    title: 'Azərbaycan Atabəyləri dövləti (1136–1225)',
    author: 'Akademik Ziya Bünyadov',
    year: '1984',
    type: 'academic',
    institution: 'AMEA Tarix İnstitutu',
    description: 'Eldənizlər dövlətinin qurulması, Naxçıvan memarlığı və XII əsr Azərbaycan İntibahının tarixi təhlili.'
  },
  {
    id: 'src-8',
    title: 'Studies in Caucasian History & The Poetry of Shah Ismail I',
    author: 'Prof. Vladimir Minorsky',
    year: '1942–1953',
    type: 'academic',
    institution: 'University of London / Cambridge',
    description: 'Şəddadilər sülaləsi, Səfəvilər dövrü və Şah İsmayıl Xətainin ana dilindəki poetik divanının beynəlxalq elmi nəşri.'
  },
  {
    id: 'src-9',
    title: 'Gülüstani-İrəm',
    author: 'Abbasqulu Ağa Bakıxanov',
    year: '1841',
    type: 'chronicle',
    institution: 'Azərbaycan Əlyazmalar Fondu',
    description: 'Azərbaycan tarixşünaslığının banisi tərəfindən qələmə alınmış, qədim dövrlərdən Gülüstan müqaviləsinə qədərki tarixi əhatə edən ilk elmi salnamə.'
  },
  {
    id: 'src-10',
    title: 'The Caucasian Albanian Palimpsests of Mount Sinai',
    author: 'Prof. Jost Gippert, Wolfgang Schulze et al.',
    year: '2008',
    type: 'academic',
    institution: 'Brepols Publishers, Belgium',
    description: 'Müqəddəs Yekaterina monastırında tapılmış 52 hərflik Alban əlifbası ilə qədim İncil mətnlərinin elmi deşifrəsi.'
  }
];

export const MAP_LOCATION_PINS: MapLocationPin[] = [
  {
    id: 'pin-shusha',
    name: {
      az: 'Şuşa — Qarabağ Qalası',
      en: 'Shusha — Karabakh Citadel',
      ru: 'Шуша — Цитадель Карабаха'
    },
    coordinates: [39.7537, 46.7465],
    region: 'Qarabağ',
    eraId: '2020-karabakh',
    monumentName: 'Şuşa Qalası & Yuxarı Gövhər Ağa Məscidi',
    description: {
      az: '1752-ci ildə Pənahəli xan tərəfindən ucaldılmış qala divarları, Azərbaycan mədəniyyətinin və muğamının paytaxtı.',
      en: 'Founded in 1752 by Panah Ali Khan, crowned as the cultural cradle and Mugham conservatory of Azerbaijan.',
      ru: 'Крепость, заложенная в 1752 году Панах Али-ханом, культурная колыбель и столица мугама.'
    }
  },
  {
    id: 'pin-baku',
    name: {
      az: 'Bakı — İçərişəhər & Qız Qalası',
      en: 'Baku — Old City & Maiden Tower',
      ru: 'Баку — Ичеришехер и Девичья башня'
    },
    coordinates: [40.3660, 49.8335],
    region: 'Abşeron',
    eraId: '1400-shirvanshahs',
    monumentName: 'Şirvanşahlar Sarayı & Qız Qalası',
    description: {
      az: 'UNESCO Dünya İrsi incisi. Şirvanşahlar sülaləsinin daş tacı və minillik Qız Qalası.',
      en: 'UNESCO World Heritage site. Royal Palace of the Shirvanshahs and the ancient enigmatic Maiden Tower.',
      ru: 'Объект ЮНЕСКО. Королевский дворец Ширваншахов и загадочная Девичья башня.'
    }
  },
  {
    id: 'pin-nakhchivan',
    name: {
      az: 'Naxçıvan — Möminə Xatun',
      en: 'Nakhchivan — Momine Khatun',
      ru: 'Нахчыван — Момине Хатун'
    },
    coordinates: [39.2089, 45.4122],
    region: 'Naxçıvan',
    eraId: '1186-eldiguzids',
    monumentName: 'Möminə Xatun Türbəsi (1186)',
    description: {
      az: 'Memar Əcəmi Naxçıvaninin dünya şöhrətli onguşəli firuzəyi memarlıq şah əsəri.',
      en: 'Master architect Ajami Nakhchivani’s 1186 decagonal turquoise glazed brick masterpiece.',
      ru: 'Шедевр зодчего Аджеми 1186 года с бирюзовой глазурью и куфическими узорами.'
    }
  },
  {
    id: 'pin-ganja',
    name: {
      az: 'Gəncə — Nizami Yurdu & Dəmir Qapılar',
      en: 'Ganja — Homeland of Nizami & Iron Gates',
      ru: 'Гянджа — Родина Низами и Железные Врата'
    },
    coordinates: [40.6828, 46.3606],
    region: 'Gəncə-Qazax',
    eraId: '0950-sajids-shaddadids',
    monumentName: 'Şəddadi Dəmir Qapıları & Nizami Məqbərəsi',
    description: {
      az: '1063-cü ildə Dəmirçi İbrahim tərəfindən tökülmüş qala darvazaları və dahi Nizaminin ilham beşiyi.',
      en: 'Forged in 1063 by blacksmith Ibrahim, historical heart of the Shaddadids and Nizami Ganjavi.',
      ru: 'Выкованы в 1063 году кузнецом Ибрагимом, исторический центр Шаддадидов и Низами.'
    }
  },
  {
    id: 'pin-sheki',
    name: {
      az: 'Şəki — Xan Sarayı & Kiş Məbədi',
      en: 'Sheki — Khan Palace & Kish Church',
      ru: 'Шеки — Дворец Ханов и Храм Киш'
    },
    coordinates: [41.2044, 47.1706],
    region: 'Şəki-Zaqatala',
    eraId: '0400-caucasian-albania',
    monumentName: 'Kiş Alban Kilsəsi & Şəki Xan Sarayı',
    description: {
      az: 'Qafqaz Albaniyasının ən qədim kilsəsi və mismarsız şəbəkə pəncərəli Xan Sarayı.',
      en: 'Ancient Caucasian Albanian stone sanctuary and 18th c. wooden shabaka palace.',
      ru: 'Древнейший храм Кавказской Албании и дворец с витражами шебеке без единого гвоздя.'
    }
  },
  {
    id: 'pin-gobustan',
    name: {
      az: 'Qobustan — Qayaüstü Şəfəq',
      en: 'Gobustan — Petroglyph Dawn',
      ru: 'Гобустан — Наскальный рассвет'
    },
    coordinates: [40.1167, 49.3833],
    region: 'Bakı Ətrafı',
    eraId: 'bc-12000-gobustan-azikh',
    monumentName: 'Qobustan Milli Qoruğu & Qavaldaş',
    description: {
      az: '6,000 qayaüstü rəsm, qədim Yallı rəqsi təsvirləri və Roma XII Leqionunun kitabəsi.',
      en: '6,000 prehistoric rock carvings, ritual Yalli dance scenes, and Roman 12th Legion inscription.',
      ru: '6 000 петроглифов, наскальный танец Яллы и надпись римского легиона XII Фульмината.'
    }
  },
  {
    id: 'pin-tabriz',
    name: {
      az: 'Təbriz — Səfəvi Paytaxtı & Göy Məscid',
      en: 'Tabriz — Safavid Capital & Blue Mosque',
      ru: 'Тебриз — Столица Сефевидов и Голубая Мечеть'
    },
    coordinates: [38.0800, 46.2919],
    region: 'Cənubi Azərbaycan',
    eraId: '1501-safavid',
    monumentName: 'Təbriz Tarixi Bazarı & Ərk Qalası',
    description: {
      az: 'Şah İsmayılın tac qoyduğu paytaxt, Təbriz miniatür məktəbinin və İpək Yolunun mərkəzi.',
      en: 'Capital where Shah Ismail was crowned, world nexus of Persian-Azerbaijani miniature art and silk trade.',
      ru: 'Столица коронации Шаха Исмаила, мировой центр школы миниатюры и торговли.'
    }
  },
  {
    id: 'pin-khudaferin',
    name: {
      az: 'Xudafərin — Tarixi Körpülər',
      en: 'Khudaferin — Historic Bridges of Aras',
      ru: 'Худаферин — Исторические мосты через Араз'
    },
    coordinates: [39.1500, 46.9333],
    region: 'Cəbrayıl / Araz',
    eraId: '0950-sajids-shaddadids',
    monumentName: '15 və 11 tağlı Xudafərin körpüləri (1027)',
    description: {
      az: '1027-ci ildə Şəddadi Fəzl ibn Məhəmməd tərəfindən ucaldılmış, Araz üzərindəki tarixi mühəndislik möcüzəsi.',
      en: 'Constructed in 1027 by Shaddadid Fadl ibn Muhammad across the Aras River, historic civil artery.',
      ru: 'Построены в 1027 году Шаддадидом Фазлом ибн Мухаммадом, шедевр мостостроения через Араз.'
    }
  }
];
