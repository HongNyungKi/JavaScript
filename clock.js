// document의 자식을 탐구하고 싶을때 document.querySelector 사용
// const clockContainer = document.querySelector(".js-clock");
// clockContainer의 자식을 탐구하고 싶을때는 밑에처럼. 
// 단, 반드시 class명이 아닌 태그를 지정하여도 된다.
// const clockTitle = clockContainer.querySelector("h1");

// 문자에 변수를 삽입하기 위해서는 `` 와 $ 기호를 쓴다.

// 두개의 const를 간단히 쓰려면
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// 기본적인 함수틀이다.
// 위에 함수를 작성하고 이 기본함수로 부터 불러들인다.
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();