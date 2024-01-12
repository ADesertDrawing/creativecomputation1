/**
10.3_Polysynth
by A Desert Drawing
*/

"use strict";

let synth;
let notes = [`F2`, `G2`, `Ab3`, `Bb3`, `C3`, `Db3`, `Eb3`, `F3`]; //F-minor 
let currentNote = 0;

function setup() {
    createCanvas(600, 600);
    userStartAudio();
    synth = new p5.PolySynth();
}

function draw() {
    background(0);
}

function keyPressed() {
    setInterval(playRandomNote, 150);
}

function playRandomNote() {
    let note = notes[currentNote];
    synth.play(note, 1, 0, 0.1);

    currentNote = currentNote + 1;
    if (currentNote === notes.length) {
        currentNote = 0;
    }
}