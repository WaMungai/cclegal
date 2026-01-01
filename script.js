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

let valuesIndex = 0;
const totalCards = cards.length;
const visibleCards = 3;

function getScrollAmount() {
  return cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
}

function updateActiveCard() {
  cards.forEach((card, index) => {
    card.classList.remove('active');
    if (index >= valuesIndex && index < valuesIndex + visibleCards) {
      card.classList.add('active');
    }
  });
}

updateActiveCard();

nextBtn.addEventListener('click', () => {
  valuesIndex = (valuesIndex + 1) % totalCards;
  carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  updateActiveCard();
});

prevBtn.addEventListener('click', () => {
  valuesIndex = (valuesIndex - 1 + totalCards) % totalCards;
  carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  updateActiveCard();
});

setInterval(() => {
  valuesIndex = (valuesIndex + 1) % totalCards;
  carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  updateActiveCard();
}, 4000);
