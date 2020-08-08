"use strict";

const IMGSIZE = 80;
const IronManCount = 5;

const playBtn = document.querySelector(".header__btn");
const gameField = document.querySelector(".game__field");
const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();

playBtn.addEventListener("click", startGame);

function startGame() {
  initGame();
}

// function initGame() {
//   field.innerHTML = "";
//   addIem("IronMan", IronManCount, "img/IronMan.png");
// }

function addItem(className, count, imgPath) {
  for (i = 0; i < count; i++) {
    const x1 = 0;
    const y1 = 0;
    const x2 = field.getBoundingClientRect().width;
    const y2 = field.getBoundingClientRect().height;
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}
