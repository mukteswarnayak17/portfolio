import React from 'react';
import { PORTFOLIO_DATA } from '../data';

function SkillLogo({ logo }) {
  switch (logo) {
    case 'sql':
      return (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ff2a51" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      );
    case 'python':
      return (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
          <path d="M12 2C6.48 2 6 3.5 6 5v2h6v1H4C2.5 8 2 9.5 2 12s.5 4 2 4h2v-2c0-1.5 1-2.5 2.5-2.5h5c1.5 0 2.5-1 2.5-2.5V5c0-1.5-1.5-3-6-3zm-2 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"></path>
          <path d="M12 22c5.52 0 6-1.5 6-3v-2h-6v-1h8c1.5 0 2-1.5 2-4s-.5-4-2-4h-2v2c0 1.5-1 2.5-2.5 2.5h-5c-1.5 0-2.5 1-2.5 2.5V19c0 1.5 1.5 3 6 3zm2-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
        </svg>
      );
    case 'powerbi':
      return (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ff2a51" strokeWidth="2">
          <rect x="3" y="12" width="4" height="9" rx="1"></rect>
          <rect x="10" y="7" width="4" height="14" rx="1"></rect>
          <rect x="17" y="3" width="4" height="18" rx="1"></rect>
        </svg>
      );
    case 'tableau':
      return (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
          <path d="M12 2v20M2 12h20M7 7v10M17 7v10M7 7h10M7 17h10"></path>
        </svg>
      );
    case 'excel':
      return (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ff4d6d" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M8 8l8 8M16 8l-8 8"></path>
        </svg>
      );
    default:
      return (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ff2a51" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      );
  }
}

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section className="section-wrapper" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">TECHNICAL REPERTOIRE</span>
          <h2 className="section-title">Tools & Recruiter Competencies</h2>
          <p className="section-subtext">Core tool proficiencies aligned with the exact capabilities data teams require.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-panel">
              <div className="skill-header">
                <div className="skill-logo-box">
                  <SkillLogo logo={skill.logo} />
                </div>
                <div>
                  <h3 className="skill-name-title">{skill.name}</h3>
                  <span className="skill-category-sub">{skill.category}</span>
                </div>
              </div>

              <p className="skill-headline-text">{skill.headline}</p>

              <ul className="recruiter-expectations-list">
                {skill.recruiterExpectations.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 1.8rem;
        }
        .skill-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .skill-logo-box {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .skill-name-title { font-size: 1.25rem; color: #fff; }
        .skill-category-sub {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--accent-rose);
        }
        .skill-headline-text {
          font-size: 0.92rem;
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 1.2rem;
        }
        .recruiter-expectations-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: auto;
        }
        .recruiter-expectations-list li {
          display: flex;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .recruiter-expectations-list li::before {
          content: '▸';
          color: var(--accent-red-bright);
        }
      `}</style>
    </section>
  );
}