const baseUrl = "../icons/";

const icons = [
  {
    url: "javascript-icon.png",
    state: false,
    alt: "JavaScript Icon",
  },
  {
    url: "reactjs-icon.png",
    state: false,
    alt: "ReactJS Icon",
  },
  {
    url: "astro-icon.png",
    state: false,
    alt: "Astro Icon",
  },
  {
    url: "tailwindcss-icon.png",
    state: false,
    alt: "Tailwind Icon",
  },
  {
    url: "nodejs-icon.png",
    state: false,
    alt: "NodeJS Icon",
  },
  {
    url: "express-icon.png",
    state: false,
    alt: "ExpressJS Icon",
  },
  {
    url: "prisma-icon.png",
    state: false,
    alt: "Prisma Icon",
  },
  {
    url: "aws-icon.png",
    state: false,
    alt: "AWS Icon",
  },
  {
    url: "python-icon.png",
    state: false,
    alt: "Python Icon",
  },
  {
    url: "django-icon.png",
    state: false,
    alt: "Django Icon",
  },
  {
    url: "mysql-icon.png",
    state: false,
    alt: "MySQL Icon",
  },
  {
    url: "postgresql-icon.png",
    state: false,
    alt: "PostgreSQL Icon",
  },
  {
    url: "nextjs-icon.png",
    state: false,
    alt: "NextJS Icon",
  },
  {
    url: "typescript-icon.png",
    state: false,
    alt: "TypeScript Icon",
  },
  { url: "git-icon.png", state: false, alt: "Git Icon" },
  {
    url: "postman-icon.png",
    state: false,
    alt: "Postman Icon",
  },
  {
    url: "vscode-icon.png",
    state: false,
    alt: "VSCode Icon",
  },
  {
    url: "jest-icon.png",
    state: false,
    alt: "Jest Icon",
  },
  { url: "php-icon.png", state: false, alt: "PHP Icon" },
  {
    url: "java-icon.png",
    state: false,
    alt: "Java Icon",
  },
  {
    url: "swagger-icon.png",
    state: false,
    alt: "Swagger Icon",
  },
];

// Add the baseUrl for all icons
icons.forEach((icon) => {
  icon.url = baseUrl + icon.url;
});

export default icons;
