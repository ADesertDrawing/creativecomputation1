/**
The reset button
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

//Showing the buttonUp image initially
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    imageMode(CENTER);
    image(resetButtonUp, width / 2, height / 2, 300, 150);
    push();
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(`The Reset Button.`, width / 2, height / 2 - 250);
    textSize(24);
    fill(150);
    text(`It does whatever you need it to.`, width / 2, height / 2 + 300);
    pop();
}

function draw() {

}

//Mouseclick shown buttonDown image and plays first click
function mousePressed() {
    background(0);
    push();
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(`The Reset Button.`, width / 2, height / 2 - 250);
    textSize(24);
    fill(150);
    text(`Use it for whatever you need it for.`, width / 2, height / 2 + 300);
    pop();
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
