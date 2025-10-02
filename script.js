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
  const leftNavPanel = document.getElementById("navigation");

  const computedDisplay = window.getComputedStyle(leftNavPanel).display;

  if (computedDisplay === "flex") {
    leftNavPanel.style.display = "none";
    rightWhiteSpace.style.maxWidth = "100%";

    console.log("Second Move: Ist bereits flex");
  } else {
    leftNavPanel.style.display = "flex";
    rightWhiteSpace.style.maxWidth = "70%";
    console.log("First Move: War nicht flex");
  }
});

// Füge den Button als erstes Kind des conversation-header hinzu
const header = document.getElementById("conversation-header");
if(header){
    // Opened a chat mode
    header.insertBefore(button, header.firstChild);
}

/* Fullscreen Change Functionality */

// 1. Das erste <header>-Element auswählen
const headerElement = document.querySelector('header');

// 2. Prüfen, ob das Element existiert, und es dann entfernen
if (headerElement) {
    headerElement.remove();
    console.log("Das <header>-Element wurde entfernt.");
} else {
    console.log("Kein <header>-Element gefunden.");
}

// 1. Das erste <header>-Element auswählen
const footerElement = document.querySelector('footer');

// 2. Prüfen, ob das Element existiert, und es dann entfernen
if (footerElement) {
    footerElement.remove();
    console.log("Das <header>-Element wurde entfernt.");
} else {
    console.log("Kein <header>-Element gefunden.");
}

// Attribut rauskicken aus dem css
document.querySelector("#main-wrapper.wide").style.maxWidth = ""; 
document.querySelector("#main-wrapper.wide").style.maxHeight = "";

document.getElementById("main-wrapper").style.minWidth ="100%";
document.getElementById("main-wrapper").style.minHeight ="100%";