// Object Orientated Programming
// Object Literals - stop using var - let or const (cannot ressign cons) use let if so
// Learn about key value pairs

// draw is a method
// radius and location are properties

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function() {
        console.log('draw');
    }
}; 

circle.draw();