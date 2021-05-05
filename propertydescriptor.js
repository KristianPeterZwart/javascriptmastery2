
let person = { name: 'Kris' };
let objectBase = Object.getPrototypeOf(person); 
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);