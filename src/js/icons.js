const baseUrl = "../../public/icons/";
const icons = [
  { url: "reactjs-icon.png", state: false },
  { url: "astro-icon.png", state: false },
  { url: "nodejs-icon.png", state: false },
  { url: "html-icon.png", state: false },
  { url: "css-icon.png", state: false },
  { url: "javascript-icon.png", state: false },
  { url: "typescript-icon.png", state: false },
  { url: "mysql-icon.png", state: false },
  { url: "express-icon.png", state: false },
  { url: "nextjs-icon.png", state: false },
  { url: "jquery-icon.png", state: false },
  { url: "php-icon.png", state: false },
  { url: "python-icon.png", state: false },
  { url: "java-icon.png", state: false },
  { url: "jest-icon.png", state: false },
  { url: "vscode-icon.png", state: false },
  { url: "postman-icon.png", state: false },
  { url: "git-icon.png", state: false },
  { url: "tailwindcss-icon.png", state: false },
  { url: "figma-icon.png", state: false },
  { url: "boostrap-icon.png", state: false },
  { url: "photoshop-icon.png", state: false },
  { url: "premiere-icon.png", state: false },
  { url: "illustrator-icon.png", state: false },
  { url: "notion-icon.png", state: false },
  { url: "miro-icon.png", state: false },
  { url: "trello-icon.png", state: false },
  { url: "bubbleio-icon.png", state: false },
];

// Add the baseUrl for all icons
icons.forEach((icon) => {
  icon.url = baseUrl + icon.url;
});

export default icons;
