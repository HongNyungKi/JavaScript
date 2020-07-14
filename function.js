//함수 선언 & 호출

//함수 선언: doSomthing이라는 함수를 선언한것이다. 
// function doSomthing(F) {
//     console.log(F);
//     const result = addFunction(2, 3);
//     console.log(result);
// }

// function addFunction(a, b) {
//     const sum = a + b;
//     return sum;
// }

//함수 호출
// doSomthing(addFunction);

// //함수를 변수에 할당하기 
// const hnk = addFunction;
// console.log(hnk);
// console.log(hnk(1, 2)); //3





// Function
// - building block in the program
// - called subprogram
// - can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
//function name(param1,param2){body....return;}
//one function === one thing
//naming: doSomthing, command, verb
//function is object in JS

function printHello() {
    console.log('hello');
}
printHello(); //hello

function log(message) {
    console.log(message);
}

log("hello hnk"); //hello hnk
log(1234); //1234

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by refere nce
function changeName(somthing) {
    somthing.nickName = 'developer';
}
const myNmae = {
    name: 'hnk',
    nickName: 'coder'
};
changeName(myNmae);
console.log(myNmae.nickName); //developer

//3. Default parameters(added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); //Hi! by unknown

//4. Rest parameters(added inES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('hnk', 'coder', 'developer');

//5.Local scope
let globalMessage = 'global';

function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hi';
    }
    // console.log(childMessage); 에러발생
}
printMessage();

//6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(sum(1., 2));

//6. Early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long logic
    }
}
//good
function upgradeUser(user) {
    if (user.potint <= 10) {
        return;
    }
    //long logic...
}

//7. Callback function using functionexpression 
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes!');
}
const printNo = function () {
    console.log('no!');
}

randomQuiz('love you', printYes, printNo);
randomQuiz('hate you', printYes, printNo);

//8. Arrow functionm
//always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
} //이러한 함수 형태를

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
//한줄인 경우 블럭{}이 필요없지만 두줄 이상인 경우 필요하며, 항상 return키워드를 포함하여야 한다. 
const hnk = () => {
    console.log('blabla');
    console.log('blabla');
    return;
}

//9. IIFE : Immediately Invoked Function Expresstion 
(function hello() {
    console.log('IIFE');
})();