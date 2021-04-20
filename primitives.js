
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

increase(number);
console.log(number);