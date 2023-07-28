/**
6.2 use strict
by A Desert Drawing
*/

"use strict";

let circle = {
    x: 0,
    y: 0,
    size: 100
}

function setup() {
    createCanvas(500,500);

}

function draw() {
    background(0,0,0);
circle.x = mouseX;
circley = mouseY;
    ellipse(circle.x,circle.y,100);
}