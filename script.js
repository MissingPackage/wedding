function openMap() {
  window.open(
    "https://www.google.com/maps?q=Contrada+Aratico,+Selva+di+Fasano,+Italia",
    "_blank"
  );
}

document
  .getElementById("rsvp-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Grazie per aver confermato la tua presenza!");
  });
