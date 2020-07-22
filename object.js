'use strict';
//Objects
//one of the javascript's data type
//a collection of related data and/or functionality
//Nearly all objects in javascript are instances of Object
//object = { key : value }; 오브젝트는 key와 value의 집합체이다. 즉, 내가 접근할수있는 property(key)와 해당 property가 갖고있는 값(value) 두가지로 나누어지는 형태를 갖고있다.


const name = 'Hong';
const age = 4;

function print1(a, b) {
    console.log(a);
    console.log(b);
}

print1(name, age);

//이러한 경우 인자가 많아질 경우 추가코드가 늘어난다. 
//문제를 개선하기 위해 object를 사용한다. 

const NK = {
    name: 'HongNK',
    age: '4'
}

function print2(person) {
    console.log(person.name);
    console.log(person.age);
}

print2(NK);


//1. Literals and properties

//object를 만드는 방법
const obj1 = {}; // 'object literal' 문법(syntax)
const obj2 = new Object(); // 'object constructor' 문법(syntax) 


//js에서는 뒤늦게 object에 property를 추가,삭제 가 가능하다. 
const HNK = {
    name: '홍녕기',
    age: '27'
};
console.log(HNK);

HNK.hasjob = 'none'; //can add properties later
console.log(HNK);

delete HNK.hasjob; //can delete properties later
console.log(HNK);