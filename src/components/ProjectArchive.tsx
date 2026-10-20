import React, { useState } from 'react';
import type { ProjectItem } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectArchive.css';

interface ProjectArchiveProps {
  onOpenProjectDetail: (project: ProjectItem) => void;
}

export const ProjectArchive: React.FC<ProjectArchiveProps> = ({
  onOpenProjectDetail
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'AI & ML', 'Developer Tools', 'Hackathons & Systems', 'Creative & Games'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="project-archive" className="archive-section" aria-label="Field Journal Project Dossiers">
      <div className="journal-container">
        {/* Section Header */}
        <div className="archive-section-header">
          <div className="archive-header-left">
            <div className="archive-section-tag font-mono">
              <span className="archive-tag-box">SEC // 02</span>
              <span>VERIFIED WORK ARCHIVE</span>
            </div>
            <h2 className="archive-main-title font-serif">
              Project Dossiers &amp; Technical Systems
            </h2>
            <p className="archive-main-desc">
              Every entry represents a functioning codebase, verified hackathon prototype, or active open-source collaboration. 
              Click any dossier to examine system architecture, evidentiary screenshots, and source code.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="archive-filter-tabs font-mono" role="tablist" aria-label="Project category filters">
            {categories.map((cat) => {
              const count = cat === 'All'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat).length;
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-tab-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  <span>{cat}</span>
                  <span className="filter-count">[{String(count).padStart(2, '0')}]</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Varied Dossier Grid */}
        <div className="dossier-grid">
          {filteredProjects.map((proj, idx) => {
            const isLead = idx === 0 && activeFilter === 'All';
            return (
              <article
                key={proj.id}
                className={`dossier-card ${isLead ? 'dossier-lead' : ''}`}
                onClick={() => onOpenProjectDetail(proj)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenProjectDetail(proj);
                  }
                }}
                aria-label={`Open project details for ${proj.name}`}
              >
                {/* Dossier Card Chrome */}
                <div className="dossier-card-top font-mono">
                  <div className="dossier-folder-tab">
                    <FolderGit2 size={13} className="text-brass" />
                    <span>DOSSIER // {String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="dossier-status-pill">
                    <span className="dossier-dot" />
                    <span>{proj.status}</span>
                  </div>
                </div>

                {/* Main Visual or Screenshot if present */}
                {proj.featuredImage && (
                  <div className="dossier-image-frame">
                    <img
                      src={proj.featuredImage}
                      alt={`${proj.name} overview`}
                      className="dossier-img"
                      loading="lazy"
                    />
                    <div className="dossier-inspect-overlay font-mono">
                      <span>INSPECT DOSSIER</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                )}

                {/* Content Block */}
                <div className="dossier-body">
                  <div className="dossier-meta-row font-mono">
                    <span className="dossier-badge">{proj.badge || proj.category}</span>
                    <span className="dossier-role">{proj.role}</span>
                  </div>

                  <h3 className="dossier-title font-serif">{proj.name}</h3>
                  <p className="dossier-subtitle">{proj.subtitle}</p>

                  <p className="dossier-problem">
                    <strong className="text-rust font-mono">&gt; PROBLEM: </strong>
                    {proj.problem}
                  </p>

                  {/* Highlights */}
                  <div className="dossier-capabilities">
                    <span className="cap-label font-mono">KEY IMPLEMENTED CAPABILITIES:</span>
                    <ul className="dossier-bullet-list">
                      {proj.implemented.slice(0, 3).map((item, cIdx) => (
                        <li key={cIdx} className="dossier-bullet">
                          <span className="bullet-sym">◆</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="dossier-tech-row font-mono">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="dossier-tech-chip">{tech}</span>
                    ))}
                  </div>

                  {/* Card Action Links */}
                  <div className="dossier-action-bar font-mono">
                    <span className="dossier-click-hint">
                      CLICK TO VIEW EVIDENCE &amp; SPECS →
                    </span>
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dossier-repo-direct-btn"
                      onClick={(e) => e.stopPropagation()}
                      title="Inspect GitHub Repository"
                      aria-label={`Open ${proj.name} repository on GitHub in a new tab`}
                    >
                      <GithubIcon size={13} />
                      <span>Repo</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
