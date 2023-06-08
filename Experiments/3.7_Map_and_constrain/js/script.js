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
  x: 0,
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
  circle.x = constrain(circle.x,0,width);
  circle.size = map(mouseY,0,height,500,50);
  circle.fill = map(circle.x,0,width, 0, 255);
  fill(circle.fill); 
  ellipse(circle.x, circle.y, circle.size);
}