// 특정 값이 여러 값들 중 하나인지 확인하는 법



// 1. 논리연산자(||) 활용버전
function animal(text) {
    return (text === '고양이' || text === '개' || text === '비둘기');
}

console.log(animal('개')); // true
console.log(animal('인간')); // false

//2. 배열 내장함수(includes) 활용버전
function animal(text) {
    const animals = ['개', '고양이', '비둘기'];
    return animals.includes(text);
}

console.log(animal('개')); // true
console.log(animal('고라니')); // false

//3. 배열 내장함수(includes)활용 버전 + 화살표 함수 적용
const animals = (text) => ['개', '고양이', '비둘기'].includes(text);

console.log(animals('개')) // true
console.log(animals('고라니')); // false