const whatsappBase = "https://wa.me/529381095593?text=";

export const servicesSlides = [
  { id: "services-hero", label: "Inicio" },
  { id: "services-work", label: "Trabajos" },
  { id: "services-proof", label: "Prueba social" },
  { id: "services-solutions", label: "Soluciones" },
  { id: "services-packages", label: "Paquetes" },
  { id: "services-process", label: "Proceso" },
  { id: "services-faq", label: "FAQ" },
  { id: "services-contact", label: "Contacto" },
];

const servicesPage = {
  hero: {
    eyebrow: "Servicios digitales para tu negocio",
    title: "Tu negocio pierde clientes",
    highlight: "por no tener presencia real",
    description:
      "Landing pages, software a la medida y consultoría para PyMEs y equipos que necesitan resultados claros, sin relleno.",
    primaryCta: "Cotiza tu proyecto",
    secondaryCta: "Ver trabajos",
    secondaryHref: "#services-work",
  },
  stats: [
    { value: "10+", label: "Proyectos entregados" },
    { value: "<24h", label: "Tiempo de respuesta" },
    { value: "30 días", label: "Soporte incluido" },
    { value: "100%", label: "Diseño y código a medida" },
  ],
  showcase: {
    eyebrow: "Proyectos en producción",
    title: "Soluciones reales para problemas reales",
    subtitle: "Cada proyecto nació de una necesidad concreta. Así es como trabajamos.",
    items: [
      {
        category: "Congreso académico",
        title: "ICCBR 2024",
        description:
          "Migración de un sistema legacy de boletos a una plataforma modular para un congreso internacional con inscripción, pagos y operación 24/7.",
        highlights: [
          "Inscripción y cobro con confirmación automática",
          "Panel para sesiones, accesos y reportes",
          "Recibos en PDF y notificaciones por correo",
        ],
        href: "https://iccbr2024.org/",
        cta: "Ver proyecto",
      },
      {
        category: "Fintech",
        title: "Finamate",
        description:
          "Plataforma de finanzas personales construida end-to-end: arquitectura, producto, despliegue y evolución continua.",
        highlights: [
          "Dashboards y flujos orientados al usuario",
          "Arquitectura escalable y mantenible",
          "CI/CD y despliegue en producción",
        ],
        href: "https://finamate.com",
        cta: "Ver proyecto",
      },
    ],
    cta: "Cotiza tu proyecto",
  },
  testimonials: {
    eyebrow: "Testimonios",
    title: "Lo que dicen quienes trabajaron conmigo",
    items: [
      {
        quote:
          "Nos entregaron el sistema de inscripciones a tiempo. El congreso se gestionó sin fricciones gracias a la plataforma.",
        role: "Comité organizador",
        company: "Congreso internacional académico",
      },
      {
        quote:
          "Profesional y rápido. La plataforma quedó lista para operar con los flujos que necesitábamos, sin sorpresas en producción.",
        role: "Equipo de producto",
        company: "Startup fintech",
      },
      {
        quote:
          "Pasamos de procesos manuales a un sistema claro. La comunicación fue directa y los entregables cumplieron el alcance.",
        role: "Stakeholder de negocio",
        company: "Proyecto enterprise — seguros",
      },
    ],
  },
  transformations: {
    eyebrow: "Antes → Después",
    title: "Del caos digital al control",
    items: [
      {
        before: "Tu negocio solo existe en redes sociales",
        after: "Landing profesional con SEO y contacto claro",
      },
      {
        before: "Cobras y das seguimiento por WhatsApp sin control",
        after: "Flujos automáticos de cobro y recordatorios",
      },
      {
        before: "No sabes qué canal te trae clientes",
        after: "Métricas y panel para decidir con datos",
      },
    ],
  },
  solutions: {
    eyebrow: "Soluciones",
    title: "Lo que construyo para tu negocio",
    subtitle: "Tres formas de empezar: presencia web, producto digital o una sesión para definir el camino.",
    items: [
      {
        title: "Presencia digital",
        description:
          "Landing profesional, SEO local, WhatsApp integrado y formulario de contacto. Tu negocio visible para clientes reales.",
        timeline: "Entrega en 1–2 semanas",
        cta: "Me interesa",
        message: "Hola Jorge, me interesa una landing / presencia digital para mi negocio.",
      },
      {
        title: "Software de gestión",
        description:
          "Automatiza lo que hoy haces en Excel y WhatsApp: dashboards, cobros, reportes y paneles de administración.",
        timeline: "A la medida de tu operación",
        cta: "Me interesa",
        message: "Hola Jorge, necesito software de gestión a la medida para mi negocio.",
      },
      {
        title: "Consultoría digital",
        description:
          "¿No sabes por dónde empezar? Analizamos tu caso, definimos alcance y armamos un roadmap accionable.",
        timeline: "Primera sesión sin costo",
        cta: "Me interesa",
        message: "Hola Jorge, me gustaría una sesión de consultoría para definir mi proyecto digital.",
      },
    ],
  },
  packages: {
    eyebrow: "Paquetes",
    title: "Inversión clara desde el inicio",
    subtitle: "Precios transparentes, sin costos ocultos. Cada paquete incluye diseño, desarrollo y puesta en producción.",
    note: "50% al inicio, 50% al entregar · Facturo",
    items: [
      {
        id: "landing",
        label: "Landing Page",
        price: 8000,
        timeline: "Entrega: 1–2 semanas",
        description: "Presencia web profesional que convierte visitantes en clientes.",
        features: [
          "Diseño responsive a medida",
          "SEO local + Google Business",
          "Botón WhatsApp integrado",
          "Formulario de contacto",
          "Certificado SSL + hosting",
          "Dominio propio (.com.mx)",
        ],
        cta: "Cotizar landing page",
        message: "Hola Jorge, quiero cotizar una landing page para mi negocio.",
        popular: false,
      },
      {
        id: "store",
        label: "Tienda online",
        price: 18000,
        timeline: "Entrega: 2–4 semanas",
        description: "Vende en línea con catálogo, cobros y gestión de pedidos.",
        features: [
          "Todo lo de Landing Page",
          "Catálogo de productos",
          "Cobros en línea (Stripe / MercadoPago)",
          "Panel de administración",
          "Notificaciones de pedidos",
          "Métricas de ventas",
        ],
        cta: "Cotizar tienda online",
        message: "Hola Jorge, quiero cotizar una tienda en línea.",
        popular: true,
      },
      {
        id: "custom",
        label: "Software a medida",
        price: 35000,
        priceLabel: "desde",
        timeline: "Entrega: 4–8 semanas",
        description: "Sistema diseñado para tu operación: dashboards, automatización y portales.",
        features: [
          "Análisis de requerimientos",
          "Diseño UX/UI personalizado",
          "Base de datos dedicada",
          "Integraciones (pagos, correo, WhatsApp)",
          "Panel de administración",
          "Documentación y capacitación",
        ],
        cta: "Cotizar software a medida",
        message: "Hola Jorge, necesito cotizar un sistema a la medida.",
        popular: false,
      },
    ],
  },
  process: {
    eyebrow: "Proceso",
    title: "Cómo trabajamos",
    steps: [
      {
        title: "Cuéntanos sobre tu negocio",
        description: "WhatsApp o correo. Compartes qué necesitas y te escuchamos.",
      },
      {
        title: "Recibe una propuesta clara",
        description: "Alcance, tiempos y entregables. Sin letras chiquitas.",
      },
      {
        title: "Te mostramos un demo",
        description: "Prototipo rápido para validar la idea antes de construir en serio.",
      },
      {
        title: "Lo construimos y entregamos",
        description: "Implementación, despliegue y 30 días de soporte incluidos.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Cuánto tarda un proyecto?",
        answer:
          "Una landing suele tardar 1–2 semanas. Tiendas y sistemas a medida dependen del alcance; en la propuesta te damos fechas reales.",
      },
      {
        question: "¿Incluye dominio y hosting?",
        answer:
          "Sí en los paquetes de landing y tienda. En software a medida lo definimos según tu infraestructura.",
      },
      {
        question: "¿Puedo pedir cambios después?",
        answer:
          "Incluyo 30 días de soporte post-entrega. Cambios mayores se cotizan como nueva fase con alcance claro.",
      },
      {
        question: "¿Facturas?",
        answer: "Sí, facturo con datos fiscales en México.",
      },
    ],
  },
  finalCta: {
    title: "¿Listo para que tu negocio tenga presencia real?",
    description: "Platícanos qué vendes, dónde estás y qué te gustaría lograr en internet.",
    whatsappLabel: "WhatsApp",
    emailLabel: "Enviar correo",
    whatsappMessage: "Hola Jorge, me gustaría cotizar un proyecto digital.",
    email: "jjorgesarricolea18@gmail.com",
  },
  whatsappHref(message) {
    return `${whatsappBase}${encodeURIComponent(message)}`;
  },
};

export default servicesPage;
