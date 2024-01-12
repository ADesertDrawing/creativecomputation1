/**
10.4_p5AudioIn
by A Desert Drawing
*/

"use strict";

let mic;
let ghost = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    image: undefined
};

function preload() {
    ghost.image = loadImage(`assets/images/clown.png`);
}

function setup() {
    createCanvas(500, 500);

    mic = new p5.AudioIn();

    mic.start();

    ghost.x = width / 2;
    ghost.y = height / 2;
}

function draw() {
    background(0, 0, 0);



    ghost.x = ghost.x + random(-1, 1);
    ghost.y = ghost.y + random(-1, 1);

    let level = mic.getLevel();

    if (level > 0.2) {
        ghost.vx = 20;
    }

    ghost.x = ghost.x + ghost.vx;
    ghost.y = ghost.y + ghost.vy;

    push();
    imageMode(CENTER);
    tint(255, 50);
    image(ghost.image, ghost.x, ghost.y);
    pop();

    console.log(level);
}