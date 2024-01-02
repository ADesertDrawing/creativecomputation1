/**
Problem / Solution
by A Desert Drawing
*/
"use strict";

let scalesBottom;
let scalesTop;
let rotation = 0;
let rotationSpeed = 0;

function preload() {
    //Preloading the base bg layer and the top scales layer
    scalesBottom = loadImage('assets/images/prob_sol_bottom_1000x700.png');
    scalesTop = loadImage('assets/images/prob_sol_top_1000x700.png');
}

function setup() {
    createCanvas(1000, 700);
}

function draw() {
    background(255);

    //Centre the scales
    let centerX = width / 2;
    let centerY = height / 2;

    //Smooth movement
    rotation += rotationSpeed;
    rotationSpeed *= 0.98;

    //Constrain the movement 
    if (mouseIsPressed === true) {
        rotation = constrain(rotation, -radians(20), radians(20));
    }
    else if (rotation <= 20 && rotation > 0) {
        rotation = constrain(rotation, -radians(20), radians(0));
    }
    else if (rotation >= -20 && rotation < 0) {
        rotation = constrain(rotation, -radians(0), radians(20));
    }


    //Draw top rotating layer
    push();
    translate(centerX, centerY);
    rotate(rotation);
    imageMode(CENTER);
    image(scalesTop, 0, -15);
    pop();

    //Draw bottom static layer (the base)
    push();
    translate(centerX, centerY);
    imageMode(CENTER);
    image(scalesBottom, 0, -15);
    pop();
}

function mousePressed() {
    //If mouse pressed on right
    if (mouseX > width / 2) {
        rotationSpeed = radians(1);
    }
    //If mouse pressed on left
    else if (mouseX < width / 2) {
        rotationSpeed = radians(-1);
    }
}
function mouseReleased() {
    //If down on right
    if (rotation <= 20 && rotation > 0) {
        rotationSpeed = radians(-1);
        constrain(rotation, 0, 0);
    }
    else if (rotation >= -20 && rotation < 0) {
        rotationSpeed = radians(1);
        constrain(rotation, -20, 0);
    }

}