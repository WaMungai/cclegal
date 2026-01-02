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
const testimonialCarousel = document.getElementById("testimonial-carousel");
if (testimonialCarousel) {
  let testimonialIndex = 0;
  const testimonials = testimonialCarousel.querySelectorAll("blockquote");

  const showTestimonial = (index) => {
    testimonials.forEach((block, i) => {
      block.style.display = i === index ? "block" : "none";
    });
  };

  const nextTestimonial = () => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
  };

  const prevTestimonial = () => {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(testimonialIndex);
  };

  // Auto rotate every 6 seconds
  setInterval(nextTestimonial, 6000);

  // Initialize
  showTestimonial(testimonialIndex);
}

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
