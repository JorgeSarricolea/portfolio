const comparativeFeatures = {
  features: [
    {
      name: "Landing Page",
      values: {
        core: { type: "check" },
        flow: { type: "check" },
        market: { type: "check" },
        orbit: { type: "check" },
      },
    },
    {
      name: "Chatbot",
      values: {
        core: { type: "text", value: "Básico" },
        flow: { type: "text", value: "Básico" },
        market: { type: "text", value: "Avanzado" },
        orbit: { type: "text", value: "Avanzado" },
      },
    },
    {
      name: "Hosting y Dominio",
      values: {
        core: { type: "check" },
        flow: { type: "check" },
        market: { type: "check" },
        orbit: { type: "check" },
      },
    },
    {
      name: "Sistema de Agendamiento",
      values: {
        core: { type: "minus" },
        flow: { type: "check" },
        market: { type: "check" },
        orbit: { type: "check" },
      },
    },
    {
      name: "E-commerce",
      values: {
        core: { type: "minus" },
        flow: { type: "minus" },
        market: { type: "text", value: "Hasta 20 productos" },
        orbit: { type: "text", value: "Ilimitado" },
      },
    },
    {
      name: "Panel de Gestión",
      values: {
        core: { type: "minus" },
        flow: { type: "text", value: "Básico" },
        market: { type: "text", value: "Avanzado" },
        orbit: { type: "text", value: "Completo" },
      },
    },
    {
      name: "Acceso Multiusuario",
      values: {
        core: { type: "minus" },
        flow: { type: "minus" },
        market: { type: "minus" },
        orbit: { type: "check" },
      },
    },
  ],
};

export default comparativeFeatures;
