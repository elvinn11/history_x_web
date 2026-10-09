import React, { useState, useRef, useEffect } from 'react';
import type { HistoricalEvent, Language, ChatMessage } from '../types/history';
import { TRANSLATIONS } from '../data/translations';
import { AIGuideService } from '../services/aiGuideService';
import { 
  X, 
  Send, 
  Sparkles, 
  Settings, 
  Key, 
  ExternalLink,
  ChevronDown,
  Bot
} from 'lucide-react';

interface AIChatGuideProps {
  currentEra: HistoricalEvent;
  lang: Language;
  onOpenDeepDive: (event: HistoricalEvent) => void;
  externalQuery?: { text: string; era: HistoricalEvent } | null;
  onClearExternalQuery?: () => void;
}

export const AIChatGuide: React.FC<AIChatGuideProps> = ({
  currentEra,
  lang,
  onOpenDeepDive,
  externalQuery,
  onClearExternalQuery,
}) => {
  const t = TRANSLATIONS[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState(AIGuideService.getApiKey());
  const [provider, setProvider] = useState<'gemini' | 'openai'>(AIGuideService.getProvider());
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Initial welcome message with embedded mini card matching Reference Image 3
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return [
      {
        id: 'msg-init-1',
        role: 'user',
        content: lang === 'az' 
          ? `Mənə ${currentEra.yearDisplay} dövrünün əsas tarixi hadisələri və şəxsiyyətləri haqqında məlumat verin.` 
          : `Tell me about the key figures and events surrounding the ${currentEra.yearDisplay} era.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      },
      {
        id: 'msg-init-2',
        role: 'assistant',
        content: lang === 'az'
          ? `Azərbaycan tarixində **${currentEra.yearDisplay}** dövrü **${currentEra.title.az}** ilə əlamətdardır. Bu dövrdə **${currentEra.keyFigures.az.slice(0, 2).join('** və **')}** kimi tarixi şəxsiyyətlər dövlətçilik və mədəniyyət salnaməmizdə mühüm iz qoymuşlar.`
          : `In Azerbaijani history, the **${currentEra.yearDisplay}** period is immortalized by **${currentEra.title.en}**. Key leaders including **${currentEra.keyFigures.en.slice(0, 2).join('** and **')}** forged sovereign civilizational legacies.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        linkedEvent: currentEra,
        highlightedKeywords: [currentEra.yearDisplay, ...currentEra.keyFigures[lang].slice(0, 2)]
      }
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  // Handle queries passed from external buttons
  useEffect(() => {
    if (externalQuery) {
      setIsOpen(true);
      setIsMinimized(false);
      handleSendMessage(externalQuery.text, externalQuery.era);
      if (onClearExternalQuery) onClearExternalQuery();
    }
  }, [externalQuery]);

  const handleSendMessage = async (textToSend?: string, eraContext?: HistoricalEvent) => {
    const query = (textToSend || inputVal).trim();
    if (!query || isLoading) return;

    const activeHistoricalEra = eraContext || currentEra;

    const userMsg: ChatMessage = {
      id: `msg-u-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsLoading(true);

    try {
      const response = await AIGuideService.askHistoricalGuide(query, activeHistoricalEra, lang);
      const assistantMsg: ChatMessage = {
        id: `msg-a-${Date.now()}`,
        role: 'assistant',
        content: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        linkedEvent: response.linkedEvent,
        highlightedKeywords: response.highlightedKeywords
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: `msg-err-${Date.now()}`,
        role: 'assistant',
        content: lang === 'az' 
          ? 'Bağışlayın, cavab hazırlanarkən xəta baş verdi. Zəhmət olmasa təkrar cəhd edin.' 
          : 'Apologies, an error occurred preparing the response. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveApiKey = () => {
    AIGuideService.setApiKey(apiKeyInput, provider);
    setShowSettings(false);
  };

  const suggestedQuestions = AIGuideService.getSuggestedQuestions(currentEra, lang);

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      {!isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem'
          }}
        >
          {/* Subtle contextual pill preview */}
          <div 
            onClick={() => setIsOpen(true)}
            style={{
              display: 'none',
              padding: '0.4rem 0.9rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(16, 20, 32, 0.9)',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              color: '#ffffff',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
            }}
          >
            <span>{currentEra.yearDisplay} • Soruş</span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open AI Historical Guide"
            style={{
              position: 'relative',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#0c0f1a',
              border: '2px solid #00e5ff',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 0 30px rgba(0, 229, 255, 0.4), 0 10px 25px rgba(0,0,0,0.6)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.boxShadow = '0 0 45px rgba(0, 229, 255, 0.6), 0 10px 30px rgba(0,0,0,0.7)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 229, 255, 0.4), 0 10px 25px rgba(0,0,0,0.6)';
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden'
            }}>
              <img
                src="/images/avatar.jpg"
                alt="AI Curator"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Glowing online status pulse */}
            <div style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              border: '2px solid #0c0f1a',
              boxShadow: '0 0 8px #22c55e'
            }} />
          </button>
        </div>
      )}

      {/* Main Conversational Modal Panel matching Reference Image 3 */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: isMinimized ? '1.5rem' : '2rem',
            right: '2rem',
            zIndex: 1000,
            width: 'min(460px, calc(100vw - 2.5rem))',
            height: isMinimized ? 'auto' : '620px',
            maxHeight: 'calc(100vh - 5rem)',
            backgroundColor: '#ffffff',
            color: '#111827',
            borderRadius: '24px',
            boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 229, 255, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(0, 229, 255, 0.3)',
            animation: 'fadeIn 0.25s ease-out'
          }}
        >
          {/* Header matching Reference Image 3 */}
          <div style={{
            padding: '1.2rem 1.4rem',
            borderBottom: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              {/* Circular Avatar Orb */}
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #00e5ff',
                boxShadow: '0 0 12px rgba(0, 229, 255, 0.3)',
                backgroundColor: '#0c0f1a'
              }}>
                <img
                  src="/images/avatar.jpg"
                  alt="Celestial Curator"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <span>{t.aiGuideTitle}</span>
                  <Sparkles size={14} color="#00b4d8" />
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  color: '#64748b'
                }}>
                  {t.aiGuideSubtitle}
                </div>
              </div>
            </div>

            {/* Window Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <button
                onClick={() => setShowSettings(!showSettings)}
                title="AI Settings & API Key"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.4rem',
                  borderRadius: '50%',
                  color: '#64748b'
                }}
              >
                <Settings size={18} />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.4rem',
                  borderRadius: '50%',
                  color: '#64748b'
                }}
              >
                <ChevronDown size={18} style={{ transform: isMinimized ? 'rotate(180deg)' : 'none' }} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.4rem',
                  borderRadius: '50%',
                  color: '#64748b'
                }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Synchronized Era Context Indicator */}
              <div style={{
                padding: '0.45rem 1.2rem',
                backgroundColor: '#f8fafc',
                borderBottom: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0284c7' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0284c7' }} />
                  <span style={{ fontWeight: 600 }}>{t.currentViewingContext}:</span>
                  <span style={{ fontWeight: 800 }}>{currentEra.yearDisplay} ({currentEra.title[lang]})</span>
                </div>
              </div>

              {/* Settings Drawer (Gemini / OpenAI API configuration) */}
              {showSettings && (
                <div style={{
                  padding: '1rem 1.2rem',
                  backgroundColor: '#f1f5f9',
                  borderBottom: '1px solid #e2e8f0',
                  fontSize: '0.82rem'
                }}>
                  <div style={{ fontWeight: 700, marginBottom: '0.4rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Key size={14} />
                    <span>AI Provider & Live API Key (Optional)</span>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.75rem', margin: '0 0 0.5rem' }}>
                    Sistem zəngin daxili tarixi biliklər bazası ilə təchiz olunub. İstəsəniz şəxsi Google Gemini API açarınızı daxil edə bilərsiniz.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <select
                      value={provider}
                      onChange={e => setProvider(e.target.value as 'gemini' | 'openai')}
                      style={{
                        padding: '0.35rem 0.6rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.75rem',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <option value="gemini">Google Gemini 1.5</option>
                      <option value="openai">OpenAI GPT</option>
                    </select>
                    <input
                      type="password"
                      placeholder="AI API Key (məsələn: AIzaSy...)"
                      value={apiKeyInput}
                      onChange={e => setApiKeyInput(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '0.35rem 0.6rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.75rem'
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                    <button
                      onClick={handleSaveApiKey}
                      style={{
                        backgroundColor: '#0284c7',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '0.35rem 0.8rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Yadda saxla
                    </button>
                  </div>
                </div>
              )}

              {/* Messages Dialogue Area (matching Reference Image 3) */}
              <div 
                style={{
                  flex: 1,
                  padding: '1.2rem',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  backgroundColor: '#ffffff'
                }}
              >
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '100%'
                    }}
                  >
                    {/* User Message: Dark rounded bubble (matching Reference Image 3) */}
                    {msg.role === 'user' && (
                      <div
                        style={{
                          backgroundColor: '#181b24',
                          color: '#f8fafc',
                          padding: '0.85rem 1.25rem',
                          borderRadius: '20px 20px 4px 20px',
                          fontSize: '0.92rem',
                          lineHeight: 1.5,
                          maxWidth: '85%',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      >
                        {msg.content}
                      </div>
                    )}

                    {/* AI Message: Left-aligned clean text with highlighted cyan entities (Reference Image 3) */}
                    {msg.role === 'assistant' && (
                      <div style={{ width: '100%', maxWidth: '95%' }}>
                        <div
                          style={{
                            color: '#334155',
                            fontSize: '0.94rem',
                            lineHeight: 1.6,
                            marginBottom: msg.linkedEvent ? '0.75rem' : '0'
                          }}
                        >
                          {/* Helper to parse text and style highlighted terms in cyan bold */}
                          {msg.content.split('\n\n').map((paragraph, pIdx) => (
                            <p key={pIdx} style={{ margin: '0 0 0.5rem' }}>
                              {paragraph.split(/(\*\*.*?\*\*)/g).map((part, partIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  const text = part.slice(2, -2);
                                  return (
                                    <strong key={partIdx} style={{ color: '#0284c7', fontWeight: 700 }}>
                                      {text}
                                    </strong>
                                  );
                                }
                                return part;
                              })}
                            </p>
                          ))}
                        </div>

                        {/* CRITICAL FEATURE FROM REFERENCE IMAGE 3: Embedded Mini Event Card */}
                        {msg.linkedEvent && (
                          <div
                            onClick={() => onOpenDeepDive(msg.linkedEvent!)}
                            style={{
                              marginTop: '0.6rem',
                              backgroundColor: '#f8fafc',
                              border: '1px solid #e2e8f0',
                              borderRadius: '16px',
                              padding: '0.9rem 1.1rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '1.2rem',
                              cursor: 'pointer',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.backgroundColor = '#f1f5f9';
                              e.currentTarget.style.borderColor = '#00b4d8';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.backgroundColor = '#f8fafc';
                              e.currentTarget.style.borderColor = '#e2e8f0';
                            }}
                          >
                            {/* Big Bold Year on Left (Reference Image 3) */}
                            <div style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '2rem',
                              fontWeight: 900,
                              lineHeight: 1,
                              color: '#0f172a',
                              letterSpacing: '-0.03em',
                              minWidth: '70px'
                            }}>
                              {msg.linkedEvent.yearDisplay}
                            </div>

                            {/* Event Title & Summary on Right (Reference Image 3) */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.95rem',
                                fontWeight: 800,
                                color: '#0f172a',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                              }}>
                                {msg.linkedEvent.title[lang]}
                              </div>
                              <div style={{
                                fontSize: '0.78rem',
                                color: '#64748b',
                                lineHeight: 1.4,
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                              }}>
                                {msg.linkedEvent.summary[lang]}
                              </div>
                            </div>

                            <ExternalLink size={16} color="#00b4d8" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {isLoading && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#0284c7',
                    fontSize: '0.85rem'
                  }}>
                    <Bot size={16} />
                    <span>Tarixi arxivlər araşdırılır...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions Pills */}
              <div style={{
                padding: '0.5rem 1.2rem',
                borderTop: '1px solid #f8fafc',
                display: 'flex',
                gap: '0.4rem',
                overflowX: 'auto',
                backgroundColor: '#ffffff'
              }}>
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      backgroundColor: '#f1f5f9',
                      border: '1px solid #e2e8f0',
                      color: '#334155',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = 'rgba(0, 229, 255, 0.15)';
                      e.currentTarget.style.borderColor = '#00b4d8';
                      e.currentTarget.style.color = '#0284c7';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = '#f1f5f9';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.color = '#334155';
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Chat Input Bar matching Reference Image 3 */}
              <div style={{
                padding: '0.8rem 1.2rem',
                borderTop: '1px solid #f1f5f9',
                backgroundColor: '#ffffff'
              }}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#f8fafc',
                    borderRadius: '9999px',
                    border: '1px solid #e2e8f0',
                    padding: '0.25rem 0.4rem 0.25rem 1.1rem'
                  }}
                >
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder={t.aiInputPlaceholder}
                    disabled={isLoading}
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      fontSize: '0.88rem',
                      color: '#1e293b',
                      fontFamily: 'var(--font-sans)'
                    }}
                  />
                  <button
                    type="submit"
                    disabled={!inputVal.trim() || isLoading}
                    aria-label="Send Message"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: '#00b4d8',
                      border: 'none',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: inputVal.trim() && !isLoading ? 'pointer' : 'default',
                      opacity: inputVal.trim() && !isLoading ? 1 : 0.45,
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 8px rgba(0, 180, 216, 0.3)'
                    }}
                  >
                    <Send size={15} />
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
