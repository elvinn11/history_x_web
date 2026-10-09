import React, { useEffect } from 'react';
import type { HistoricalEvent, Language } from '../types/history';
import { TRANSLATIONS } from '../data/translations';
import { X, Bookmark, MapPin, BookOpen, MessageSquare } from 'lucide-react';

interface DeepDiveModalProps {
  event: HistoricalEvent | null;
  onClose: () => void;
  lang: Language;
  isSaved: boolean;
  onToggleSave: (event: HistoricalEvent) => void;
  onAskAI: (event: HistoricalEvent) => void;
}

export const DeepDiveModal: React.FC<DeepDiveModalProps> = ({
  event,
  onClose,
  lang,
  isSaved,
  onToggleSave,
  onAskAI,
}) => {
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!event) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Card matching Reference Image 1 */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '920px',
          backgroundColor: '#ffffff',
          color: '#111827',
          borderRadius: '24px',
          padding: '2.5rem',
          boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 229, 255, 0.15)',
          overflow: 'hidden',
          animation: 'fadeIn 0.25s ease-out'
        }}
      >
        {/* Close button at top right */}
        <button
          onClick={onClose}
          aria-label={t.deepDiveClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#9ca3af',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s ease, background-color 0.2s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#111827';
            e.currentTarget.style.backgroundColor = '#f3f4f6';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#9ca3af';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <X size={22} />
        </button>

        {/* Content grid: Left (Year, Era, Image) & Right (Title, Text, Figures, Location, Buttons) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Big Year (Reference Image 1 style: e.g. 1776) */}
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '4.2rem',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: '#0a0a0c'
            }}>
              {event.yearDisplay}
            </div>

            {/* Era Badge capsule (e.g. ERA: REVOLUTION in reference image 1) */}
            <div>
              <span style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#16a34a',
                backgroundColor: 'rgba(34, 197, 94, 0.12)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                textTransform: 'uppercase'
              }}>
                {event.eraBadge[lang]}
              </span>
            </div>

            {/* Historical Document / Artifact Image (Reference Image 1 style) */}
            <div style={{
              marginTop: '0.5rem',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#0a0a0c',
              border: '1px solid #e5e7eb',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              aspectRatio: '3/4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <img
                src={event.image}
                alt={event.title[lang]}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '0.75rem 1rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-sans)',
                lineHeight: 1.3
              }}>
                {event.imageCaption[lang]}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Title (Reference Image 1: large bold title) */}
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '2.1rem',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              {event.title[lang]}
            </h2>

            {/* Subtitle / Narrative */}
            <p style={{
              fontSize: '0.98rem',
              lineHeight: 1.65,
              color: '#475569',
              margin: 0
            }}>
              {event.detailedNarrative[lang]}
            </p>

            {/* Significance quote if exists */}
            {event.quote && (
              <div style={{
                borderLeft: '3px solid #00b4d8',
                paddingLeft: '1rem',
                margin: '0.25rem 0',
                color: '#334155',
                fontStyle: 'italic',
                fontSize: '0.92rem'
              }}>
                "{event.quote.text}"
                <div style={{
                  fontSize: '0.78rem',
                  color: '#64748b',
                  fontStyle: 'normal',
                  marginTop: '0.2rem',
                  fontWeight: 600
                }}>
                  — {event.quote.author}
                </div>
              </div>
            )}

            {/* KEY FIGURES Section (Reference Image 1: green label + names) */}
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                color: '#16a34a',
                textTransform: 'uppercase',
                marginBottom: '0.35rem'
              }}>
                {t.keyFiguresLabel}
              </div>
              <div style={{
                fontSize: '0.92rem',
                color: '#334155',
                lineHeight: 1.5,
                fontWeight: 500
              }}>
                {event.keyFigures[lang].join(', ')}
              </div>
            </div>

            {/* LOCATION Section (Reference Image 1: pin icon + location) */}
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                color: '#16a34a',
                textTransform: 'uppercase',
                marginBottom: '0.35rem'
              }}>
                {t.locationLabel}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.92rem',
                color: '#334155',
                fontWeight: 500
              }}>
                <MapPin size={16} color="#16a34a" />
                <span>{event.location[lang]}</span>
              </div>
            </div>

            {/* SOURCES Badges */}
            <div style={{
              paddingTop: '0.5rem',
              borderTop: '1px solid #f1f5f9'
            }}>
              <div style={{
                fontSize: '0.72rem',
                color: '#64748b',
                fontFamily: 'var(--font-mono)',
                marginBottom: '0.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                <BookOpen size={12} />
                <span>MƏNBƏLƏR / SOURCES:</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {event.sources.map((s, i) => (
                  <span key={i} style={{ fontSize: '0.78rem', color: '#64748b' }}>
                    • {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons (Reference Image 1 style: Save to Archive & Explore Era) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              marginTop: '0.5rem',
              flexWrap: 'wrap'
            }}>
              {/* Solid Cyan Pill Button */}
              <button
                onClick={() => onToggleSave(event)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: isSaved ? '#10b981' : '#00b4d8',
                  color: '#ffffff',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0, 180, 216, 0.25)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = isSaved ? '#059669' : '#0284c7';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = isSaved ? '#10b981' : '#00b4d8';
                }}
              >
                <Bookmark size={15} fill={isSaved ? '#ffffff' : 'none'} />
                <span>{isSaved ? t.savedInArchive : t.saveToArchive}</span>
              </button>

              {/* Outline Pill Button */}
              <button
                onClick={() => {
                  onClose();
                  onAskAI(event);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#ffffff',
                  color: '#334155',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  border: '1px solid #cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#00b4d8';
                  e.currentTarget.style.color = '#00b4d8';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#cbd5e1';
                  e.currentTarget.style.color = '#334155';
                }}
              >
                <MessageSquare size={15} />
                <span>{t.askAIGuide}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
