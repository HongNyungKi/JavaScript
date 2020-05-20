// 비구조화 할당

// 1. 객체 비구조화 할당 문법 : 객체의 값 꺼내기
const object = {
    a: 1,
    b: 2
};
const {
    a,
    b
} = object;

console.log({
    a,
    b
});
console.log(a);
console.log(b);

// +기본값 적용하여 쓰기
const object = {
    a: 1
};
const {
    a,
    b = 2
} = object;

console.log({
    a,
    b
});
console.log(a);
console.log(b);


//2. 객체 비구조화 할당 문법 : 함수에서 객체의 값 꺼내기
const object = {
    a: 1,
    b: 2
};

function print({
    a,
    b
}) {
    console.log(a);
    console.log(b);
}
print(object);

// +기본값 적용하여 쓰기
const object = {
    a: 1
};

function print({
    a,
    b
}) {
    console.log(a);
    console.log(b || 2);
}
print(object);

// +기본값 적용하여 쓰기
const object = {
    a: 1
};

function print({
    a,
    b = 2
}) {
    console.log(a);
    console.log(b);
}
print(object);

// 3. 객체의 특정 요소 가져오기
const animal = {
    name: '뺀질이',
    type: '개'
};
const nickName = animal.name;
console.log(nickName);

// 이것을 비구조화 할당하면, 
const animal = {
    name: '뺀질이',
    type: '개'
};
const {
    name: nickName
} = animal;
console.log(nickName);


//  4. 배열에서의 비구조화 할당
const array = [1, 2];
const one = array[0];
const two = array[1];
console.log(one);
console.log(two);

// 이것을 비구조화 할당하면
const array = [1, 2];
const [one, two] = array;
console.log(one);
console.log(two);

//기본값 적용 시
const array = [1];
const [one, two = 2] = array;
console.log(one);
console.log(two);