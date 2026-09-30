import React from 'react';
import { PORTFOLIO_DATA } from '../data';

export default function About({ onOpenResume }) {
  const { about, profile } = PORTFOLIO_DATA;

  return (
    <section className="section-wrapper" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">ABOUT ME</span>
          <h2 className="section-title">Turning Complex Data into Strategic Value</h2>
          <p className="section-subtext">Actionable analytics focus tailored for organizational decision-makers.</p>
        </div>

        <div className="about-grid">
          <div className="about-text-col">
            <p className="about-intro-highlight">{about.shortIntro}</p>
            <p className="about-val-prop">{about.valueProp}</p>

            <div className="about-meta-row">
              <div className="meta-item">
                <strong>Location:</strong>
                <span>{profile.location}</span>
              </div>
              <div className="meta-item">
                <strong>Education:</strong>
                <span>{profile.education}</span>
              </div>
              <div className="meta-item">
                <strong>Domain:</strong>
                <span>{profile.focus}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {onOpenResume && (
                <button className="btn btn-primary btn-sm" onClick={onOpenResume}>
                  Open Full Resume ↗
                </button>
              )}
              <a 
                href={profile.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost btn-sm"
              >
                Explore GitHub Profile ↗
              </a>
            </div>
          </div>

          <div className="about-highlights-grid">
            {about.highlights.map((h, i) => (
              <div key={i} className="about-highlight-card glass-panel">
                <h4 className="highlight-title">▸ {h.title}</h4>
                <p className="highlight-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        .about-intro-highlight {
          font-size: 1.2rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.8rem;
        }
        .about-val-prop {
          font-size: 0.98rem;
          color: var(--text-muted);
          margin-bottom: 1.6rem;
        }
        .about-meta-row {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 2rem;
        }
        .meta-item {
          display: flex;
          gap: 0.75rem;
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.04);
          padding: 0.6rem 0.9rem;
          border-radius: 8px;
          border: 1px solid var(--border-glass);
        }
        .meta-item strong {
          color: var(--accent-rose);
          min-width: 85px;
        }
        .about-highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .about-highlight-card {
          padding: 1.5rem;
        }
        .highlight-title {
          font-size: 1rem;
          color: #fff;
          margin-bottom: 0.4rem;
        }
        .highlight-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        @media (max-width: 900px) {
          .about-grid, .about-highlights-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}