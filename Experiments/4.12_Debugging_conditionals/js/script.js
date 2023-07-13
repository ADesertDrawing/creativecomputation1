/**
4.12 Debugging conditionals
by A Desert Drawing
*/

let circle = {
    x:250,
    y:250,
    size:100,
};

function setup() {
    createCanvas(500,500);
}

function draw() {
    background(0,0,0);

    if (mouseX >= width/2) {
        console.log("Mouse is to the right...");
        mouseIsLeft = false;
    }
    else {
        console.log("Mouse is to the left...");
        mouseIsLeft = true;
    }
    ellipse(circle.x,circle.y,circle.size);
}