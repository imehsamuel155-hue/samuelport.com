// ── THEME TOGGLE ──
  function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.dataset.theme === 'dark';
    html.dataset.theme = isDark ? 'light' : 'dark';
    document.getElementById('themeIcon').textContent = isDark ? '🌙' : '☀️';
    document.getElementById('themeLabel').textContent = isDark ? 'Dark' : 'Light';
  }

  // ── SIDE NAV ──
  function openNav() {
    document.getElementById('sideNav').classList.add('open');
    document.getElementById('navOverlay').classList.add('open');
  }
  function closeNav() {
    document.getElementById('sideNav').classList.remove('open');
    document.getElementById('navOverlay').classList.remove('open');
  }

  // ── SCROLL ANIMATIONS ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up').forEach(el => observer.observe(el));

  // ── PROGRESS BAR ──
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';

    // Back to top button
    const backTop = document.getElementById('backTop');
    if (scrollTop > 400) {
      backTop.classList.add('show');
    } else {
      backTop.classList.remove('show');
    }
  });

  // ── BACK TO TOP ──
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── CONTACT FORM ──
  function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';
    setTimeout(() => {
      btn.textContent = 'Sent! ✓';
      btn.style.background = 'var(--accent2)';
      setTimeout(() => {
        btn.textContent = 'Send Message ↗';
        btn.style.opacity = '1';
        btn.style.background = '';
        e.target.reset();
      }, 3000);
    }, 1200);
  }

  // ── STAGGER PROJECT CARDS on scroll ──
  const cardObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.project-card').forEach(c => cardObs.observe(c));