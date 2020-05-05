// 내가 입력한 값(파라미터)에 따라 다른 결과물 반환하기


// 1. if문 버전
function getSound(animal) {
    if (animal === '개') return '멍멍';
    if (animal === '고양이') return '야옹';
    if (animal === '비둘기') return '구구';
    return '...?';
}

console.log(getSound('개')); //멍멍
console.log(getSound('고양이')); //야옹
console.log(getSound('인간')); //...?


// 2. switch-case 버전
function getSound(animal) {
    switch (animal) {
        case '개':
            return '멍멍';
        case '고양이':
            return '야옹';
        case '비둘기':
            return '구구';

        default:
            return '...?';
    }
}

console.log(getSound('개')); //멍멍
console.log(getSound('비둘기')); //구구
console.log(getSound('인간')); //...?


//3. 객체 활용 버전
function getSound(animal) {
    const sounds = {
        개: '멍멍',
        고양이: '야옹',
        비둘기: '구구'
    }
    return sounds[animal] || '...?';
}

console.log(getSound('개')); //멍멍
console.log(getSound('고양이')); //야옹
console.log(getSound('인간')); //...?