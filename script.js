// ===================== NAVBAR TOGGLE =====================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});


// ===================== SCROLL-IN ANIMATION =====================
const scrollElements = document.querySelectorAll(".scroll-in");

const elementInView = (el, offset = 150) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => element.classList.add("scrolled");
const hideScrollElement = (element) => element.classList.remove("scrolled");

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 150)) displayScrollElement(el);
    else hideScrollElement(el);
  });
};

window.addEventListener("scroll", handleScrollAnimation);

// Trigger on load
handleScrollAnimation();

// ===================== TESTIMONIAL CAROUSEL =====================
const carousel = document.querySelector('.testimonial-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.carousel-dots');
const testimonials = carousel.querySelectorAll('blockquote');

let currentIndex = 0;

// Create dots
testimonials.forEach((_, i) => {
  const dot = document.createElement('span');
  if(i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel();
  });
});

const dots = dotsContainer.querySelectorAll('span');

function updateCarousel() {
  const scrollWidth = testimonials[0].offsetWidth + 32; // width + gap
  carousel.scrollTo({ left: scrollWidth * currentIndex, behavior: 'smooth' });
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateCarousel();
});


// ===================== VALUES CAROUSEL =====================
const valuesWrapper = document.querySelector(".values-carousel-wrapper");
if (valuesWrapper) {
  const valuesCarousel = valuesWrapper.querySelector(".values-carousel");
  const nextBtn = valuesWrapper.querySelector(".next-btn");
  const prevBtn = valuesWrapper.querySelector(".prev-btn");

  const scrollAmount = 300;

  nextBtn.addEventListener("click", () => {
    valuesCarousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    valuesCarousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
}
