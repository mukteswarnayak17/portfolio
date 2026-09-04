/**
 * APPLICATION CONTROLLER & COMPONENT RENDERER
 * ----------------------------------------------------
 * Red & White Theme | 4 Built Projects | Centralized Data
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('PORTFOLIO_DATA is not loaded.');
    return;
  }

  renderNavigation();
  renderHero(data);
  renderAbout(data);
  renderSkills(data);
  renderPipeline(data);
  renderProjects(data);
  renderExperience(data);
  renderGithubStats(data);
  renderContact(data);

  initScrollSpy();
  initTiltEffects();
  initModalListeners();
  initResumeModal();
  initMobileMenu();
  initScrollReveal();
});

/* -------------------------------------------------------------------------- */
/* 1. NAVIGATION                                                              */
/* -------------------------------------------------------------------------- */
function renderNavigation() {
  const navLinks = [
    { href: "#hero", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#skills", label: "SKILLS" },
    { href: "#pipeline", label: "PIPELINE" },
    { href: "#orbit", label: "DATA ORBIT" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#github", label: "GITHUB" },
    { href: "#contact", label: "CONTACT" }
  ];

  const desktopContainer = document.getElementById('nav-links-desktop');
  const mobileContainer = document.getElementById('nav-links-mobile');

  if (desktopContainer) {
    desktopContainer.innerHTML = navLinks.map(link => `
      <a href="${link.href}" class="nav-link">${link.label}</a>
    `).join('');
  }

  if (mobileContainer) {
    mobileContainer.innerHTML = navLinks.map(link => `
      <a href="${link.href}" class="mobile-nav-link">${link.label}</a>
    `).join('');
  }
}

/* -------------------------------------------------------------------------- */
/* 2. HERO SECTION & PROFILE DATA                                             */
/* -------------------------------------------------------------------------- */
function renderHero(data) {
  const profile = data.profile;
  const nameEl = document.getElementById('hero-name');
  const headlineEl = document.getElementById('hero-headline');
  const subheadlineEl = document.getElementById('hero-subheadline');
  const badgeEl = document.getElementById('hero-badge-text');
  const charImgEl = document.getElementById('hero-character-img');
  const downloadResumeBtn = document.getElementById('hero-download-resume-btn');

  if (nameEl) nameEl.textContent = profile.name;
  if (headlineEl) headlineEl.textContent = profile.headline;
  if (subheadlineEl) subheadlineEl.textContent = profile.subheadline;
  if (badgeEl) badgeEl.textContent = profile.tagline;

  if (charImgEl) {
    charImgEl.src = profile.characterImg || "mukteswar-profile.png";
    charImgEl.alt = `${profile.name} - Data Analyst`;
  }

  if (downloadResumeBtn && profile.resumePdf) {
    downloadResumeBtn.href = profile.resumePdf;
  }

  const statsContainer = document.getElementById('hero-quick-stats');
  if (statsContainer) {
    statsContainer.innerHTML = data.stats.map(s => `
      <div class="glass-stat-card">
        <div class="stat-number">${s.value}<span>${s.suffix}</span></div>
        <div class="stat-label">${s.label}</div>
        <div class="stat-subtext">${s.desc}</div>
      </div>
    `).join('');
  }
}

/* -------------------------------------------------------------------------- */
/* 3. ABOUT ME SECTION                                                        */
/* -------------------------------------------------------------------------- */
function renderAbout(data) {
  const about = data.about;
  const introEl = document.getElementById('about-intro-highlight');
  const valPropEl = document.getElementById('about-val-prop');
  const highlightsContainer = document.getElementById('about-highlights-container');

  if (introEl) introEl.textContent = about.shortIntro;
  if (valPropEl) valPropEl.textContent = about.valueProp;

  if (highlightsContainer) {
    highlightsContainer.innerHTML = about.highlights.map(h => `
      <div class="about-highlight-card tilt-card" data-tilt>
        <h4 class="highlight-title">▸ ${h.title}</h4>
        <p class="highlight-desc">${h.desc}</p>
      </div>
    `).join('');
  }
}

/* -------------------------------------------------------------------------- */
/* 4. SKILLS SECTION                                                          */
/* -------------------------------------------------------------------------- */
function renderSkills(data) {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = data.skills.map(skill => `
    <div class="skill-card glass-panel tilt-card" data-tilt>
      <div class="skill-header">
        <div class="skill-logo-box">
          ${getToolLogoSvg(skill.logo)}
        </div>
        <div>
          <h3 class="skill-name-title">${skill.name}</h3>
          <span class="skill-category-sub">${skill.category}</span>
        </div>
      </div>

      <p class="skill-headline-text">${skill.headline}</p>

      <ul class="recruiter-expectations-list">
        ${skill.recruiterExpectations.map(exp => `
          <li>${exp}</li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

/* -------------------------------------------------------------------------- */
/* 5. 3D PIPELINE SECTION                                                     */
/* -------------------------------------------------------------------------- */
function renderPipeline(data) {
  const container = document.getElementById('pipeline-steps-container');
  const detailPanel = document.getElementById('pipeline-active-detail');
  if (!container) return;

  container.innerHTML = data.pipelineSteps.map((step, idx) => `
    <div class="pipeline-step-node ${idx === 0 ? 'active' : ''}" data-step-idx="${idx}">
      <div class="step-num">${idx + 1}</div>
      <div class="step-title">${step.title}</div>
      <div class="step-sub">${step.subtitle}</div>
    </div>
  `).join('');

  const showStep = (idx) => {
    const step = data.pipelineSteps[idx];
    document.querySelectorAll('.pipeline-step-node').forEach((node, i) => {
      node.classList.toggle('active', i === idx);
    });

    if (detailPanel) {
      detailPanel.innerHTML = `
        <div class="pipeline-detail-card glass-panel">
          <div class="detail-header">
            <span class="stage-tag">STAGE ${idx + 1} OF 7 · ANALYTICS LIFECYCLE</span>
            <h3 class="detail-title">${step.title} — ${step.subtitle}</h3>
          </div>
          <p class="detail-desc">${step.desc}</p>
          <div class="detail-skills">
            <strong style="color: #fff; font-size: 0.9rem; margin-bottom: 0.6rem; display: block;">Applied Competencies:</strong>
            <div class="tags-group">
              ${step.skills.map(s => `<span class="badge-tag active">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }
  };

  showStep(0);

  container.addEventListener('click', (e) => {
    const node = e.target.closest('.pipeline-step-node');
    if (node) {
      const idx = parseInt(node.getAttribute('data-step-idx'), 10);
      showStep(idx);
    }
  });

  container.addEventListener('mouseover', (e) => {
    const node = e.target.closest('.pipeline-step-node');
    if (node) {
      const idx = parseInt(node.getAttribute('data-step-idx'), 10);
      showStep(idx);
    }
  });
}

/* -------------------------------------------------------------------------- */
/* 6. PROJECTS SECTION & INTERACTIVE FILTERING                                */
/* -------------------------------------------------------------------------- */
function renderProjects(data) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = data.projects.map((proj) => `
    <div class="project-3d-card glass-panel tilt-card" data-tilt data-project-id="${proj.id}">
      <div class="project-card-header">
        <div class="project-badge">${proj.category}</div>
        <span class="badge-tag">Verified Project</span>
      </div>

      <h3 class="project-title">${proj.title}</h3>
      <p class="project-subtitle">${proj.subtitle}</p>

      <div class="project-key-result-banner">
        <span class="key-result-label">★ KEY RESULT</span>
        <div class="key-result-text">${proj.keyResult}</div>
      </div>

      <div class="project-kpis-grid">
        ${proj.kpis.map(k => `
          <div class="kpi-mini-card">
            <span class="kpi-val">${k.value}</span>
            <span class="kpi-lbl">${k.label}</span>
          </div>
        `).join('')}
      </div>

      <div class="tags-group" style="margin-bottom: 1.25rem;">
        ${proj.tags.map(t => `<span class="badge-tag">${t}</span>`).join('')}
      </div>

      <div class="project-card-footer">
        <button class="btn btn-primary btn-sm open-case-study" data-project-id="${proj.id}">
          CASE STUDY ↗
        </button>
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm">
          GitHub Code ↗
        </a>
      </div>
    </div>
  `).join('');

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-case-study');
    if (btn) {
      const id = btn.getAttribute('data-project-id');
      const project = data.projects.find(p => p.id === id);
      if (project) openProjectModal(project);
    }
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      document.querySelectorAll('.project-3d-card').forEach(card => {
        const id = card.getAttribute('data-project-id');
        const proj = data.projects.find(p => p.id === id);
        if (filter === 'all' || (proj && proj.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())))) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-case-study-content');
  if (!modal || !content) return;

  const cs = project.caseStudy;

  content.innerHTML = `
    <div class="modal-case-header">
      <div class="modal-tags">
        <span class="badge-tag active">${project.category}</span>
        ${project.tags.map(t => `<span class="badge-tag">${t}</span>`).join('')}
      </div>
      <h2 class="modal-project-title">${project.title}</h2>
      <p class="modal-project-sub">${project.subtitle}</p>

      <div class="project-key-result-banner" style="margin-top: 1rem;">
        <span class="key-result-label">★ QUANTIFIED IMPACT</span>
        <div class="key-result-text" style="font-size: 1.05rem;">${project.keyResult}</div>
      </div>
    </div>

    <div class="modal-body-sections">
      <div class="case-section">
        <h4 class="case-sec-title"><span class="accent-text">01.</span> BUSINESS PROBLEM</h4>
        <p class="case-text">${cs.businessProblem}</p>
      </div>

      <div class="case-section">
        <h4 class="case-sec-title"><span class="accent-text">02.</span> DATASET & STRUCTURE</h4>
        <p class="case-text">${cs.dataset}</p>
      </div>

      <div class="case-section">
        <h4 class="case-sec-title"><span class="accent-text">03.</span> 6-STAGE ANALYTICS WORKFLOW</h4>
        <div class="case-process-timeline">
          ${cs.processSteps.map((p, i) => `
            <div class="timeline-step">
              <div class="step-bullet">${i + 1}</div>
              <div class="step-content">
                <strong>${p.step}</strong>
                <p>${p.detail}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="case-section">
        <h4 class="case-sec-title"><span class="accent-text">04.</span> TOOLS USED</h4>
        <div class="tags-group">
          ${cs.tools.map(tool => `<span class="badge-tag active">${tool}</span>`).join('')}
        </div>
      </div>

      <div class="case-section">
        <h4 class="case-sec-title"><span class="accent-text">05.</span> KEY QUANTITATIVE INSIGHTS</h4>
        <ul class="case-insights-list">
          ${cs.keyInsights.map(ins => `
            <li>
              <span class="insight-bullet">▸</span>
              <span>${ins}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="case-section impact-box">
        <h4 class="case-sec-title"><span class="accent-text">06.</span> BUSINESS IMPACT & DECISION</h4>
        <p class="case-text">${cs.businessImpact}</p>
      </div>

      <div class="modal-footer-actions">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          VIEW CODE ON GITHUB ↗
        </a>
        <button class="btn btn-ghost close-modal-btn">CLOSE CASE STUDY</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function initModalListeners() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop') || e.target.classList.contains('close-modal-btn') || e.target.closest('.modal-close-x')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------------------- */
/* 7. RESUME MODAL VIEWER                                                     */
/* -------------------------------------------------------------------------- */
function initResumeModal() {
  const previewBtn = document.getElementById('hero-preview-resume-btn');
  const aboutResumeBtn = document.getElementById('about-open-resume-btn');
  const modal = document.getElementById('resume-modal');
  if (!modal) return;

  const openResume = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeResume = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (previewBtn) previewBtn.addEventListener('click', openResume);
  if (aboutResumeBtn) aboutResumeBtn.addEventListener('click', openResume);

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop') || e.target.classList.contains('close-resume-modal-btn')) {
      closeResume();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeResume();
    }
  });
}

/* -------------------------------------------------------------------------- */
/* 8. EXPERIENCE SECTION                                                      */
/* -------------------------------------------------------------------------- */
function renderExperience(data) {
  const container = document.getElementById('experience-timeline-container');
  if (!container) return;

  container.innerHTML = data.experience.map((exp) => `
    <div class="timeline-entry">
      <div class="timeline-node-pin"></div>
      <div class="timeline-card glass-panel tilt-card" data-tilt>
        <div class="entry-header">
          <div>
            <h3 class="entry-role">${exp.role}</h3>
            <div class="entry-org">${exp.organization} · <span class="accent-text">${exp.location}</span></div>
          </div>
          <div class="entry-period">${exp.period}</div>
        </div>
        <ul class="entry-points">
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="tags-group">
          ${exp.technologies.map(t => `<span class="badge-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* -------------------------------------------------------------------------- */
/* 9. GITHUB STATS                                                            */
/* -------------------------------------------------------------------------- */
function renderGithubStats(data) {
  const stats = data.github.verifiedStats;
  const reposEl = document.getElementById('gh-stat-repos');
  const starsEl = document.getElementById('gh-stat-stars');
  const followersEl = document.getElementById('gh-stat-followers');
  const langContainer = document.getElementById('gh-languages-breakdown');

  if (reposEl) reposEl.textContent = stats.publicRepos;
  if (starsEl) starsEl.textContent = stats.stars;
  if (followersEl) followersEl.textContent = stats.followers;

  if (langContainer) {
    langContainer.innerHTML = stats.topLanguages.map(l => `
      <div class="lang-row">
        <div class="lang-header">
          <div>
            <span class="lang-dot" style="background-color: ${l.color};"></span>
            <span class="lang-name">${l.name}</span>
          </div>
          <span class="lang-pct" style="color: #fff; font-weight: 600;">${l.percentage}%</span>
        </div>
        <div class="lang-bar-track">
          <div class="lang-bar-fill" style="width: ${l.percentage}%; background-color: ${l.color};"></div>
        </div>
      </div>
    `).join('');
  }

  fetch(`https://api.github.com/users/${data.github.username}`)
    .then(res => res.json())
    .then(apiData => {
      if (apiData.public_repos !== undefined && reposEl) reposEl.textContent = apiData.public_repos;
      if (apiData.followers !== undefined && followersEl) followersEl.textContent = apiData.followers;
    })
    .catch(() => {});
}

/* -------------------------------------------------------------------------- */
/* 10. CONTACT SECTION & ACTIONS                                              */
/* -------------------------------------------------------------------------- */
function renderContact(data) {
  const profile = data.profile;
  const emailLink = document.getElementById('contact-email-link');
  const phoneLink = document.getElementById('contact-phone-link');
  const githubLink = document.getElementById('contact-github-link');
  const linkedinLink = document.getElementById('contact-linkedin-link');

  if (emailLink) {
    emailLink.href = `mailto:${profile.email}`;
    const span = emailLink.querySelector('span');
    if (span) span.textContent = profile.email;
  }
  if (phoneLink && profile.phone) {
    phoneLink.href = `tel:${profile.phone.replace(/[^0-9+]/g, '')}`;
    const span = phoneLink.querySelector('span');
    if (span) span.textContent = profile.phone;
  }
  if (githubLink) githubLink.href = profile.githubUrl;
  if (linkedinLink) linkedinLink.href = profile.linkedinUrl;

  const form = document.getElementById('quick-inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const sender = document.getElementById('inquiry-name').value || 'Recruiter / Hiring Team';
      const company = document.getElementById('inquiry-company').value || 'Analytics Team';
      const topic = document.getElementById('inquiry-topic').value || 'Data Analyst Role Discussion';
      const msg = document.getElementById('inquiry-message').value || '';

      const subject = encodeURIComponent(`[Data Analyst Inquiry] ${topic} — ${sender} (${company})`);
      const body = encodeURIComponent(`Hi Mukteswar,\n\nName: ${sender}\nCompany: ${company}\nTopic: ${topic}\n\nMessage:\n${msg}\n\nLooking forward to speaking with you!`);

      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    });
  }
}

/* -------------------------------------------------------------------------- */
/* 11. 3D TILT EFFECT                                                         */
/* -------------------------------------------------------------------------- */
function initTiltEffects() {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  const cards = document.querySelectorAll('[data-tilt]');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 12. SCROLL SPY                                                             */
/* -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navbar = document.getElementById('main-navbar');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let activeId = '';
    const atBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 80);

    if (atBottom) {
      activeId = 'contact';
    } else {
      sections.forEach(current => {
        const sectionTop = current.offsetTop - 160;
        const sectionHeight = current.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          activeId = current.getAttribute('id');
        }
      });
    }

    [...desktopLinks, ...mobileLinks].forEach(link => {
      const target = link.getAttribute('href')?.replace('#', '');
      link.classList.toggle('active', target === activeId);
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 13. MOBILE MENU                                                            */
/* -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-menu-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  drawer.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', false);
    }
  });
}

/* -------------------------------------------------------------------------- */
/* 14. SCROLL REVEAL                                                          */
/* -------------------------------------------------------------------------- */
function initScrollReveal() {
  const elements = document.querySelectorAll('.section-header, .about-highlight-card, .skill-card, .project-3d-card, .timeline-entry');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
  });
}

/* -------------------------------------------------------------------------- */
/* 15. OFFICIAL VECTOR LOGOS FOR TOOLS                                        */
/* -------------------------------------------------------------------------- */
function getToolLogoSvg(name) {
  switch (name) {
    case 'sql':
      return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff2a51" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;
    case 'python':
      return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2"><path d="M12 2C6.48 2 6 3.5 6 5v2h6v1H4C2.5 8 2 9.5 2 12s.5 4 2 4h2v-2c0-1.5 1-2.5 2.5-2.5h5c1.5 0 2.5-1 2.5-2.5V5c0-1.5-1.5-3-6-3zm-2 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"></path><path d="M12 22c5.52 0 6-1.5 6-3v-2h-6v-1h8c1.5 0 2-1.5 2-4s-.5-4-2-4h-2v2c0 1.5-1 2.5-2.5 2.5h-5c-1.5 0-2.5 1-2.5 2.5V19c0 1.5 1.5 3 6 3zm2-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>`;
    case 'powerbi':
      return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff2a51" stroke-width="2"><rect x="3" y="12" width="4" height="9" rx="1"></rect><rect x="10" y="7" width="4" height="14" rx="1"></rect><rect x="17" y="3" width="4" height="18" rx="1"></rect></svg>`;
    case 'tableau':
      return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2"><path d="M12 2v20M2 12h20M7 7v10M17 7v10M7 7h10M7 17h10"></path></svg>`;
    case 'excel':
      return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff4d6d" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 8l8 8M16 8l-8 8"></path></svg>`;
    default:
      return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff2a51" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`;
  }
}
