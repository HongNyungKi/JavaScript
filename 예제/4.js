// 내가 입력한 값(파라미터)에 따라 다른 결과물 반환하기

function getSound(animal) {
    if (animal === '개') return '멍멍';
    if (animal === '고양이') return '야옹';
    if (animal === '비둘기') return '구구';
    return '...?';
}

console.log(getSound('개')); //멍멍
console.log(getSound('고양이')); //
console.log(getSound('인간'));