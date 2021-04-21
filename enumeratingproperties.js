
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }  
 }
 const circle = new Circle(10); 

 for (let key in circle) {
     if (typeof circle[key] !== 'function')
     console.log(key, circle[key]);
 }
 
const keys = Object.keys(circle);  // returns all keys in the object as a array
console.log(keys);

if ('radius' in circle)
console.log('Circle has a radius.')