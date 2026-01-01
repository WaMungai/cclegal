// Scroll-in for cards (Why Us / Services)
const scrollCards = document.querySelectorAll('.card');

scrollCards.forEach((el,i) => {
  setTimeout(()=> el.classList.add('visible'), i*150);
});

// Testimonials carousel
let testimonials = document.querySelectorAll('.testimonial-carousel .testimonial');
let currentTestimonial = 0;

function showTestimonial(index){
  testimonials.forEach((t,i)=> t.classList.remove('active'));
  testimonials[index].classList.add('active');
}

// Show first
showTestimonial(currentTestimonial);

// Auto rotate every 5s
let testimonialInterval = setInterval(()=>{
  currentTestimonial = (currentTestimonial +1) % testimonials.length;
  showTestimonial(currentTestimonial);
},5000);

// Pause on hover
const carouselContainer = document.querySelector('.testimonial-carousel');
carouselContainer.addEventListener('mouseenter', ()=> clearInterval(testimonialInterval));
carouselContainer.addEventListener('mouseleave', ()=>{
  testimonialInterval = setInterval(()=>{
    currentTestimonial = (currentTestimonial +1) % testimonials.length;
    showTestimonial(currentTestimonial);
  },5000);
});
