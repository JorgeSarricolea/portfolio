const baseUrl = "../icons/";

const icons = [
  // First ones
  {
    url: "nodejs-icon.png",
    state: false,
    alt: "NodeJS Icon",
    bubbleSize: "smaller",
  },
  {
    url: "aws-icon.png",
    state: false,
    alt: "AWS Icon",
    bubbleSize: "medium",
  },
  {
    url: "reactjs-icon.png",
    state: false,
    alt: "ReactJS Icon",
    bubbleSize: "bigger",
  },

  // Seconds ones
  {
    url: "mysql-icon.png",
    state: false,
    alt: "MySQL Icon",
    bubbleSize: "smaller",
  },
  {
    url: "express-icon.png",
    state: false,
    alt: "ExpressJS Icon",
    bubbleSize: "medium",
  },
  {
    url: "javascript-icon.png",
    state: false,
    alt: "JavaScript Icon",
    bubbleSize: "bigger",
  },

  // Third ones
  {
    url: "tailwindcss-icon.png",
    state: false,
    alt: "Tailwind Icon",
    bubbleSize: "smaller",
  },
  { url: "git-icon.png", state: false, alt: "Git Icon", bubbleSize: "medium" },
  {
    url: "astro-icon.png",
    state: false,
    alt: "Astro Icon",
    bubbleSize: "bigger",
  },

  // Fourth ones
  {
    url: "postgresql-icon.png",
    state: false,
    alt: "PostgreSQL Icon",
    bubbleSize: "smaller",
  },
  {
    url: "nextjs-icon.png",
    state: false,
    alt: "NextJS Icon",
    bubbleSize: "medium",
  },
  {
    url: "typescript-icon.png",
    state: false,
    alt: "TypeScript Icon",
    bubbleSize: "bigger",
  },

  // Fifths ones
  { url: "php-icon.png", state: false, alt: "PHP Icon", bubbleSize: "smaller" },
  {
    url: "java-icon.png",
    state: false,
    alt: "Java Icon",
    bubbleSize: "medium",
  },
  {
    url: "python-icon.png",
    state: false,
    alt: "Python Icon",
    bubbleSize: "bigger",
  },

  // Sixths ones
  {
    url: "postman-icon.png",
    state: false,
    alt: "Postman Icon",
    bubbleSize: "smaller",
  },
  {
    url: "vscode-icon.png",
    state: false,
    alt: "VSCode Icon",
    bubbleSize: "medium",
  },
  {
    url: "jest-icon.png",
    state: false,
    alt: "Jest Icon",
    bubbleSize: "bigger",
  },
];

// Add the baseUrl for all icons
icons.forEach((icon) => {
  icon.url = baseUrl + icon.url;
});

export default icons;
