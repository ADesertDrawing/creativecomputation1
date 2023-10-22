/**
White towelling bathrobe
by A Desert Drawing
*/
"use strict";

// let state = 'shooting';

let shootingBG;
let guyHead;
let guyRightArm;
let guyLeftArm;



//This is the gunshot sound which plays repeatedly
let gunsound;

function preload() {
    //Preloading the pics & gun sound
    shootingBG = loadImage('assets/images/shootingBGBody.png')
    guyHead = loadImage('assets/images/shootingHead.png')
    guyRightArm = loadImage('assets/images/shootingRight.png')
    guyLeftArm = loadImage('assets/images/shootingLeft.png')
    gunsound = loadSound('assets/sounds/gunsound.mp3');
}

function setup() {
    createCanvas(900, 450);
    image(shootingBG, 0, 0);
    // let guyHead = new GuyHead(0, 0);

}

function draw() {
    image(guyHead, 0, 0);
    image(guyRightArm, 0, 0);
    image(guyLeftArm, 0, 0);
    // guyHead.move();
    // guyHead.display();
}


