/* ── 1. NAVBAR: shadow on scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── 2. HAMBURGER MENU ── */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Tutup mobile menu saat link diklik
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ── 3. MARQUEE TOOLS ── */
const tools = [
  {
    name: 'HTML5',
    svg: `<svg viewBox="0 0 24 24" fill="#E34F26" width="16" height="16">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718
            10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81
            -.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
          </svg>`
  },
  {
    name: 'CSS3',
    svg: `<svg viewBox="0 0 24 24" fill="#1572B6" width="16" height="16">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41
            4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804
            -2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"/>
          </svg>`
  },
  {
    name: 'JavaScript',
    svg: `<svg viewBox="0 0 24 24" width="16" height="16">
            <rect width="24" height="24" fill="#F7DF1E" rx="2"/>
            <path d="M6.235 7.4h2.46v6.613c0 2.11 1.29 2.88 2.75 2.88 1.21 0 2.17-.46
            2.81-1.32l1.67 1.58c-1.02 1.29-2.57 2.01-4.49 2.01-2.76 0-5.2-1.47-5.2-5.17V7.4zm
            8.94 0h2.46v9.58h-2.46V7.4z" fill="#000"/>
          </svg>`
  },
  {
    name: 'Supabase',
    svg: `<svg viewBox="0 0 24 24" fill="#3ECF8E" width="16" height="16">
            <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.101 12.829.672
            14 1.672 14H11V22.9c.015.987 1.26 1.41 1.875.637l9.262-11.649c.663-.78.092-1.95
            -.907-1.95H13l-.1-8.902z"/>
          </svg>`
  },
  {
    name: 'EmailJS',
    svg: `<svg viewBox="0 0 24 24" width="16" height="16">
            <circle cx="12" cy="12" r="10" fill="#F6C915"/>
            <path d="M7 9l5 3 5-3M7 12l5 3 5-3" stroke="#000" stroke-width="1.2" fill="none"/>
          </svg>`
  },
  {
    name: 'Git',
    svg: `<svg viewBox="0 0 24 24" fill="#F05032" width="16" height="16">
            <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838
            1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 11-1.105 1.04l-2.48-2.48v6.522a1.84 1.84
            0 01.48 3.604 1.84 1.84 0 01-2.29-1.807 1.84 1.84 0 011.07-1.668V8.764a1.84 1.84 0
            01-1-2.454L8.394 3.61.452 11.55a1.55 1.55 0 000 2.188l10.478 10.478a1.55 1.55 0
            002.188 0l10.43-10.428a1.55 1.55 0 000-2.187z"/>
          </svg>`
  },
  {
    name: 'GitHub',
    svg: `<svg viewBox="0 0 24 24" fill="#fff" width="16" height="16">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682
            -.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454
            -1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531
            1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555
            -1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0
            .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296
            2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0
            3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747
            0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>`
  },
  {
    name: 'REST API',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="1.5" width="16" height="16">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a14.5 14.5 0 010 20M2 12h20"/>
          </svg>`
  },
];

const marqueeTrack = document.getElementById('marqueeTrack');

function buildMarqueeItems() {
  return tools
    .map(t => `<span class="marquee-item">${t.svg}${t.name}<span class="marquee-sep">✦</span></span>`)
    .join('');
}

marqueeTrack.innerHTML = buildMarqueeItems() + buildMarqueeItems();

/* ── 4. ABOUT IMAGE SWITCHER (Blink Effect) ── */
const aboutPhotos = document.querySelectorAll('.about-photo');
let currentPhotoIndex = 0;

function switchPhoto() {
  // Hilangkan kelas active dari foto saat ini
  aboutPhotos[currentPhotoIndex].classList.remove('active');
  
  // Pindah ke foto berikutnya
  currentPhotoIndex = (currentPhotoIndex + 1) % aboutPhotos.length;
  
  // Tambahkan kelas active ke foto berikutnya
  aboutPhotos[currentPhotoIndex].classList.add('active');
}

// Ganti gambar setiap 3 detik
setInterval(switchPhoto, 3000);

/* ── 5. PROJECT FILTER TABS ── */
const filterBtns  = document.querySelectorAll('.tag-btn');
const projectCards = document.querySelectorAll('#projGrid .proj-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.f;
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.t === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ── 6. FADE-UP ON SCROLL (Intersection Observer) ── */
const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

/* ── 7. CONTACT FORM — EmailJS ── */
(function() {
  emailjs.init('jFhFa0MX035yi3OGF'); // Public Key Anda

  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const btnText    = document.getElementById('btnText');
  const formStatus = document.getElementById('formStatus');

  function setStatus(msg, type) {
    formStatus.textContent   = msg;
    formStatus.className     = 'form-status ' + type;
    formStatus.style.display = 'block';
  }

  function resetBtn() {
    submitBtn.disabled = false;
    btnText.textContent = 'Kirim Pesan';
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!form.from_name.value.trim()) {
      setStatus('⚠ Nama tidak boleh kosong.', 'error');
      form.from_name.focus();
      return;
    }
    if (!form.from_email.value.trim()) {
      setStatus('⚠ Email tidak boleh kosong.', 'error');
      form.from_email.focus();
      return;
    }
    if (!form.message.value.trim()) {
      setStatus('⚠ Pesan tidak boleh kosong.', 'error');
      form.message.focus();
      return;
    }

    submitBtn.disabled  = true;
    btnText.textContent = 'Mengirim...';
    formStatus.style.display = 'none';

    try {
      await emailjs.sendForm('service_80718gu', 'template_qqe2x98', form);
      setStatus('✓ Pesan berhasil dikirim! Saya akan segera membalas.', 'success');
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('✗ Gagal mengirim. Coba lagi atau hubungi langsung via email.', 'error');
    } finally {
      resetBtn();
    }
  });
})();
