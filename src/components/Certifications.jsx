import React from 'react';
import { PORTFOLIO_DATA } from '../data';

export default function Certifications() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section className="section-wrapper" id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">VERIFIED CREDENTIALS</span>
          <h2 className="section-title">Certifications & Training</h2>
          <p className="section-subtext">Formal professional validations in enterprise data analysis and visualization.</p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card glass-panel">
              <div className="cert-header">
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
                <span className="badge-tag active">Verified</span>
              </div>

              <p className="cert-desc">{cert.description}</p>

              <div className="tags-group">
                {cert.skills.map((s, i) => (
                  <span key={i} className="badge-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .cert-card {
          padding: 2.2rem;
        }
        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.1rem;
        }
        .cert-title {
          font-size: 1.3rem;
          color: #fff;
          margin-bottom: 0.2rem;
        }
        .cert-issuer {
          font-size: 0.85rem;
          color: var(--accent-rose);
          font-family: var(--font-mono);
        }
        .cert-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </section>
  );
}