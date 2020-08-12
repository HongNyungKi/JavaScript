"use strict";

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();
const heroWidth = 80;
const heroHeight = 115;
const gameBtn = document.querySelector(".header__btn-play");
const gameTimer = document.querySelector(".header__time");
const gameScore = document.querySelector(".header__count");

let started = false; //게임이 시작되었는지, 안됬는지 알수있도록.
let timer = undefined; // 얼마만의 시간이 남았는지 기억하기위해.
let score = 0; // 최종적인 점수를 기억해야하기때문에.

gameBtn.addEventListener("click", () => {
  // 게임이 시작되었다면, 중지해야하는 기능을 입력하고, 
  // 게임이 시작되지 않았다면, 게임시작을 위한 세팅을 한다. 
  if (started) {
    stopGame();
  } else if (!started) {
    startGame();
  }
});

stopGame(){}
startGame(){}

function settingGame() {
  addItem("IronMan", 5, "img/IronMan.png");
  addItem("CaptainAmerica", 3, "img/CaptainAmerica");
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - heroWidth;
  const y2 = fieldRect.height - heroHeight;
  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
