/**
3.2 creating variables
by A Desert Drawing


*/

"use strict";

let backgroundShade=0;
let circleSize=200;
let circleX=250;
let circleY=250;


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
    ellipse(circleX, circleY, circleSize);
}