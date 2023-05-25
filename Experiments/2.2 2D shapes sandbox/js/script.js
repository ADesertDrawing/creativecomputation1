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
    createCanvas(500,500);
    background(255,255,255);
    stroke(10);
    strokeWeight(1);
    circle(145, 330, 280);
    circle(145, 330, 250);
    
    line(0,100, 500, 90);
    line(20, 350, 270, 340);
    triangle(130, 250, 60, 380, 200, 380);
    triangle(130, 250, 200, 380, 220, 350);
  
    triangle(410, 50, 380, 110, 440, 110);
    triangle(410, 50, 440, 110, 449, 97);
    
    line(105, 195, 314, 141);
    line(267, 400, 370, 165);

    noFill();
    arc(335, 165, 70, 60, PI + QUARTER_PI, TWO_PI);
}


/**
Description of draw()
*/
function draw() {

}