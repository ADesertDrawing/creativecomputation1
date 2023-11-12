/**
Survive!
by A Desert Drawing
*/


"use strict";
let timer = 0;

function setup() {
    createCanvas(500, 500);

}

function draw() {
    background(220);
    textSize(20);

    text(round(timer, 2), 200, 200);
    timer += 1 / 60;
}