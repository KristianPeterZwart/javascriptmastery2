// Factory Function - return 
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
        };
    } 

const circle = createCircle(1);

// Constructor Function - this
function Circle(radius) {
   this.radius = radius;
   this.draw = function() {
       console.log('draw');
   }  
}
const another = new Circle(1); 

// In JS functions are objects

// VALUE TYPES                  REFERENCE TYPES
// Number                       Object
// String                       Function
// Boolean                      Array
// Symbol
// Undefined
// Null