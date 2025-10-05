// Variables.

const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

// Funciones para cada botón de la calculadora.

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    // Limpiar la pantalla de la calculadora cuando se presiona el botón "c".
    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }

    // Funcionalidad para el botón con id "limpiar".
    if (boton.id === "limpiar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "ERROR"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    // Funcionalidad para el botón con id "igual".
    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "ERROR";
      }
      return;
    }

    // Funcionalidad para la interacción
    if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
});
