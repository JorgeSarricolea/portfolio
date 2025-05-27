const pricing = {
  plans: [
    {
      id: "core",
      name: "Plan Core",
      tagline: "Tu Presencia Online",
      oneTimePrice: 3500,
      monthlyPrice: 490,
      yearlyPrice: 4900,
      yearlyPricePerMonth: 399,
      features: [
        "Landing page personalizada",
        "Chatbot básico",
        "Hosting y dominio",
        "Certificado SSL",
        "Soporte técnico básico",
      ],
      whatsappMessage:
        "¡Hola Jorge! Me interesa el Plan Core para mi proyecto. Me gustaría obtener más información sobre la landing page y los servicios incluidos.",
    },
    {
      id: "flow",
      name: "Plan Flow",
      tagline: "Agenda sin Estrés",
      oneTimePrice: 6500,
      monthlyPrice: 890,
      yearlyPrice: 9900,
      yearlyPricePerMonth: 639,
      features: [
        "Todo lo de Core +",
        "Integración Calendar",
        "Sistema de agendamiento",
        "Confirmaciones por email",
        "Dashboard básico",
      ],
      whatsappMessage:
        "¡Hola Jorge! Me interesa el Plan Flow. Me gustaría saber más sobre el sistema de agendamiento y cómo podría implementarlo en mi negocio.",
    },
    {
      id: "market",
      name: "Plan Market",
      tagline: "Comienza a Vender",
      oneTimePrice: 11000,
      monthlyPrice: 1490,
      yearlyPrice: 15900,
      yearlyPricePerMonth: 799,
      isPopular: true,
      features: [
        "Todo lo de Flow +",
        "Tienda en línea básica",
        "Hasta 20 productos",
        "Carrito de compras",
        "Procesamiento de pagos",
      ],
      whatsappMessage:
        "¡Hola Jorge! Me interesa el Plan Market para implementar mi tienda en línea. Me gustaría conocer más detalles sobre el procesamiento de pagos y la gestión de productos.",
    },
    {
      id: "orbit",
      name: "Plan Orbit",
      tagline: "Escala tu Negocio",
      oneTimePrice: 18000,
      monthlyPrice: 2300,
      yearlyPrice: 25000,
      yearlyPricePerMonth: 959,
      features: [
        "Todo lo de Market +",
        "Panel de gestión completo",
        "Acceso multiusuario",
        "Productos ilimitados",
        "Soporte prioritario",
      ],
      whatsappMessage:
        "¡Hola Jorge! Me interesa el Plan Orbit para escalar mi negocio. Me gustaría saber más sobre el panel de gestión completo y las características avanzadas.",
    },
  ],
  addons: [
    {
      title: "Optimización SEO",
      description:
        "Configuración inicial para mejor posicionamiento en buscadores",
    },
    {
      title: "Capacitación",
      description: "Sesiones de entrenamiento para gestión de plataformas",
    },
    {
      title: "Branding Visual",
      description: "Diseño de logo básico y manual de identidad rápida",
    },
  ],
  contact: {
    title: "¿Necesitas un plan personalizado?",
    description: "Contáctame para crear una solución a la medida de tu negocio",
    buttonText: "Contactar",
    whatsappMessage:
      "¡Hola Jorge! Me gustaría obtener información sobre un plan personalizado para mi proyecto. ¿Podríamos discutir las opciones disponibles?",
  },
};

export default pricing;
