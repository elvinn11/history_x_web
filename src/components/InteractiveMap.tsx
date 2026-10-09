import React, { useState } from 'react';
import type { HistoricalEvent, Language, MapLocationPin } from '../types/history';
import { TRANSLATIONS } from '../data/translations';
import { MAP_LOCATION_PINS, HISTORICAL_EVENTS } from '../data/historyData';
import { MapPin, Info, ExternalLink, MessageSquare, Compass, Navigation } from 'lucide-react';

interface InteractiveMapProps {
  lang: Language;
  onOpenDeepDive: (event: HistoricalEvent) => void;
  onAskAI: (event: HistoricalEvent) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  lang,
  onOpenDeepDive,
  onAskAI,
}) => {
  const t = TRANSLATIONS[lang];
  const [selectedPin, setSelectedPin] = useState<MapLocationPin | null>(MAP_LOCATION_PINS[0]);
  const [activeEraFilter, setActiveEraFilter] = useState<string>('all');

  const eraFilters = [
    { id: 'all', label: { az: 'Bütün Dövrlər', en: 'All Eras', ru: 'Все Эпохи' } },
    { id: '2020-karabakh', label: { az: '2020: Müasir & Qarabağ', en: '2020: Modern & Karabakh', ru: '2020: Современный и Карабах' } },
    { id: '1918-adr', label: { az: '1918: Xalq Cümhuriyyəti', en: '1918: Democratic Republic', ru: '1918: Народная Республика' } },
    { id: '1400-shirvanshahs', label: { az: '1400: Şirvanşahlar & Bakı', en: '1400: Shirvanshahs & Baku', ru: '1400: Ширваншахи и Баку' } },
    { id: '1186-eldiguzids', label: { az: '1186: Eldənizlər & Naxçıvan', en: '1186: Eldiguzids & Nakhchivan', ru: '1186: Эльдегизиды и Нахчыван' } },
    { id: '0400-caucasian-albania', label: { az: '400: Qafqaz Albaniyası', en: '400: Caucasian Albania', ru: '400: Кавказская Албания' } }
  ];

  const filteredPins = activeEraFilter === 'all' 
    ? MAP_LOCATION_PINS 
    : MAP_LOCATION_PINS.filter(pin => pin.eraId === activeEraFilter);

  // Geographic coordinates mapped to SVG canvas viewBox [minX, minY, width, height]
  // Lat: 37.0 to 42.0 (5 degrees range), Lng: 44.5 to 51.0 (6.5 degrees range)
  const getCoordinatesPosition = (coords: [number, number]): { x: number; y: number } => {
    const [lat, lng] = coords;
    // Projection mapping into SVG 800 x 500 space
    const x = ((lng - 44.5) / 6.5) * 650 + 60;
    const y = ((42.0 - lat) / 5.0) * 380 + 50;
    return { x, y };
  };

  const getAssociatedEvent = (eraId: string) => {
    return HISTORICAL_EVENTS.find(e => e.id === eraId) || HISTORICAL_EVENTS[0];
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#07080d',
      padding: '7rem 2rem 5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '2rem' }}>
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
          <Compass size={14} />
          <span>İNTERAKTİV TARİXİ COĞRAFİYA // HISTORICAL CARTOGRAPHY</span>
        </div>
        <h2 style={{
          fontFamily: 'var(--font-monumental)',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
          letterSpacing: '0.04em',
          color: '#ffffff',
          margin: '0 0 0.5rem'
        }}>
          {t.mapTitle}
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.95rem',
          margin: 0
        }}>
          {t.mapSubtitle}
        </p>
      </div>

      {/* Era Layer Filter Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        marginBottom: '2rem',
        overflowX: 'auto',
        maxWidth: '100%',
        padding: '0.3rem',
        backgroundColor: 'rgba(16, 20, 32, 0.8)',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {eraFilters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveEraFilter(filter.id)}
            style={{
              padding: '0.4rem 0.9rem',
              borderRadius: '9999px',
              border: activeEraFilter === filter.id ? '1px solid #00e5ff' : 'none',
              backgroundColor: activeEraFilter === filter.id ? 'rgba(0, 229, 255, 0.2)' : 'transparent',
              color: activeEraFilter === filter.id ? '#00e5ff' : 'var(--text-secondary)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            {filter.label[lang]}
          </button>
        ))}
      </div>

      {/* Map Canvas & Details Grid */}
      <div style={{
        width: '100%',
        maxWidth: '1150px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '2rem',
        alignItems: 'start'
      }}>
        {/* Vector SVG Map Container */}
        <div style={{
          position: 'relative',
          backgroundColor: 'rgba(13, 17, 27, 0.9)',
          borderRadius: '24px',
          border: '1px solid rgba(0, 229, 255, 0.2)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 229, 255, 0.08)',
          overflow: 'hidden',
          padding: '1rem'
        }}>
          {/* Compass Rose Indicator */}
          <div style={{
            position: 'absolute',
            top: '1.2rem',
            left: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#38bdf8',
            backgroundColor: 'rgba(7, 8, 13, 0.75)',
            padding: '0.3rem 0.7rem',
            borderRadius: '9999px',
            border: '1px solid rgba(0, 229, 255, 0.2)'
          }}>
            <Navigation size={12} />
            <span>N 40°23′ E 49°52′</span>
          </div>

          {/* SVG Map Canvas */}
          <svg
            viewBox="0 0 800 480"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            {/* Caspian Sea Backdrop on the East */}
            <path
              d="M 640 0 C 650 120, 610 200, 680 280 C 720 330, 710 400, 750 480 L 800 480 L 800 0 Z"
              fill="rgba(0, 229, 255, 0.06)"
              stroke="rgba(0, 229, 255, 0.2)"
              strokeWidth="1"
            />
            {/* Caspian Water Text */}
            <text x="710" y="220" fill="rgba(0, 229, 255, 0.4)" fontSize="12" fontFamily="var(--font-mono)" letterSpacing="4">
              XƏZƏR DƏNİZİ (CASPIAN)
            </text>

            {/* Caucasus Mountain Ridge Texture */}
            <path
              d="M 80 50 Q 250 80, 420 70 Q 560 60, 650 100"
              fill="none"
              stroke="rgba(212, 175, 55, 0.25)"
              strokeDasharray="4 4"
              strokeWidth="2"
            />
            <text x="320" y="55" fill="rgba(212, 175, 55, 0.5)" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="2">
              BÖYÜK QAFQAZ SİLSİLƏSİ (GREATER CAUCASUS)
            </text>

            {/* Kura River Path */}
            <path
              d="M 120 180 Q 280 200, 420 250 Q 550 280, 680 320"
              fill="none"
              stroke="rgba(56, 189, 248, 0.45)"
              strokeWidth="2"
            />
            <text x="360" y="235" fill="rgba(56, 189, 248, 0.6)" fontSize="9" fontFamily="var(--font-mono)">
              Kür Çayı (Kura River)
            </text>

            {/* Aras River Path */}
            <path
              d="M 90 320 Q 240 370, 440 380 Q 580 370, 680 330"
              fill="none"
              stroke="rgba(56, 189, 248, 0.45)"
              strokeWidth="2"
            />
            <text x="320" y="370" fill="rgba(56, 189, 248, 0.6)" fontSize="9" fontFamily="var(--font-mono)">
              Araz Çayı (Aras River)
            </text>

            {/* Stylized Historical Azerbaijan Heartland Boundary */}
            <path
              d="M 120 90 L 320 60 L 520 70 L 630 110 L 690 200 L 630 290 L 650 380 L 460 410 L 260 400 L 140 330 L 110 220 Z"
              fill="rgba(255, 255, 255, 0.02)"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1.5"
              strokeDasharray="6 3"
            />

            {/* Interactive Location Pins */}
            {filteredPins.map((pin) => {
              const pos = getCoordinatesPosition(pin.coordinates);
              const isSelected = selectedPin?.id === pin.id;

              return (
                <g
                  key={pin.id}
                  onClick={() => setSelectedPin(pin)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Pulsing ring if selected */}
                  {isSelected && (
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="16"
                      fill="none"
                      stroke="#00e5ff"
                      strokeWidth="2"
                      opacity="0.8"
                    >
                      <animate
                        attributeName="r"
                        values="10;22;10"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.8;0.2;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}

                  {/* Marker Pin */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isSelected ? "7" : "5"}
                    fill={isSelected ? "#00e5ff" : "#d4af37"}
                    stroke="#07080d"
                    strokeWidth="2"
                  />

                  {/* Pin Label */}
                  <text
                    x={pos.x + 10}
                    y={pos.y + 4}
                    fill={isSelected ? "#00e5ff" : "#e2e8f0"}
                    fontSize={isSelected ? "11" : "9.5"}
                    fontWeight={isSelected ? "700" : "500"}
                    fontFamily="var(--font-sans)"
                  >
                    {pin.name[lang].split('—')[0].trim()}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Landmark Details Card */}
        {selectedPin && (
          <div style={{
            backgroundColor: 'rgba(16, 20, 32, 0.95)',
            borderRadius: '24px',
            border: '1px solid rgba(0, 229, 255, 0.25)',
            padding: '2rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 229, 255, 0.15)',
                border: '1px solid #00e5ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00e5ff'
              }}>
                <MapPin size={18} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-monumental)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: 0
                }}>
                  {selectedPin.name[lang]}
                </h3>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#22c55e',
                  fontWeight: 600
                }}>
                  {selectedPin.region} • {selectedPin.monumentName}
                </div>
              </div>
            </div>

            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.94rem',
              lineHeight: 1.6,
              margin: 0
            }}>
              {selectedPin.description[lang]}
            </p>

            {/* Action buttons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              marginTop: '0.5rem',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => onOpenDeepDive(getAssociatedEvent(selectedPin.eraId))}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: '#00e5ff',
                  color: '#07080d',
                  padding: '0.65rem 1.3rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <ExternalLink size={14} />
                <span>{t.viewDetails}</span>
              </button>

              <button
                onClick={() => onAskAI(getAssociatedEvent(selectedPin.eraId))}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  padding: '0.65rem 1.3rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <MessageSquare size={14} />
                <span>{t.askAIGuide}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Historiographical Caution Note (Prompt Section 7 requirement) */}
      <div style={{
        marginTop: '2.5rem',
        maxWidth: '850px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.8rem',
        padding: '1rem 1.4rem',
        borderRadius: '16px',
        backgroundColor: 'rgba(15, 19, 30, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        color: 'var(--text-muted)',
        fontSize: '0.8rem',
        lineHeight: 1.5
      }}>
        <Info size={16} color="#00e5ff" style={{ flexShrink: 0, marginTop: '2px' }} />
        <span>{t.mapNote}</span>
      </div>
    </section>
  );
};
