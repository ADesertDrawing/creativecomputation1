/**
7.3 More arrays
by A Desert Drawing
*/
"use strict";

let images = [];
let displayImage;

function preload() {
    for (let i = 0; i < 10; i++) {
        images[i] = loadImage(`assets/images/clown-${i}.png`);
    }
}

function setup() {
    createCanvas(600,600);

    displayImage = random(images);
}

function draw() {
    background(0);

    push();
    imageMode(CENTER);
    image(displayImage,width/2,height/2);
    pop();
}
