'use strict';

const itemSize = 80;
const carrotCount = 5;
const bugCount = 5;
const gameDuration = 5;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const popUp = document.querySelector('.pop-up');
const popUpText = document.querySelector('.pop-up__message');
const popUpRefresh = document.querySelector('.pop-up__refresh');

let started = false;
let score = 0;
let timer = undefined;

gameBtn.addEventListener('click', () => {
    if (started) {
        stopGame();
    } else {
        startGame();
    }
    started = !started;
})


function startGame() {
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
};

function initGame() {
    //벌레와 당근을 생성하여 field에 추가한다.
    field.innerHTML = '';
    gameScore.innerText = carrotCount;
    addItem('carrot', carrotCount, 'img/carrot.png');
    addItem('bug', bugCount, 'img/bug.png');
}

function showStopButton() {
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
};

function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function startGameTimer() {
    let remainingTimeSec = gameDuration;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if (remainingTimeSec <= 0) {
            clearInterval(timer);
            finishGame();
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}

function updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}


function addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - itemSize;
    const y2 = fieldRect.height - itemSize;

    for (let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`
        field.appendChild(item);
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function stopGame() {
    stopGameTimer();
    hideGameButton();
    showPopUpWidthText('REPLAY?');
};

function stopGameTimer() {
    clearInterval(timer);
};

function hideGameButton() {
    gameBtn.style.visibility = 'hidden';
}

function showPopUpWidthText(text) {
    popUpText.innerText = text;
    popUp.classList.remove('pop-up--hide');
}

field.addEventListener('click', onFieldClick);

function onFieldClick(event) {
    if (!started) {
        return;
    }
    const target = event.target;
    if (target.matches('.carrot')) {
        target.remove();
        score++;
        updateScoreBoard();
        if (score === carrotCount) {
            finishGame(carrotCount === score);
        }
    } else if (target.matches('.bug')) {
        stopGameTimer();
        finishGame(false);
    }
}

function updateScoreBoard() {
    gameScore.innerText = carrotCount - score;
}

function finishGame(result) {
    started = false;
    hideGameButton();
    showPopUpWidthText(result ? 'YOU WIN!' : 'YOU LOSE!');
}

popUpRefresh.addEventListener('click', () => {
    startGame();
    hidePopUp();
})

function hidePopUp() {
    popUp.classList.add('pop-up--hide');
}