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
  // 1. Hole das Element
  const leftNavPanel = document.getElementById("navigation"); // Annahme: Du hast leftNavPanel so definiert

  // 2. Rufe den berechneten Stil ab (Computed Style)
  const computedDisplay = window.getComputedStyle(leftNavPanel).display;

  // 3. Prüfe den berechneten Wert
  if (computedDisplay === "flex") {
    // Zustand A: Ist "flex" (oder wird als "flex" angezeigt)

    // ACHTUNG: Hier setzt du es wieder auf "flex" und triggerst den "else"-Block nie
    // Wenn du den Wert umschalten möchtest, siehe den Tipp unten.
    leftNavPanel.style.display = "none";
    rightWhiteSpace.style.maxWidth = "100%";

    console.log("Second Move: Ist bereits flex");
  } else {
    // Zum Testen des aktuellen Zustands:
    leftNavPanel.style.display = "flex"; // Dies ändert nichts, wenn es schon "flex" ist
    rightWhiteSpace.style.maxWidth = "70%";
    // Zustand B: Ist etwas anderes als "flex" (z.B. "none", "block", "")
    console.log("First Move: War nicht flex");
  }
});

// Füge den Button als erstes Kind des conversation-header hinzu
const header = document.getElementById("conversation-header");
header.insertBefore(button, header.firstChild);
