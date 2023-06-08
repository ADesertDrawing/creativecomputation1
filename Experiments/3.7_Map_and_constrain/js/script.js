/**
3.7 Map and constrain
by A Desert Drawing

Description
*/

"use strict";


/**
Description of preload
*/
let backgroundShade = 0;
let circle = {
  x: 250,
  y: 250,
  size: 100,
  speed: 1,
  fill: 255
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(backgroundShade);
  circle.x = circle.x + circle.speed;
  fill(circle.fill); 
  ellipse(circle.x, circle.y, circle.size);
}