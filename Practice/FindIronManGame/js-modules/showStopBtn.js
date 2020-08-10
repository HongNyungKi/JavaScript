'use strict';

export function showStopBtn() {
    const playBtn = document.querySelector('.header__btn-play');
    const stopBtn = document.querySelector('.header__btn-stop');
    playBtn.style.display = 'none';
    stopBtn.style.display = 'block';
}