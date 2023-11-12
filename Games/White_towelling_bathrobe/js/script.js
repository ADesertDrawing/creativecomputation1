/**
White towelling bathrobe
by A Desert Drawing
*/

"use strict";

let state = 'title'; //can be title, scenes, shooting or blackScreen

let waitAMinute;
let pullingUp;
let missedYou;
let weWont;
let uhOh;
let preShoot;
let shootingBGclose;
//NEW Set a max maxBloodTrailLength to move on to blackScreen when it reaches it
let maxBloodTrailLength = 60;
//I don't think this timer below is needed if I use the maxBloodTrailLength as a counter
//NEW - a timer to count the number of frames in the shooting state
// let shootingTimer = 0;
// NEW! A variable to store how long the shooting is (in frames)
// let shootingLength = 40; // 50 frames (slowed down)
//NEW - a timer to count the number of frames in the blackScreen state
let blackScreenTimer = 0;
// NEW! A variable to store how long the blackScreen shooting is (in frames)
let blackScreenLength = 50; // 25 frames (slowed down)

//This is the blood that appears at the mouse position
let blood = {
    x: 450,
    y: 300,
    size: 20,
    minSize: 20,
    maxSize: 70,
    grow: .5,
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
    else if (state === 'blackScreen') {
        blackScreen();
    }
}

//Makes a bloody, growing circle following the mouse position
function shooting() {
    // NEW! Increase the timer's count by one frame
    // shootingTimer++;
    // NEW! Check if we have reached the end of our timer
    // if (shootingTimer >= shootingLength) {
    // That's enough shooting - go to blackScreen
    // blackScreen();
    // }

    // Constrain the shots to the body area: trees don't bleed
    // Appear between leftWall, rightWall, topWall & bottomWall
    push();
    //Slow the shooting rate
    frameRate(7.5);
    let leftWall = 350;
    let rightWall = 500;
    let topWall = 160;
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
    fill(170, 0, 0);
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
    //Play the gunsound
    gunsound.play();
    // //If the blood gets to a certain point, go to blackScreen
    if (blood.trail.length >= maxBloodTrailLength) {
        blackScreen();
    }
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
    // else if (state === 'blackScreen') {
    //     state = 'title';
    // }
}

function title() {
    background(0);

    push();
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(`White towelling bathrobe`, width / 2, height / 2 - 50);
    textSize(24);
    fill(180);
    text(`by A Desert Drawing`, width / 2, height / 2 - 10);
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
}

function scene5() {
    //Adding the background image
    image(preShoot, 0, 0);
    push();
    textSize(24);
    fill(255);
    textAlign(CENTER, CENTER);
    text(`We won't`, width / 2 - 130, height / 2 - 30);
    pop();
}

function blackScreen() {

    background(0);
    gunsound.stop();
    // NEW! Increase the blackScreen timer's count by one frame
    blackScreenTimer++;
    // NEW! Check if we have reached the end of our blackScreen timer
    if (blackScreenTimer >= blackScreenLength) {
        // That's enough blackScreen - go to title
        title();
    }
}