export type Language = 'az' | 'en' | 'ru';

export type ViewMode = 'timeline' | 'orbit' | 'map';

export type EraCategory = 
  | 'modern'
  | 'independence'
  | 'adr'
  | 'enlightenment'
  | 'khanates'
  | 'safavid'
  | 'medieval_shirvan'
  | 'eldiguzids'
  | 'early_medieval'
  | 'caucasian_albania'
  | 'atropatene'
  | 'manna'
  | 'prehistory';

export interface HistoricalFigure {
  name: string;
  role: string;
}

export interface HistoricalEvent {
  id: string;
  yearDisplay: string;
  yearNumeric: number; // e.g. 2020, 1991, 1918, 1890, 1747, 1501, 1400, 1186, 950, 400, -331, -850, -12000
  eraCategory: EraCategory;
  eraBadge: {
    az: string;
    en: string;
    ru: string;
  };
  title: {
    az: string;
    en: string;
    ru: string;
  };
  subtitle: {
    az: string;
    en: string;
    ru: string;
  };
  summary: {
    az: string;
    en: string;
    ru: string;
  };
  detailedNarrative: {
    az: string;
    en: string;
    ru: string;
  };
  significance: {
    az: string;
    en: string;
    ru: string;
  };
  keyFigures: {
    az: string[];
    en: string[];
    ru: string[];
  };
  location: {
    az: string;
    en: string;
    ru: string;
    coordinates?: [number, number]; // [lat, lng]
  };
  image: string;
  imageCaption: {
    az: string;
    en: string;
    ru: string;
  };
  quote?: {
    text: string;
    author: string;
  };
  orbitAction: {
    label: string; // 'ENTER ERA' | 'ANALYZE' | 'DECRYPT'
    type: 'enter' | 'analyze' | 'decrypt';
  };
  sources: string[];
}

export interface MapLocationPin {
  id: string;
  name: {
    az: string;
    en: string;
    ru: string;
  };
  coordinates: [number, number]; // [lat, lng]
  region: string;
  eraId: string;
  description: {
    az: string;
    en: string;
    ru: string;
  };
  monumentName: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  linkedEvent?: HistoricalEvent;
  highlightedKeywords?: string[];
}

export interface HistoricalSource {
  id: string;
  title: string;
  author: string;
  year: string;
  type: 'archive' | 'academic' | 'unesco' | 'chronicle';
  description: string;
  institution: string;
}
