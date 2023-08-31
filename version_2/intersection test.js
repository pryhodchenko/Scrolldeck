const element = document.querySelector('.test');
const element1 = document.querySelector('.title');
let isAnimating = false;

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    element.style.opacity = 1;
    if (!isAnimating) {
      element1.style.transition = 'opacity 2s'; // Set transition for delayed entrance
      setTimeout(() => {
        element1.style.opacity = 1;
        isAnimating = true;
      }, 500);
    }
  } else {
    element.style.opacity = 0;
    element1.style.opacity = 0;
    element.style.transition = 'opacity 1s';
    element1.style.transition = 'opacity 1s'; // Remove transition for instant exit
    isAnimating = false;
  }
}, {
  threshold: 0.5 // Adjust this value as needed
});

observer.observe(element);
observer.observe(element1);
