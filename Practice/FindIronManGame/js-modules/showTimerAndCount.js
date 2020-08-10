'use strict';

export function showTimerAndCount() {
    const timer = document.querySelector('.header__time');
    const count = document.querySelector('.header__count');
    timer.style.visibility = 'visible';
    count.style.visibility = 'visible';
}