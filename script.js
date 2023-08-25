// Define a function to register the scroll behavior for a video within a certain bounding element
const registerVideo = (bound, video) => {
  // Select the bounding element and the video element using the provided selectors
  bound = document.querySelector(bound);
  video = document.querySelector(video);
  
  // Define a function to handle scrolling behavior
  const scrollVideo = () => {
    // Check if the video has a duration
    if (video.duration) {
      // Calculate the distance of the bounding element from the top of the viewport
      const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
      
      // Calculate the raw percentage of how much the user has scrolled within the bounding element
      const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight + 350);
      
      // Clamp the raw percentage between 0 and 1 to ensure it stays within bounds
      const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
      
      // Set the video's current time based on the percentage scrolled
      video.currentTime = video.duration * percentScrolled;
    }
    
    // Request the next animation frame to continue the scrolling behavior
    requestAnimationFrame(scrollVideo);
  };
  
  // Initialize the scrolling behavior by requesting the first animation frame
  requestAnimationFrame(scrollVideo);
};

// Register scroll behavior for the video within the "#reprezent-logo" element
registerVideo("#reprezent-logo", "#reprezent-logo video");

// Register scroll behavior for the video within the "#bound-two" element
registerVideo("#bound-two", "#bound-two video");

// Register scroll behavior for the video within the "#bound-three" element
registerVideo("#bound-three", "#bound-three video");
