const baseUrl = "../../public/img/";

// Object that maps image IDs to their relative URLs
const imageUrls = {
  hero: "photo_plantsNoBG.png",
};

// Function to apply full URL to each image
function applyImageUrls() {
  Object.keys(imageUrls).forEach((id) => {
    const imageElement = document.getElementById(id);
    if (imageElement) {
      const relativeUrl = imageUrls[id];
      imageElement.src = baseUrl + relativeUrl;
    } else {
      console.error(`Element with ID '${id}' not found.`);
    }
  });
}

applyImageUrls();
