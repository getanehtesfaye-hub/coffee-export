/* ============================================
   MOBILE NAVIGATION TOGGLE
   ============================================ */
const mobileMenu = document.getElementById('mobile-menu');
const navMenu    = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ============================================
   SMOOTH SCROLL
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

/* ============================================
   NAVBAR — highlight on scroll
   ============================================ */
const navbar   = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    // Slightly darken navbar when scrolled
    navbar.style.background = window.scrollY > 50
        ? 'rgba(5,5,5,0.99)'
        : 'rgba(10,10,10,0.95)';

    // Active link tracking
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

/* ============================================
   SCROLL REVEAL
   FIX: no parallax — just a clean fade-in.
   Parallax was breaking the mobile layout.
   ============================================ */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger cards/skill items slightly
            const delay = entry.target.classList.contains('project-card') ||
                          entry.target.classList.contains('skill-item') ? i * 60 : 0;
            setTimeout(() => {
                entry.target.classList.add('active');
            }, delay);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(
    '.project-card, .skill-item, .stat-item, .about-text p, .contact-info, .contact-form'
).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

/* ============================================
   STAT COUNTER ANIMATION
   ============================================ */
function animateCounter(el, target, suffix) {
    let current = 0;
    const step  = Math.ceil(target / 40);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = current + suffix;
    }, 40);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-number').forEach(el => {
                const raw    = el.textContent.trim();        // e.g. "5+"
                const suffix = raw.replace(/[0-9]/g, '');   // "+"
                const num    = parseInt(raw);
                animateCounter(el, num, suffix);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) statsObserver.observe(aboutStats);

/* ============================================
   SKILL ITEM HOVER — subtle neon pulse
   ============================================ */
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.boxShadow = '0 0 18px rgba(0,255,255,0.35)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = '';
    });
});

/* ============================================
   CONTACT FORM
   FIX: form now has real inputs so this works.
   ============================================ */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name    = contactForm.name.value.trim();
        const email   = contactForm.email.value.trim();
        const subject = contactForm.subject.value.trim();
        const message = contactForm.message.value.trim();

        // Validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOK) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate sending
      // Send to Formspree
const btn = contactForm.querySelector('button[type="submit"]');
btn.textContent = 'Sending…';
btn.disabled = true;

try {
    const res = await fetch('https://formspree.io/f/xaqgzalb', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
    });
    if (res.ok) {
        showNotification('Message sent! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    } else {
        showNotification('Something went wrong. Please try again.', 'error');
    }
} catch {
    showNotification('Something went wrong. Please try again.', 'error');
} finally {
    btn.textContent = 'Send Message';
    btn.disabled = false;
}
    
    });
}

/* ============================================
   NOTIFICATION TOAST
   ============================================ */
function showNotification(message, type = 'info') {
    document.querySelector('.notification')?.remove();

    const colors = {
        success: { bg: 'linear-gradient(135deg,#00cc66,#009944)', glow: 'rgba(0,204,102,0.5)' },
        error:   { bg: 'linear-gradient(135deg,#ff0055,#cc003f)', glow: 'rgba(255,0,85,0.5)'  },
        info:    { bg: 'linear-gradient(135deg,#00FFFF,#00aaaa)', glow: 'rgba(0,255,255,0.5)' },
    };

    const { bg, glow } = colors[type] || colors.info;

    const n = document.createElement('div');
    n.className = 'notification';
    n.textContent = message;
    Object.assign(n.style, {
        position:     'fixed',
        top:          '20px',
        right:        '20px',
        padding:      '14px 20px',
        borderRadius: '10px',
        color:        '#fff',
        fontWeight:   '500',
        fontSize:     '0.9rem',
        zIndex:       '99999',
        maxWidth:     '300px',
        background:   bg,
        boxShadow:    `0 0 20px ${glow}, 0 8px 20px rgba(0,0,0,0.3)`,
        opacity:      '0',
        transform:    'translateX(20px)',
        transition:   'all 0.35s cubic-bezier(0.175,0.885,0.32,1.275)',
    });

    document.body.appendChild(n);

    // Animate in
    requestAnimationFrame(() => {
        n.style.opacity   = '1';
        n.style.transform = 'translateX(0)';
    });

    // Animate out after 3 s
    setTimeout(() => {
        n.style.opacity   = '0';
        n.style.transform = 'translateX(20px)';
        setTimeout(() => n.remove(), 400);
    }, 3000);
}

/* ============================================
   PAGE LOAD — fade in hero
   ============================================ */
window.addEventListener('load', () => {
    document.querySelector('.hero-content')?.classList.add('active');
    document.querySelector('.hero-image')?.classList.add('active');
});