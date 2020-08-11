"use strict";

const playBtn = document.querySelector('.header__btn-play');
const stopBtn = document.querySelector('.header__btn-stop');
const IronManCount = 5;
const itemCount = 3;
const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const imgWidthSize = 80;
const imgHeightSize = 115;
const gameDuration = 7;
const timer = document.querySelector('.header__time');
const count = document.querySelector('.header__count');
const popUp = document.querySelector('.pop-up');
const popUpMessage = document.querySelector('.pop-up__message');
const refreshBtn = document.querySelector('.pop-up__refresh');

let started = undefined;
let gametimer = undefined;
let remainingTime = gameDuration;

// 플레이 버튼 클릭시
playBtn.addEventListener('click', () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
})

function startGame() {
  started = true
  field.innerHTML = '';
  addItem('IronMan', IronManCount, './IronMan.a44b6e8e.png');
  addItem('Hero', itemCount, './CaptainAmerica.fbcd2c59.png');
  addItem('Hero', itemCount, '/Hulk.27b33131.png');
  addItem('Hero', itemCount, '/SpiderMan.04c09517.png');
  showStopBtn();
  showTimerAndCount();
  startGameCounter();
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - imgWidthSize;
  const y2 = fieldRect.height - imgHeightSize;

  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function showStopBtn() {
  playBtn.style.display = 'none';
  stopBtn.style.display = 'block';
}

function showTimerAndCount() {
  timer.style.visibility = 'visible';
  count.style.visibility = 'visible';
}

function startGameCounter() {
  updateTimerText(gameDuration);
  gametimer = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(gametimer);
      finishGame(false);
    }
    updateTimerText(--remainingTime);
  }, 1000);
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timer.innerText = `${minutes}:${seconds}`
}

// 캐릭터 아이템 클릭시
field.addEventListener('click', heroClick)
let score = 0;

function heroClick(e) {
  const target = e.target;
  if (target.matches('.IronMan')) {
    target.remove();
    score++;
    updateCount();
    if (score === IronManCount) {
      finishGame(score === IronManCount);
    }
  } else if (target.matches(['.Hero'])) {
    finishGame(score === IronManCount);
  }
}

function updateCount() {
  count.innerText = IronManCount - score;
}

function finishGame(result) {
  started = false
  showPopupWidthText(result ? 'YOU WIN!' : 'YOU LOSE!');
  hideTimerAndCount();
}

function showPopupWidthText(text) {
  popUp.style.visibility = 'visible';
  popUpMessage.innerText = text;
}

function hideTimerAndCount() {
  timer.style.visibility = 'hidden';
  count.style.visibility = 'hidden';
}

// 정지버튼 클릭시
stopBtn.addEventListener('click', () => {
  stopGame();
})

function stopGame() {
  started = false
  field.innerHTML = '';
  showPopupWidthText('Replay?')
  clearInterval(gametimer);
}



//리플레이 버튼 클릭시
popUp.addEventListener('click', () => {
  text()
})

function text() {
  startGame()
}