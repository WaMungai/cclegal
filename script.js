// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('open');
});

// Scroll-in animations
const scrollElements = document.querySelectorAll('.scroll-in');
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset);
};
const displayScrollElement = (element) => { element.classList.add('visible'); };
const handleScrollAnimation = () => {
  scrollElements.forEach(el => { if(elementInView(el,100)) displayScrollElement(el); });
};
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Testimonial carousel
const testimonials = document.querySelectorAll('#testimonial-carousel blockquote');
let index = 0;
setInterval(() => {
  testimonials.forEach((t,i)=>t.style.display='none');
  testimonials[index].style.display='block';
  index = (index+1)%testimonials.length;
},4000);
