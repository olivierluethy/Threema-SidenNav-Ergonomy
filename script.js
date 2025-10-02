// Erstelle den Burger-Menü-Button
const button = document.createElement("button");
button.innerHTML = "&#9776;"; // Unicode für Burger-Menü-Symbol
button.style.backgroundColor = "#007BFF";
button.style.color = "white";
button.style.padding = "8px 16px";
button.style.border = "none";
button.style.borderRadius = "4px";
button.style.cursor = "pointer";
button.style.fontSize = "20px";
button.style.transition = "transform 0.2s, background-color 0.2s";

// Das linke Navigationspanel und rechter Bereich
let leftNavPanel = document.getElementById("navigation");
let rightWhiteSpace = document.getElementById("detail");

// Hover-Animation
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#0056b3";
  button.style.transform = "scale(1.05)";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#007BFF";
  button.style.transform = "scale(1)";
});

// Klick-Event für sofortige DOM-Änderung
button.addEventListener("click", () => {
  if (leftNavPanel.style.display == "flex") {
    leftNavPanel.style.display = "flex";
    rightWhiteSpace.style.maxWidth = "70%";
    console.log("Second Move");
  } else {
    // Scheiteret aber immer am first move weil er display flex im leftNavPanel nicht korrekt abfragen kann
    leftNavPanel.style.display = "none";
    rightWhiteSpace.style.maxWidth = "100%";
    console.log("First Move");
  }
});

// Füge den Button als erstes Kind des conversation-header hinzu
const header = document.getElementById("conversation-header");
header.insertBefore(button, header.firstChild);
