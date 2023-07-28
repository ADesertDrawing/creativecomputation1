/**
6.1 Basic sound
by A Desert Drawing
*/

let music;

function preload() {
    music = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
    createCanvas(500,500);

}

function draw() {
    background(0);
}

function mousePressed() {
    tryMusic();
    }

function keyPressed() {
    tryMusic();
    }

function tryMusic() {
    if (!music.isPlaying()) {
    music.loop();
}
}
