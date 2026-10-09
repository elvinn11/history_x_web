import React, { useEffect, useRef } from 'react';
import type { Language } from '../types/history';
import { TRANSLATIONS } from '../data/translations';
import { ArrowDown, Compass, Play, Sparkles } from 'lucide-react';

interface HeroLandingProps {
  lang: Language;
  onBeginJourney: () => void;
  onExploreOrbit: () => void;
}

export const HeroLanding: React.FC<HeroLandingProps> = ({
  lang,
  onBeginJourney,
  onExploreOrbit,
}) => {
  const t = TRANSLATIONS[lang];
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle starry constellation particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.2 + 0.05
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw starry dust
      stars.forEach(star => {
        star.y -= star.speed;
        if (star.y < 0) star.y = height;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${star.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00e5ff';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '7rem 2rem 5rem',
      overflow: 'hidden',
      textAlign: 'center',
      background: 'radial-gradient(circle at 50% 35%, rgba(13, 27, 42, 0.9) 0%, rgba(7, 8, 13, 0.98) 75%)'
    }}>
      {/* Background Star Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Atmospheric Silhouette Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/images/modern_2020.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.16,
        filter: 'saturate(0.4) contrast(1.2)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Hero Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '920px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        {/* Era Range Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.45rem 1.2rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(0, 229, 255, 0.08)',
          border: '1px solid rgba(0, 229, 255, 0.3)',
          boxShadow: '0 0 20px rgba(0, 229, 255, 0.15)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          letterSpacing: '0.15em',
          color: '#00e5ff',
          textTransform: 'uppercase'
        }}>
          <Sparkles size={14} />
          <span>{t.heroBadge}</span>
        </div>

        {/* Monumental Heading */}
        <h1 style={{
          fontFamily: 'var(--font-monumental)',
          fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
          fontWeight: 900,
          lineHeight: 1.15,
          letterSpacing: '0.04em',
          background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 55%, #d4af37 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: 0,
          textShadow: '0 10px 30px rgba(0,0,0,0.8)'
        }}>
          {t.heroHeading}
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          maxWidth: '750px',
          margin: 0,
          fontWeight: 300
        }}>
          {t.heroSubheading}
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '1rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={onBeginJourney}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: '#00e5ff',
              color: '#07080d',
              padding: '0.85rem 2rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 25px rgba(0, 229, 255, 0.45)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 229, 255, 0.65)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 229, 255, 0.45)';
            }}
          >
            <Play size={16} fill="#07080d" />
            <span>{t.beginJourney}</span>
          </button>

          <button
            onClick={onExploreOrbit}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--text-primary)',
              padding: '0.85rem 1.8rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.borderColor = '#00e5ff';
              e.currentTarget.style.color = '#00e5ff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <Compass size={16} />
            <span>{t.exploreOrbit}</span>
          </button>
        </div>

        {/* Era Progress Rail Preview */}
        <div style={{
          marginTop: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.6rem 1.2rem',
          backgroundColor: 'rgba(15, 18, 28, 0.7)',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          maxWidth: '100%',
          overflowX: 'auto'
        }}>
          {['2020', '1991', '1918', '1890', '1747', '1501', '1400', '1186', '400', 'e.ə. 12,000'].map((yr, idx) => (
            <React.Fragment key={yr}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: idx === 0 ? '#00e5ff' : 'var(--text-muted)',
                fontWeight: idx === 0 ? 700 : 500,
                whiteSpace: 'nowrap'
              }}>
                {yr}
              </span>
              {idx < 9 && (
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div 
        onClick={onBeginJourney}
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          cursor: 'pointer',
          zIndex: 2,
          opacity: 0.85
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase'
        }}>
          {t.scrollPrompt}
        </span>
        <div className="animate-float" style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 229, 255, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00e5ff'
        }}>
          <ArrowDown size={14} />
        </div>
      </div>
    </section>
  );
};
