import React, { useState } from 'react';
import type { HistoricalEvent, Language } from '../types/history';
import { TRANSLATIONS } from '../data/translations';
import { HISTORICAL_EVENTS } from '../data/historyData';
import { Compass, Eye, KeyRound, Sparkles, Send, ArrowRight } from 'lucide-react';

interface OrbitalNavigatorProps {
  lang: Language;
  onSelectEra: (era: HistoricalEvent) => void;
  onOpenDeepDive: (era: HistoricalEvent) => void;
  onAskAI: (era: HistoricalEvent, initialQuery?: string) => void;
}

export const OrbitalNavigator: React.FC<OrbitalNavigatorProps> = ({
  lang,
  onSelectEra,
  onOpenDeepDive,
  onAskAI,
}) => {
  const t = TRANSLATIONS[lang];
  const [activeEraIndex, setActiveEraIndex] = useState(0);
  const [queryInput, setQueryInput] = useState('');

  // Selected key eras representing the cosmic timeline
  const orbitEras = HISTORICAL_EVENTS;
  const currentActive = orbitEras[activeEraIndex] || orbitEras[0];

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryInput.trim()) return;
    onAskAI(currentActive, queryInput);
    setQueryInput('');
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#07080d',
      backgroundImage: `
        radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.05) 0%, transparent 60%),
        radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)
      `,
      backgroundSize: '100% 100%, 36px 36px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 1.5rem 5rem',
      overflow: 'hidden'
    }}>
      {/* Subtle Orbital Rings in background (matching Reference Image 2) */}
      <div style={{
        position: 'absolute',
        width: '750px',
        height: '750px',
        borderRadius: '50%',
        border: '1px dashed rgba(0, 229, 255, 0.12)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        width: '1050px',
        height: '1050px',
        borderRadius: '50%',
        border: '1px solid rgba(255, 255, 255, 0.04)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Title Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
        zIndex: 2,
        maxWidth: '700px'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.3rem 0.9rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(0, 229, 255, 0.08)',
          border: '1px solid rgba(0, 229, 255, 0.25)',
          color: '#00e5ff',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '0.6rem'
        }}>
          <Sparkles size={13} />
          <span>KOSMİK ZAMAN ORBİTİ // TEMPORAL MATRIX</span>
        </div>
        <h2 style={{
          fontFamily: 'var(--font-monumental)',
          fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
          letterSpacing: '0.04em',
          color: '#ffffff',
          margin: 0
        }}>
          {t.exploreOrbit}
        </h2>
      </div>

      {/* Main Cosmic Navigator Stage (matching Reference Image 2 layout) */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1100px',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
      }}>
        {/* Central Glowing AI Guide Avatar Orb (matching Reference Image 2) */}
        <div 
          onClick={() => onAskAI(currentActive)}
          title="Tarixçi AI — Klikləyin və soruşun"
          style={{
            position: 'relative',
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            padding: '6px',
            background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.5) 0%, rgba(212, 175, 55, 0.4) 100%)',
            boxShadow: '0 0 50px rgba(0, 229, 255, 0.35), inset 0 0 20px rgba(0, 229, 255, 0.2)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            zIndex: 10
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: '#0c0f1a',
            border: '2px solid #00e5ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src="/images/avatar.jpg"
              alt="Celestial Curator AI"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Pulse ring around avatar */}
          <div className="animate-pulse-glow" style={{
            position: 'absolute',
            inset: '-10px',
            borderRadius: '50%',
            border: '1px solid rgba(0, 229, 255, 0.3)',
            pointerEvents: 'none'
          }} />
        </div>

        {/* Orbiting Era Cards Grid (matching Reference Image 2) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center',
          pointerEvents: 'none'
        }}>
          {orbitEras.slice(0, 4).map((era, idx) => {
            const isCurrent = era.id === currentActive.id;
            const actionLabel = era.orbitAction.label;
            const actionType = era.orbitAction.type;

            return (
              <div
                key={era.id}
                onClick={() => {
                  setActiveEraIndex(idx);
                  onSelectEra(era);
                }}
                style={{
                  pointerEvents: 'auto',
                  backgroundColor: isCurrent ? 'rgba(23, 28, 43, 0.95)' : 'rgba(16, 19, 29, 0.75)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: isCurrent ? '1px solid #00e5ff' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  color: '#ffffff',
                  boxShadow: isCurrent 
                    ? '0 0 35px rgba(0, 229, 255, 0.25), 0 15px 30px rgba(0,0,0,0.5)' 
                    : '0 10px 25px rgba(0,0,0,0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isCurrent ? 'scale(1.04)' : 'scale(0.96)',
                  opacity: isCurrent ? 1 : 0.7
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.borderColor = '#00e5ff';
                }}
                onMouseLeave={e => {
                  if (!isCurrent) {
                    e.currentTarget.style.opacity = '0.7';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
              >
                {/* Big Year (Reference Image 2: e.g. 2020, 1969, 1440) */}
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                  marginBottom: '0.4rem'
                }}>
                  {era.yearDisplay}
                </div>

                {/* Subtitle / Era title (Reference Image 2: e.g. The Global Shift, Lunar Ascent) */}
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#38bdf8',
                  marginBottom: '0.6rem'
                }}>
                  {era.title[lang]}
                </div>

                {/* Short narrative summary */}
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  lineHeight: 1.5,
                  color: 'var(--text-secondary)',
                  margin: '0 0 1rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {era.summary[lang]}
                </p>

                {/* Action Link (Reference Image 2: e.g. ENTER ERA, ANALYZE, DECRYPT) */}
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenDeepDive(era);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: '#00e5ff',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  {actionType === 'enter' && <Compass size={14} />}
                  {actionType === 'analyze' && <Eye size={14} />}
                  {actionType === 'decrypt' && <KeyRound size={14} />}
                  <span>{actionLabel}</span>
                  <ArrowRight size={12} style={{ marginLeft: 'auto' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Era Carousel Selector Slider at bottom */}
      <div style={{
        marginTop: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.4rem 0.8rem',
        backgroundColor: 'rgba(16, 20, 32, 0.8)',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: 2,
        maxWidth: '90vw',
        overflowX: 'auto'
      }}>
        {orbitEras.map((era, index) => (
          <button
            key={era.id}
            onClick={() => {
              setActiveEraIndex(index);
              onSelectEra(era);
            }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '9999px',
              border: index === activeEraIndex ? '1px solid #00e5ff' : 'none',
              backgroundColor: index === activeEraIndex ? 'rgba(0, 229, 255, 0.2)' : 'transparent',
              color: index === activeEraIndex ? '#00e5ff' : 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            {era.yearDisplay}
          </button>
        ))}
      </div>

      {/* Bottom Interactive Query Prompt Bar (Reference Image 2: "What would you like to change or explore?") */}
      <div style={{
        width: '100%',
        maxWidth: '680px',
        marginTop: '1.5rem',
        zIndex: 2
      }}>
        <form 
          onSubmit={handlePromptSubmit}
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(21, 26, 40, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '9999px',
            padding: '0.35rem 0.6rem 0.35rem 1.4rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 229, 255, 0.1)'
          }}
        >
          <input
            type="text"
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
            placeholder={lang === 'az' ? 'Dövr haqqında nə bilmək və ya dəyişmək istəyirsiniz?' : lang === 'ru' ? 'Что вы хотите узнать или исследовать в этой эпохе?' : 'What would you like to explore about this era?'}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '0.9rem',
              outline: 'none',
              fontFamily: 'var(--font-sans)'
            }}
          />
          <button
            type="submit"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#00e5ff',
              border: 'none',
              color: '#07080d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(0, 229, 255, 0.4)'
            }}
          >
            <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
};
