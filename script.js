// Scroll-in animation
const scrollElements = document.querySelectorAll('.scroll-in');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.style.opacity = 1;
  element.style.transform = 'translateY(0)';
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', handleScrollAnimation);

// CTA subtle animation on scroll
const cta = document.querySelector('.cta-scroll');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.animation = 'softPulse 4s infinite';
    }
  });
});
observer.observe(cta);

// Form placeholder
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you. Your consultation request has been received.");
});
