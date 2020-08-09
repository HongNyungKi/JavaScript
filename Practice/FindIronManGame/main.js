"use strict";

import {
  addItem
} from './js-modules/addItem'

const playBtn = document.querySelector('.header__btn');
const IronManCount = 5;
const itemCount = 3;
const field = document.querySelector('.game__field');

playBtn.addEventListener('click', () => {
  startGame();
})

function startGame() {
  field.innerHTML = '';
  addItem('IronMan', IronManCount, './IronMan.a44b6e8e.png');
  addItem('CaptainAmerica', itemCount, './CaptainAmerica.fbcd2c59.png');
  addItem('Hulk', itemCount, '/Hulk.27b33131.png');
  addItem('SpiderMan', itemCount, '/SpiderMan.04c09517.png');
}