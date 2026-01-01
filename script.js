// Scroll-in animation
const scrollElements = document.querySelectorAll('.scroll-in');
const elementInView = (el, dividend=1) => el.getBoundingClientRect().top <= (window.innerHeight)/dividend;
const displayScrollElement = el => { el.style.opacity=1; el.style.transform='translateY(0)'; };
const handleScrollAnimation = () => scrollElements.forEach(el => { if(elementInView(el,1.25)) displayScrollElement(el); });
window.addEventListener('scroll', handleScrollAnimation);

// Hero visible immediately
const hero = document.querySelector('.hero.scroll-in');
hero.style.opacity=1;
hero.style.transform='translateY(0)';

// CTA animation
const cta = document.querySelector('.cta-scroll');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.style.animation = 'softPulse 4s infinite'; });
});
observer.observe(cta);
// Testimonials carousel
let testimonials = document.querySelectorAll('.testimonial-carousel blockquote');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    if (i === index) t.classList.add('active');
  });
}

showTestimonial(currentTestimonial);

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 5000); // change every 5 seconds


// Contact form placeholder
document.querySelector(".contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you. Your consultation request has been received.");
});
