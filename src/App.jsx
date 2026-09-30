import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { PORTFOLIO_DATA } from "./data";

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const { profile } = PORTFOLIO_DATA;

  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About onOpenResume={() => setResumeModalOpen(true)} />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            © {new Date().getFullYear()} <strong>{profile.name}</strong> · Data Analyst · {profile.location}
          </div>
          <div>Turning raw data into measurable business impact.</div>
        </div>
      </footer>

      {/* Resume Modal */}
      {resumeModalOpen && (
        <div className="modal-overlay" onClick={() => setResumeModalOpen(false)}>
          <div className="modal-card resume-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-topbar">
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>{profile.name} — Resume</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-rose)' }}>{profile.title}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href={profile.resumePdf} download="Mukteswar_Nayak_Resume.pdf" className="btn btn-primary btn-sm">
                  Download PDF 📥
                </a>
                <button className="btn btn-ghost btn-sm" onClick={() => setResumeModalOpen(false)}>
                  ✕ Close
                </button>
              </div>
            </div>

            <div className="resume-sheet-container">
              <iframe 
                src={profile.resumePdf} 
                title="Resume Preview" 
                style={{ width: '100%', height: '70vh', border: 'none', borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .footer {
          padding: 2.5rem 0;
          border-top: 1px solid rgba(225, 29, 72, 0.2);
          font-size: 0.85rem;
          color: var(--text-subtle);
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .resume-modal-card {
          max-width: 900px;
          width: 95%;
        }
        .resume-modal-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}