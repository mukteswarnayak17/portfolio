import React from 'react';
import { PORTFOLIO_DATA } from '../data';

export default function Hero({ onOpenResume }) {
  const { profile, stats } = PORTFOLIO_DATA;

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-layout-grid">
          
          {/* Left Text */}
          <div className="hero-content">
            <div className="tagline-pill">
              <span className="pulsing-dot"></span>
              <span>{profile.tagline}</span>
            </div>

            <h1 className="hero-title gradient-text">{profile.name}</h1>
            <h2 className="hero-headline">{profile.headline}</h2>
            <p className="hero-subheadline">{profile.subheadline}</p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">VIEW MY WORK ↓</a>
              <a href="#contact" className="btn btn-secondary">LET'S CONNECT ↗</a>
              <a 
                href={profile.resumePdf} 
                download="Mukteswar_Nayak_Resume.pdf"
                className="btn btn-secondary"
              >
                DOWNLOAD RESUME 📄
              </a>
              {onOpenResume && (
                <button className="btn btn-ghost" onClick={onOpenResume}>
                  VIEW RESUME 👁
                </button>
              )}
            </div>

            <div className="hero-quick-stats">
              {stats.map((s, idx) => (
                <div key={idx} className="glass-stat-card">
                  <div className="stat-number">{s.value}<span>{s.suffix}</span></div>
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-subtext">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-character-wrapper">
            <div className="hero-character-stage">
              <img 
                src={profile.characterImg} 
                alt={`${profile.name} - Data Analyst`}
                className="hero-photo-img"
                loading="eager"
                fetchPriority="high"
              />
              <div className="avatar-status-pill">
                <span className="status-indicator"></span>
                <span>Available for Analyst Roles</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 4rem 0 3.5rem;
          min-height: 88vh;
          display: flex;
          align-items: center;
        }
        .hero-layout-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.9fr;
          gap: 3.5rem;
          align-items: center;
        }
        .tagline-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          background: rgba(225, 29, 72, 0.12);
          border: 1px solid rgba(255, 42, 81, 0.3);
          font-size: 0.82rem;
          color: var(--accent-rose);
          margin-bottom: 1.25rem;
        }
        .pulsing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-red-bright);
          box-shadow: 0 0 8px var(--accent-red-bright);
        }
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0.8rem;
        }
        .hero-headline {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .hero-subheadline {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          margin-bottom: 2.8rem;
        }
        .hero-quick-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 1rem;
        }
        .glass-stat-card {
          background: rgba(22, 9, 15, 0.6);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          padding: 1.1rem;
        }
        .stat-number {
          font-size: 1.75rem;
          font-weight: 800;
          color: #fff;
        }
        .stat-number span { color: var(--accent-red-bright); }
        .stat-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-top: 0.2rem;
        }
        .stat-subtext {
          font-size: 0.72rem;
          color: var(--text-subtle);
        }
        .hero-character-wrapper {
          display: flex;
          justify-content: center;
        }
        .hero-character-stage {
          position: relative;
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-photo-img {
          width: 100%;
          height: auto;
          max-height: 520px;
          object-fit: contain;
          filter: drop-shadow(0 10px 25px rgba(255, 42, 81, 0.35));
        }
        .avatar-status-pill {
          margin-top: -1.2rem;
          background: rgba(18, 7, 12, 0.95);
          border: 1px solid rgba(255, 42, 81, 0.4);
          padding: 0.45rem 1rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .status-indicator {
          width: 8px;
          height: 8px;
          background-color: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px #22c55e;
        }
        @media (max-width: 1080px) {
          .hero-layout-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-cta-group { justify-content: center; }
        }
      `}</style>
    </section>
  );
}