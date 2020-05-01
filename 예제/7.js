// spread


// 1. 기존의 객체를 참고하여 새로운 객체를 만들고 싶다면, spread를 사용한다.
const hnk = {
    name: '녕기'
}
const cuteHnk = {
    name: '녕기',
    attribute: 'cute'
}
const purpleCuteHnk = {
    name: '녕기',
    attribute: 'cute',
    color: 'purple'
}
console.log(hnk);
console.log(cuteHnk);
console.log(purpleCuteHnk);

// spread 사용시 
const hnk = {
    name: '녕기'
}
const cuteHnk = {
    ...hnk,
    attribute: 'cute'
}
const purpleCuteHnk = {
    ...cuteHnk,
    colro: 'purple'
}
console.log(hnk);
console.log(cuteHnk);
console.log(purpleCuteHnk);

// 특정내용만 바꾸기
const hnk = {
    name: '녕기'
}
const cuteHnk = {
    ...hnk,
    attribute: 'cute'
}
const purpleCuteHnk = {
    ...cuteHnk,
    color: 'purple'
}
const greenCuteHnk = {
    ...purpleCuteHnk,
    color: 'green'
}
console.log(hnk);
console.log(cuteHnk);
console.log(purpleCuteHnk);
console.log(greenCuteHnk);

// 2. 배열에서 spread 사용하기
const animals = ['개', '고양이', '고라니'];
const anotherAnimals = [...animals, '비둘기'];
console.log(anotherAnimals);

//3.spread 연산자 여러번 사용하기
const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);