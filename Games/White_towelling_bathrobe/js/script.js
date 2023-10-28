/**
White towelling bathrobe
by A Desert Drawing
*/


"use strict";

let state = 'title'; //can be title etc...

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
    size: 20,
    minSize: 20,
    maxSize: 40,
    grow: 1,
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
    background(0);

    //Slow down the frame rate to separate out the shots 


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
        image(shootingBGclose, 0, 0);
        shooting();
    }
}

//Makes a bloody circle following the mouse position
function shooting() {

    push();
    frameRate(8);
    let leftWall = 443;
    let rightWall = 650;
    let topWall = 180;
    let bottomWall = 450;



    // Need to constrain the shots to the body area cos trees don't bleed
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
    ellipse(xc, yc, blood.size); // Constrained

    blood.size = blood.size + blood.grow;

    blood.size = constrain(blood.size, blood.minSize, blood.maxSize);

    gunsound.play();
    pop();
}



function mousePressed() {
    if (state === 'title') {
        state = 'scene1';
    }
    else if (state === 'scene1') {
        state = 'scene2';
    }
    else if (state === 'scene2') {
        state = 'scene3';
    }
    else if (state === 'scene3') {
        state = 'shooting';
    }
}

function title() {
    push();
    textSize(24);
    fill(80);
    textAlign(CENTER, CENTER);
    text(`White towelling bathrobe\n Click to start.`, width / 2, height / 2 - 150);
    pop();
}

function scene1() {
    push();
    textSize(24);
    fill(80);
    textAlign(CENTER, CENTER);
    text(`This is scene 1\n Click to continue.`, width / 2, height / 2 - 50);
    pop();
}

function scene2() {
    push();
    textSize(24);
    fill(80);
    textAlign(CENTER, CENTER);
    text(`This is scene 2\n Click to continue.`, width / 2, height / 2 + 50);
    pop();
}

function scene3() {
    push();
    textSize(24);
    fill(80);
    textAlign(CENTER, CENTER);
    text(`This is scene 3\n Click to continue.`, width / 2, height / 2 + 150);
    pop();
}