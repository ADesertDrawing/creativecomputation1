/**
White towelling bathrobe
by A Desert Drawing
*/


"use strict";

let state = 'shooting'; //can be title etc...

let shootingBG;
let shootingBGclose;

//This is the guy's body
let guyBody = {
    x: undefined,
    y: undefined,
    size: 100
};
//This is the blood that appears at the mouse position
let blood = {
    x: 450,
    y: 300,
    size: 10,
};

//This is the gunshot sound which plays repeatedly
let gunsound;

function preload() {
    //Preloading the pics & gun sound
    shootingBG = loadImage('assets/images/shootingBG.png')
    shootingBGclose = loadImage('assets/images/shootingBGclose.png')
    gunsound = loadSound('assets/sounds/gunsound.mp3');
}

function setup() {
    createCanvas(900, 450);
    image(shootingBGclose, 0, 0);

    //Slow down the frame rate to separate out the shots 
    frameRate(10);

    //Makes an unseen circle to represent the victim's body
    //Not needed now as using the square
    // push();
    // guyBody.x = (550);
    // guyBody.y = (310);
    // noFill();
    // // noStroke();
    // ellipse(guyBody.x, guyBody.y, 280, 280);
    // pop();
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


    let leftWall = 443;
    let rightWall = 650;
    let topWall = 180;
    let bottomWall = 450;

    // gunsound.play();

    // xc is the mouseX, but constrained
    // yc is the mouseY, but constrained
    // between the leftWall, rightWall, topWall and bottomWall

    let xc = constrain(mouseX, leftWall, rightWall);
    let yc = constrain(mouseY, topWall, bottomWall);

    // Draw the walls.
    noStroke();
    line(leftWall, 0, leftWall, height);
    line(rightWall, 0, rightWall, height);
    line(0, topWall, width, topWall);
    line(0, bottomWall, width, bottomWall);

    // Draw xm and xc as circles.
    noStroke();
    fill(200, 0, 0);
    ellipse(xc, yc, 10, 10); // Constrained
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

