import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data';

export default function Contact() {
  const { profile } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    topic: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const sender = formData.name || 'Recruiter / Hiring Team';
    const company = formData.company || 'Analytics Team';
    const topic = formData.topic || 'Data Analyst Role';
    const msg = formData.message || '';

    const subject = encodeURIComponent(`[Data Analyst Inquiry] ${topic} — ${sender} (${company})`);
    const body = encodeURIComponent(`Hi Mukteswar,\n\nName: ${sender}\nCompany: ${company}\nTopic: ${topic}\n\nMessage:\n${msg}\n\nLooking forward to speaking with you!`);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="container">
        <div className="contact-card-main glass-panel">
          <div className="contact-layout">
            
            {/* Left Info */}
            <div className="contact-left">
              <span className="section-tag">START A CONVERSATION</span>
              <h2>Let's Build Something with Data</h2>
              <p>
                Have an analytics opportunity, business problem, or dataset? Let's turn it into measurable business impact.
              </p>

              <div className="contact-channel-links">
                <a href={`mailto:${profile.email}`} className="contact-link-pill">
                  <span>✉ {profile.email}</span>
                </a>
                <a href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`} className="contact-link-pill">
                  <span>☎ {profile.phone}</span>
                </a>
                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link-pill">
                  <span>GitHub: {profile.githubUsername} ↗</span>
                </a>
                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link-pill">
                  <span>LinkedIn Profile ↗</span>
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="contact-right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="inquiry-name">Your Name</label>
                  <input 
                    type="text" 
                    id="inquiry-name" 
                    placeholder="e.g. Alex (Hiring Manager)" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry-company">Company or Team</label>
                  <input 
                    type="text" 
                    id="inquiry-company" 
                    placeholder="e.g. Business Intelligence Team" 
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry-topic">Role / Discussion Topic</label>
                  <input 
                    type="text" 
                    id="inquiry-topic" 
                    placeholder="e.g. Data Analyst Role Discussion" 
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry-message">Brief Note</label>
                  <textarea 
                    id="inquiry-message" 
                    rows="4" 
                    placeholder="Share the details or requirements you'd like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  SEND MESSAGE DIRECTLY ✉
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .contact-card-main { padding: 3.5rem; border-color: rgba(255, 42, 81, 0.3); }
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
        }
        .contact-left h2 { font-size: 2.2rem; margin-bottom: 0.8rem; }
        .contact-left p { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 2rem; }
        .contact-channel-links { display: flex; flex-direction: column; gap: 1rem; }
        .contact-link-pill {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          text-decoration: none;
          color: #fff;
          font-size: 0.95rem;
          transition: var(--transition-smooth);
        }
        .contact-link-pill:hover {
          border-color: var(--accent-red-bright);
          background: rgba(225, 29, 72, 0.12);
          transform: translateX(4px);
        }
        .contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
        .form-group label { font-size: 0.85rem; font-weight: 600; color: var(--text-muted); }
        .form-group input, .form-group textarea {
          background: rgba(7, 3, 5, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          padding: 0.8rem 1rem;
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.95rem;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-red-bright);
        }
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr; }
          .contact-card-main { padding: 2rem; }
        }
      `}</style>
    </section>
  );
}