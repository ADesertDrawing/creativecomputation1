/**
White towelling bathrobe
by A Desert Drawing
*/
"use strict";

let state = 'shooting';

let shootingBG;
let guyBody;
let guyHead;
let guyRightArm;
let guyLeftArm;


//This is a red blood circle
let shot = {
    x: undefined,
    y: undefined,
    size: 100
};
//This is the guy in the bathrobe. He gets shot. A lot.
let guy = {
    x: undefined,
    y: undefined,
    size: 100
};

//This is the gunshot sound which plays repeatedly
let gunsound;

function preload() {
    //Preloading the pics & gun sound
    shootingBG = loadImage('assets/images/shootingBG.jpg')
    guyBody = loadImage('assets/images/shootingBody.png')
    guyHead = loadImage('assets/images/shootingHead.png')
    guyRightArm = loadImage('assets/images/shootingRight.png')
    guyLeftArm = loadImage('assets/images/shootingLeft.png')

    gunsound = loadSound('assets/sounds/gunsound.mp3');
}



function setup() {
    createCanvas(900, 450);
    //Makes an unseen circle to represent where the guy's body is
    push();
    guy.x = (400, 600);
    guy.y = (100, 800);
    fill(255);
    stroke(0);
    ellipse(guy.x, guy.y, guy.size);
    pop();

}



function draw() {
    if (state === 'shooting') {
        shooting();
    }
}

function shooting() {
    image(shootingBG, guyBody, guyHead, guyRightArm, guyLeftArm);

    gunsound.play();

    shot.x = mouseX;
    shot.y = mouseY;
    push();
    fill(255, 0, 0);
    noStroke();
    ellipse(guy.x, guy.y, guy.size);
    pop();

}
stop();
