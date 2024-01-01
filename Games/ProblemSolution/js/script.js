/**
Problem / Solution
by A Desert Drawing
*/
"use strict";

let scalesBottom;
let scalesTop;

function preload() {
    //Preloading the base bg layer and the top scales layer
    scalesBottom = loadImage('assets/images/prob_sol_bottom_1000x700.png');
    scalesTop = loadImage('assets/images/prob_sol_top_1000x700.png');
}

function setup() {
    createCanvas(1000, 700);

}

function draw() {
    background(255);
    image(scalesBottom, 0, 0);
    image(scalesTop, 0, 0);
}