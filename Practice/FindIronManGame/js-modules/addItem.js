'use strict';

// 이미지를 랜덤으로 배치하는 함수입니다. 
const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const imgWidthSize = 80;
const imgHeightSize = 115;

export function addItem(className, count, imgPath) {
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