/**
White towelling bathrobe
by A Desert Drawing
*/
"use strict";

let state = 'shooting'; //can be title etc...

let shootingBG;
let guyHead;
let guyRightArm;
let guyLeftArm;

//This is the guy's body
let guyBody = {
    x: undefined,
    y: undefined,
    size: 100
};
//This is the blood that appears at the mouse position
let blood = {
    x: undefined,
    y: undefined,
    size: 120
};



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
    image(guyHead, 0, 0);
    image(guyRightArm, 0, 0);
    image(guyLeftArm, 0, 0);
    // let guyHead = new GuyHead(0, 0);

    //Makes an unseen circle to represent the victim's body
    push();
    guyBody.x = (475);
    guyBody.y = (200);
    noFill();
    // noStroke();
    ellipse(guyBody.x, guyBody.y, 90, 180);
    pop();
}






function draw() {

    if (state === 'title') {
        title();
    }
    else if (state === 'scene1') {
        scene1();
    }
    else if (state === 'scene2') {
        scene2();
    }
    else if (state === 'scene3') {
        scene3();
    }
    else if (state === 'shooting') {
        shooting();
    }
    else if (state === 'mousePressed') {
        mousePressed();
    }

}

//Makes a bloody circle following the mouse position
function shooting() {
    blood.x = mouseX;
    blood.y = mouseY;
    push();
    fill(255, 0, 0);
    noStroke();
    ellipse(blood.x, blood.y, blood.size);
    pop();
}

function mousePressed() {
    if (state === 'title') {
        state = 'scene1';
    }
    else if (state === 'scene2') {
        state = 'scene3';
    }
    else if (state === 'scene3') {
        state = 'shooting';
    }
}

