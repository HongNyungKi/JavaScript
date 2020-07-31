'use strict';

//Array의 개념과 필수 배열api

//1. Deaclaration 
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
// index를 통한 배열 접근방법
const fruits = ['apple', 'banana'];
console.log(fruits);

console.log(fruits[0]); //배열의 첫번째 item찾기
console.log(fruits[fruits.length - 1]); //배열의 마지막 item 찾기

//3. Looping over an array
// 배열안의 data 즉, item을 하나씩 모두다 출력하기
console.clear();
// a. for반복문 사용하기
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//b. for of 사용하기
for (let fruit of fruits) {
    console.log(fruits);
}
//c. forEach api사용하기 
// 배열의 각 요소에 대해 지정된 작업(함수) 수행한다. (forEach api에 대해서 알고 사용하기!)
fruits.forEach((fruit, index) => console.log(fruit, index))

//4. 배열에 date를 넣고(addition), 빼고(deletion), 복사하기(copy)

//add: 배열의 맨 뒤에 item을 넣기(add an item to the end)
fruits.push('tomato', 'mango');
console.log(fruits[fruits.length - 1]);
//pop: 배열의 맨 뒤의 item을 빼기(remove adn item from the end)
fruits.pop();
console.log(fruits[fruits.length - 1]);

//unshift: 배열의 맨 앞에 item을 넣기(add an item to the begining)
fruits.unshift('watermelon');
console.log(fruits[0]);

//shift: 배열의 맨 앞에 item을 넣기(remove an itrm from to beginning)
fruits.shift();
console.log(fruits[0]);

//중요포인트!!! shift와 unshift는 push와 pop보다 훨~씬 느리다!

const Avengers = ['Tony'];
console.clear();
console.log(Avengers);
//splice: item을 지정된 위치에서 지우기(remove an item by index position)
//api 설명참조!

Avengers.push('Captain', 'Hulk', 'Thor');
console.log(Avengers);
Avengers.splice(1, 2, 'hnk', 'yhj');
console.log(Avengers); //["Tony", "hnk", "yhj", "Thor"]


//concat: 두가지의 배열 묶기 (combine two arrays)
const Villain = ['Thanos'];
const newAvengers = Avengers.concat(Villain);
console.log(newAvengers);

//검사(검색)하는 api
// indexOf: 원하는 item이 배열속에 몇번째인지 조회하는 법
console.log(newAvengers.indexOf('Thanos')); //4
// includes: 원하는 item이 배열속에 있는지의 여부를 true / false 로 나타내는 법
console.log(newAvengers.includes('Thanos')); //true


// lastIndexOf: 
//만약 같은 data가 또 있을경우?
// 이와같을때 indexOf 처음나온 값을 리턴한다. 
newAvengers.push('Thanos');
console.log(newAvengers.indexOf('Thanos')); //4
//반대로 lastIndexOf는 맨 마지막것의 item의 index를 리턴한다. 
console.log(newAvengers.lastIndexOf('Thanos')); //5