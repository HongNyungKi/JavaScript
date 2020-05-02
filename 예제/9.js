//1
const value = 'hello';

function myFunction() {
    console.log('my function');
    console.log(value);
}

function otherFunction() {
    console.log('other function');
    const value = 'bye';
    console.log(value);
}

myFunction();
otherFunction();

console.log('global scope');
console.log(value);

//2
const value = 'hello';

function myFunction() {
    const value = 'bye';
    const otherValue = 'world';

    function functionInside() {
        console.log('function inside');
        console.log(value);
        console.log(otherValue);
    }
    functionInside();
}

myFunction();
console.log('global scope');
console.log(value);
console.log(otherValue);

//3
const value = 'hello';

function myFunction() {
    const value = 'bye';
    if (true) {
        const value = 'world';
        console.log('block scope');
        console.log(value);
    }
    console.log('function scope');
    console.log(value);
}

myFunction();
console.log('global scope');
console.log(value);