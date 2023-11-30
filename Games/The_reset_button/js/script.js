/**
The reset button
by A Desert Drawing
*/
"use strict";

let state = `buttonUp`; //can be buttonUp or buttonDown

//A small delay after showing the buttonDown to reverting to buttonUp
let x = frames;
let smallDelay;
let delayMax = 60;

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
    background(0);
    image(resetButtonUp, width / 2, height / 2, 300, 150);
}

//Show buttonDown image (offset to test if it's appearing)
function buttonDown() {
    image(resetButtonDown, width / 2 + 50, height / 2 + 50, 300, 150);

    if (!buttonSound.isPlaying()) {
        buttonSound.play();
    }

    while (smallDelay < delayMax) {
        smallDelay = smallDelay + 1;
    }
    //Set the state back to buttonUp to revert to original state
    state = `buttonUp`;

}
