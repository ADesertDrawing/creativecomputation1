/**
The reset button
by A Desert Drawing
*/
"use strict";

let state = `buttonUp`; //can be buttonUp or buttonDown

//A small delay after showing the buttonDown to reverting to buttonUp

let delay = 1000; // 1 second delay

// Setting up the images/sound for buttonUp/buttonDown/buttonSound
let resetButtonDown;
let resetButtonUp;

let buttonSound;

// Preloading the images and sounds
function preload() {
    resetButtonDown = loadImage(`assets/images/resetButtonDown.png`);
    resetButtonUp = loadImage(`assets/images/resetButtonUp.png`);
    buttonSound = loadSound(`assets/sounds/button.mp3`);
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    // setTimeout(buttonDown, 3000);
}
//Setting up the states (only buttonUp and buttonDown)
function draw() {
    if (state === `buttonUp`) {
        buttonUp();
    }
    else if (state === `buttonDown`) {
        buttonDown();
    }
}

//Mouseclick changes state to buttonDown
function mousePressed() {
    if (state === `buttonUp`) {
        state = `buttonDown`;
    }
}
//Show buttonUp image
function buttonUp() {
    background(255);
    image(resetButtonUp, width / 2, height / 2, 300, 150);
}

//Show buttonDown image (offset to test if it's appearing)
function buttonDown() {
    background(255);
    image(resetButtonDown, width / 2, height / 2, 300, 150);
    if (!buttonSound.isPlaying()) {
        buttonSound.play();
    }
    if (millis() > delay) { // wait for 1 second

        //Set the state back to buttonUp to revert to original state
        state = `buttonUp`;
    }
}
