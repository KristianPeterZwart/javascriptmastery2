
let person = { name: 'Kris' };

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: false
});

delete person.name

console.log(person);