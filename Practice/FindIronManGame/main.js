"use strict";

import {
  addItem
} from './js-modules/addItem'

const playBtn = document.querySelector('.header__btn');
const IronManCount = 5;

playBtn.addEventListener('click', () => {
  startGame();
})

function startGame() {
  addItem('IronMan', IronManCount, './IronMan.a44b6e8e.png');
}