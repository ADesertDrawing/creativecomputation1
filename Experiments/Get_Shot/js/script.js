/**
Get Shot
by A Desert Drawing

After a brief break, an attempt to make a thing to review what
I've learnt, refresh my memory, and to try to put a few elements
working together.

This simulates the "gunbarrel" introduction of Bond films, where the viewer
gets shot by Bond. The object of the game is to move your mouse around so
you find him and he shoots you. Weird eh? Don't blame me.
Blame broccoli.
*/

"use strict";

let state = 'title'; //Can be: title, playing, bondyShotYou

//This will be the white gunbarrel thing at the beginning of Bond
//films which will follow the mouse position
let victim = {
    x: undefined,
    y: undefined,
    size: 100
};

// This is bondy. He'll be hiding around in random positions.
// The scamp. He's just a circle atm to denote where he is.
let bondy = {
    x: undefined,
    y: undefined,
    size: 100
};

// This is the image of bondy shooting you after you find him.
let bondybang = {
    x: undefined,
    y: undefined,
    size: 100
};

//This is the gunshot sound when bondy shoots you
let gunsound;

function preload() {
    //Preloading the pic & sound of bondy shooting you
    bondybang = loadImage('assets/images/bondybang.png')
    gunsound = loadSound('assets/sounds/gunsound.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    //Makes an unseen circle to represent where bondy is hiding
    // push();
    bondy.x = random(0, width);
    bondy.y = random(0, height);

    // There's no real point in drawing Bondy here, it'll
    // be overwritten by the next frame anyway
    // noFill();
    // noStroke();
    // ellipse(bondy.x, bondy.y, bondy.size);
    // pop();
}

//Setting up the 3 states: title, playing, and gameover screens
function draw() {
    // push();
    background(0);
    // pop();
    // console.log(`adding black background`);
    if (state === 'title') {
        title();
    }
    else if (state === 'playing') {
        playing();
    }
    else if (state === 'bondyShotYou') {
        bondyShotYou();
    }
}

//Make the title function
function title() {
    state = 'title';
    console.log(`title start`);
    push();
    textSize(24);
    fill(80);
    textAlign(CENTER, CENTER);
    text(`Find Bondy. \n Beware, though. \n He WILL shoot you. \n He always does it. \n\n Click to start.`, width / 2, height / 2);
    pop();
}

//Makes a white circle following the mouse position
function playing() {
    // state = 'playing'; // Not needed
    // console.log(`playing`);
    victim.x = mouseX;
    victim.y = mouseY;
    push();
    fill(255);
    noStroke();
    ellipse(victim.x, victim.y, victim.size);
    pop();

    //Check the distance between the 2 circles
    let d = dist(bondy.x, bondy.y, victim.x, victim.y);

    // Now we can ask if they're overlapping, go to bondyShotYou state
    if (d < bondy.size / 2 + victim.size / 2) {

        gunsound.play();
        console.log(`played gunshot sound`);

        state = "bondyShotYou"; // This will cause draw() to call the right function
        // bondyShotYou(); // This will be called by draw
    }
}

//Shows bondy shooting you and displays message
function bondyShotYou() {
    // state = bondyShotYou; // Not needed, breaks the state
    console.log(`started bondyShotYou`);

    // You should draw the circle or you can't see Bondys
    push();
    fill(255);
    noStroke();
    ellipse(victim.x, victim.y, victim.size);
    pop();

    image(bondybang, victim.x - 50, victim.y - 50);

    console.log(`bondybangpicloaded`);

    push();
    textSize(24);
    fill(120);
    textAlign(CENTER, CENTER);
    text(`Bondy shot you. Tut. \n Click to try again. \n \n (He'll do it again though, you know.)`, width / 2, height - 100);
    pop();

    console.log(`waitingformousepress`);
    // mousePressed();
}

//Go from title to playing to title again when user clicks mouse
function mousePressed() {
    console.log(`inmousepress`);
    if (state === 'title') {
        state = 'playing';
    }
    else if (state === 'bondyShotYou') {
        state = 'title';
        // You should randomize Bondy's position here again or
        // he will always be in the same spot
        bondy.x = random(0, width);
        bondy.y = random(0, height);
    }
}



