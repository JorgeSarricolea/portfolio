import images from "@/js/objects/images.js";
const baseUrl = "../img/";

// Function to apply full URL to each image
function ApplyImages() {
  images.forEach((item) => {
    const { id, url, alt } = item;
    const imageElement = document.getElementById(id);
    if (imageElement) {
      imageElement.src = baseUrl + url;
      imageElement.alt = alt;
    } else {
      console.error(`Element with ID '${id}' not found.`);
    }
  });
}

ApplyImages();
