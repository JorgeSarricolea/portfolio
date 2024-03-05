const baseUrl = "https://jorgesarricolea.com/img/";

// Array of objects that map image IDs to their relative URLs
const images = [
  {
    id: "hero",
    url: "photo_plantsNoBG.png",
    alt: "Picture of Jorge Sarricolea",
  },
  {
    id: "cv-picture",
    url: "photo_plantsNoBG.png",
    alt: "Picture of Jorge Sarricolea",
  },
  {
    id: "cv-picture-mobile",
    url: "info-photo.png",
    alt: "Picture of Jorge Sarricolea",
  },
];

// Function to apply full URL to each image
function applyimages() {
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

applyimages();
