// Abstraction  - Hode the details and complexity - SHOW THE ESSENTIALS

function Circle(radius) {
    this.radius = radius;

this.defaultLocation = { x: 0, y: 0 }; 

this.computeOptimumLocation = function(factor) {
    // ...
}

this.draw = function() {
    this.computeOptimumLocation();

        console.log('draw');
    }  
 }
const circle = new Circle(10); 
