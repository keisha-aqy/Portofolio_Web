document.addEventListener("DOMContentLoaded", () => {

  /* ============================================================
     TYPING EFFECT
  ============================================================ */

  const texts = [
    "Threat Hunter",
    "SOC Analyst",
    "Blue Team Defender",
    "Incident Responder",
    "Security Monitoring"
  ];

  let count = 0;
  let index = 0;

  (function type() {

    if (count === texts.length) count = 0;

    const currentText = texts[count];
    const letter = currentText.slice(0, ++index);

    document.getElementById("typed-text").textContent = letter;

    if (letter.length === currentText.length) {

      setTimeout(() => {
        index = 0;
        count++;
        type();
      }, 1800);

    } else {

      setTimeout(type, 100);

    }

  })();


  /* ============================================================
     MOBILE NAVBAR
  ============================================================ */

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }


  /* ============================================================
     FADE ANIMATION
  ============================================================ */

  const cards = document.querySelectorAll(
    ".card, .project-card, .timeline-item, .stat-card"
  );

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }

    });

  }, {
    threshold: 0.2
  });

  cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";

    observer.observe(card);

  });


  /* ============================================================
     EMAILJS
  ============================================================ */

  if (typeof emailjs === "undefined") {
    console.error("EmailJS belum dimuat.");
    return;
  }

  emailjs.init("jFhFa0MX035yi3OGF");

  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const formStatus = document.getElementById("formStatus");

  if (!form) return;

  function setStatus(message, type) {

    formStatus.textContent = message;
    formStatus.className = "form-status " + type;
    formStatus.style.display = "block";

  }

  function resetButton() {

    submitBtn.disabled = false;
    btnText.textContent = "Kirim Pesan";

  }

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = form.from_name.value.trim();
    const email = form.from_email.value.trim();
    const message = form.message.value.trim();

    if (!name) {
      setStatus("⚠ Nama tidak boleh kosong.", "error");
      form.from_name.focus();
      return;
    }

    if (!email) {
      setStatus("⚠ Email tidak boleh kosong.", "error");
      form.from_email.focus();
      return;
    }

    if (!message) {
      setStatus("⚠ Pesan tidak boleh kosong.", "error");
      form.message.focus();
      return;
    }

    submitBtn.disabled = true;
    btnText.textContent = "Mengirim...";
    formStatus.style.display = "none";

    try {

      const response = await emailjs.sendForm(
        "service_80718gu",
        "template_qqe2x98",
        form
      );

      console.log(response);

      setStatus(
        "✓ Pesan berhasil dikirim! Saya akan segera membalas.",
        "success"
      );

      form.reset();

    } catch (err) {

      console.error(err);

      setStatus(
        `✗ Gagal mengirim (${err.status || ""} ${err.text || ""})`,
        "error"
      );

    } finally {

      resetButton();

    }

  });

});