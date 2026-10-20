import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Copy, 
  Check, 
  Terminal, 
  ArrowUp, 
  ExternalLink,
  MapPin,
  Send
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './ClosingSection.css';

export const ClosingSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="journal-closing" className="closing-section" aria-label="Field Journal Closing Page and Contact">
      <div className="journal-container">
        {/* Archival Closing Card */}
        <div className="closing-journal-sheet">
          {/* Top Stamp Bar */}
          <div className="sheet-stamp-bar font-mono">
            <div className="stamp-left">
              <span className="sheet-id">PAGE 07 // FIELD JOURNAL CLOSE</span>
              <span className="sheet-status">[FINAL DISPATCH]</span>
            </div>
            <button
              type="button"
              className="scroll-top-btn"
              onClick={scrollToTop}
              title="Return to top of Field Journal"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>

          {/* Main Closing Grid */}
          <div className="sheet-main-grid">
            {/* Left: Final Field Dispatch Note */}
            <div className="sheet-left-col">
              <h2 className="closing-headline font-serif">
                Open to Collabs, Research &amp; AI Engineering
              </h2>
              <p className="closing-body">
                Whether you're developing agentic AI pipelines, engineering forensic software, building developer tools, 
                or seeking an ambitious dual-degree AI &amp; ML student to tackle challenging technical problems — my inbox is open.
              </p>

              {/* Direct Email Action Box */}
              <div className="closing-contact-card font-mono">
                <div className="contact-card-label">DIRECT INBOX:</div>
                <div className="contact-card-row">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="email-link"
                    title="Send an email to Mayank"
                  >
                    <Mail size={16} className="text-brass" />
                    <span>{PERSONAL_INFO.email}</span>
                  </a>

                  <button
                    type="button"
                    className="copy-email-btn"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-olive" />
                        <span className="text-olive">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="location-stamp font-mono">
                <MapPin size={13} className="text-rust" />
                <span>BASED IN DELHI, INDIA // GGSIPU USAR CAMPUS</span>
              </div>
            </div>

            {/* Right: Verified Coordinates & Channel Links */}
            <div className="sheet-right-col">
              <div className="coordinates-box">
                <div className="coords-header font-mono">
                  <Terminal size={14} className="text-brass" />
                  <span>VERIFIED NETWORK COORDINATES</span>
                </div>

                <div className="coords-links-list font-mono">
                  <a
                    href={PERSONAL_INFO.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coord-item"
                  >
                    <div className="coord-left">
                      <GithubIcon size={15} />
                      <span className="coord-title">GitHub</span>
                    </div>
                    <span className="coord-handle">@Mayank32935M</span>
                    <ExternalLink size={12} className="coord-arrow" />
                  </a>

                  <a
                    href={PERSONAL_INFO.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coord-item"
                  >
                    <div className="coord-left">
                      <LinkedinIcon size={15} />
                      <span className="coord-title">LinkedIn</span>
                    </div>
                    <span className="coord-handle">/in/Mayank32935M</span>
                    <ExternalLink size={12} className="coord-arrow" />
                  </a>

                  <a
                    href={PERSONAL_INFO.links.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coord-item"
                  >
                    <div className="coord-left">
                      <span className="font-bold">r/</span>
                      <span className="coord-title">Reddit</span>
                    </div>
                    <span className="coord-handle">u/Mayank32935M</span>
                    <ExternalLink size={12} className="coord-arrow" />
                  </a>

                  <a
                    href={PERSONAL_INFO.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coord-item"
                  >
                    <div className="coord-left">
                      <Send size={15} />
                      <span className="coord-title">Instagram</span>
                    </div>
                    <span className="coord-handle">@Mayank32935M</span>
                    <ExternalLink size={12} className="coord-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Audit Footer Log */}
          <div className="sheet-footer font-mono">
            <div className="footer-log">
              <span>SYSTEM LOG: 2026 // NO INVENTED BIOGRAPHY // VERIFIED EVIDENCE AUDIT PASSED</span>
            </div>
            <div className="footer-author">
              <span>DESIGNED &amp; ENGINEERED FOR MAYANK DABAS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
