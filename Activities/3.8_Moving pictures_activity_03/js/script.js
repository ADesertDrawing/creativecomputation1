/**
3.8 Moving pictures activity
by A Desert Drawing

Two circles, the left one bigger and more transparent 
than the right, come in from either side of the screen, 
growing as they do so. They stop in the centre while 
still growing. The background goes from black to red.
*/

"use strict";
//set up a background as a js object
let bg = {
    r: 0,
    g: 0,
    b: 0
};
//set up the left circle as a js object
let circle1 = {
    x: 0,
    y: 250,
    size: 100,
    growthRate: 1,
    speed: 1,
    fill:255,
    alpha: 200
};
//set up the right circle as a js object
let circle2 = {
    x: 500,
    y: 250,
    size: 75,
    sizeRatio:0.75,
    speed: -1,
    fill: 255,
    alpha:200
};

//Set up canvas
function setup() {
    createCanvas(500,500);
    noStroke();
}


/**
Background gets red and the circles converge and grow
*/
function draw() {
    //Background
    background(bg.r, bg.g, bg.b);
    bg.r = map(circle1.size, 100, width, 0, 255);

    //Left circle
    circle1.x = circle1.x + circle1.speed;
    circle1.x = constrain(circle1.x,0,width/2);
    circle1.size = circle1.size + circle1.growthRate;
    circle1.size = constrain(circle1.size,0,width);
    fill(circle1.fill,circle1.alpha);
    ellipse(circle1.x,circle1.y, circle1.size);

    //Right circle
    circle2.x = circle2.x + circle2.speed;
    circle2.x = constrain(circle2.x,width/2,width);
    circle2.size = circle1.size * circle2.sizeRatio;
    fill(circle2.fill,circle2.alpha);
    ellipse(circle2.x,circle2.y, circle2.size);
}