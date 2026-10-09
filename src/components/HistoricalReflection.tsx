import React from 'react';
import type { Language } from '../types/history';
import { TRANSLATIONS } from '../data/translations';
import { ArrowUp, Sparkles, Compass } from 'lucide-react';

interface HistoricalReflectionProps {
  lang: Language;
  onReturnToPresent: () => void;
  onExploreOrbit: () => void;
}

export const HistoricalReflection: React.FC<HistoricalReflectionProps> = ({
  lang,
  onReturnToPresent,
  onExploreOrbit,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer style={{
      position: 'relative',
      backgroundColor: '#05060a',
      borderTop: '1px solid rgba(0, 229, 255, 0.2)',
      padding: '7rem 2rem 5rem',
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '850px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.35rem 1rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(212, 175, 55, 0.1)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          color: '#d4af37',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase'
        }}>
          <Sparkles size={14} />
          <span>MİLLİ VARİSLİK VƏ MƏDƏNİYYƏT</span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-monumental)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '0.04em',
          background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 60%, #00e5ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: 0
        }}>
          {lang === 'az' 
            ? 'Minilliklərin Yolu: Qədim Şəfəqdən Müasir Zəfərə' 
            : lang === 'ru' 
            ? 'Путь Тысячелетий: От Древнего Рассвета к Победе' 
            : 'The Path of Millennia: From Ancient Dawn to Modern Triumph'}
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: 'var(--text-secondary)',
          margin: 0,
          maxWidth: '720px'
        }}>
          {lang === 'az'
            ? 'Qobustanın daş rəsmlərindən, Atropatenanın sönməz odlarından, Şirvanşahların möhtəşəm divanxanalarından və 1918-ci il Cümhuriyyət ideallarından süzülüb gələn irs bu gün müasir, müstəqil və qalib Azərbaycanda yaşayır.'
            : lang === 'ru'
            ? 'Наследие петроглифов Гобустана, огней Атропатены, зодчества Ширваншахов и идеалов АДР 1918 года обрело новое дыхание в современном суверенном Азербайджане.'
            : 'The indelible legacy streaming from Gobustan’s archaic rock canvases, the sacred flames of Atropatene, the stone palaces of Shirvan, and the 1918 parliamentary republic lives vibrant in modern sovereign Azerbaijan.'}
        </p>

        {/* Buttons to Return to Present or Open Cosmic Orbit */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={onReturnToPresent}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: '#00e5ff',
              color: '#07080d',
              padding: '0.85rem 2rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 25px rgba(0, 229, 255, 0.4)',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowUp size={16} />
            <span>{t.returnToPresent}</span>
          </button>

          <button
            onClick={onExploreOrbit}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#ffffff',
              padding: '0.85rem 1.8rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Compass size={16} />
            <span>{t.exploreOrbit}</span>
          </button>
        </div>

        {/* Legal & Historical Attribution Footer */}
        <div style={{
          marginTop: '3.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.78rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} Azərbaycan Tarixi Rəqəmsal Muzeyi • Celestial Historical Curator
          </div>
          <div style={{ fontFamily: 'var(--font-mono)' }}>
            UNESCO Dünya İrsi & AMEA Tarix İnstitutu Arxivləri Əsasında
          </div>
        </div>
      </div>
    </footer>
  );
};
