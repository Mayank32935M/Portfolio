import React, { useState } from 'react';
import type { ModalKey, ProjectItem } from './types';
import { HeroSection } from './components/HeroSection';
import { KeyboardPortfolio } from './components/KeyboardPortfolio';
import { JournalModal } from './components/JournalModal';
import { ProjectArchive } from './components/ProjectArchive';
import { WorkshopSection } from './components/WorkshopSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ClosingSection } from './components/ClosingSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import './App.css';

export const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
  const [focusedKey, setFocusedKey] = useState<ModalKey>('P');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToKeyboard = () => {
    const el = document.getElementById('keyboard-console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('project-archive');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* 1. SIGNATURE HERO: Approved Halftone Portrait Scrapbook & Terminal Console */}
      <HeroSection
        onScrollToKeyboard={scrollToKeyboard}
        onScrollToProjects={scrollToProjects}
      />

      {/* 2. INTERACTIVE PORT / FOLIO KEYBOARD CONSOLE (Immediately Beneath Hero) */}
      <KeyboardPortfolio
        activeModal={activeModal}
        onOpenModal={(key) => setActiveModal(key)}
        focusedKey={focusedKey}
        setFocusedKey={(key) => setFocusedKey(key)}
      />

      {/* 3. SUPPORTING ARCHIVAL SECTIONS */}
      {/* Project Archive Dossiers with Evidence & Screenshots */}
      <ProjectArchive
        onOpenProjectDetail={(project) => setSelectedProject(project)}
      />

      {/* Workshop & Technical Workstation Profile */}
      <WorkshopSection />

      {/* Working Philosophy & Pedagogy */}
      <PhilosophySection />

      {/* Field Journal Closing Page & Contact */}
      <ClosingSection />

      {/* IN-PAGE MODALS */}
      {/* Keyboard Modal (P, O, R, T, F, O, L, I, O) */}
      <JournalModal
        activeKey={activeModal}
        onClose={() => setActiveModal(null)}
        onSelectProject={(project: ProjectItem) => {
          setActiveModal(null);
          setSelectedProject(project);
        }}
      />

      {/* Detailed Project Dossier Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
