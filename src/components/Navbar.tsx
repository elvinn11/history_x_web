import React from 'react';
import type { ViewMode, Language, HistoricalEvent } from '../types/history';
import { TRANSLATIONS } from '../data/translations';
import { 
  Compass, 
  MapPin, 
  BookOpen, 
  Bookmark, 
  Volume2, 
  VolumeX, 
  Sparkles,
  Layers
} from 'lucide-react';

interface NavbarProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  lang: Language;
  onSelectLang: (lang: Language) => void;
  activeEra: HistoricalEvent;
  savedCount: number;
  onOpenArchive: () => void;
  onOpenSources: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onSelectView,
  lang,
  onSelectLang,
  activeEra,
  savedCount,
  onOpenArchive,
  onOpenSources,
  isAudioPlaying,
  onToggleAudio,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(7, 8, 13, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '0.75rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
      {/* Brand & Emblem */}
      <div 
        onClick={() => onSelectView('timeline')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(0,229,255,0.2) 0%, rgba(212,175,55,0.3) 100%)',
          border: '1px solid rgba(0, 229, 255, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)'
        }}>
          <Sparkles size={18} color="#00e5ff" />
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-monumental)',
            fontSize: '1.05rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            background: 'linear-gradient(90deg, #ffffff 0%, #cbd5e1 50%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase'
          }}>
            {t.siteTitle}
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            color: 'var(--accent-cyan)',
            opacity: 0.9
          }}>
            DIGITAL MUSEUM ARCHIVE
          </div>
        </div>
      </div>

      {/* Real-time Temporal Coordinate Indicator */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.35rem 0.9rem',
        borderRadius: '9999px',
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(0, 229, 255, 0.25)',
        boxShadow: '0 0 12px rgba(0, 229, 255, 0.1)'
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#00e5ff',
          boxShadow: '0 0 8px #00e5ff'
        }} />
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.08em',
          color: 'var(--text-secondary)'
        }}>
          {t.yearDisplayPrefix}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#00e5ff',
          letterSpacing: '0.05em'
        }}>
          {activeEra.yearDisplay}
        </span>
      </div>

      {/* Main View Mode Navigation Tabs */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
        backgroundColor: 'rgba(15, 18, 28, 0.9)',
        padding: '0.25rem',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <button
          onClick={() => onSelectView('timeline')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.4rem 0.9rem',
            borderRadius: '9999px',
            border: 'none',
            fontSize: '0.82rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            backgroundColor: currentView === 'timeline' ? '#00e5ff' : 'transparent',
            color: currentView === 'timeline' ? '#07080d' : 'var(--text-secondary)'
          }}
        >
          <Layers size={14} />
          <span>{t.timelineNav}</span>
        </button>

        <button
          onClick={() => onSelectView('orbit')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.4rem 0.9rem',
            borderRadius: '9999px',
            border: 'none',
            fontSize: '0.82rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            backgroundColor: currentView === 'orbit' ? '#00e5ff' : 'transparent',
            color: currentView === 'orbit' ? '#07080d' : 'var(--text-secondary)'
          }}
        >
          <Compass size={14} />
          <span>{t.orbitNav}</span>
        </button>

        <button
          onClick={() => onSelectView('map')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.4rem 0.9rem',
            borderRadius: '9999px',
            border: 'none',
            fontSize: '0.82rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            backgroundColor: currentView === 'map' ? '#00e5ff' : 'transparent',
            color: currentView === 'map' ? '#07080d' : 'var(--text-secondary)'
          }}
        >
          <MapPin size={14} />
          <span>{t.mapNav}</span>
        </button>
      </nav>

      {/* Utility Actions: Audio, Sources, Archive, Language */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        {/* Ambient Soundscape Synthesizer */}
        <button
          onClick={onToggleAudio}
          title={isAudioPlaying ? t.soundOn : t.soundOff}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 0.75rem',
            borderRadius: '9999px',
            backgroundColor: isAudioPlaying ? 'rgba(0, 229, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
            border: isAudioPlaying ? '1px solid #00e5ff' : '1px solid rgba(255, 255, 255, 0.08)',
            color: isAudioPlaying ? '#00e5ff' : 'var(--text-muted)',
            cursor: 'pointer',
            fontSize: '0.75rem',
            fontWeight: 500,
            transition: 'all 0.2s ease'
          }}
        >
          {isAudioPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
          <span className="hidden sm:inline" style={{ display: 'none' }}>
            {isAudioPlaying ? 'Audio ON' : 'Audio OFF'}
          </span>
        </button>

        {/* Sources & Bibliography */}
        <button
          onClick={onOpenSources}
          title={t.sourcesNav}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 0.75rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: '0.78rem',
            fontWeight: 500,
            transition: 'all 0.2s ease'
          }}
        >
          <BookOpen size={14} />
          <span>{t.sourcesNav}</span>
        </button>

        {/* Saved Archive Drawer */}
        <button
          onClick={onOpenArchive}
          title={t.archiveNav}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 0.8rem',
            borderRadius: '9999px',
            backgroundColor: savedCount > 0 ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255, 255, 255, 0.05)',
            border: savedCount > 0 ? '1px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.08)',
            color: savedCount > 0 ? '#d4af37' : 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: '0.78rem',
            fontWeight: 600,
            transition: 'all 0.2s ease'
          }}
        >
          <Bookmark size={14} />
          <span>{t.archiveNav}</span>
          {savedCount > 0 && (
            <span style={{
              backgroundColor: '#d4af37',
              color: '#07080d',
              borderRadius: '9999px',
              padding: '0.1rem 0.4rem',
              fontSize: '0.7rem',
              fontWeight: 800
            }}>
              {savedCount}
            </span>
          )}
        </button>

        {/* Language Selector: AZ | EN | RU */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '9999px',
          padding: '0.2rem',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {(['az', 'en', 'ru'] as Language[]).map(l => (
            <button
              key={l}
              onClick={() => onSelectLang(l)}
              style={{
                background: lang === l ? 'rgba(0, 229, 255, 0.2)' : 'transparent',
                color: lang === l ? '#00e5ff' : 'var(--text-muted)',
                border: lang === l ? '1px solid rgba(0, 229, 255, 0.4)' : 'none',
                borderRadius: '9999px',
                padding: '0.2rem 0.5rem',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
