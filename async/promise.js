'use strict';


// js안에 내장되어있는 pbject이다. 이는 비동기적인것 (async) 을 수행시 콜백함수 대신 유용하게 쓸수있는 object이다. 

//1.  state(상태) 프로세스가 무서운 operation을 수행하고 있는 '중'인지 ,'완료'가 되어 성공했는지, 실패했는지 등에 대한 상태를 파악하는것. 
//2. 내가 원하는 데이터를 제공하는 사람과(producer) , 이 데이터를 쓰는 사람(customer) 의 각각의 견해를 이해하여야 한다. 

// promise is a javascript object for async
// state : pending -> fulfilled or rejected
// promise가 만들어져서 내가 지정한 operation이 수행중일때는 pending상태가 된다고 한다. 
// 이 operation을 성공적으로 끝내게 되면 fulfilled 상태가 된다고한다. 
// 만약 성공적으로 끝내지 못하고 오류가 발생했을시 rejected 상태가 된다. 
// producer vs consumber
// 내가 원하는 기능을 수행하기위해 해당하는 데이터를 만들어내는 producer 
// 원하는 데이터를 소비하는 consumer로 나뉜다. 

//1. producer
// promise 만들기
// 내가 원하는 기능을 비동기적으로 실행하는 promise를 만들것이다. 
// promise는 class 이기때문에 new를 이용하여 object를 생성할수있다. 
const promise = new Promise((resolve, reject) => {
    console.log('hnk');
});
// promise의 생성자를 보면 executor라는 콜백함수를 전달하도록 되있다. 
// 이 함수에는 또다른 두가지의 콜백함수를 받는다. 
// resolve : 기능을 정상적으로 수행하여 최종데이터를 전달하는 콜백함수
// reject : 기능을 수행하다가 문제가 생기면 호출하게될 콜백함수이다. 

// 보통 promise 안에서는 heavy한 일들을 한다. 
// 네트워크에서 데이터를 받아오거나 파일에서 큰 데이터를 읽어오는 등의 과정은 시간이 꽤 걸리므로 그런것을 
// 동기적으로 처리하게 되면 그 다음라인의 코드가 실행되지 않기 때문에 시간이 걸리는 일들은 비동기적으로 처리한다. 