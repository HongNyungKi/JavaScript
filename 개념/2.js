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
//만약, person이 null이나 undefined와 같이 비어 있는 값일 경우 if문의 조건이 참이 되어 아무것도 안하는 return을 하게되고, 
//person이 어떠한 값이 라도 있는경우, if문은 실행되지 않고 바로 console.log가 실행되는 원리이다. 