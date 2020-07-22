// join : 배열을 string으로 변환하기
const fruits1 = ['apple', 'banana', 'orange'];
let result = fruits1.join();
console.log(result); // apple,banana,orange
result = fruits1.join(' and ');
console.log(result); // apple and banana and orange

// split : 주어진 string을 배열을 변환하기
const fruits2 = 'apple,banana,orange,cherry';
result = fruits2.split();
console.log(result); //["apple,banana,orange,cherry"]
result = fruits2.split(',');
console.log(result); //["apple", "banana", "orange", "cherry"]
result = fruits2.split(',', 2);
console.log(result); //["apple", "banana"]

//reverse : 배열의 순서를 거꾸로 만들기
const array = [1, 2, 3, 4, 5];
result = array.reverse();
console.log(result); //[5, 4, 3, 2, 1]
console.log(array); //[5, 4, 3, 2, 1] 배열자체를 변환시킨다. 

// slice : 배열의 특정한 부분을 골라서 새로운 배열 만들기
// splice처럼 배열 자체를 수정하는 것이 아닌, 해당배열에서 원하는 부분만 가져와 새로이 만드는것이다. 
const numbers = [1, 2, 3, 4, 5];
const splice = numbers.splice(0, 2);
console.log(numbers); //[3, 4, 5]
console.log(splice); //[1,2]

const newNumbers = [1, 2, 3, 4, 5];
const slice = newNumbers.slice(2, 5);
console.log(slice); //[3, 4, 5]
console.log(newNumbers); //[1, 2, 3, 4, 5]

// 점수가 90점인 학생찾기 
// find 
// 정확한 사용법 살펴보기!
class Students {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Students('A', 29, true, 45),
    new Students('B', 28, false, 80),
    new Students('C', 30, true, 90),
    new Students('D', 40, false, 66),
    new Students('E', 18, true, 88),
]
console.log(students);

const findStudent = students.find((student) =>
    student.score === 90)
console.log(findStudent);

// enrolled 가 true인 사람만 찾기
// filter
const filterStuedens = students.filter((student) =>
    student.enrolled
);
console.log(filterStuedens);

//학생들의 점수만 들어있는 새로운 배열 만들기
// map : 배열안의 요소 한가지한가지를 다른것으로 변환해주는것
//즉, 배열안의 요소들을 내가 원하는 함수를 이용,적용 해서 다른 방식의 data를 만들고싶을때 사용한다. 
const mapStudent = students.map((student) => student.score);
console.log(mapStudent);

//학생들중 점수가 50보다 낮은 사람이 있는지 확인하기 
// some
// every는 조건을 모두 충족할때만 true를 리턴한다. 
const someStudents = students.some((student) => student.score < 50);
console.log(someStudents); //true
const someStudents2 = students.every((student) => student.score >= 50);
console.log(someStudents2); //false

//학생들의 평균점수 구하기
// reduce : 배열의 있는 값을 누적할때 사용
const reduceStudents = studens.reduce();