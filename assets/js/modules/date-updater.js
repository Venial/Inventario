// Mostrar fecha actual
function updateDate() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires",
  };
  document.getElementById("current-date").textContent = now.toLocaleDateString(
    "es-AR",
    options
  );
}
updateDate();
setInterval(updateDate, 60000); // Actualizar cada minuto
