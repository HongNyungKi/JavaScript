//Truthy 와 Falsy

//Null Checking
function print(person){
if(person===undefined||person===null){
    return ;
}
console.log(person.name);
}

const person = {
    name:'Hong'
}

print(person);

//상위의 null checking함수를 더욱 간단하게 하기 위해
function print(person){
if(!person){
    return;
}
console.log(person.name);
}

const person = {name:'hong'}

print(person);