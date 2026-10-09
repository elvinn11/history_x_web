import React from 'react';
import type { HistoricalEvent, Language } from '../types/history';
import { TRANSLATIONS } from '../data/translations';
import { X, Trash2, ExternalLink, Bookmark, MessageSquare } from 'lucide-react';

interface ArchiveDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedEvents: HistoricalEvent[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
  onOpenDeepDive: (event: HistoricalEvent) => void;
  onAskAI: (event: HistoricalEvent) => void;
  lang: Language;
}

export const ArchiveDrawer: React.FC<ArchiveDrawerProps> = ({
  isOpen,
  onClose,
  savedEvents,
  onRemove,
  onClearAll,
  onOpenDeepDive,
  onAskAI,
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
        backgroundColor: 'rgba(5, 7, 12, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: 'min(440px, 100vw)',
          height: '100%',
          backgroundColor: '#0c0f1a',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-20px 0 50px rgba(0, 0, 0, 0.8)',
          animation: 'slideInRight 0.25s ease-out'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '1.4rem 1.6rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Bookmark size={18} color="#d4af37" />
            <h3 style={{
              fontFamily: 'var(--font-monumental)',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0
            }}>
              {t.archiveDrawerTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '0.4rem'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content list */}
        <div style={{
          flex: 1,
          padding: '1.4rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {savedEvents.length === 0 ? (
            <div style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'var(--text-muted)',
              padding: '2rem'
            }}>
              <Bookmark size={40} style={{ opacity: 0.3, marginBottom: '1rem' }} />
              <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                {t.archiveEmptyMessage}
              </p>
            </div>
          ) : (
            savedEvents.map(event => (
              <div
                key={event.id}
                style={{
                  backgroundColor: 'rgba(21, 26, 40, 0.8)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '1rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                  transition: 'border-color 0.2s ease'
                }}
              >
                {/* Thumbnail */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  backgroundColor: '#07080d'
                }}>
                  <img
                    src={event.image}
                    alt={event.title[lang]}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#00e5ff',
                    fontWeight: 700
                  }}>
                    {event.yearDisplay}
                  </div>
                  <div style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {event.title[lang]}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)'
                  }}>
                    {event.location[lang]}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.4rem' }}>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenDeepDive(event);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#00e5ff',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem'
                      }}
                    >
                      <ExternalLink size={12} />
                      <span>Bax</span>
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onAskAI(event);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#d4af37',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem'
                      }}
                    >
                      <MessageSquare size={12} />
                      <span>AI Soruş</span>
                    </button>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => onRemove(event.id)}
                  title="Remove from archive"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '0.4rem'
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedEvents.length > 0 && (
          <div style={{
            padding: '1.2rem 1.6rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <button
              onClick={onClearAll}
              style={{
                background: 'none',
                border: 'none',
                color: '#ef4444',
                fontSize: '0.8rem',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              {t.clearArchive}
            </button>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {savedEvents.length} ARXİV SƏNƏDİ
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
