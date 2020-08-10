"use strict";

import {
  addItem
} from './js-modules/addItem'
import {
  showStopBtn
} from './js-modules/showStopBtn'
import {
  showTimerAndCount
} from './js-modules/showTimerAndCount'
import {
  startGameCounter
} from './js-modules/startGameCounter'
import {
  heroClick
} from './js-modules/heroClick'

const playBtn = document.querySelector('.header__btn-play');
const field = document.querySelector('.game__field');

playBtn.addEventListener('click', () => {
  startGame();
})

function startGame() {
  const IronManCount = 5;
  const itemCount = 3;
  field.innerHTML = '';
  addItem('IronMan', IronManCount, './IronMan.a44b6e8e.png');
  addItem('CaptainAmerica', itemCount, './CaptainAmerica.fbcd2c59.png');
  addItem('Hulk', itemCount, '/Hulk.27b33131.png');
  addItem('SpiderMan', itemCount, '/SpiderMan.04c09517.png');
  showStopBtn();
  showTimerAndCount();
  startGameCounter();
}
field.addEventListener('click', (e) => {
  heroClick(e);
})