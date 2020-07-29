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

// const findStudent = students.find((student) =>
//     student.score === 90)
// console.log(findStudent);

const findStudent = students.find(function (student) {
    return student.score === 90
})
console.log(findStudent);

const findStudent2 = students.find((student) =>
    student.name === 'B'
)
console.log(findStudent2);

const enrolledStudent = students.filter((student => student.enrolled));
console.log(enrolledStudent);

const mapStudent = students.map((student) => student.score);
console.log(mapStudent);

const someStudent = students.some((student) => student.score < 60);
console.log(someStudent); //true

const everyStudent = students.every((student) => student.score >= 50);
console.log(everyStudent); //false

const reduceStudent = students.reduce();
console.log(reduceStudent);