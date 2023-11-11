/**
Movement with polar coordinates
by A Desert Drawing
*/
"use strict";
let circle = {
    x: 300,
    y: 300,
    size: 100,
    angle: 0, // Facing right to start
    speed: 0, // Start out not moving
    maxSpeed: 10, // Moving at 5 pixels per frame
    acceleration: 0.1, // How much velocity is gained when accelerating
    braking: -0.5, // How much velocity is lost when breaking
    drag: -0.05 // How much velocity is lost when neither accelerating nor braking
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
        // Accelerate forward if the UP ARROW is pressed
        circle.speed += circle.acceleration;
        circle.speed = constrain(circle.speed, 0, circle.maxSpeed);
    }
    // Brake if the DOWN ARROW is pressed
    else if (keyIsDown(DOWN_ARROW)) {
        circle.speed += circle.braking;
        circle.speed = constrain(circle.speed, 0, circle.maxSpeed);
    }
    else {
        // Apply drag if neither are pressed
        circle.speed += circle.drag;
        circle.speed = constrain(circle.speed, 0, circle.maxSpeed);
    }
}

function move() {
    // The magical formula!
    let vx = circle.speed * cos(circle.angle);
    let vy = circle.speed * sin(circle.angle);

    // Move the circle with the calculated velocities
    circle.x += vx;
    circle.y += vy;
}

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