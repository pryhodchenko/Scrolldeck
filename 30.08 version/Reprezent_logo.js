const html = document.documentElement;
const canvas = document.getElementById("reprezent-logo");
const context = canvas.getContext("2d");

const frameCount = 51;
const currentFrame = index => (
  `Logo_sequence/${index.toString().padStart(4, '0')}.png`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=660;
canvas.height=372;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
    
  const scrollTop = html.scrollTop;
  //console.log("scrollTop:", scrollTop);

  //const maxScrollTop = html.scrollHeight - window.innerHeight; // Original snippet code, too long scroll
  const divLogo = document.querySelector('.logo-container'); // Selecting my container with logo
  const maxScrollTop = divLogo.offsetHeight - img.height;  // Returning my container height + substracting image heigth
  // console.log("MaxscrollTop:", maxScrollTop);
  
  
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()