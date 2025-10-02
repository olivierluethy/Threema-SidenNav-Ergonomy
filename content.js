function ensureButtonExists() {
  const existingButton = document.querySelector(".modern-button"); // Suche nach einem Button mit der Klasse 'modern-button'
  if (!existingButton) {
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

    button.classList.add("modern-button");

    // Erstelle Tooltip
    const tooltip = document.createElement("span");
    tooltip.classList.add("tooltip");
    tooltip.textContent = "Click to close Sidenav";
    button.appendChild(tooltip);

    // Tooltip CSS Styling
    const tooltipStyle = document.createElement("style");
    tooltipStyle.textContent = `
      .tooltip {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 120%; /* Tooltip erscheint unterhalb des Buttons */
        left: 145%;
        transform: translateX(-50%);
        background-color: #333;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        white-space: nowrap;
      }

      .modern-button:hover .tooltip {
        visibility: visible;
        opacity: 1;
      }
    `;
    document.head.appendChild(tooltipStyle);

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
      // Das linke Navigationspanel und rechter Bereich
      let rightWhiteSpace = document.getElementById("detail");

      const computedDisplay = window.getComputedStyle(leftNavPanel).display;

      if (computedDisplay === "flex") {
        button.title = "Open Sidenav"; // Tooltip anpassen
        tooltip.textContent = "Click to open Sidenav";

        leftNavPanel.style.display = "none";
        rightWhiteSpace.style.maxWidth = "100%";

        console.log("Second Move: Ist bereits flex");
      } else {
        button.title = "Close Sidenav"; // Tooltip anpassen
        tooltip.textContent = "Click to close Sidenav";
        leftNavPanel.style.display = "flex";
        rightWhiteSpace.style.maxWidth = "70%";
        console.log("First Move: War nicht flex");
      }
    });

    // Füge den Button als erstes Kind des conversation-header hinzu
    const header = document.getElementById("conversation-header");
    if (header) {
      // Opened a chat mode
      header.insertBefore(button, header.firstChild);
    }
  }
}
// Überprüfe regelmäßig, ob der Button existiert, und füge ihn hinzu, wenn er noch nicht vorhanden ist
setInterval(ensureButtonExists, 1000); // Alle 1000ms (1 Sekunde) überprüfen

/* Fullscreen Change Functionality */

window.addEventListener("load", () => {
  // Entferne das <header>-Element, falls vorhanden
  const headerElement = document.querySelector("header");
  if (headerElement) {
    headerElement.remove();
    console.log("Das <header>-Element wurde entfernt.");
  } else {
    console.log("Kein <header>-Element gefunden.");
  }

  // Entferne das <footer>-Element, falls vorhanden
  const footerElement = document.querySelector("footer");
  if (footerElement) {
    footerElement.remove();
    console.log("Das <footer>-Element wurde entfernt.");
  } else {
    console.log("Kein <footer>-Element gefunden.");
  }

  // CSS-Attribute nur ändern, wenn die Elemente existieren
  const mainWrapperWide = document.querySelector("#main-wrapper.wide");
  if (mainWrapperWide) {
    mainWrapperWide.style.maxWidth = "";
    mainWrapperWide.style.maxHeight = "";
    console.log("MaxWidth und MaxHeight entfernt von #main-wrapper.wide");
  } else {
    console.log("#main-wrapper.wide nicht gefunden.");
  }

  const mainWrapper = document.getElementById("main-wrapper");
  if (mainWrapper) {
    mainWrapper.style.minWidth = "100%";
    mainWrapper.style.minHeight = "100%";
    console.log("MinWidth und MinHeight auf 100% gesetzt für #main-wrapper");
  } else {
    console.log("#main-wrapper nicht gefunden.");
  }
});
