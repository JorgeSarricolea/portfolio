// Función para inicializar la matriz
function initMatrix() {
  const canvas = document.getElementById("matrixCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Configurar el canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Configuración de la lluvia
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = new Array(columns)
    .fill(0)
    .map(() => Math.floor(Math.random() * -20));

  // Caracteres para la lluvia
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";

  let animationFrameId;
  const startTime = Date.now();

  function draw() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    if (elapsedTime >= 3000) {
      cancelAnimationFrame(animationFrameId);
      const loader = document.getElementById("matrix-loader");
      if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
          if (loader) loader.style.display = "none";
        }, 500);
      }
      return;
    }

    // Fondo semi-transparente para el efecto de rastro
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Color y estilo del texto
    ctx.fillStyle = "rgb(var(--accent))";
    ctx.font = `${fontSize}px monospace`;

    // Dibujar los caracteres
    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      // Mover la gota
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  // Iniciar la animación
  draw();
}

// Iniciar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMatrix);
} else {
  initMatrix();
}
