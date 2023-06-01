/**
Title of Project
by A Desert Drawing

Description
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
    
}


/**
Description of draw()
*/
function draw() {
    background(mouseX, mouseY, mouseX/2);
    rectMode(CENTER);
    rect(mouseX, mouseY, mouseX, mouseY);

}