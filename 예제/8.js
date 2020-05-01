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