var video = document.getElementById('scrollVideo');
var isPlaying = false;

function playVideo() {
  if (!isPlaying) {
    video.play();
    isPlaying = true;
  }
}

function pauseVideo() {
  if (isPlaying) {
    video.pause();
    isPlaying = false;
  }
}

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || window.pageYOffset;

  // You can adjust these values to control when the video starts and stops
  var startScroll = 1000; // Adjust this value to determine when video should start playing
  var stopScroll = 3000; // Adjust this value to determine when video should stop playing

  if (scrollPosition >= startScroll && scrollPosition <= stopScroll) {
    playVideo();
  } else {
    pauseVideo();
  }
});
