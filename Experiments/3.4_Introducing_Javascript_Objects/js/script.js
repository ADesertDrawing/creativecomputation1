/**
3.4 Introducing Javascript Objects
by A Desert Drawing
*/

"use strict";

let backgroundShade=0;

let circle = {
   x:0, 
   y:250,
   size: 200,
   speed:2
};

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
    circle.x += circle.speed;
     ellipse(circle.x, circle.y, circle.size);
}
