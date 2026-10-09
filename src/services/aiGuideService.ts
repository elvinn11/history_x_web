import type { HistoricalEvent, Language } from '../types/history';
import { HISTORICAL_EVENTS } from '../data/historyData';

export interface AIResponsePayload {
  text: string;
  linkedEvent?: HistoricalEvent;
  highlightedKeywords: string[];
}

export class AIGuideService {
  private static STORAGE_KEY_API_KEY = 'history_x_ai_api_key';
  private static STORAGE_KEY_PROVIDER = 'history_x_ai_provider';

  public static getApiKey(): string {
    return localStorage.getItem(this.STORAGE_KEY_API_KEY) || '';
  }

  public static setApiKey(key: string, provider: 'gemini' | 'openai' = 'gemini'): void {
    if (key.trim()) {
      localStorage.setItem(this.STORAGE_KEY_API_KEY, key.trim());
      localStorage.setItem(this.STORAGE_KEY_PROVIDER, provider);
    } else {
      localStorage.removeItem(this.STORAGE_KEY_API_KEY);
      localStorage.removeItem(this.STORAGE_KEY_PROVIDER);
    }
  }

  public static getProvider(): 'gemini' | 'openai' {
    return (localStorage.getItem(this.STORAGE_KEY_PROVIDER) as 'gemini' | 'openai') || 'gemini';
  }

  public static async askHistoricalGuide(
    userQuestion: string,
    currentEra: HistoricalEvent,
    lang: Language
  ): Promise<AIResponsePayload> {
    const customKey = this.getApiKey();

    if (customKey) {
      try {
        const liveResponse = await this.queryLiveAI(customKey, this.getProvider(), userQuestion, currentEra, lang);
        if (liveResponse) {
          return liveResponse;
        }
      } catch (err) {
        console.warn('Live AI API error, falling back to built-in historical curator engine:', err);
      }
    }

    // High-fidelity built-in contextual historical curator response engine
    return this.generateCuratorResponse(userQuestion, currentEra, lang);
  }

