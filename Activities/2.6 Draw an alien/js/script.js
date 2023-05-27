/**
2.6 Draw an alien
by A Desert Drawing

Drawing an alien to show off my muscles
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Draw the background blue
*/
function setup() {
    createCanvas(640,480);
    background(0, 153, 204);

//Draw the alien body
    noStroke();
    fill(120);
    ellipse(320, 450, 300, 400);

//Draw the alien head
    noStroke();
    fill(140);
    ellipse(320, 240, 200, 300);

//Draw the alien eyes
    noStroke();
    fill(0);
    ellipse(270, 240, 80, 150);
    ellipse(370, 240, 80, 150);

    //Draw the alien nostrils
    noStroke();
    fill(0);
    ellipse(305, 320, 20, 20);
    ellipse(335, 320, 20, 20);

    //Draw the alien mouth
    stroke(200,200,200);
    strokeWeight(2);
    rectMode(CENTER);
    rect(320, 360, 50, 30, 30);
}


/**
Description of draw()
*/
function draw() {

}