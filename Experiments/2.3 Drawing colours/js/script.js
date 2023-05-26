/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(500, 500);
    
    background(255, 127, 0);

    fill(128, 159, 255);
    triangle(130, 250, 60, 380, 200, 380);
    fill(46, 74, 158);
    triangle(130, 250, 200, 380, 220, 350);

    noStroke(); 	

    fill(255, 255, 51);
    triangle(330, 250, 260, 380, 400, 380);
    fill(153, 153, 0);
    triangle(330, 250, 400, 380, 420, 350);



    fill(128, 159, 255, 150);
    triangle(230, 250, 160, 380, 300, 380);
    fill(46, 74, 158, 150);
    triangle(230, 250, 300, 380, 320, 350);

    stroke(51, 204, 51);
    strokeWeight(10);
    line(0,100, 500, 90);
 
}


/**
Description of draw()
*/
function draw() {

}