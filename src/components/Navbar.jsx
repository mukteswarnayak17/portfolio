import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#skills", label: "SKILLS" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#certifications", label: "CERTIFICATIONS" },
    { href: "#contact", label: "CONTACT" }
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#hero" className="brand-logo">
          <div className="logo-cube">MN</div>
          <span>Mukteswar Nayak</span>
        </a>

        {/* Desktop Links */}
        <nav className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href} 
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          padding: 1.1rem 0;
          transition: all 0.25s ease;
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(7, 3, 5, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(225, 29, 72, 0.2);
          padding: 0.8rem 0;
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          text-decoration: none;
          font-weight: 800;
          font-size: 1.25rem;
          color: #fff;
        }
        .logo-cube {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #ff2a51, #e11d48);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 800;
          box-shadow: 0 0 10px rgba(225, 29, 72, 0.4);
        }
        .nav-links-desktop {
          display: flex;
          gap: 1.8rem;
          align-items: center;
        }
        .nav-link {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: #fff; }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }
        .mobile-menu-drawer {
          display: none;
        }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none; }
          .mobile-menu-btn { display: block; }
          .mobile-menu-drawer {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(7, 3, 5, 0.98);
            padding: 1.5rem 2rem;
            border-bottom: 1px solid rgba(225, 29, 72, 0.3);
            transform: translateY(-120%);
            transition: transform 0.25s ease;
            pointer-events: none;
          }
          .mobile-menu-drawer.open {
            transform: translateY(0);
            pointer-events: auto;
          }
          .mobile-nav-link {
            color: #fff;
            text-decoration: none;
            font-size: 1.05rem;
            font-weight: 600;
          }
        }
      `}</style>
    </header>
  );
}