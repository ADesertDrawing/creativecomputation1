/**
The reset button
by A Desert Drawing
*/
"use strict";

let state = `buttonUp`; //can be buttonUp or buttonDown

let resetButtonDown;
let resetButtonUp;
let buttonSound;





function preload() {
    resetButtonDown = loadImage(`assets/images/resetButtonDown.png`);
    resetButtonUp = loadImage(`assets/images/resetButtonUp.png`);
    buttonSound = loadSound(`assets/sounds/button.mp3`);
}
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {

    if (state === `buttonUp`) {
        buttonUp();
    }
    else if (state === `buttonDown`) {
        buttonDown();
    }
}

function buttonUp() {
    image(resetButtonUp, 0, 0, 600, 300);
}

function buttonDown() {
    image(resetButtonDown, 0, 0, 600, 300);
    buttonSound.play();
}

function mousePressed() {
    if (state === `buttonUp`) {
        image(resetButtonUp, 0, 0, 600, 300);
    }
    else if (state === `buttonDown`) {
        image(resetButtonDown, 0, 0, 600, 300);
        buttonSound.play();
    }
}