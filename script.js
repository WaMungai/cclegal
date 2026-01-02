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

function initCarousel(wrapperSelector) {
  const wrapper = document.querySelector(wrapperSelector);
  const carousel = wrapper.querySelector('.values-carousel, .testimonial-carousel');
  const prevBtn = wrapper.querySelector('.prev-btn');
  const nextBtn = wrapper.querySelector('.next-btn');
  const dotsContainer = wrapper.querySelector('.carousel-dots');
  const items = carousel.querySelectorAll('blockquote');

  let currentIndex = 0;

  // Create dots
  items.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
    dot.addEventListener('click', () => {
      currentIndex = i;
      update();
    });
  });

  const dots = dotsContainer.querySelectorAll('span');

  function update() {
    const scrollWidth = items[0].offsetWidth + 32;
    carousel.scrollTo({ left: scrollWidth * currentIndex, behavior: 'smooth' });
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    update();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    update();
  });
}

/* Init both */
initCarousel('#testimonials');
initCarousel('#values');