  private static async queryLiveAI(
    apiKey: string,
    provider: 'gemini' | 'openai',
    userQuestion: string,
    currentEra: HistoricalEvent,
    lang: Language
  ): Promise<AIResponsePayload | null> {
    const systemPrompt = `You are the Celestial Curator AI (Tarixçi AI), an elite digital museum guide specialized in the comprehensive history of Azerbaijan. 
Current viewing era: ${currentEra.yearDisplay} (${currentEra.title[lang]}).
Active Era details: ${currentEra.summary[lang]}. Key figures: ${currentEra.keyFigures[lang].join(', ')}.
Provide an eloquent, historically rigorous answer in ${lang === 'az' ? 'Azerbaijani' : lang === 'ru' ? 'Russian' : 'English'}.
Maintain objective historiography, distinguishing archaeology from interpretation. Keep response around 2-4 sentences, highlighting key figures.`;

    if (provider === 'gemini') {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${systemPrompt}\n\nUser Question: ${userQuestion}` }]
              }
            ],
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 500
            }
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          return {
            text,
            linkedEvent: currentEra,
            highlightedKeywords: currentEra.keyFigures[lang].slice(0, 3)
          };
        }
      }
    }

    return null;
  }

  public static generateCuratorResponse(
    query: string,
    currentEra: HistoricalEvent,
    lang: Language
  ): AIResponsePayload {
    const q = query.toLowerCase();

    // Check if query is targeting another era
    let targetEra = currentEra;
    for (const era of HISTORICAL_EVENTS) {
      if (
        q.includes(era.yearDisplay.toLowerCase()) ||
        q.includes(era.id) ||
        (era.yearNumeric > 0 && q.includes(era.yearNumeric.toString())) ||
        era.title[lang].toLowerCase().split(' ').some(word => word.length > 4 && q.includes(word))
      ) {
        targetEra = era;
        break;
      }
    }

    const keyFigures = targetEra.keyFigures[lang];
    const location = targetEra.location[lang];

    // Response templates based on question intent
    if (q.includes('nə baş verib') || q.includes('what happened') || q.includes('что произошло') || q.includes('hadisə') || q.includes('event')) {
      if (lang === 'az') {
        return {
          text: `${targetEra.yearDisplay}-ci ildə Azərbaycan tarixində həlledici dönüş nöqtəsi olan **${targetEra.title.az}** hadisəsi cərəyan etmişdir. Bu dövrdə əsas hadisələr ${location} ərazisində baş vermiş, ${keyFigures[0]} və digər tarixi şəxsiyyətlərin fəaliyyəti sayəsində dövlətçilik tarixində yeni səhifə açılmışdır. ${targetEra.summary.az}`,
          linkedEvent: targetEra,
          highlightedKeywords: [targetEra.yearDisplay, ...keyFigures.slice(0, 2)]
        };
      } else if (lang === 'ru') {
        return {
          text: `В ${targetEra.yearDisplay} году в истории Азербайджана произошло важнейшее событие: **${targetEra.title.ru}**. Основные вехи разворачивались в регионе ${location}, где выдающиеся деятели, включая ${keyFigures[0]}, сыграли определяющую роль. ${targetEra.summary.ru}`,
          linkedEvent: targetEra,
          highlightedKeywords: [targetEra.yearDisplay, ...keyFigures.slice(0, 2)]
        };
      } else {
        return {
          text: `In ${targetEra.yearDisplay}, a transformative turning point occurred in Azerbaijani history: **${targetEra.title.en}**. Centered in ${location}, leadership under ${keyFigures[0]} and contemporary figures reshaped regional statecraft. ${targetEra.summary.en}`,
          linkedEvent: targetEra,
          highlightedKeywords: [targetEra.yearDisplay, ...keyFigures.slice(0, 2)]
        };
      }
    }

    if (q.includes('əhəmiyyət') || q.includes('important') || q.includes('значение') || q.includes('niyə vacib') || q.includes('why')) {
      if (lang === 'az') {
        return {
          text: `**${targetEra.title.az}** hadisəsinin başlıca tarixi əhəmiyyəti: ${targetEra.significance.az} Bu dövr ${targetEra.eraBadge.az} daxilində milli suverenliyin və mədəni varisliyin təməl sütununu təşkil edir. Tarixi mənbələr (${targetEra.sources[0]}) bunu aydın sübut edir.`,
          linkedEvent: targetEra,
          highlightedKeywords: [targetEra.yearDisplay, keyFigures[0]]
        };
      } else if (lang === 'ru') {
        return {
          text: `Историческое значение события **${targetEra.title.ru}** заключается в следующем: ${targetEra.significance.ru} Это событие эпохи ${targetEra.eraBadge.ru} закрепило преемственность государственности и культурную самобытность. Документальные свидетельства подтверждаются источником: ${targetEra.sources[0]}.`,
          linkedEvent: targetEra,
          highlightedKeywords: [targetEra.yearDisplay, keyFigures[0]]
        };
      } else {
        return {
          text: `The paramount historical significance of **${targetEra.title.en}** rests in: ${targetEra.significance.en} This period within the ${targetEra.eraBadge.en} fortified sovereign traditions and civilizational identity. Verified by primary scholarship: ${targetEra.sources[0]}.`,
          linkedEvent: targetEra,
          highlightedKeywords: [targetEra.yearDisplay, keyFigures[0]]
        };
      }
    }

    if (q.includes('şəxsiyyət') || q.includes('hökmdar') || q.includes('ruler') || q.includes('figure') || q.includes('деятел') || q.includes('правител')) {
      if (lang === 'az') {
        return {
          text: `${targetEra.yearDisplay} dövrünün başlıca tarixi simaları: **${keyFigures.join(', ')}**. Bu şəxsiyyətlər ${location} mərkəzində milli iradəni, memarlıq abidələrini və dövlətçilik institutlarını təşkil etmişlər. ${targetEra.quote ? `Məşhur kəlam: "${targetEra.quote.text}" — ${targetEra.quote.author}.` : ''}`,
          linkedEvent: targetEra,
          highlightedKeywords: keyFigures
        };
      } else if (lang === 'ru') {
        return {
          text: `Ключевыми историческими личностями эпохи ${targetEra.yearDisplay} являются: **${keyFigures.join(', ')}**. Они определили политический курс и культурный ренессанс в регионе ${location}. ${targetEra.quote ? `Известное высказывание: "${targetEra.quote.text}" — ${targetEra.quote.author}.` : ''}`,
          linkedEvent: targetEra,
          highlightedKeywords: keyFigures
        };
      } else {
        return {
          text: `The foremost historical figures of the ${targetEra.yearDisplay} era include: **${keyFigures.join(', ')}**. Operating from ${location}, their statecraft forged architectural milestones and legal frameworks. ${targetEra.quote ? `Historic motto: "${targetEra.quote.text}" — ${targetEra.quote.author}.` : ''}`,
          linkedEvent: targetEra,
          highlightedKeywords: keyFigures
        };
      }
    }

    // Default thorough museum-guide narrative
    if (lang === 'az') {
      return {
        text: `Salam! Mən sizin Azərbaycan Tarixi üzrə AI Bələdçinizəm. Hazırda siz **${targetEra.yearDisplay}** — **${targetEra.title.az}** dövrünü araşdırırsınız. ${targetEra.detailedNarrative.az}`,
        linkedEvent: targetEra,
        highlightedKeywords: [targetEra.yearDisplay, keyFigures[0], location]
      };
    } else if (lang === 'ru') {
      return {
        text: `Приветствую! Я ваш ИИ-Куратор по истории Азербайджана. В настоящий момент вы исследуете эпоху **${targetEra.yearDisplay}** — **${targetEra.title.ru}**. ${targetEra.detailedNarrative.ru}`,
        linkedEvent: targetEra,
        highlightedKeywords: [targetEra.yearDisplay, keyFigures[0], location]
      };
    } else {
      return {
        text: `Greetings! I am your Celestial Curator AI for the history of Azerbaijan. You are currently examining the **${targetEra.yearDisplay}** era — **${targetEra.title.en}**. ${targetEra.detailedNarrative.en}`,
        linkedEvent: targetEra,
        highlightedKeywords: [targetEra.yearDisplay, keyFigures[0], location]
      };
    }
  }

  public static getSuggestedQuestions(era: HistoricalEvent, lang: Language): string[] {
    if (lang === 'az') {
      return [
        `${era.yearDisplay}-ci ildə nə baş vermişdi?`,
        `Bu dövrün Azərbaycan tarixində rolu nədir?`,
        `${era.keyFigures.az[0]} kim olub?`,
        `Şirvanşahlar və qədim dövlətçilik ənənələri necə bağlanır?`
      ];
    } else if (lang === 'ru') {
      return [
        `Что произошло в ${era.yearDisplay} году?`,
        `В чем историческое значение этого события?`,
        `Кто такой ${era.keyFigures.ru[0]}?`,
        `Как государство Ширваншахов повлияло на регион?`
      ];
    } else {
      return [
        `What happened during ${era.yearDisplay}?`,
        `Why is this event crucial in Azerbaijani history?`,
        `Tell me more about ${era.keyFigures.en[0]}.`,
        `What was the Shirvanshahs' role in the region?`
      ];
    }
  }
}
