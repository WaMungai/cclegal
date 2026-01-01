// Scroll-in for cards (Why Us / Services)
const scrollCards = document.querySelectorAll('.card');

scrollCards.forEach((el,i) => {
  setTimeout(()=> el.classList.add('visible'), i*150);
});

// Testimonials carousel
let testimonials = document.querySelectorAll('.testimonial');
let current = 0;

// Show first testimonial
testimonials[current].classList.add('active');

setInterval(() => {
  testimonials[current].classList.remove('active');
  current = (current + 1) % testimonials.length;
  testimonials[current].classList.add('active');
}, 5000);

