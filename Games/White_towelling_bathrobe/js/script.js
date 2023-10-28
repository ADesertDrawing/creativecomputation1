/**
White towelling bathrobe
by A Desert Drawing
*/

"use strict";

let state = 'title'; //can be title, scenes or shooting

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
    maxSize: 70,
    grow: 1,
    trail: [], //adding an array to remember where the blood is
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
}

function draw() {
    //Setting up the states
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
        //Adding background image here so it doesn't replace shots
        image(shootingBGclose, 0, 0);
        shooting();
    }
}

//Makes a bloody, growing circle following the mouse position
function shooting() {

    // Constrain the shots to the body area: trees don't bleed
    // Appear between leftWall, rightWall, topWall & bottomWall
    push();
    //Slow the shooting rate
    frameRate(7);
    let leftWall = 443;
    let rightWall = 650;
    let topWall = 180;
    let bottomWall = 450;

    // xc is the mouseX constrained
    // yc is the mouseY constrained
    let xc = constrain(mouseX, leftWall, rightWall);
    let yc = constrain(mouseY, topWall, bottomWall);

    // Draw the walls if you want to see them
    noStroke();
    line(leftWall, 0, leftWall, height);
    line(rightWall, 0, rightWall, height);
    line(0, topWall, width, topWall);
    line(0, bottomWall, width, bottomWall);

    // Draw circle with the xc and yc constraints
    noStroke();
    fill(200, 0, 0);
    blood.x = xc; //Draw the blood within the x constraints
    blood.y = yc; //Draw the blood within the y constraints


    blood.size = blood.size + blood.grow;

    blood.size = constrain(blood.size, blood.minSize, blood.maxSize);

    //Counting of i at zero and add one each time, moving along array
    for (let i = 0; i < blood.trail.length; i++) {
        //Pull out the position of the circle at the index of i
        let position = blood.trail[i];
        ellipse(position.x, position.y, blood.size);
    }

    ellipse(blood.x, blood.y, blood.size);

    let newTrailPosition = {
        x: blood.x,
        y: blood.y

    };

    //Add the most recent position (newTrailPosition) into array
    //Push adds the most recent position to the end of the array
    blood.trail.push(newTrailPosition);

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