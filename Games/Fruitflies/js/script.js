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

let person;
let personS, personSE, personE, personNE, personN, personNW, personW, personSW;

let state = `personS`; //Start facing the front (South - can be N,S,E,W,NE,SE etc)


//This stores the last key press so we can delete it and go to 
//the next one, so we can have two pressed at once (diagonals)
let pressedKeys = {};

function preload() {
    //Preloading the player movement images
    leftLeft = loadImage('assets/images/leftLeft.png');
    leftBack = loadImage('assets/images//leftBack.png');
    middleBack = loadImage('assets/images//middleBack.png');
    rightBack = loadImage('assets/images//rightBack.png');
    rightRight = loadImage('assets/images//rightRight.png');
    rightFront = loadImage('assets/images//rightFront.png');
    middleFront = loadImage('assets/images//middleFront.png');
    leftFront = loadImage('assets/images//leftFront.png');


}
function setup() {
    createCanvas(600, 600);
    person = new Person(width / 2, height / 2);
}



function draw() {
    background(200);

    person.update();
    person.display();

}
// Our pressedKeys will only hold whatever keys we're holding
function keyPressed() {
    pressedKeys[key] = true;


}
// and then remove them
function keyReleased() {
    delete pressedKeys[key];
}

class Person {
    constructor(x, y,) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.speed = 3;
    }

    update() {
        let mvmt = createVector(0.0);

        if (pressedKeys.a) {
            mvmt.x -= 1;
        }
        if (pressedKeys.d) {
            mvmt.x += 1;
        }
        if (pressedKeys.w) {
            mvmt.y -= 1;
        }
        if (pressedKeys.s) {
            mvmt.y += 1;
        }

        mvmt.setMag(this.speed);

        this.x += mvmt.x;
        this.y += mvmt.y;

        if (pressedKeys.a & !pressedKeys.w & !pressedKeys.d & !pressedKeys.s) {
            state = `personW`;
        }
        if (pressedKeys.d & !pressedKeys.w & !pressedKeys.a & !pressedKeys.s) {
            state = `personE`;
        }
        if (pressedKeys.w & !pressedKeys.a & !pressedKeys.d & !pressedKeys.s) {
            state = `personN`;
        }
        if (pressedKeys.s & !pressedKeys.w & !pressedKeys.d & !pressedKeys.a) {
            state = `personS`;
        }
        if (pressedKeys.s & pressedKeys.a) {
            state = `personSW`;
        }
        if (pressedKeys.s & pressedKeys.d) {
            state = `personSE`;
        }
        if (pressedKeys.w & pressedKeys.a) {
            state = `personNW`;
        }
        if (pressedKeys.w & pressedKeys.d) {
            state = `personNE`;
        }
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    display() {
        if (state === `personW`) {
            image(leftLeft, this.x, this.y, 50, 100);
        }
        else if (state === `personE`) {
            image(rightRight, this.x, this.y, 50, 100);
        }
        else if (state === `personN`) {
            image(middleBack, this.x, this.y, 50, 100);

        }
        else if (state === `personS`) {
            image(middleFront, this.x, this.y, 50, 100);
        }

        else if (state === `personSW`) {
            image(leftFront, this.x, this.y, 50, 100);

        }
        else if (state === `personSE`) {
            image(rightFront, this.x, this.y, 50, 100);

        }
        else if (state === `personNW`) {
            image(leftBack, this.x, this.y, 50, 100);

        }
        else if (state === `personNE`) {
            image(rightBack, this.x, this.y, 50, 100);

        }
    }

}

