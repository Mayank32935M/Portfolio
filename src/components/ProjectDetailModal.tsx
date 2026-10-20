import React, { useEffect, useRef } from 'react';
import type { ProjectItem } from '../types';
import { X, ExternalLink, CheckCircle2, CircleDashed, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectDetailModal.css';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="detail-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="detail-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-project-title"
      >
        {/* Header */}
        <div className="detail-header-bar">
          <div className="detail-title-block">
            <div className="detail-tags-row font-mono">
              <span className="detail-badge">{project.badge || project.category}</span>
              <span className="detail-status font-mono">STATUS: {project.status}</span>
            </div>
            <h2 id="detail-project-title" className="detail-title font-serif">
              {project.name}
            </h2>
            <p className="detail-subtitle">{project.subtitle}</p>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            className="detail-close-btn"
            onClick={onClose}
            aria-label="Close project dossier"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Dossier Content */}
        <div className="detail-scroll-area">
          {/* Gallery / Screenshots */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="detail-gallery-section">
              <div className="gallery-header font-mono">
                <Layers size={13} className="text-brass" />
                <span>ARCHIVAL EVIDENCE &amp; SYSTEM VISUALIZATIONS</span>
              </div>
              <div className="gallery-grid">
                {project.galleryImages.map((img, idx) => (
                  <figure key={idx} className="gallery-figure">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="gallery-image"
                      loading="lazy"
                    />
                    <figcaption className="gallery-caption font-mono">
                      <span>FIG {idx + 1}.</span> {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* Problem Statement */}
          <div className="detail-section">
            <h3 className="section-title font-mono text-rust">&gt; THE REAL PROBLEM ADDRESSED</h3>
            <p className="problem-body">{project.problem}</p>
          </div>

          {/* Role & Team Context */}
          <div className="detail-section">
            <h3 className="section-title font-mono text-brass">&gt; ROLE &amp; ENGINEERING CONTRIBUTION</h3>
            <p className="role-body">
              <strong>{project.role}</strong>
              {project.collaboration && ` — ${project.collaboration}`}
            </p>
          </div>

          {/* Implemented vs Planned Capabilities */}
          <div className="capabilities-grid">
            <div className="cap-column">
              <h4 className="cap-title font-mono text-olive">
                <CheckCircle2 size={13} />
                <span>IMPLEMENTED CAPABILITIES</span>
              </h4>
              <ul className="cap-list font-mono">
                {project.implemented.map((item, idx) => (
                  <li key={idx} className="cap-item">
                    <span className="cap-marker">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.planned && project.planned.length > 0 && (
              <div className="cap-column">
                <h4 className="cap-title font-mono text-brass">
                  <CircleDashed size={13} />
                  <span>PLANNED / ROADMAP</span>
                </h4>
                <ul className="cap-list font-mono">
                  {project.planned.map((item, idx) => (
                    <li key={idx} className="cap-item planned">
                      <span className="cap-marker">○</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div className="detail-section">
            <h3 className="section-title font-mono text-parchment">&gt; VERIFIED TECHNOLOGY STACK</h3>
            <div className="detail-tech-chips font-mono">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer-bar">
          <div className="detail-footer-left font-mono">
            <span>REPOSITORY EVIDENCE // AUDITED</span>
          </div>
          <div className="detail-footer-actions">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-repo-cta font-mono"
            >
              <GithubIcon size={15} />
              <span>Inspect Source Repository</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
