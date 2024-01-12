/**
10.3_Polysynth
by A Desert Drawing
*/

"use strict";

let synth;

function setup() {
    createCanvas(600, 600);
    userStartAudio();
    synth = new p5.PolySynth();
}

function draw() {
    background(0);
}

function mousePressed() {
    synth.play(`C4`, 1, 0, 1);
}