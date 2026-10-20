import React from 'react';
import { TECH_CATEGORIES } from '../data/portfolioData';
import { Wrench, Terminal, Cpu, Layout, Film, Code2 } from 'lucide-react';
import './WorkshopSection.css';

export const WorkshopSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code2 size={16} className="text-brass" />;
      case 'bot': return <Cpu size={16} className="text-rust" />;
      case 'layout': return <Layout size={16} className="text-olive" />;
      case 'terminal': return <Terminal size={16} className="text-parchment" />;
      case 'film': return <Film size={16} className="text-brass" />;
      default: return <Wrench size={16} className="text-brass" />;
    }
  };

  return (
    <section id="technical-workshop" className="workshop-section" aria-label="Technical Workshop and Profile">
      <div className="journal-container">
        {/* Header */}
        <div className="workshop-header">
          <div className="workshop-tag font-mono">
            <span className="tag-number">SEC // 03</span>
            <span>DEVELOPER WORKSHOP &amp; TOOLING SPECIFICATION</span>
          </div>
          <h2 className="workshop-title font-serif">
            The Workstation &amp; Technical Profile
          </h2>
          <p className="workshop-desc">
            Organized according to real utility and active application. No invented percentage bars or subjective skill ratings — 
            only verified dial-ins, languages in active practice, and toolchains exercised in live repositories.
          </p>
        </div>

        {/* Notebook / Workbench Grid */}
        <div className="workshop-grid">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="workbench-card">
              <div className="workbench-card-top font-mono">
                <div className="cat-title-group">
                  {getCategoryIcon(cat.iconName)}
                  <h3 className="cat-name">{cat.title}</h3>
                </div>
                <span className="card-index">[0{idx + 1}]</span>
              </div>

              <div className="workbench-items">
                {cat.items.map((item, iIdx) => (
                  <div key={iIdx} className="workbench-item-row font-mono">
                    <div className="item-primary-meta">
                      <span className="item-name font-bold">{item.name}</span>
                      {item.level && (
                        <span className="item-status-pill">{item.level}</span>
                      )}
                    </div>
                    {item.note && (
                      <div className="item-annotation">
                        <span className="annotation-leader">&gt;</span> {item.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
