//삼항연산자

const array = [];
let text = '';
if(array.length === 0){
text = '배열이 비어있습니다.';
}else {
text='배열이 비어있지 않습니다.';
}
console.log(text);
// 배열이 비어있습니다.

const array = [1];
let text = '';
if(array.length === 0){
text = '배열이 비어있습니다.';
}else {
text='배열이 비어있지 않습니다.';
}
console.log(text);
//배열이 비어있지 않습니다.

const array = [];
let text = array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';
console.log(text);
// 배열이 비어 있습니다.