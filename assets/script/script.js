// Navbar dinâmica ao rolar a página
let navbar = document.querySelector('#header');

document.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;

  if (scrollTop > 200) {
    navbar.classList.add('rolar');
  } else {
    navbar.classList.remove('rolar');
  }
});

// ==============================
// Carrossel de Páginas do Sistema
// ==============================
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);


