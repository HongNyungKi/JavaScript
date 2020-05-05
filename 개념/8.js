//rest

//1. 객체에서의 rest
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
}
const {
    color,
    ...rest
} = purpleCuteSlime;
console.log(color);
console.log(rest);

// + rest는 다른이름으로 대체 가능하다. 
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
}
const {
    color,
    ...cuteSlime
} = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

// + rest연계하기
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
}
const {
    color,
    ...cuteSlime
} = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);
const {
    attribute,
    ...slime
} = cuteSlime;
console.log(attribute);
console.log(slime);

//2. 배열에서의 rest
const numbers = [0, 1, 2, 3, 4, 5, 6];
const [one, ...rest] = numbers;
console.log(one);
console.log(rest);

//+ 단! 배열에서의 rest는 반드시 마지막에 와야한다. 
// 앞에서 사용 할 수 없다.    const [...rest, last] = numbers;   (x)


// 3. 함수 파라미터에서의 rest
// -파라미터로 넣은 값들을 합해주는 함수
function sum(a, b, c, d, e, f, g) {
    return a + b + c + d + e + f + g;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7)); //28
console.log(sum(1, 2, 3, 4, 5, 6)); //NaN

// -입력한 인자의 값이 하나라도 없는 경우 결과를 도출 할 수 없다. 때문에, 변수 let을 활용한 조건문 생성
function sum(a, b, c, d, e, f, g) {
    let result = 0;
    if (a) result += a;
    if (b) result += b;
    if (c) result += c;
    if (d) result += d;
    if (e) result += e;
    if (f) result += f;
    if (g) result += g;
    return result;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7)); //28
console.log(sum(1, 2, 3, 4, 5, 6)); //21

//-	하지만, 이것은 너무 복잡하고, 반대로 인자가 더 추가되면 합산이 안된다.
function sum(...hack) {
    return hack.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7)); //28
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); //45