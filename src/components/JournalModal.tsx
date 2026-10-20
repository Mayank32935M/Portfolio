import React, { useEffect, useRef } from 'react';
import type { ModalKey, ProjectItem } from '../types';
import { 
  PROJECTS, 
  TECH_CATEGORIES, 
  MILESTONES 
} from '../data/portfolioData';
import { 
  X, 
  ExternalLink, 
  Terminal, 
  BookOpen, 
  Film, 
  Languages as LangIcon, 
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import './JournalModal.css';

interface JournalModalProps {
  activeKey: ModalKey | null;
  onClose: () => void;
  onSelectProject?: (project: ProjectItem) => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({
  activeKey,
  onClose,
  onSelectProject
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Accessible focus trap and ESC listener
  useEffect(() => {
    if (!activeKey) return;

    // Focus the close button when modal opens
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeKey, onClose]);

  if (!activeKey) return null;

  const renderContent = () => {
    switch (activeKey) {
      /* -------------------------------------------------------------
         P — PROJECTS
         ------------------------------------------------------------- */
      case 'P':
        return (
          <div className="modal-body-section">
            <div className="section-intro font-mono">
              <span className="intro-badge rust">[VERIFIED ARTIFACTS]</span>
              <span>7 active systems, forensic frameworks, and hackathon prototypes:</span>
            </div>

            <div className="projects-grid">
              {PROJECTS.map((proj) => (
                <article
                  key={proj.id}
                  className="modal-project-card clickable"
                  onClick={() => onSelectProject?.(proj)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProject?.(proj);
                    }
                  }}
                  title="Click to view full dossier & evidentiary screenshots"
                >
                  <div className="project-card-header">
                    <div className="project-title-area">
                      <div className="project-category-row font-mono">
                        <span className="project-badge">{proj.badge || proj.category}</span>
                        <span className="project-status">● {proj.status}</span>
                      </div>
                      <h3 className="project-name font-serif">{proj.name}</h3>
                      <p className="project-subtitle">{proj.subtitle}</p>
                    </div>

                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-repo-link font-mono"
                      title="View GitHub Repository"
                      aria-label={`View ${proj.name} repository on GitHub`}
                    >
                      <GithubIcon size={14} />
                      <span>Repo</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  {proj.featuredImage && (
                    <div className="project-card-image-wrap">
                      <img
                        src={proj.featuredImage}
                        alt={`${proj.name} prototype screenshot`}
                        className="project-card-img"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="project-card-body">
                    <div className="project-role-tag font-mono">
                      <strong>ROLE:</strong> {proj.role} {proj.collaboration && `(${proj.collaboration})`}
                    </div>

                    <div className="project-problem-text">
                      <span className="font-mono text-rust">&gt; PROBLEM: </span>
                      {proj.problem}
                    </div>

                    <div className="project-features-list">
                      <span className="font-mono text-brass features-header">IMPLEMENTED CAPABILITIES:</span>
                      <ul>
                        {proj.implemented.map((item, idx) => (
                          <li key={idx} className="feature-item">
                            <span className="feature-bullet">◆</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-tech-tags font-mono">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="tech-chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        );

      /* -------------------------------------------------------------
         O1 — OVERVIEW
         ------------------------------------------------------------- */
      case 'O1':
        return (
          <div className="modal-body-section">
            <div className="overview-dossier">
              <div className="overview-header-stamp font-mono">
                <span>IDENTITY CARD // ID-MK-USAR-2026</span>
                <span className="text-olive">[VERIFIED GGSIPU STUDENT]</span>
              </div>

              <div className="overview-bio-block">
                <h3 className="overview-title font-serif">Mayank Dabas</h3>
                <p className="overview-lead">
                  First-year dual-degree (<strong>B.Tech + M.Tech</strong>) Artificial Intelligence &amp; Machine Learning student 
                  at the <strong>University School of Automation and Robotics (USAR), GGSIPU</strong>, based in Delhi.
                </p>
                <p className="overview-text">
                  Driven by a deep curiosity for how the world operates — from the foundational equations of theoretical physics 
                  to the deterministic logic of neural networks and agentic AI systems. I believe in learning by shipping in public, 
                  engineering tangible software, and mastering fundamentals through daily algorithmic discipline.
                </p>
              </div>

              <div className="overview-pillars-grid">
                <div className="pillar-card">
                  <div className="pillar-header font-mono">
                    <Terminal size={15} className="text-brass" />
                    <span>AGENTIC AI &amp; BACKENDS</span>
                  </div>
                  <p>ReAct execution loops, multi-agent workflows, Gemini &amp; Claude APIs, FastAPI, and n8n pipelines.</p>
                </div>

                <div className="pillar-card">
                  <div className="pillar-header font-mono">
                    <BookOpen size={15} className="text-olive" />
                    <span>THEORY &amp; FUNDAMENTALS</span>
                  </div>
                  <p>Daily algorithmic grind on LeetCode with Python, paired with deep interest in physics and mathematics.</p>
                </div>

                <div className="pillar-card">
                  <div className="pillar-header font-mono">
                    <Film size={15} className="text-rust" />
                    <span>VISUAL STORYTELLING</span>
                  </div>
                  <p>Video editing workflows in DaVinci Resolve and CapCut, combined with AI generative pipelines (Kling, Higgsfield).</p>
                </div>
              </div>

              <div className="overview-quote-card font-mono">
                <div className="quote-text">
                  "Great ideas are only as good as one's ability to explain them."
                </div>
                <div className="quote-author">— Mayank Dabas (Working Philosophy)</div>
              </div>
            </div>
          </div>
        );

      /* -------------------------------------------------------------
         R — RESUME & MILESTONES
         ------------------------------------------------------------- */
      case 'R':
        return (
          <div className="modal-body-section">
            <div className="section-intro font-mono">
              <span className="intro-badge brass">[ACADEMIC &amp; WORK MILESTONES]</span>
              <span>Verified timeline of studies, teaching, and hackathons:</span>
            </div>

            <div className="timeline-container">
              {MILESTONES.map((item, idx) => (
                <div key={idx} className="timeline-card">
                  <div className="timeline-meta font-mono">
                    <span className="timeline-period">{item.period}</span>
                    <span className="timeline-tag">{item.verifiedTag}</span>
                  </div>
                  <h3 className="timeline-title font-serif">{item.title}</h3>
                  <div className="timeline-org font-mono">
                    <strong>{item.organization}</strong> {item.location && `· ${item.location}`}
                  </div>
                  <p className="timeline-desc">{item.description}</p>
                  <ul className="timeline-highlights font-mono">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>
                        <CheckCircle2 size={12} className="text-brass" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      /* -------------------------------------------------------------
         T — TECH STACK
         ------------------------------------------------------------- */
      case 'T':
        return (
          <div className="modal-body-section">
            <div className="section-intro font-mono">
              <span className="intro-badge olive">[TECHNICAL WORKSHOP]</span>
              <span>Categorized tooling, verified languages, and active frameworks:</span>
            </div>

            <div className="tech-categories-grid">
              {TECH_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="tech-cat-card">
                  <div className="cat-header font-mono">
                    <span className="cat-title">{cat.title}</span>
                  </div>
                  <div className="cat-items-list">
                    {cat.items.map((it, itIdx) => (
                      <div key={itIdx} className="cat-item-row font-mono">
                        <div className="item-name-col">
                          <span className="item-name font-bold">{it.name}</span>
                          {it.level && <span className="item-level">[{it.level}]</span>}
                        </div>
                        {it.note && <div className="item-note">{it.note}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      /* -------------------------------------------------------------
         F — FREELANCE & CREATIVE WORK
         ------------------------------------------------------------- */
      case 'F':
        return (
          <div className="modal-body-section">
            <div className="creative-dossier">
              <div className="section-intro font-mono">
                <span className="intro-badge brass">[CREATIVE &amp; CLIENT WORK]</span>
                <span>Visual production, media workflows, and teaching:</span>
              </div>

              <div className="creative-cards-grid">
                <div className="creative-card">
                  <div className="card-badge font-mono">VIDEO &amp; MEDIA</div>
                  <h3 className="font-serif">Video Editing &amp; Color Grading</h3>
                  <p>
                    Produced and edited visual content for local businesses and Instagram creator accounts. 
                    Utilized DaVinci Resolve for multi-track timeline editing, audio balance, and color grading, 
                    paired with CapCut for agile vertical narrative pacing.
                  </p>
                  <div className="card-tags font-mono">
                    <span>DaVinci Resolve</span>
                    <span>CapCut</span>
                    <span>Sound Design</span>
                  </div>
                </div>

                <div className="creative-card">
                  <div className="card-badge font-mono">AI GENERATIVE</div>
                  <h3 className="font-serif">AI Video &amp; Workflow Synthesis</h3>
                  <p>
                    Exploration of multimodal video synthesis pipelines including Kling, Higgsfield, and Canva. 
                    Integrating AI generation directly into commercial creative workflows for rapid storyboard visualization.
                  </p>
                  <div className="card-tags font-mono">
                    <span>Kling</span>
                    <span>Higgsfield</span>
                    <span>Canva</span>
                  </div>
                </div>

                <div className="creative-card">
                  <div className="card-badge font-mono">PEDAGOGY</div>
                  <h3 className="font-serif">Curriculum Design at Kalyan Classes</h3>
                  <p>
                    Engineered and delivered the CBSE English curriculum for Classes 6 through 10. 
                    Focused on structured articulation, literature appreciation, and public communication skills.
                  </p>
                  <div className="card-tags font-mono">
                    <span>Curriculum Design</span>
                    <span>Class 6–10 CBSE</span>
                    <span>Communication</span>
                  </div>
                </div>

                <div className="creative-card">
                  <div className="card-badge font-mono">WEB CRAFT</div>
                  <h3 className="font-serif">Freelance Web Presence</h3>
                  <p>
                    Designed and shipped responsive digital presences for local establishments, 
                    prioritizing clean layout, mobile legibility, and high-performance loading.
                  </p>
                  <div className="card-tags font-mono">
                    <span>HTML5/CSS3</span>
                    <span>JavaScript</span>
                    <span>Responsive Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      /* -------------------------------------------------------------
         O2 — OPEN SOURCE & COLLABORATION
         ------------------------------------------------------------- */
      case 'O2':
        return (
          <div className="modal-body-section">
            <div className="section-intro font-mono">
              <span className="intro-badge rust">[COLLABORATION REPOSITORIES]</span>
              <span>Verified public repositories and team engineering:</span>
            </div>

            <div className="collab-list">
              <div className="collab-item">
                <div className="collab-header font-mono">
                  <span className="collab-name">adityabhatnagar1 / stivium</span>
                  <a
                    href="https://github.com/adityabhatnagar1/stivium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="collab-link"
                  >
                    <GithubIcon size={13} />
                    <span>View Repository</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <p>
                  Co-building a lightweight desktop code editor from scratch in <strong>Rust + Tauri</strong> alongside Aditya Bhatnagar. 
                  Responsible for the frontend workspace chrome, design system, and TypeScript components.
                </p>
              </div>

              <div className="collab-item">
                <div className="collab-header font-mono">
                  <span className="collab-name">neptn-ui / Redzone (SIH 2026)</span>
                  <a
                    href="https://github.com/neptn-ui/Redzone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="collab-link"
                  >
                    <GithubIcon size={13} />
                    <span>View Repository</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <p>
                  Disaster relocation decision-support tool for Assam flood/erosion crises. Contributed frontend design, 
                  impact strategy, and delivered the technical presentation pitch to the judging panel.
                </p>
              </div>

              <div className="collab-item">
                <div className="collab-header font-mono">
                  <span className="collab-name">neptn-ui / Eventtwin (SIH Internal)</span>
                  <a
                    href="https://github.com/neptn-ui/Eventtwin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="collab-link"
                  >
                    <GithubIcon size={13} />
                    <span>View Repository</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <p>
                  Event digital twin and resource simulation platform. Led UI selection, user experience workflow, and impact presentation.
                </p>
              </div>

              <div className="collab-item">
                <div className="collab-header font-mono">
                  <span className="collab-name">kartikeya527 / verivision-integrity-assurance</span>
                  <a
                    href="https://github.com/kartikeya527/verivision-integrity-assurance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="collab-link"
                  >
                    <GithubIcon size={13} />
                    <span>View Repository</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <p>
                  Assurance platform for computer vision pipelines inspecting data poisoning and model backdoors. Team contributor.
                </p>
              </div>
            </div>
          </div>
        );

      /* -------------------------------------------------------------
         L — LANGUAGES
         ------------------------------------------------------------- */
      case 'L':
        return (
          <div className="modal-body-section">
            <div className="section-intro font-mono">
              <span className="intro-badge parchment">[CODE &amp; NATURAL LANGUAGES]</span>
              <span>Verified programming dialects and spoken languages:</span>
            </div>

            <div className="languages-split-grid">
              <div className="lang-col">
                <div className="lang-col-title font-mono">
                  <Terminal size={15} className="text-brass" />
                  <span>PROGRAMMING &amp; QUERY LANGUAGES</span>
                </div>
                <div className="lang-cards-stack">
                  <div className="lang-box font-mono">
                    <div className="box-top">
                      <span className="lang-title font-bold">Python</span>
                      <span className="lang-status">[PRIMARY]</span>
                    </div>
                    <p>Core language for AI backends, automation scripts, and daily LeetCode algorithmic solutions.</p>
                  </div>

                  <div className="lang-box font-mono">
                    <div className="box-top">
                      <span className="lang-title font-bold">SQL</span>
                      <span className="lang-status">[DATA]</span>
                    </div>
                    <p>Relational schemas, queries, joins, and data integrity operations.</p>
                  </div>

                  <div className="lang-box font-mono">
                    <div className="box-top">
                      <span className="lang-title font-bold">C</span>
                      <span className="lang-status">[LEARNING]</span>
                    </div>
                    <p>Low-level memory management, pointers, and machine-level architecture.</p>
                  </div>

                  <div className="lang-box font-mono">
                    <div className="box-top">
                      <span className="lang-title font-bold">JavaScript &amp; TypeScript</span>
                      <span className="lang-status">[WEB]</span>
                    </div>
                    <p>Type-safe interfaces, modern async patterns, and interactive component libraries.</p>
                  </div>

                  <div className="lang-box font-mono">
                    <div className="box-top">
                      <span className="lang-title font-bold">Rust</span>
                      <span className="lang-status">[EXPLORING]</span>
                    </div>
                    <p>Memory safety and concurrent systems programming via Stivium IDE development.</p>
                  </div>
                </div>
              </div>

              <div className="lang-col">
                <div className="lang-col-title font-mono">
                  <LangIcon size={15} className="text-olive" />
                  <span>SPOKEN &amp; WRITTEN LANGUAGES</span>
                </div>
                <div className="lang-cards-stack">
                  <div className="lang-box font-mono">
                    <div className="box-top">
                      <span className="lang-title font-bold">English</span>
                      <span className="lang-status">[PROFESSIONAL / ACADEMIC]</span>
                    </div>
                    <p>
                      Fluent written and spoken communication. Former CBSE English curriculum creator and teacher at Kalyan Classes. 
                      Experienced in technical writing, documentation, and live hackathon pitching.
                    </p>
                  </div>

                  <div className="lang-box font-mono">
                    <div className="box-top">
                      <span className="lang-title font-bold">Hindi</span>
                      <span className="lang-status">[NATIVE]</span>
                    </div>
                    <p>Native proficiency in conversational, formal, and written communication.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      /* -------------------------------------------------------------
         I — INTERESTS
         ------------------------------------------------------------- */
      case 'I':
        return (
          <div className="modal-body-section">
            <div className="section-intro font-mono">
              <span className="intro-badge olive">[BEYOND CODE]</span>
              <span>Intellectual pursuits and creative exploration:</span>
            </div>

            <div className="interests-grid">
              <div className="interest-item">
                <div className="interest-icon font-mono">01 // PHYS</div>
                <h3 className="font-serif">Theoretical Physics &amp; Natural Laws</h3>
                <p>
                  Fascinated by classical mechanics, thermodynamics, and the mathematical symmetries governing nature. 
                  Aspiring to bridge computational modeling with empirical physical science.
                </p>
              </div>

              <div className="interest-item">
                <div className="interest-icon font-mono">02 // MATH</div>
                <h3 className="font-serif">Discrete Mathematics &amp; Cryptography</h3>
                <p>
                  Exploring graph theory, combinatorics, and cryptographic trust systems (such as immutable SHA-256 ledgers 
                  applied in the FORENSIC-X framework).
                </p>
              </div>

              <div className="interest-item">
                <div className="interest-icon font-mono">03 // GAME</div>
                <h3 className="font-serif">Psychological Interactive Narrative</h3>
                <p>
                  Designing the NULL thriller game to investigate player agency, moral dilemmas, and minimalist UI tension mechanics.
                </p>
              </div>

              <div className="interest-item">
                <div className="interest-icon font-mono">04 // FILM</div>
                <h3 className="font-serif">Cinematography &amp; Visual Editing</h3>
                <p>
                  Studying narrative pacing, sound design, color timing, and documentary storytelling techniques.
                </p>
              </div>
            </div>
          </div>
        );

      /* -------------------------------------------------------------
         O3 — ONGOING & EXPERIMENTS
         ------------------------------------------------------------- */
      case 'O3':
        return (
          <div className="modal-body-section">
            <div className="section-intro font-mono">
              <span className="intro-badge ink">[ACTIVE LAB EXPERIMENTS]</span>
              <span>Current technical exploration and learning objectives:</span>
            </div>

            <div className="ongoing-stack font-mono">
              <div className="ongoing-row">
                <span className="ongoing-status-dot active" />
                <div className="ongoing-content">
                  <div className="ongoing-title">1. STIVIUM IDE DESKTOP ARCHITECTURE</div>
                  <p>Exploring Rust + Tauri IPC patterns, syntax tokenization buffers, and custom window chrome.</p>
                </div>
              </div>

              <div className="ongoing-row">
                <span className="ongoing-status-dot active" />
                <div className="ongoing-content">
                  <div className="ongoing-title">2. MODEL CONTEXT PROTOCOL (MCP) TOOL SCHEMAS</div>
                  <p>Building specialized tool definitions for automated code refactoring and local agentic sidecars.</p>
                </div>
              </div>

              <div className="ongoing-row">
                <span className="ongoing-status-dot active" />
                <div className="ongoing-content">
                  <div className="ongoing-title">3. LEETCODE PYTHON DSA RIGOR</div>
                  <p>Systematically practicing dynamic programming, graph traversals, and pointer algorithms in Python.</p>
                </div>
              </div>

              <div className="ongoing-row">
                <span className="ongoing-status-dot active" />
                <div className="ongoing-content">
                  <div className="ongoing-title">4. FORENSIC EVIDENCE VERIFICATION LEDGERS</div>
                  <p>Extending FORENSIC-X with cryptographically verifiable tamper-evident incident reconstruction protocols.</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (activeKey) {
      case 'P': return { letter: 'P', title: 'PROJECT DOSSIERS', subtitle: 'Verified Implementations & Repositories' };
      case 'O1': return { letter: 'O', title: 'OVERVIEW', subtitle: 'Personal Background & Core Philosophy' };
      case 'R': return { letter: 'R', title: 'RESUME & MILESTONES', subtitle: 'Academic Track, Teaching & Hackathons' };
      case 'T': return { letter: 'T', title: 'TECH STACK', subtitle: 'Languages, AI Systems & Workstation' };
      case 'F': return { letter: 'F', title: 'FREELANCE & CREATIVE', subtitle: 'Media Production & Visual Work' };
      case 'O2': return { letter: 'O', title: 'OPEN SOURCE', subtitle: 'Team Collaborations & Public Repositories' };
      case 'L': return { letter: 'L', title: 'LANGUAGES', subtitle: 'Programming & Spoken Communication' };
      case 'I': return { letter: 'I', title: 'INTERESTS', subtitle: 'Physics, Mathematics & Storytelling' };
      case 'O3': return { letter: 'O', title: 'ONGOING LAB', subtitle: 'Active Exploration & Learning Pipeline' };
      default: return { letter: '', title: '', subtitle: '' };
    }
  };

  const titleInfo = getModalTitle();

  return (
    <div
      className="journal-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="journal-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Modal Chrome Header */}
        <div className="modal-chrome-bar">
          <div className="modal-title-group">
            <span className="modal-key-badge font-mono">{titleInfo.letter}</span>
            <div>
              <h2 id="modal-headline" className="modal-heading font-serif">
                {titleInfo.title}
              </h2>
              <p className="modal-subheading font-mono">{titleInfo.subtitle}</p>
            </div>
          </div>

          <div className="modal-chrome-actions">
            <span className="esc-hint font-mono">ESC TO CLOSE</span>
            <button
              ref={closeButtonRef}
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close dialog overlay"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Inner Scroll Area */}
        <div className="modal-scroll-area">
          {renderContent()}
        </div>

        {/* Modal Footer Stamp */}
        <div className="modal-footer-bar font-mono">
          <span className="footer-doc-stamp">FIELD JOURNAL // MK-ARCHIVE-01</span>
          <span className="footer-verified-tag">✓ VERIFIED RECORD</span>
        </div>
      </div>
    </div>
  );
};
