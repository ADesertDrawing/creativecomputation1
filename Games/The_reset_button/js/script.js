/**
The reset button
by A Desert Drawing
*/
"use strict";

let resetButtonDown;
let resetButtonUp;
let button;
let buttonUp;
let buttonDown;

function preload() {
    resetButtonDown = loadImage(`assets/images/resetButtonDown.png`);
    resetButtonUp = loadImage(`assets/images/resetButtonUp.png`);
    button = loadSound(`assets/sounds/button.mp3`);
}
function setup() {
    createCanvas(1200, 600);
}

function draw() {
    image(resetButtonUp, 0, 0);
}

function buttonDown() {
    image(resetButtonDown, 0, 0);
    button.play();
}

function mousePressed() {
    buttonDown();
}