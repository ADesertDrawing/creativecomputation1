/**
10.2_p5_Oscillator
by A Desert Drawing
*/

"use strict";

let oscillator;
let t = 0;

function setup() {
    createCanvas(600, 600);
    userStartAudio();

    oscillator = new p5.Oscillator(440, `sine`);
    oscillator.amp(0.2);
}

function draw() {
    background(0, 0, 0);
    let noiseValue = noise(t);

    //Put that into our variable called `newFreq`
    let newFreq = map(noiseValue, 0, 1, 20, 2000);
    //Set the newFreq as the frequency of our oscillator
    oscillator.freq(newFreq);
    t = t + 0.05;
}

function mousePressed() {
    oscillator.start();
}

function mouseReleased() {
    oscillator.stop();
}