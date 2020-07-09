//Function
//- building block in the program
//- called 'sub program'
//- can be used multiple times
//- performs a task or calculates a value

//1. Function declaration
// function name(param1,param2){body...return;}
//one function === one thing
//naming: doSomthing, command, verb
//createCardAndPoint -> createCard, createPoint
//function is object in JS

'use strict';

function printHello() {
    console.log('Hello');
}
printHello();

function printSomething(message) {
    console.log(message);
}

printSomething(123);
// 단, js에서는 data type이 정해져있지 않아 number가 아닌 string 으로 변환하여 123을 출력한다.
// 이러한 문제를 해결하기 위해 typeScript를 사용한다. 

//2. Parameters
//premitive parameters: passed by vlaue
//object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const hnk = {
    name: 'hnk'
};
changeName(hnk);
console.log(hnk);

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage("hnk");

//4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('A', 'B', 'C');

//5. Local scope
let globalMessage = 'global'; //global scope
function printMessage() {
    let message = 'hello'; //local scope
    console.log(message);
    console.log(globalMessage); // 안에서는 globalMessage를 출력할수있다. 

    function printAnoter() {
        let childMessage = "hi";
    }
    // console.log(childMessage); 함수안에 함수가 있다. 부모함수에서 자식함수의 변수를 열람할수는 없다.
}
printMessage();
// console.log(message); 지역변수를 밖에서 실행하면 에러발생

//6. return a value
//함수에서는 파라미터로 값들을 전달받아 계산된 값을 return 한다.  
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(result);

//7. Early return, Early exit
// user.point가 10 이상일 경우에만 업그레이드를 진행하는 logic이 있다고하자. 
// bad: ~~일때 ~~한다. 처럼 블럭안에서 logic을 많이 작성하면 가독성이 떨어진다. 
// 이런경우 이렇게if와 else를 번갈아 쓰는건 좋지않다. 
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}
//good
// 조건이 맞지 않을시 바로 return하여 함수를 종료하고 조건이 맞을때 필요한 logic을 실행하는것이 좋다.
function upgradeUser(user) {
    if (user.point > 10) {
        return;
    }
}