/**
The reset button 2
by A Desert Drawing
*/
"use strict";


// Setting up the images/sound for buttonUp/buttonDown
let resetButtonDown;
let resetButtonUp;

let buttonDownSound;
let buttonReleasedSound;

// Preloading the images and sounds
function preload() {
    resetButtonDown = loadImage(`assets/images/resetButtonDown.png`);
    resetButtonUp = loadImage(`assets/images/resetButtonUp.png`);

    buttonDownSound = loadSound(`assets/sounds/buttonDownSound.mp3`);
    buttonReleasedSound = loadSound(`assets/sounds/buttonReleaseSound.mp3`);
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    imageMode(CENTER);
    image(resetButtonUp, width / 2, height / 2, 300, 150);
}
//Setting up the states (only buttonUp and buttonDown)
function draw() {

}

//Mouseclick shown buttonDown image and plays first click
function mousePressed() {
    background(0);
    imageMode(CENTER);
    image(resetButtonDown, width / 2, height / 2, 300, 150);
    if (!buttonDownSound.isPlaying()) {
        buttonDownSound.play();
    }
}

//Mousebutton release shows buttonUp image and plays second click
function mouseReleased() {
    imageMode(CENTER);
    image(resetButtonUp, width / 2, height / 2, 300, 150);
    if (!buttonReleasedSound.isPlaying()) {
        buttonReleasedSound.play();
    }
}
