myfunction();

function myfunction() {
    console.log('hello');
}
// javascript가 자동적으로 hoisting하여 함수 내용을 끌어올려 해석후 선언한다.
// 왠만하면 hoisting은 피해야한다. 이해가 어렵고 유지보수가 힘들다.


console.log(number);
var number = 2;

// var number = 2; 가 먼저 선언되지 않아도 undefied라고뜬다.
// 이유는 js가 var number = ; 가 이렇게 비어있는 값으로 선언하고, 
// number = 2; 이런식으로 나중에 설정하는 형태로 받아드리기 때문이다. 
//즉, 컴퓨터는 이렇게 해석한다.

var number = ;
console.log(number);
number = 2;

반면 const와 let같은 경우는 hoisting이 발생하지 않는다.

function fn() {
    console.log(a);
    let a = 2;
}
fn();