/**
Problem / Solution
by A Desert Drawing
*/

"use strict";
let angle = 0;
let rotationSpeed = .1;
let rotating = false;
let scalesTop;
let scalesBottom;

function preload() {
    scalesTop = loadImage('assets/images/prob_sol_top_1000x700.png');
    scalesBottom = loadImage('assets/images/prob_sol_bottom_1000x700.png');
}

function setup() {
    createCanvas(1000, 700);
    imageMode(CENTER);
}

function draw() {
    background(255);

    //Shift the point of reference to the middle
    translate(width / 2, height / 2);

    // Draw non-rotating bottom layer
    push();
    image(scalesBottom, 0, -15);
    pop();

    // Draw rotating top layer
    rotate(radians(angle));
    image(scalesTop, 0, -15);

    // If mouse is pressed on right
    if (mouseIsPressed && mouseX > width / 2) {
        rotating = true;
        angle += rotationSpeed;
        angle = constrain(angle, 0, 20);
    }

    // If mouse is pressed on left
    if (mouseIsPressed && mouseX < width / 2) {
        rotating = true;
        angle -= rotationSpeed;
        angle = constrain(angle, -20, 0);
    }

    // If mouse is released
    if (!mouseIsPressed && rotating) {
        // Gradually rotate back to 0 degrees
        if (angle > 0) {
            angle -= rotationSpeed * 4;
            angle = max(angle, 0);
        } else if (angle < 0) {
            angle += rotationSpeed * 4;
            angle = min(angle, 0);
        }
    }
}