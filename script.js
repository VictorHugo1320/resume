// Configuración de Tailwind (si necesitas personalizaciones adicionales)
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  }
};

// Animación de entrada para elementos al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
  // Observador para animaciones al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observar todas las secciones
  const sections = document.querySelectorAll('.section-card');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Animación suave para las barras de habilidades
  const skillBars = document.querySelectorAll('.skill-bar');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      }
    });
  }, {
    threshold: 0.5
  });

  skillBars.forEach(bar => {
    skillObserver.observe(bar);
  });
});

// Efecto parallax suave en el fondo
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.animate-pulse-subtle');
  
  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + (index * 0.1);
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});