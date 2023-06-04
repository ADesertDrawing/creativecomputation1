/**
3.5 Debugging variables
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
    circleX += circleSpeed;
    
    ellipse(circleX, circleY, circleSize);

    console.log(`circleX: ${circleX}), circleY: ${circleY}, circleSize: ${circleSize}`);

}
