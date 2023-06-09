/**
4.3 Booleans
by A Desert Drawing


*/

"use strict";

let displayCircle = false;

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
    background(0);

    if (mouseIsPressed) {

        displayCircle = true;
    }

  if (displayCircle) {
    ellipse(250,250,100,100);
  }
}