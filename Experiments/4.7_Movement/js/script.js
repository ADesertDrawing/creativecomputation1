/**
4.7 Movement
by A Desert Drawing

Description
*/

"use strict";

let circle = {
    x:0,
    y: 250,
    size: 100,
    vx:0,
    vy:0,
    speed:5
}

/**
Description of setup
*/
function setup() {
    createCanvas(500,500);
    
}


/**
Description of draw()
*/
function draw() {
    background(0,0,0);

    if (mouseX < circle.x) {
        circle.vx=-circle.speed;
    }

    else {
        circle.vx = circle.speed;
    }

    if (mouseY < circle.y) {
        circle.vy = -circle.speed;
    }

    else {
        circle.vy = circle.speed;
    }
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;

    ellipse(circle.x,circle.y,circle.size);
}