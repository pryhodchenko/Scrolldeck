const video = document.getElementById('scrollVideo');
let isScrolling = false;

window.addEventListener('scroll', () => {
  if (!isScrolling) {
    video.play();
    isScrolling = true;
  }

  clearTimeout(video.timer);
  video.timer = setTimeout(() => {
    video.pause();
    isScrolling = false;
  }, 200); // Adjust the delay here if needed
});
