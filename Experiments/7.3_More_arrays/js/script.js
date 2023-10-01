/**
7.3 More arrays
by A Desert Drawing
*/
"use strict";

let circle = {
    x: 0,
    y: 0,
    size:100,
    trail: [],
    trailSize: 20,
}

let currentIndex = 0;

function setup() {
    createCanvas(600,600);
}

function draw() {
    background(random(0,255));
    circle.x = mouseX;
    circle.y = mouseY;

    for (let i = 0; i < circle.trail.length; i++) {
        let position = circle.trail[i];
        ellipse(position.x,position.y,circle.size);
    }

    ellipse(circle.x,circle.y, circle.size);

    let newTrailPosition = {
        x: circle.x,
        y: circle.y
    };
    circle.trail.push(newTrailPosition);
    if (circle.trail.length > circle.trailSize) {
        circle.trail.shift();
    }

}