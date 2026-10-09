import { useState } from 'react';
import type { HistoricalEvent, Language, ViewMode } from './types/history';
import { HISTORICAL_EVENTS } from './data/historyData';
import { Navbar } from './components/Navbar';
import { HeroLanding } from './components/HeroLanding';
import { TimelineJourney } from './components/TimelineJourney';
import { OrbitalNavigator } from './components/OrbitalNavigator';
import { InteractiveMap } from './components/InteractiveMap';
import { DeepDiveModal } from './components/DeepDiveModal';
import { AIChatGuide } from './components/AIChatGuide';
import { ArchiveDrawer } from './components/ArchiveDrawer';
import { SourcesModal } from './components/SourcesModal';
import { HistoricalReflection } from './components/HistoricalReflection';
import { soundscape } from './services/soundscapeService';
import confetti from 'canvas-confetti';

const STORAGE_SAVED_KEY = 'history_x_saved_ids';
const STORAGE_LANG_KEY = 'history_x_lang';

export function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('timeline');
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem(STORAGE_LANG_KEY) as Language) || 'az';
  });
  const [activeEra, setActiveEra] = useState<HistoricalEvent>(HISTORICAL_EVENTS[0]);
  const [deepDiveEvent, setDeepDiveEvent] = useState<HistoricalEvent | null>(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_SAVED_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [externalChatQuery, setExternalChatQuery] = useState<{
    text: string;
    era: HistoricalEvent;
  } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync language with localStorage
  const handleSelectLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem(STORAGE_LANG_KEY, newLang);
  };

  // Toggle Save to Archive with celebratory toast and confetti
  const handleToggleSave = (event: HistoricalEvent) => {
    const isAlreadySaved = savedIds.includes(event.id);
    let updated: string[];

    if (isAlreadySaved) {
      updated = savedIds.filter(id => id !== event.id);
      showToast(lang === 'az' ? 'Arxivdən silindi' : lang === 'ru' ? 'Удалено из архива' : 'Removed from archive');
    } else {
      updated = [...savedIds, event.id];
      showToast(lang === 'az' ? 'Arxivinizə əlavə edildi!' : lang === 'ru' ? 'Добавлено в архив!' : 'Saved to your archive!');
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#00e5ff', '#d4af37', '#22c55e']
        });
      } catch {
        // Safe fallback
      }
    }

    setSavedIds(updated);
    localStorage.setItem(STORAGE_SAVED_KEY, JSON.stringify(updated));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleClearAllArchive = () => {
    setSavedIds([]);
    localStorage.removeItem(STORAGE_SAVED_KEY);
    showToast(lang === 'az' ? 'Arxiv təmizləndi' : lang === 'ru' ? 'Архив очищен' : 'Archive cleared');
  };

  const handleToggleAudio = () => {
    const playing = soundscape.toggle();
    setIsAudioPlaying(playing);
  };

  const handleAskAI = (event: HistoricalEvent, initialQuery?: string) => {
    setActiveEra(event);
    setExternalChatQuery({
      text: initialQuery || (lang === 'az' 
        ? `${event.yearDisplay} dövrü haqqında mənə ətraflı məlumat verin.` 
        : `Tell me detailed context about the ${event.yearDisplay} era.`),
      era: event
    });
  };

  const scrollToHeroTimeline = () => {
    setCurrentView('timeline');
    const firstSection = document.getElementById(`era-${HISTORICAL_EVENTS[0].id}`);
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPresent = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveEra(HISTORICAL_EVENTS[0]);
  };

  const savedEventsList = HISTORICAL_EVENTS.filter(e => savedIds.includes(e.id));

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#07080d' }}>
      {/* Top Fixed Header Navbar */}
      <Navbar
        currentView={currentView}
        onSelectView={setCurrentView}
        lang={lang}
        onSelectLang={handleSelectLang}
        activeEra={activeEra}
        savedCount={savedIds.length}
        onOpenArchive={() => setIsArchiveOpen(true)}
        onOpenSources={() => setIsSourcesOpen(true)}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main View Port */}
      {currentView === 'timeline' && (
        <main>
          {/* Section A: Cinematic Landing */}
          <HeroLanding
            lang={lang}
            onBeginJourney={scrollToHeroTimeline}
            onExploreOrbit={() => setCurrentView('orbit')}
          />

          {/* Section B & C: Scroll-driven Historical Journey (2020 down to Antiquity) */}
          <TimelineJourney
            events={HISTORICAL_EVENTS}
            activeEra={activeEra}
            onActiveEraChange={setActiveEra}
            lang={lang}
            onOpenDeepDive={setDeepDiveEvent}
            onAskAI={handleAskAI}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
          />

          {/* Section G: Concluding Reflection */}
          <HistoricalReflection
            lang={lang}
            onReturnToPresent={scrollToPresent}
            onExploreOrbit={() => setCurrentView('orbit')}
          />
        </main>
      )}

      {currentView === 'orbit' && (
        <main>
          {/* Section: Orbital Cosmic Navigator matching Reference Image 2 */}
          <OrbitalNavigator
            lang={lang}
            onSelectEra={(era) => {
              setActiveEra(era);
              setDeepDiveEvent(era);
            }}
            onOpenDeepDive={setDeepDiveEvent}
            onAskAI={handleAskAI}
          />
        </main>
      )}

      {currentView === 'map' && (
        <main>
          {/* Section E: Interactive Historical Map */}
          <InteractiveMap
            lang={lang}
            onOpenDeepDive={setDeepDiveEvent}
            onAskAI={handleAskAI}
          />
        </main>
      )}

      {/* Reference Image 1: Historical Event Deep-Dive Modal */}
      <DeepDiveModal
        event={deepDiveEvent}
        onClose={() => setDeepDiveEvent(null)}
        lang={lang}
        isSaved={deepDiveEvent ? savedIds.includes(deepDiveEvent.id) : false}
        onToggleSave={handleToggleSave}
        onAskAI={handleAskAI}
      />

      {/* Reference Image 3: Celestial Curator AI History Chatbot */}
      <AIChatGuide
        currentEra={activeEra}
        lang={lang}
        onOpenDeepDive={setDeepDiveEvent}
        externalQuery={externalChatQuery}
        onClearExternalQuery={() => setExternalChatQuery(null)}
      />

      {/* User's Archival Collection Drawer */}
      <ArchiveDrawer
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        savedEvents={savedEventsList}
        onRemove={(id) => {
          const updated = savedIds.filter(i => i !== id);
          setSavedIds(updated);
          localStorage.setItem(STORAGE_SAVED_KEY, JSON.stringify(updated));
        }}
        onClearAll={handleClearAllArchive}
        onOpenDeepDive={setDeepDiveEvent}
        onAskAI={handleAskAI}
        lang={lang}
      />

      {/* Academic Sources and Bibliography Modal */}
      <SourcesModal
        isOpen={isSourcesOpen}
        onClose={() => setIsSourcesOpen(false)}
        lang={lang}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#0c0f1a',
          color: '#00e5ff',
          border: '1px solid #00e5ff',
          padding: '0.6rem 1.4rem',
          borderRadius: '9999px',
          boxShadow: '0 0 25px rgba(0, 229, 255, 0.4)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          fontWeight: 700,
          zIndex: 3000,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default App;
