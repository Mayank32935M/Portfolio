import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Terminal, 
  FolderGit2,
  ArrowDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './HeroSection.css';

interface HeroSectionProps {
  onScrollToKeyboard: () => void;
  onScrollToProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToKeyboard,
  onScrollToProjects
}) => {
  return (
    <section className="hero-section" aria-label="Introduction and Field Journal Hero">
      {/* Top Header Journal Chrome */}
      <header className="journal-header">
        <div className="journal-header-left">
          <span className="journal-folio font-mono">FIELD JOURNAL // VOL. 01</span>
          <span className="journal-divider">/</span>
          <span className="journal-date font-mono">USAR · GGSIPU · DELHI</span>
        </div>
        <div className="journal-header-center">
          <div className="journal-brand-title">THE DEVELOPER'S FIELD JOURNAL</div>
        </div>
        <div className="journal-header-right font-mono">
          <span className="journal-status-indicator">
            <span className="status-ping" />
            LIVE SPEC
          </span>
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="header-gh-link"
            aria-label="View Mayank's GitHub profile"
          >
            <GithubIcon size={14} />
            <span>Mayank32935M</span>
          </a>
        </div>
      </header>

      {/* Hero Main Grid: Portrait Scrapbook on Left, Terminal Console on Right */}
      <div className="hero-grid">
        {/* LEFT COLUMN: Halftone Portrait & Scrapbook Composition */}
        <div className="hero-portrait-col">
          <div className="scrapbook-card">
            {/* Vintage paper tape strips */}
            <div className="tape-strip top-left" aria-hidden="true" />
            <div className="tape-strip top-right right" aria-hidden="true" />
            <div className="tape-strip bottom-left" aria-hidden="true" />

            {/* Archival metadata stamp */}
            <div className="portrait-stamp-bar font-mono">
              <span className="portrait-stamp-id">FIG 01. HALVE-TONE ARCHIVE</span>
              <span className="portrait-stamp-status">[AUTHENTIC]</span>
            </div>

            {/* The actual approved halftone portrait & scrapbook artwork */}
            <div className="portrait-image-wrapper">
              <img
                src="/assets/portrait_scrapbook.webp"
                alt="Mayank Dabas — Halftone portrait and archival developer scrapbook"
                className="portrait-scrapbook-img"
                loading="eager"
              />
              <div className="portrait-vignette-overlay" aria-hidden="true" />
            </div>

            {/* Under-portrait Caption Note */}
            <div className="portrait-caption font-mono">
              <div className="caption-lead">
                <span className="caption-dot" />
                <span>MAYANK DABAS // B.TECH + M.TECH AI &amp; ML</span>
              </div>
              <div className="caption-sub">
                "Same person, Different dreams. Consistency compounds."
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Vintage Terminal & Technical Metadata Console */}
        <div className="hero-console-col">
          <div className="terminal-window hero-terminal">
            {/* Terminal Titlebar */}
            <div className="terminal-titlebar">
              <div className="terminal-dots">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <span className="terminal-path font-mono">{PERSONAL_INFO.callsign}:~</span>
              <div className="terminal-quick-tags font-mono">
                <span>• profile</span>
                <span>/ projects</span>
                <span>/ tech</span>
              </div>
            </div>

            {/* Terminal Inner Content */}
            <div className="terminal-body">
              {/* Prompt line */}
              <div className="terminal-command-line">
                <span className="prompt-arrow">&gt;</span>
                <h1 className="hero-name font-mono">MAYANK DABAS</h1>
                <span className="terminal-cursor">_</span>
                <span className="live-pill font-mono">
                  <span className="live-dot" /> ACTIVE
                </span>
              </div>

              {/* Editorial Subtitle */}
              <p className="hero-editorial-sub">
                Dual-Degree AI &amp; ML Student at <strong className="highlight-text">USAR, GGSIPU (Delhi)</strong>. 
                Designing agentic AI architectures, verifiable digital forensics frameworks, and bespoke developer workstations.
              </p>

              {/* Dotted Specs Table */}
              <div className="specs-table font-mono" role="table" aria-label="Developer Specifications">
                <div className="spec-row" role="row">
                  <span className="spec-label" role="rowheader">ROLE</span>
                  <span className="spec-leader" aria-hidden="true">...................</span>
                  <span className="spec-value" role="cell">[ {PERSONAL_INFO.role} ]</span>
                </div>
                <div className="spec-row" role="row">
                  <span className="spec-label" role="rowheader">FOCUS</span>
                  <span className="spec-leader" aria-hidden="true">..................</span>
                  <span className="spec-value" role="cell">[ Agentic AI · LLM APIs · Automation ]</span>
                </div>
                <div className="spec-row" role="row">
                  <span className="spec-label" role="rowheader">INSTITUTE</span>
                  <span className="spec-leader" aria-hidden="true">..............</span>
                  <span className="spec-value" role="cell">[ USAR, GGSIPU · Delhi, India ]</span>
                </div>
                <div className="spec-row" role="row">
                  <span className="spec-label" role="rowheader">CURRENTLY</span>
                  <span className="spec-leader" aria-hidden="true">..............</span>
                  <span className="spec-value highlight-cell" role="cell">[ FORENSIC-X · Stivium IDE · LeetCode ]</span>
                </div>
                <div className="spec-row" role="row">
                  <span className="spec-label" role="rowheader">PHILOSOPHY</span>
                  <span className="spec-leader" aria-hidden="true">.............</span>
                  <span className="spec-value" role="cell">[ "Great ideas are only as good as one's ability to explain them." ]</span>
                </div>
                <div className="spec-row" role="row">
                  <span className="spec-label" role="rowheader">STATUS</span>
                  <span className="spec-leader" aria-hidden="true">.................</span>
                  <span className="spec-value text-olive" role="cell">[ Still a work in progress ... ]</span>
                </div>
              </div>

              {/* Terrain Visual Map & Quick Insight */}
              <div className="terminal-map-row">
                <div className="terrain-map-frame">
                  <img
                    src="/assets/visual_terrain_map.webp"
                    alt="Celestial wave topographical map"
                    className="terrain-map-img"
                  />
                  <div className="map-badge font-mono">VISUAL.MAP 001</div>
                </div>

                <div className="map-meta font-mono">
                  <div className="meta-quote">
                    <span className="quote-bracket">&gt;</span> Consistency compounds. Learning by shipping in public.
                  </div>
                  <div className="meta-hashes">
                    <span>HASH // 001 · 010 · 100 · 101</span>
                    <span className="meta-coords">LAT: 28.6139° N · LON: 77.2090° E</span>
                  </div>
                </div>
              </div>

              {/* Verified Links & Console CTA Bar */}
              <div className="terminal-footer-bar">
                <div className="terminal-social-links" aria-label="Verified Social and Contact Links">
                  <a
                    href={PERSONAL_INFO.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="term-social-btn"
                    title="GitHub: Mayank32935M"
                  >
                    <GithubIcon size={14} />
                    <span className="font-mono">GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="term-social-btn"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon size={14} />
                    <span className="font-mono">LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="term-social-btn"
                    title={`Email: ${PERSONAL_INFO.email}`}
                  >
                    <Mail size={14} />
                    <span className="font-mono">Email</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.links.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="term-social-btn"
                    title="Reddit Profile"
                  >
                    <span className="font-mono font-bold">r/</span>
                    <span className="font-mono">Reddit</span>
                  </a>
                </div>

                <div className="terminal-action-ctas">
                  <button
                    type="button"
                    className="hero-action-btn primary"
                    onClick={onScrollToKeyboard}
                    title="Explore via interactive PORT/FOLIO console"
                  >
                    <Terminal size={14} />
                    <span>Open PORT/FOLIO Console</span>
                    <ArrowDown size={13} className="bounce-subtle" />
                  </button>
                  <button
                    type="button"
                    className="hero-action-btn secondary"
                    onClick={onScrollToProjects}
                    title="Jump to full Project Dossiers"
                  >
                    <FolderGit2 size={14} />
                    <span>Project Archive</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
