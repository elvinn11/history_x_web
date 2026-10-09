import React, { useEffect, useRef } from 'react';
import type { HistoricalEvent, Language } from '../types/history';
import { TRANSLATIONS } from '../data/translations';
import { 
  Bookmark, 
  MapPin, 
  MessageSquare, 
  ArrowDown, 
  ExternalLink
} from 'lucide-react';

interface TimelineJourneyProps {
  events: HistoricalEvent[];
  activeEra: HistoricalEvent;
  onActiveEraChange: (era: HistoricalEvent) => void;
  lang: Language;
  onOpenDeepDive: (event: HistoricalEvent) => void;
  onAskAI: (event: HistoricalEvent) => void;
  savedIds: string[];
  onToggleSave: (event: HistoricalEvent) => void;
}

export const TimelineJourney: React.FC<TimelineJourneyProps> = ({
  events,
  activeEra,
  onActiveEraChange,
  lang,
  onOpenDeepDive,
  onAskAI,
  savedIds,
  onToggleSave,
}) => {
  const t = TRANSLATIONS[lang];
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Observe active section during scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index) && events[index]) {
              onActiveEraChange(events[index]);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.1
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [events, onActiveEraChange]);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', width: '100%', backgroundColor: '#07080d' }}>
      {/* Sticky Temporal Navigation HUD (Floating Top Center / Side) */}
      <div style={{
        position: 'sticky',
        top: '64px',
        zIndex: 50,
        backgroundColor: 'rgba(7, 8, 13, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '0.6rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Scrolled Year Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.8rem',
            fontWeight: 800,
            color: '#00e5ff',
            letterSpacing: '-0.02em',
            textShadow: '0 0 15px rgba(0, 229, 255, 0.4)'
          }}>
            {activeEra.yearDisplay}
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: '#22c55e',
              textTransform: 'uppercase'
            }}>
              {activeEra.eraBadge[lang]}
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              fontWeight: 500
            }}>
              {activeEra.title[lang]}
            </div>
          </div>
        </div>

        {/* Direction Notice */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          padding: '0.3rem 0.8rem',
          borderRadius: '9999px'
        }}>
          <ArrowDown size={13} color="#00e5ff" />
          <span>{t.backwardScrollNotice}</span>
        </div>

        {/* Temporal Progress Rail */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          overflowX: 'auto',
          maxWidth: '450px'
        }}>
          {events.map((ev, idx) => {
            const isSelected = ev.id === activeEra.id;
            return (
              <button
                key={ev.id}
                onClick={() => scrollToSection(idx)}
                title={`${ev.yearDisplay} — ${ev.title[lang]}`}
                style={{
                  width: isSelected ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: isSelected ? '#00e5ff' : 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  padding: 0
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Main Historical Milestone Sections (Progressing Backward in Time) */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {events.map((event, idx) => {
          const isSaved = savedIds.includes(event.id);

          return (
            <section
              key={event.id}
              ref={(el) => { sectionRefs.current[idx] = el; }}
              data-index={idx}
              id={`era-${event.id}`}
              style={{
                position: 'relative',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6rem 2rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                overflow: 'hidden'
              }}
            >
              {/* Atmospheric Background Layer with Image & Vignette */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${event.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.18,
                filter: 'saturate(0.5) contrast(1.15)',
                pointerEvents: 'none',
                transform: 'scale(1.02)',
                transition: 'opacity 0.5s ease'
              }} />

              {/* Radial gradient darkening overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(7, 8, 13, 0.7) 0%, rgba(7, 8, 13, 0.98) 85%)',
                pointerEvents: 'none'
              }} />

              {/* Center Content Container */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '1080px',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '3.5rem',
                alignItems: 'center'
              }}>
                {/* Visual Artifact Showcase Box */}
                <div style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backgroundColor: '#0c0f1a',
                  border: '1px solid rgba(0, 229, 255, 0.25)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 229, 255, 0.1)',
                  aspectRatio: '16/10'
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
                  {/* Image Caption bar */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '0.8rem 1.2rem',
                    background: 'linear-gradient(to top, rgba(7,8,13,0.92) 0%, transparent 100%)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    color: '#e2e8f0',
                    lineHeight: 1.3
                  }}>
                    {event.imageCaption[lang]}
                  </div>

                  {/* Corner Era Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(7, 8, 13, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 229, 255, 0.4)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#00e5ff',
                    letterSpacing: '0.08em'
                  }}>
                    {event.yearDisplay}
                  </div>
                </div>

                {/* Narrative & Details Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Era Badge Capsule */}
                  <div>
                    <span style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: '#22c55e',
                      backgroundColor: 'rgba(34, 197, 94, 0.12)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      padding: '0.3rem 0.9rem',
                      borderRadius: '9999px',
                      textTransform: 'uppercase'
                    }}>
                      {event.eraBadge[lang]}
                    </span>
                  </div>

                  {/* Huge Year Marker */}
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: '#ffffff',
                    textShadow: '0 5px 20px rgba(0, 229, 255, 0.2)'
                  }}>
                    {event.yearDisplay}
                  </div>

                  {/* Event Title */}
                  <h2 style={{
                    fontFamily: 'var(--font-monumental)',
                    fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: '#f8fafc',
                    margin: 0
                  }}>
                    {event.title[lang]}
                  </h2>

                  {/* Subtitle */}
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    color: '#38bdf8',
                    fontWeight: 500
                  }}>
                    {event.subtitle[lang]}
                  </div>

                  {/* Narrative Summary */}
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.96rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}>
                    {event.summary[lang]}
                  </p>

                  {/* Key Figures & Location Badges */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1.2rem',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    {/* Key figures */}
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        color: '#22c55e',
                        marginBottom: '0.2rem'
                      }}>
                        {t.keyFiguresLabel}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                        {event.keyFigures[lang].slice(0, 3).join(', ')}
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        color: '#22c55e',
                        marginBottom: '0.2rem'
                      }}>
                        {t.locationLabel}
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.85rem',
                        color: '#cbd5e1'
                      }}>
                        <MapPin size={14} color="#22c55e" />
                        <span>{event.location[lang]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons: Explore Deep Dive (Ref Image 1), Ask AI (Ref Image 3), Save */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginTop: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    {/* Solid Cyan Pill (Deep Dive) */}
                    <button
                      onClick={() => onOpenDeepDive(event)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: '#00e5ff',
                        color: '#07080d',
                        padding: '0.75rem 1.6rem',
                        borderRadius: '9999px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 0 20px rgba(0, 229, 255, 0.35)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 229, 255, 0.55)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.35)';
                      }}
                    >
                      <ExternalLink size={15} />
                      <span>{t.exploreEra}</span>
                    </button>

                    {/* Ask AI Guide */}
                    <button
                      onClick={() => onAskAI(event)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#ffffff',
                        padding: '0.75rem 1.4rem',
                        borderRadius: '9999px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = '#00e5ff';
                        e.currentTarget.style.color = '#00e5ff';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                    >
                      <MessageSquare size={15} />
                      <span>{t.askAIGuide}</span>
                    </button>

                    {/* Bookmark Save to Archive */}
                    <button
                      onClick={() => onToggleSave(event)}
                      title={isSaved ? t.savedInArchive : t.saveToArchive}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        backgroundColor: isSaved ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        border: isSaved ? '1px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.15)',
                        color: isSaved ? '#22c55e' : 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Bookmark size={16} fill={isSaved ? '#22c55e' : 'none'} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
