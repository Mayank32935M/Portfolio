import React from 'react';
import { Compass, BookOpen, GitCommit, ShieldCheck } from 'lucide-react';
import './PhilosophySection.css';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="working-philosophy" className="philosophy-section" aria-label="About and Working Philosophy">
      <div className="journal-container">
        <div className="philosophy-wrapper">
          {/* Section Header */}
          <div className="philosophy-header">
            <div className="philosophy-tag font-mono">
              <span className="tag-number">SEC // 04</span>
              <span>WORKING PHILOSOPHY &amp; PEDAGOGICAL APPROACH</span>
            </div>
            <h2 className="philosophy-title font-serif">
              Engineering with Epistemic Trust &amp; Articulation
            </h2>
          </div>

          <div className="philosophy-grid">
            {/* Left Card: Core Convictions */}
            <div className="philosophy-card convictions-card">
              <div className="card-top-stamp font-mono">
                <Compass size={14} className="text-brass" />
                <span>PRINCIPLE 01 // FOUNDATIONS FIRST</span>
              </div>
              <h3 className="card-headline font-serif">
                Physics, Mathematics, and Deterministic Logic
              </h3>
              <p>
                From the laws of physics to the digital abstractions of Artificial Intelligence, my approach centers 
                on understanding first principles before stacking layers of abstraction. Whether implementing 
                cryptographic SHA-256 ledgers in FORENSIC-X or grinding LeetCode algorithms in Python, strong fundamentals 
                prevent architectural collapse.
              </p>
              <div className="card-quote-box font-mono">
                <span className="quote-mark">“</span>
                <span>Consistency compounds. Build the foundation properly so high-level systems remain verifiable.</span>
              </div>
            </div>

            {/* Right Card: Teaching & Communication */}
            <div className="philosophy-card communication-card">
              <div className="card-top-stamp font-mono">
                <BookOpen size={14} className="text-olive" />
                <span>PRINCIPLE 02 // EXPLICIT ARTICULATION</span>
              </div>
              <h3 className="card-headline font-serif">
                Great Ideas Require Clear Explanation
              </h3>
              <p>
                Having designed and taught CBSE English curriculum for Class 6–10 at Kalyan Classes, I learned firsthand 
                that complex concepts are only as powerful as one's ability to clearly communicate them to others. 
                In engineering, this reflects in readable code, thorough documentation, clear pitch strategies, and transparent architectures.
              </p>
              <div className="card-quote-box font-mono">
                <span className="quote-mark">“</span>
                <span>Great ideas are only as good as one's ability to explain them.</span>
              </div>
            </div>
          </div>

          {/* Verification Badge Bar */}
          <div className="philosophy-verify-bar font-mono">
            <div className="verify-item">
              <ShieldCheck size={14} className="text-olive" />
              <span>ACADEMICS: USAR, GGSIPU (Delhi) · B.Tech + M.Tech Dual-Degree</span>
            </div>
            <div className="verify-item">
              <GitCommit size={14} className="text-brass" />
              <span>REPOSITORIES: Shipped in Public on GitHub (@Mayank32935M)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
