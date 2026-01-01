// Testimonial Carousel Script
const testimonials = document.querySelectorAll('#testimonial-carousel blockquote');
let currentIndex = 0;

// Function to show the current testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'block' : 'none';
  });
}

// Initial display
showTestimonial(currentIndex);

// Auto-rotate every 5 seconds
setInterval(() => {
  // Fade out current
  testimonials[currentIndex].style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);

    // Fade in next
    testimonials[currentIndex].style.opacity = 1;
  }, 500); // Matches the CSS transition time
}, 5000);
