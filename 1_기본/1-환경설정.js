'use strict';
// 1. string concatenation(문자열 더하기) -
//     문자열과 문자열을 합하는 연산자 -
//     문자와 숫자를 더하면 숫자가 문자열로 변환된다. -
//     빽틱과 $ {}
// 를 사용하여 변수값을 계산하여 변수값을 포함하여 문자열을 만든다.

//     특수문자열

// 2. numeric orerators
//     -
//     더하기 -
//     빼기 -
//     나누기 -
//     곱하기 -
//     나눈 나머지 값 -
//     n승

// 3. increment and decrement operators

// 4. assignment operators
//     : 할당하는 연산자(부등호)
// 단,
// x += y;
// 는
// x = x + y와 같다.

// 5. comparison operators
//     <
//     <= > >=

//     6. logical operators: || (or), && (and), !(not)


console.log('hello' + 'wolrd');
console.log('1' + 2);
console.log(`string oiterals: 1 + 2 = ${1+2}`);

console.log("what\'s"); //어퍼스트로피
console.log("hello \nworld") //줄바꿈
console.log("hello \n\tworld") //tap

console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //preIncrement: 3, counter: 3
// counter = counter +1; 
// counter에 1을 더하여 다시 counter에 값을 할당한다. 
// preIncrement = counter;
// 바뀐값을 상수 preIncrement에 할당한다. 

const postIncrement = counter++;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //preIncrement: 3, counter: 4
//postIncrement = counter;
//먼저 변수 count의 값을 postIncrement에 할당 후
//counter = counter + 1;
//counter의 값을 1 증가시키는것이다. 

//이는 ++(increment) 와 --(decrement) 모두 같다

let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

const value1 = false;
const value2 = 4 < 2;
// 가 선언되어있다. 

// ||(or), finds the first truthy value
console.log(value1 || value2 || check());

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('boom!');
    }
    return true;
}

//or operator는 조건중 하나라도 값이 true이면 true를 반환한다. 
// 조건중 처음으로 true가 나온 시점에서 멈춘다. 
// 때문에 value1의 값이 만약 true이면 chech함수는 실행되지 않는다. 
// 이러한 원리를 이용하여 연산이 복잡한 data는 뒤쪽에 두어야한다!!

// &&(and), finds the first falsy value
// 조건중 하나라도 falsy한 값이 있으면 false를 반환한다.  
//때문에 같은 원리로 무거운 연산의 data는 뒤로가게한다. 
// 또한 &&는 간편하게 null check할때도 많이 쓰인다. 
// nullableObject && nullableObject.somthing
// 이것은 nullableObject가 null이 아닐때만 somthing이라는 value를 가져올수있다. 
// if(nullableObject != null){
//     nullableObject.somthing
// }
// 과 같다.


// not연산자(!)
console.log(!true);


//7. equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type convertion
// type을 변경하여 검사한다.
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// ===strict equality, no type conversion
// type을 따져서 비교한다. 
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //ture

//object equality by reference
//equality는 object를 신경써서 공부하자
//(그림)
const ellie1 = {
    name: 'eliie'
};
const ellie2 = {
    name: 'eliie'
};
const ellie3 = ellie1;

console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true


//equality 
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false


// 8. conditional operators: if
// if , else if, else
const name = 'coder';
if (name === 'hnk') {
    console.log('hello hnk');
} else if (name === 'coder') {
    console.log('hi coder!');
} else {
    console.log('unknown')
}

//9. ternary operator
// if를 간단히 쓸수 있다. 
// condition ? value1 : value2;
console.log(name === 'coder' ? 'yes' : 'no');
// 코드의 가독성을 위해 간단한 때만 사용한다. 

//10. switch statement
//if 와 else if를 반복하는 것보다 witch사용이 좋다. 
// typescipt에서 정해저있는 타입을 검사하거나 인원검사와 같은것일때 사용이 좋다. 
const browser = 'chrome';
switch (browser) {
    case 'IE':
        console.log('fuck');
        break;
    case 'chrome':
    case 'firefox':
        console.log('hello~!');
        break;
    default:
        console.log('kakaka');
        break;
}

// 11. loops

// while loop, while the condition is truthy
// body code is executed
// while문은 조건이 false로 나오기 전까지 계속 무한대로 반복한다. 
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first
//then check the condition 
// 먼저 블럭{} 을 실행 후 조건이 맞는지 틀린지를 검사한다. 
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// 정리하면 블럭{} 을 먼저 실행하고 조건을 걸고 싶으면 do while을 쓰고 
// 조건에 따라서 실행하고싶다면while을 쓴다. 

//for loop, for(begin; condition; step)
// 시작하는 문장; 조건; 어떤 단계를 밟아나갈건지
//begin은 처음에만 호출하고 그뒤로는 조건과 step의 반복이다. 조건이 안맞을때까지 반복된다.

for (let i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

//nesting loops 즉, 반복문 안에 또 다른 반복문은 좋지않다. 