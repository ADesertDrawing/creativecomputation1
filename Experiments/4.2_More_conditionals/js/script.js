/**
4.2 More conditionals:
"Does exactly waht it says on the 'if' statement"
by A Desert Drawing
*/

"use strict";

let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(backgroundShade);

  circle.x = circle.x + circle.speed;

    fill(255,255,255);
    if (!(circle.x < width/3)) {
            fill(255,0,0);
        }
    


  ellipse(circle.x,circle.y,circle.size);
}