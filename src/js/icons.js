const baseUrl = "../../public/icons/";

const icons = [
  {
    id: "upper-icon",
    url: "reactjs-icon.png",
    state: false,
    alt: "ReactJS Icon",
  },
  {
    id: "middle-icon",
    url: "astro-icon.png",
    state: false,
    alt: "Astro Icon",
  },
  {
    id: "bottom-icon",
    url: "nodejs-icon.png",
    state: false,
    alt: "NodeJS Icon",
  },
  { id: "upper-icon", url: "html-icon.png", state: false, alt: "HTML Icon" },
  { id: "middle-icon", url: "css-icon.png", state: false, alt: "CSS Icon" },
  {
    id: "bottom-icon",
    url: "javascript-icon.png",
    state: false,
    alt: "JavaScript Icon",
  },
  {
    id: "upper-icon",
    url: "typescript-icon.png",
    state: false,
    alt: "TypeScript Icon",
  },
  {
    id: "middle-icon",
    url: "mysql-icon.png",
    state: false,
    alt: "MySQL Icon",
  },
  {
    id: "bottom-icon",
    url: "express-icon.png",
    state: false,
    alt: "ExpressJS Icon",
  },
  {
    id: "upper-icon",
    url: "nextjs-icon.png",
    state: false,
    alt: "NextJS Icon",
  },
  {
    id: "middle-icon",
    url: "jquery-icon.png",
    state: false,
    alt: "jQuery Icon",
  },
  { id: "bottom-icon", url: "php-icon.png", state: false, alt: "PHP Icon" },
  {
    id: "upper-icon",
    url: "python-icon.png",
    state: false,
    alt: "Python Icon",
  },
  {
    id: "middle-icon",
    url: "java-icon.png",
    state: false,
    alt: "Java Icon",
  },
  {
    id: "bottom-icon",
    url: "jest-icon.png",
    state: false,
    alt: "Jest Icon",
  },
  {
    id: "upper-icon",
    url: "vscode-icon.png",
    state: false,
    alt: "VSCode Icon",
  },
  {
    id: "middle-icon",
    url: "postman-icon.png",
    state: false,
    alt: "Postman Icon",
  },
  { id: "bottom-icon", url: "git-icon.png", state: false, alt: "Git Icon" },
  {
    id: "upper-icon",
    url: "tailwindcss-icon.png",
    state: false,
    alt: "Tailwind Icon",
  },
  {
    id: "middle-icon",
    url: "figma-icon.png",
    state: false,
    alt: "Figma Icon",
  },
  {
    id: "bottom-icon",
    url: "boostrap-icon.png",
    state: false,
    alt: "Boostrap Icon",
  },
  {
    id: "upper-icon",
    url: "photoshop-icon.png",
    state: false,
    alt: "ReactJS Icon",
  },
  {
    id: "middle-icon",
    url: "premiere-icon.png",
    state: false,
    alt: "Premiere Icon",
  },
  {
    id: "bottom-icon",
    url: "illustrator-icon.png",
    state: false,
    alt: "Illustrator Icon",
  },
  {
    id: "upper-icon",
    url: "notion-icon.png",
    state: false,
    alt: "Notion Icon",
  },
  {
    id: "middle-icon",
    url: "miro-icon.png",
    state: false,
    alt: "Miro Icon",
  },
  {
    id: "bottom-icon",
    url: "trello-icon.png",
    state: false,
    alt: "Trello Icon",
  },
  {
    id: "upper-icon",
    url: "bubbleio-icon.png",
    state: false,
    alt: "Bubble Icon",
  },
];

// Add the baseUrl for all icons
icons.forEach((icon) => {
  icon.url = baseUrl + icon.url;
});

export default icons;
