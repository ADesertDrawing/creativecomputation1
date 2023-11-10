/**
Title of Project
by A Desert Drawing
*/
"use strict";
let circle = {
    x: 300,
    y: 300,
    size: 100,
    angle: 0, // Facing right to start
    speed: 5 // Moving at 5 pixels per frame
};

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);

    handleInput();
    move();
    wrap();
    display();
}

// handleInput() steers the circle's angle with LEFT and RIGHT
// and makes the circle move with UP and stop otherwise
function handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
        // Turn LEFT if the LEFT arrow is pressed
        circle.angle -= 0.05;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        // Turn RIGHT if the RIGHT arrow is pressed
        circle.angle += 0.05;
    }

    if (keyIsDown(UP_ARROW)) {
        // Move if the UP ARROW is pressed
        circle.speed = 5;
    }
    else {
        // Don't move if the UP ARROW isn't pressed
        circle.speed = 0;
    }
}

// move() uses the polar coordinates formula to convert
// speed and angle to standard velocities
function move() {
    // The magical formula!
    let vx = circle.speed * cos(circle.angle);
    let vy = circle.speed * sin(circle.angle);

    // Move the circle with the calculated velocities
    circle.x += vx;
    circle.y += vy;
}

// wrap() checks if the circle has gone off the canvas and wraps it
// to the opposite edge
function wrap() {
    if (circle.x > width) {
        circle.x -= width;
    }
    else if (circle.x < 0) {
        circle.x += width;
    }

    if (circle.y > height) {
        circle.y -= height;
    }
    else if (circle.y < 0) {
        circle.y += height;
    }
}

// display() draws the circle with a "nose" so we can see which way
// it's facing
function display() {
    push();
    noStroke();
    // Because we're going to represent rotation, we should translate
    // to the circle's centre
    translate(circle.x, circle.y);
    // Then rotate by its angle
    rotate(circle.angle);
    // Draw the circle (at 0,0 because we translated)
    ellipse(0, 0, circle.size);
    // Then draw a rectangle that sticks out to the "right" of the circle, which
    // is the direction it faces by default
    rectMode(CENTER);
    rect(circle.size / 2, 0, circle.size / 2, circle.size / 10);
    pop();
}