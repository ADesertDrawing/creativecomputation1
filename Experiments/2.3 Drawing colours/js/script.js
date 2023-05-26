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
    
    background(250);

    stroke(220);
    fill(200);
    triangle(130, 250, 60, 380, 200, 380);
    fill(100);
    triangle(130, 250, 200, 380, 220, 350);

    noStroke(); 	

    fill(200);
    triangle(330, 250, 260, 380, 400, 380);
    fill(100);
    triangle(330, 250, 400, 380, 420, 350);



    fill(200);
    triangle(230, 300, 160, 430, 300, 430);
    fill(100);
    triangle(230, 300, 300, 430, 320, 400);

    stroke(220);
    strokeWeight(10);
    line(0,100, 500, 90);
 
}


/**
Description of draw()
*/
function draw() {

}