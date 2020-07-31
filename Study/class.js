'use strict';

//Object-oriented programming
//class: template
//object: instance of a class
//Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

//1. Class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hello~!`);
    }

}

const HongNK = new Person('HongNK', 27);
console.log(HongNK.name); // HongNK
console.log(HongNK.age); // 27
HongNK.speak(); // HongNK: hello~!

//2.Getter and setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
        //사용자가 get.age를 호출하면 this.age을 리턴한다. 
    }
    set age(value) {
        this._age = value < 0 ? 0 : value;
        //새로운 value를 받으면 this.age를 value로 설정한다. 
    }
}

const user1 = new User('hong', 'NK', -1);
console.log(user1.age);
//get으로 값을 리턴하고, set으로 값을 설정한다. 이때, set은 값을 설정하기때문에 value를 받아와야한다. 

//3. Fields ( public, private )
class hnk {
    publicField = 2;
    privateField = 0; //#생략
}
const HNK = new hnk();
console.log(HNK.publicField);

//4. static
class Hong {
    static future = 'developer';
    constructor(age) {
        this.age = age;
    }
    static printFuture() {
        console.log(Hong.future);
    }
}

const one = new Hong(27);
console.log(one.future); //undefined
console.log(Hong.future); //developer

//4. 상속과 다양성
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {
    draw() {
        super.draw(); //부모의 method 가져오기
        console.log(`blabla`);
    }
}
class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'red');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());

//5. instaceOf : Class checking
console.log(rectangle instanceof Rectangle); //true


const numbers = {
    a: 1,
    b: 2,

    get sum() {
        console.log('sum함수가 실행됩니다. ');
        return this.a + this.b;
    }
};

//getter,setter함수를 사용하면 특정값을 바꾸려하거나 조회하려할때 원하는 코드를 실행할수있따. 
console.log(numbers.sum);
//함수인데도 불구하고 조회만해도 값을 출력할수있다. 
numbers.a = 5;
console.log(numbers.sum);
//이처럼 getter함수는 특정값을 조회하려고 할때, 특정코드를 실행시키고 연산되 값을 받아서 사용하는것이다. 

const dog = {
    _name: '멍멍이',
    set name(value) {
        console.log('이름이 바뀝니다.' + value);
        this._name = value;
    }
}
console.log(dog._name); //멍멍이
dog._name = '야옹이';
console.log(dog._name);