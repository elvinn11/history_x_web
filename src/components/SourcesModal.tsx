import React from 'react';
import type { Language, HistoricalSource } from '../types/history';
import { TRANSLATIONS } from '../data/translations';
import { HISTORICAL_SOURCES } from '../data/historyData';
import { X, ShieldCheck } from 'lucide-react';

interface SourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const SourcesModal: React.FC<SourcesModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
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
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '85vh',
          backgroundColor: '#0c0f1a',
          color: '#f8fafc',
          borderRadius: '24px',
          border: '1px solid rgba(0, 229, 255, 0.3)',
          padding: '2.5rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 229, 255, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.4rem',
            borderRadius: '50%'
          }}
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.3rem 0.8rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(34, 197, 94, 0.12)',
            color: '#22c55e',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            marginBottom: '0.5rem'
          }}>
            <ShieldCheck size={14} />
            <span>AKADEMİK VERİFİKASİYA // ACADEMIC CITATIONS</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-monumental)',
            fontSize: '1.8rem',
            fontWeight: 800,
            margin: '0 0 0.4rem',
            color: '#ffffff'
          }}>
            {t.sourcesModalTitle}
          </h2>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            margin: 0
          }}>
            {t.sourcesModalSubtitle}
          </p>
        </div>

        {/* Sources List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          paddingRight: '0.5rem'
        }}>
          {HISTORICAL_SOURCES.map((source: HistoricalSource) => (
            <div
              key={source.id}
              style={{
                backgroundColor: 'rgba(21, 26, 40, 0.8)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '1.2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: source.type === 'unesco' ? '#38bdf8' : source.type === 'archive' ? '#22c55e' : '#d4af37',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  textTransform: 'uppercase'
                }}>
                  {source.type} • {source.year}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {source.institution}
                </span>
              </div>

              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.02rem',
                fontWeight: 700,
                color: '#ffffff'
              }}>
                {source.title}
              </div>

              <div style={{ fontSize: '0.84rem', color: '#38bdf8', fontWeight: 500 }}>
                {source.author}
              </div>

              <p style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                margin: '0.2rem 0 0'
              }}>
                {source.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
