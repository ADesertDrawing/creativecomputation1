/**
The reset button
by A Desert Drawing
*/
"use strict";
// let state = buttonUp; //can be buttonUp or buttonDown

let resetButtonDown;
let resetButtonUp;
let buttonSound;
// let buttonIsUp;
// let buttonIsDown;



function preload() {
    resetButtonDown = loadImage(`assets/images/resetButtonDown.png`);
    resetButtonUp = loadImage(`assets/images/resetButtonUp.png`);
    buttonSound = loadSound(`assets/sounds/button.mp3`);
}
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    image(resetButtonUp, 0, 0, 1200, 600);
    mousePressed();

}

function mousePressed() {
    push();
    // clear();
    resetButtonUp.hide();
    image(resetButtonDown, 0, 0, 1200, 600);
    buttonSound.play();
    delayTime(0.5);
    pop();
    clear();
}


