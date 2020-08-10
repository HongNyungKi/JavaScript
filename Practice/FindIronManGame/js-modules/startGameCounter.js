'use strict';

const gameDuration = 7;
const gameTimer = document.querySelector('.header__time');
export function startGameCounter() {
    let timer = undefined;
    let remainingTime = gameDuration;
    updateTimerText(gameDuration);
    timer = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(timer);
            return;
        }
        updateTimerText(--remainingTime);
    }, 1000);
}

function updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`
}