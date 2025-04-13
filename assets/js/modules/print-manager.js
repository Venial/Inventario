export function setupPrintHandlers(renderFunction) {
  // Antes de imprimir
  window.addEventListener("beforeprint", () => {
    window.printing = true;
    renderFunction();
  });

  // Después de imprimir
  window.addEventListener("afterprint", () => {
    window.printing = false;
    renderFunction();
  });
}
