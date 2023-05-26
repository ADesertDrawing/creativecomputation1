/**
Drawing experiments
by A Desert Drawing

Experimenting with p5's drawing and color functions.
Currently greyscale pyramid scene (scheme).
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Draws some pyramids and a horizon
*/
function setup() {
    createCanvas(500, 500);
    //Set background to off-white
    background(250);

    //Draw left Pyramid
    stroke(220);
    fill(200);
    triangle(130, 250, 60, 380, 200, 380);
    fill(100);
    triangle(130, 250, 200, 380, 220, 350);

    //Draw right pyramid
    noStroke(); 	
    fill(200);
    triangle(330, 250, 260, 380, 400, 380);
    fill(100);
    triangle(330, 250, 400, 380, 420, 350);


    //Draw middle pyramid
    fill(200);
    triangle(230, 300, 160, 430, 300, 430);
    fill(100);
    triangle(230, 300, 300, 430, 320, 400);

    //Draw horizon
    stroke(220);
    strokeWeight(10);
    line(0,100, 500, 90);
 
}


/**
Does nothing
*/
function draw() {

}