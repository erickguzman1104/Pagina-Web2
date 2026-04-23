// ===== Año dinámico =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Header sombra al hacer scroll =====
const header = document.getElementById('header');
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
    scrollTopBtn.classList.add('show');
  } else {
    header.classList.remove('scrolled');
    scrollTopBtn.classList.remove('show');
  }
});

// ===== Menú móvil =====
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

function toggleMenu(open) {
  const isOpen = open ?? !nav.classList.contains('open');
  nav.classList.toggle('open', isOpen);
  overlay.classList.toggle('show', isOpen);
  navToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

navToggle.addEventListener('click', () => toggleMenu());
overlay.addEventListener('click', () => toggleMenu(false));
document.querySelectorAll('.nav__link').forEach(link =>
  link.addEventListener('click', () => toggleMenu(false))
);

// ===== Scroll suave al inicio =====
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Enlace activo según sección =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

// ===== Animación fade-in al entrar en viewport =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service, .gallery__item, .about__img, .about__text, .contact__card, .section__head')
  .forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

// ===== Formulario de contacto =====
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = form.nombre.value.trim();
  const telefono = form.telefono.value.trim();
  const email = form.email.value.trim();
  const servicio = form.servicio.value;
  const mensaje = form.mensaje.value.trim();

  if (!nombre || !telefono || !mensaje) {
    note.textContent = 'Por favor completa los campos obligatorios (*).';
    note.className = 'form__note error';
    return;
  }

  // Construir mensaje para WhatsApp
  const texto =
    `*Nueva solicitud de cotización*%0A` +
    `*Nombre:* ${encodeURIComponent(nombre)}%0A` +
    `*Teléfono:* ${encodeURIComponent(telefono)}%0A` +
    (email ? `*Correo:* ${encodeURIComponent(email)}%0A` : '') +
    (servicio ? `*Servicio:* ${encodeURIComponent(servicio)}%0A` : '') +
    `*Mensaje:* ${encodeURIComponent(mensaje)}`;

  const whatsappURL = `https://wa.me/18293195912?text=${texto}`;

  note.textContent = '¡Gracias! Te estamos redirigiendo a WhatsApp para completar tu solicitud...';
  note.className = 'form__note success';

  setTimeout(() => {
    window.open(whatsappURL, '_blank');
    form.reset();
  }, 900);
});
