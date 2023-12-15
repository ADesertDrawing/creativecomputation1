/**
10.2_p5_Oscillator
by A Desert Drawing
*/

"use strict";

let oscillator;

function setup() {
    createCanvas(500, 500);
    userStartAudio();

    oscillator = new p5.Oscillator(440, `sine`);
}

function draw() {
    background(0, 0, 0);

    let newFreq = map(mouseY, height, 0, 0, 880);
    oscillator.freq(newFreq);
}

function mousePressed() {
    oscillator.start();
}

function mouseReleased() {
    oscillator.stop();
}