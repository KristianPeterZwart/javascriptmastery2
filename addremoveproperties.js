
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }  
 }

 const another = new Circle(10); 

circle.location = { x: 1 }; //  . notation       EXACTLY THE SAME
circle['location'] = { x: 1 } // bracket notation EXACTLY THE SAME

const propertyName = 'center location';
circle[propertyName] = { x: 1 };

delete circle.location; // use . or {}
 