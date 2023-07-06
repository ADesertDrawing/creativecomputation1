/**
4.8 Intermediate drawing
by A Desert Drawing

Description
*/

"use strict";
let rectScale = 0;
let angle = 0;
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
background(100);
    push();
    fill(255,0,0);
    rectMode(CENTER);
    translate(width/2,height/2);
    rotate(angle);
    scale(rectScale);
    rect(0,0,100,100);
    pop();
    
    angle = angle + 0.01;
    rectScale = rectScale + 0.01;
    
}

