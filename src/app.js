import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const suits = ["♥", "♦", "♣", "♠"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const topSymbol = document.querySelector("#top-symbol");
  const bottomSymbol = document.querySelector("#bottom-symbol");
  const cardValue = document.querySelector("#card-value");
  const cardContainer = document.querySelector("#card");
  const newCardBtn = document.querySelector("#new-card-btn");
  const widthInput = document.querySelector("#width-input");
  const heightInput = document.querySelector("#height-input");

  // Generar una carta aleatoria
  function generateCard() {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const color = randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";

    topSymbol.textContent = randomSuit;
    bottomSymbol.textContent = randomSuit;
    cardValue.textContent = randomValue;

    topSymbol.className = `card-symbol top ${color}`;
    bottomSymbol.className = `card-symbol bottom ${color}`;
    cardValue.className = `card-value`;
  }

  // Cambiar tamaño según inputs
  function updateSize() {
    let width = widthInput.value;
    let height = heightInput.value;
    cardContainer.style.width = `${width}px`;
    cardContainer.style.height = `${height}px`;
  }

  newCardBtn.addEventListener("click", generateCard);
  widthInput.addEventListener("input", updateSize);
  heightInput.addEventListener("input", updateSize);

  // Generar una carta inicial
  generateCard();

  // Temporizador automático cada 10 segundos
  setInterval(generateCard, 10000);


};
