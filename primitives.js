
let x = 10;
let y = x;

x = 20;

let x = { value: 10 };
let y = x;

x.value = 20;

// When we use an object it is not stored in this variable, 
// stored somewhere else in memory

// PRIMITIVES are copied by their VALUE
// OBJECTS are copied by their REFERENCE


let number = 10;

function increase(number) {
    number++;
}

// Leaves the script here 

increase(number);
console.log(number);

// Result = 10 no matter what

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

// Result = 11 - When we call object - Increase is passed by reference

// 2 variables pointing to same objects