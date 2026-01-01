// ===== Testimonial Carousel =====
const testimonials = document.querySelectorAll('#testimonial-carousel blockquote');
let testimonialIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'block' : 'none';
    testimonial.style.opacity = i === index ? 1 : 0;
  });
}

showTestimonial(testimonialIndex);

setInterval(() => {
  testimonials[testimonialIndex].style.opacity = 0;
  setTimeout(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
  }, 500);
}, 5000);

// ===== Values Carousel =====
const carousel = document.querySelector('.values-carousel');
const cards = Array.from(carousel.children);
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Calculate scroll amount dynamically
function getScrollAmount() {
  return cards[0].offsetWidth + parseInt(getComputedStyle(carousel).gap);
}

// Show next card
nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});

// Show previous card
prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});

// Auto-scroll every 4 seconds
setInterval(() => {
  carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
}, 4000);

// Touch support for swipe
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  carousel.classList.add('dragging');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  carousel.classList.remove('dragging');
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  carousel.classList.remove('dragging');
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // scroll-fast
  carousel.scrollLeft = scrollLeft - walk;
});

