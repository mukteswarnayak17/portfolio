import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['all', 'SQL', 'Python', 'Power BI', 'Tableau'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase()));
  });

  return (
    <section className="section-wrapper" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">COMPLETED CASE STUDIES</span>
          <h2 className="section-title">Built Analytics Projects</h2>
          <p className="section-subtext">Four verified, end-to-end case studies highlighting quantitative business results.</p>
        </div>

        {/* Filter Bar */}
        <div className="project-filter-bar">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              className={`filter-btn ${filter === opt ? 'active' : ''}`}
              onClick={() => setFilter(opt)}
            >
              {opt === 'all' ? 'All Projects' : opt}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="project-card glass-panel">
              <div className="project-card-header">
                <span className="project-badge">{proj.category}</span>
                <span className="badge-tag">Verified Project</span>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-subtitle">{proj.subtitle}</p>

              <div className="project-key-result-banner">
                <span className="key-result-label">★ KEY RESULT</span>
                <div className="key-result-text">{proj.keyResult}</div>
              </div>

              <div className="project-kpis-grid">
                {proj.kpis.map((k, i) => (
                  <div key={i} className="kpi-mini-card">
                    <span className="kpi-val">{k.value}</span>
                    <span className="kpi-lbl">{k.label}</span>
                  </div>
                ))}
              </div>

              <div className="tags-group" style={{ marginBottom: '1.25rem' }}>
                {proj.tags.map((t, i) => (
                  <span key={i} className="badge-tag">{t}</span>
                ))}
              </div>

              <div className="project-card-footer">
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => setSelectedProject(proj)}
                >
                  CASE STUDY ↗
                </button>
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-ghost btn-sm"
                >
                  GitHub Code ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-x" onClick={() => setSelectedProject(null)}>✕</button>
            
            <div className="modal-case-header">
              <div className="tags-group" style={{ marginBottom: '0.8rem' }}>
                <span className="badge-tag active">{selectedProject.category}</span>
                {selectedProject.tags.map((t, idx) => (
                  <span key={idx} className="badge-tag">{t}</span>
                ))}
              </div>
              <h2 className="modal-project-title">{selectedProject.title}</h2>
              <p className="modal-project-sub">{selectedProject.subtitle}</p>

              <div className="project-key-result-banner">
                <span className="key-result-label">★ QUANTIFIED IMPACT</span>
                <div className="key-result-text">{selectedProject.keyResult}</div>
              </div>
            </div>

            <div className="modal-body-sections">
              <div className="case-section">
                <h4 className="case-sec-title"><span className="accent-text">01.</span> BUSINESS PROBLEM</h4>
                <p className="case-text">{selectedProject.caseStudy.businessProblem}</p>
              </div>

              <div className="case-section">
                <h4 className="case-sec-title"><span className="accent-text">02.</span> DATASET & STRUCTURE</h4>
                <p className="case-text">{selectedProject.caseStudy.dataset}</p>
              </div>

              <div className="case-section">
                <h4 className="case-sec-title"><span className="accent-text">03.</span> ANALYTICS WORKFLOW</h4>
                <div className="case-process-timeline">
                  {selectedProject.caseStudy.processSteps.map((p, i) => (
                    <div key={i} className="timeline-step">
                      <div className="step-bullet">{i + 1}</div>
                      <div className="step-content">
                        <strong>{p.step}</strong>
                        <p>{p.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="case-section">
                <h4 className="case-sec-title"><span className="accent-text">04.</span> TOOLS USED</h4>
                <div className="tags-group">
                  {selectedProject.caseStudy.tools.map((tool, idx) => (
                    <span key={idx} className="badge-tag active">{tool}</span>
                  ))}
                </div>
              </div>

              <div className="case-section">
                <h4 className="case-sec-title"><span className="accent-text">05.</span> KEY QUANTITATIVE INSIGHTS</h4>
                <ul className="case-insights-list">
                  {selectedProject.caseStudy.keyInsights.map((ins, i) => (
                    <li key={i}>
                      <span className="accent-text">▸</span>
                      <span>{ins}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="case-section impact-box">
                <h4 className="case-sec-title"><span className="accent-text">06.</span> BUSINESS IMPACT & DECISION</h4>
                <p className="case-text">{selectedProject.caseStudy.businessImpact}</p>
              </div>

              <div className="modal-footer-actions">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  VIEW CODE ON GITHUB ↗
                </a>
                <button className="btn btn-ghost" onClick={() => setSelectedProject(null)}>
                  CLOSE CASE STUDY
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .project-filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .filter-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          transition: var(--transition-smooth);
        }
        .filter-btn:hover, .filter-btn.active {
          background: var(--accent-red-bright);
          color: #fff;
          border-color: var(--accent-red-bright);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
        }
        .project-card {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
        }
        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .project-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-rose);
          text-transform: uppercase;
        }
        .project-title { font-size: 1.45rem; margin-bottom: 0.3rem; }
        .project-subtitle {
          font-size: 0.92rem;
          color: #fda4af;
          margin-bottom: 1.2rem;
        }
        .project-key-result-banner {
          background: rgba(225, 29, 72, 0.12);
          border: 1px solid rgba(255, 42, 81, 0.3);
          border-radius: 8px;
          padding: 0.8rem 1rem;
          margin-bottom: 1.3rem;
        }
        .key-result-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-red-bright);
        }
        .key-result-text {
          font-size: 0.88rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.4;
        }
        .project-kpis-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.65rem;
          background: rgba(7, 3, 5, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 0.8rem;
          margin-bottom: 1.25rem;
        }
        .kpi-mini-card {
          display: flex;
          flex-direction: column;
          text-align: center;
        }
        .kpi-val { font-size: 1.1rem; font-weight: 800; color: #fff; }
        .kpi-lbl { font-size: 0.7rem; color: var(--text-subtle); }
        .project-card-footer {
          margin-top: auto;
          padding-top: 1.4rem;
          display: flex;
          gap: 0.8rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(7, 3, 5, 0.85);
          backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .modal-card {
          position: relative;
          background: #12070c;
          border: 1px solid rgba(255, 42, 81, 0.35);
          border-radius: 18px;
          width: 100%;
          max-width: 820px;
          max-height: 88vh;
          overflow-y: auto;
          padding: 2.4rem;
        }
        .modal-close-x {
          position: absolute;
          top: 1.4rem;
          right: 1.4rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #fff;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
        }
        .modal-project-title { font-size: 1.9rem; margin-bottom: 0.3rem; }
        .modal-project-sub { font-size: 1.05rem; color: var(--accent-rose); margin-bottom: 1.2rem; }
        .case-section { margin-bottom: 1.8rem; }
        .case-sec-title { font-size: 1.05rem; margin-bottom: 0.5rem; }
        .case-text { font-size: 0.95rem; color: #e2e8f0; line-height: 1.6; }
        .timeline-step {
          display: flex;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: 10px;
          padding: 0.9rem;
          margin-bottom: 0.6rem;
        }
        .step-bullet {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(225, 29, 72, 0.2);
          color: var(--accent-red-bright);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .case-insights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .case-insights-list li {
          display: flex;
          gap: 0.7rem;
          font-size: 0.92rem;
          background: rgba(255, 255, 255, 0.02);
          padding: 0.75rem 1rem;
          border-radius: 8px;
        }
        .impact-box {
          background: rgba(225, 29, 72, 0.1);
          border: 1px solid rgba(255, 42, 81, 0.3);
          border-radius: 12px;
          padding: 1.4rem;
        }
        .modal-footer-actions {
          display: flex;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </section>
  );
}