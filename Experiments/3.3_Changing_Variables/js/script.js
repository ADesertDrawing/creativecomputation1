/**
3.2 creating variables
by A Desert Drawing
*/

"use strict";

let backgroundShade=0;
let circleSize=150;
let circleX=0;
let circleY=250;
let circleSpeed=2;

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

    background(backgroundShade);
    circleX = circleX+circleSpeed;
    ellipse(circleX, circleY, circleSize);
}
