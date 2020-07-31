'use strict';

//콜백함수란? 
// 내가 전달한 함수를 api로 하여금 나중에 불러줘~ 하는 것

//1. 동기와 비동기
//자바스크립트는 동기적인 언어이다. (javascript is synchronous)
// 즉, hoisitng된 이후 부터 내가 작성한 순서대로 코드가 실행되는 것이다. 

//hoisting : 변수 var, 함수 선언(function declaration) 들이 자동적으로 가장 위로 올라가는것이다. 
console.log('1');
console.log('2');
console.log('3');
//순서대로 console.log 함수가 실행된다. 

//반대로 async란 비동기적으로 언제 코드가 실행될지 예측할수 없는것을 말한다. 
// 예로는 setTimeout api 가 있다. (내가 지정한 시간이 지나면, 내가 지정한 함수를 실행시키는 것이다.-콜백함수)
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
// 이것이 코드의 순서와는 상관없이 결과의 순서가 바뀌는 비동기적인 실행방법이다. 

// 브라우져가 제공하는 setTimeout함수와 같이 내가 전달한 함수를 api로 하여금 나중에 불러줘~ 하는 것을 콜백함수라 한다. 
//콜백함수도 동기적인 콜백함수와 비동기적인 콜백함수로 나뉜다. 

//Synchronous
// 콜백함수를 인자로 받아 처리하는 함수가있다. 
function printImmediately(a) {
    a();
}
printImmediately(() => console.log('hello'));
// 이렇게 하면 
// 함수의 선언은 가장 위로 올라가고 나머지는 순서대로 결과가 도출된다. 

//Acynchronous
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

console.clear();
//---------------------------


// 콜백지옥 체험하기
// 사용자의 데이터를 서버에서 받아오는 class가 있다. 
// 이 class안에는 두가지의 api가있다. 
// 로그인하는것, 사용자의 데이터를 받아서 그 사용자에 해당하는 정보를 서버에서 또 받아오는 api이다. 
// 원래는! 사용자가 로그인할시 사용자에 역할 등과 같은 정보를 동시에 받아오는것이 옳다. 
// 실제 백엔드와의 연결은 할줄모르니 setTimeout을 통해 delay 를 줄것이다. 
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (id === 'hnk2017' && password === '123' ||
                id === 'ghdsudrl' && password === '321') {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000)
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'hnk') {
                onSuccess({
                    name: 'hnk',
                    role: 'admin'
                });
            } else {
                onError(new Error('no access'));
            }
        }, 1000)
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your ID')
const password = prompt('enter your PASSWORD');

userStorage.loginUser(id, password, (id) => {
    userStorage.getRoles(user, ())
}, (error) => {
    console.log(error)
});

//이러한 콜백 지옥의 문제점은?
// 읽기가 복잡하다. 가독성이 떨어진다. 로직을 한눈에 이해하기가 어렵다. 디버깅의 경우 해결이 어렵다. 

// promise
// 비동기를 간편하게 처리할수있는 object이다. 
// 정해진 장시간의 기능을 수행하고나서, 정상적으로 기능이 수행이 됬다면 메시지와 함께 처리된 결과값을 전달해주고, 문제 발생시 에러를 전달한다. 
// 어떻게 콜백을 쓰지 않고 promise object를 통해 비동기 코드를 쓸수있는지 보자 