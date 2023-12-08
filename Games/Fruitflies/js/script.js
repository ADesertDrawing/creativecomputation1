/**
Fruitflies
by A Desert Drawing
*/
"use strict";

//Setting up all the player movement images
let leftLeft;
let leftBack;
let middleBack;
let rightBack;
let rightRight;
let rightFront;
let middleFront;
let leftFront;

function preload() {
    //Preloading the player movement images
    leftLeft = loadImage('/leftLeft.png');
    leftBack = loadImage('/leftBack.png');
    middleBack = loadImage('/middleBack.png');
    rightBack = loadImage('/rightBack.png');
    rightRight = loadImage('/rightRight.png');
    rightFront = loadImage('/rightFront.png');
    middleFront = loadImage('/middleFront.png');
    leftFront = loadImage('/leftFront.png');
}
function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(0, 0, 0);
}