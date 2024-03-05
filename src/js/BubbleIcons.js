import icons from "@/js/icons.js";

document.addEventListener("DOMContentLoaded", function () {
  const bubbles = document.querySelectorAll(".bubble");

  // Initialize the index, interval and click status
  let currentIndex = 0;
  let intervalId;
  let isClickLocked = false;

  // Function to change the bubble image with a fade-in animation
  function changeBubbleAnimation(bubble) {
    bubble.style.opacity = 0;

    setTimeout(() => {
      const currentIcon = icons[currentIndex];
      bubble.src = currentIcon.url;
      bubble.alt = currentIcon.alt || "";
      currentIcon.state = true; // Mark the image as used
      bubble.style.opacity = 1;

      currentIndex = (currentIndex + 1) % icons.length; // Cycle the index
    }, 0);
  }

  // Function to change the image when clicked
  function changeBubbleOnClick(bubble) {
    if (isClickLocked) {
      return; // If the click is blocked, do nothing
    }

    if (intervalId) {
      clearInterval(intervalId); // Clear the interval for automatic changes
    }

    isClickLocked = true; // Lock the click temporarily
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * icons.length);
    } while (icons[randomIndex].state);

    const currentIcon = icons[randomIndex];
    bubble.style.opacity = 0;
    setTimeout(() => {
      bubble.src = currentIcon.url;
      currentIcon.state = true;
      bubble.style.opacity = 1;
      setTimeout(() => {
        isClickLocked = false; // Unlock click after 1.5 second
      }, 1500);
      intervalId = setInterval(() => {
        bubbles.forEach((bubble) => {
          changeBubbleAnimation(bubble);
        });
        icons.forEach((image) => {
          image.state = false;
        });
      }, 2000); // Restart the automatic image change interval
    }, 500);
  }

  // Attach event listeners to each bubble for manual image change
  bubbles.forEach((bubble) => {
    changeBubbleAnimation(bubble);
    bubble.addEventListener("click", () => {
      changeBubbleOnClick(bubble);
    });
  });

  // Set an interval for automatic image changes
  intervalId = setInterval(() => {
    bubbles.forEach((bubble) => {
      changeBubbleAnimation(bubble);
    });
    icons.forEach((image) => {
      image.state = false; // Reset the state of all images
    });
  }, 2000); // Change images every 3 seconds
});
