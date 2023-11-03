/**
White towelling bathrobe
by A Desert Drawing
*/

"use strict";

let state = 'title'; //can be title, scenes or shooting

let waitAMinute;
let pullingUp;
let missedYou;
let weWont;
let uhOh;
let preShoot;
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
    maxSize: 100,
    grow: 1,
    trail: [], //adding an array to remember where the blood is
};

//This is the gunshot sound which plays repeatedly
let gunsound;

function preload() {
    //Preloading the pics & gun sound
    waitAMinute = loadImage('assets/images/0_WaitAMinute.png');
    pullingUp = loadImage('assets/images/1_pulling_up.png');
    missedYou = loadImage('assets/images/2_IThoughtIdMissedYou.png');
    weWont = loadImage('assets/images/3_WeWont.png');
    uhOh = loadImage('assets/images/4_UhOh.png');
    preShoot = loadImage('assets/images/5_PreShooting.png');
    shootingBGclose = loadImage('assets/images/shootingBGclose.png');
    gunsound = loadSound('assets/sounds/gunsound.mp3');
}

function setup() {
    createCanvas(800, 450);
    background(0);

}

function draw() {
    //Setting up the states
    if (state === 'title') {
        title();
    }
    if (state === 'scene0') {
        scene0();
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
    else if (state === 'scene4') {
        scene4();
    }
    else if (state === 'scene5') {
        scene5();
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
        state = 'scene0';
    }
    else if (state === 'scene0') {
        state = 'scene1';
    }
    else if (state === 'scene1') {
        state = 'scene2';
    }
    else if (state === 'scene2') {
        state = 'scene3';
    }
    else if (state === 'scene3') {
        state = 'scene4';
    }
    else if (state === 'scene4') {
        state = 'scene5';
    }
    else if (state === 'scene5') {
        state = 'shooting';
    }
}

function title() {
    background(0);
    push();
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(`White towelling bathrobe`, width / 2, height / 2);
    textSize(24);
    fill(150);
    text(`Click to start`, width / 2, height / 2 + 100);
    pop();
}

function scene0() {
    //Adding the background image
    image(waitAMinute, 0, 0);
    push();
    textSize(24);
    fill(255);
    textAlign(CENTER, 100);
    text(`Wait a minute!`, width / 2, 80);
    pop();
}

function scene1() {
    //Adding the background image
    image(pullingUp, 0, 0);
    // push();
    // textSize(24);
    // fill(80);
    // textAlign(CENTER, CENTER);
    // text(`This is scene 1\n Click to continue.`, width / 2, height / 2 - 50);
    // pop();
}

function scene2() {
    //Adding the background image
    image(missedYou, 0, 0);
    push();
    textSize(24);
    fill(255);
    textAlign(CENTER, CENTER);
    text(`I was afraid\nyou'd miss me`, width / 2 - 70, 50);
    pop();
}

function scene3() {
    //Adding the background image
    image(weWont, 0, 0);
    push();

    textSize(24);
    fill(255);
    textAlign(CENTER, CENTER);
    text(`Don't worry.`, width / 2 - 110, height / 2 + 30);
    pop();
}

function scene4() {
    //Adding the background image
    image(uhOh, 0, 0);
    // push();
    // textSize(24);
    // fill(80);
    // textAlign(CENTER, CENTER);
    // text(`This is scene 4\n Click to continue.`, width / 2, height / 2 + 150);
    // pop();
}

function scene5() {
    //Adding the background image
    image(preShoot, 0, 0);
    push();
    textSize(24);
    fill(255);
    textAlign(CENTER, CENTER);
    text(`We won't`, width / 2 - 80, height / 2 - 30);
    pop();
}