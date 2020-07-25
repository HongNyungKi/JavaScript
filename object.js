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

//2. Computed properties(계산된 프로퍼티)-key should be always string
// 오브젝트 안의 데이터에 접근시 . 를 이용했다. 
// 하지만 다른 방법도있다. 
// []를 이용해 string형태로 접근이 가능하다. 
const avengers = {
    hero1: 'Tony',
    hero2: 'Captain'
};
console.log(avengers.hero1); //Tony
console.log(avengers['hero2']); //Captain
// computed properties 문법을 통해 상위의 프로퍼티 추가 기능도 구현할수있다. 
avengers['hero3'] = 'Thor';
console.log(avengers['hero3']); //Thor

// 그렇다면 어떤경우에 어떤것을 쓸까?
// 닷. 은 코딩하는 순간(key에 해당하는 값을 받아오고싶을때)
// computed properties를 쓸때는 정확하게 어떤 키가 필요한지 모를때, 즉 urn time에서 결정될때 이걸쓴다. 즉, 실시간으로 원하는 키의 값을 받아오고싶을떼
// 무슨말이냐면 
// object와 key를 받아서 그 object에 있는 key에 상응하는 value를 출력하는 함수가 있다고 하자 
// 이 함수는 언제 어떤키를 받을지 모른다. 
// 예를들어 원하는 키를 사용자에게 input받아 출력하는 함수라면 key는 어떤걸 출력할지 코딩하는 시점에는 모른다. 
//키는 항상 string type으로 전달하여야한다!!
function printValue(obj, key) {
    // console.log(obj.key); 이렇게 쓰면 안댄다
    console.log(obj[key]);
}
printValue(avengers, 'hero1'); //Tony



//3. Property value shorthand
const person1 = {
    name: 'Tony',
    number: 1
}
const person2 = {
    name: 'Captain',
    number: 2
}
const person3 = {
    name: 'Thor',
    number: 3
}
//가 있다고 하자. 이때 person4를 만드려면 또 일일이 작성해야하는 번거로움이 있다. 
// object를 만드는 함수를 작성해보자

const person4 = makePerson('Hulk', 4);

function makePerson(name, number) {
    return {
        name,
        number
    }
}
console.log(person4);
//하지만 이때, js에서는 Property value shordhad라는 기능이 있어서 key와 value의 이름이 동일하다면, 생략이 가능하다. 


//이렇듯 다른 어떤 연산을 하지 않고, 순수하게 object를 만드는 함수는 함수이름을 대문자로 만들고,
// return이라는 값을 하지않고, 
//this를 쓴다. 
// 이것을 바로
//4. constructor function이라고한다. 
// 호출시에는 반드시 class에서 object를 만드는 것 처럼 new를 붙여줘야한다. 
const person5 = new Person('BlackWidow', 5)

function Person(name, number) {
    this.name = name;
    this.number = number;
}
console.log(person5);


//5. in operator
// 해당하는 object안에 key가 있는지 없는지 확인하는 것이다. 
console.log('name' in person4); //ture

// for..in 과 for..of

//for(key in obj)
const Villain = {
    name: 'Thanos',
    sex: 'male',
    age: 20
}

for (const key in Villain) {
    console.log(key);
}
//이것으느 Villain이 갖고 있는 key들이 블럭을 돌때마다 key라는 지역변수에 할당되어 출력된다. 
// 때문에 오브젝트안에 있는 모든 키들이 출력된다. 

//fon(value of iterable)
// for of는 obj를 쓰는것이 아닌 , 배열과 같은 순차적인(interable) 것들을 쓸때  쓸때 쓴다. 
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//이러한 것을 쉽게하는 방법이 있다. 
for (const value of array) {
    console.log(value);
}


//7. cloning
// object.assign(dest, [obj1,obj2,obj3...])