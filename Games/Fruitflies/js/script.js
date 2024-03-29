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
    leftLeft = loadImage('assets/images/personW.png');
    leftBack = loadImage('assets/images/personNW.png');
    middleBack = loadImage('assets/images/personN.png');
    rightBack = loadImage('assets/images/personNE.png');
    rightRight = loadImage('assets/images/personE.png');
    rightFront = loadImage('assets/images/personSE.png');
    middleFront = loadImage('assets/images/personS.png');
    leftFront = loadImage('assets/images/personSW.png');


}
function setup() {
    createCanvas(800, 800);
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
        this.height = 120;
        this.width = 60;
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

        this.x = constrain(this.x, 0 + this.width / 2, width - this.width / 2);
        this.y = constrain(this.y, 0 + this.height / 2, height - this.height / 2);
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;

    }

    display() {
        imageMode(CENTER);

        if (state === `personW`) {
            image(leftLeft, this.x, this.y, this.width, this.height);
        }
        else if (state === `personE`) {
            image(rightRight, this.x, this.y, this.width, this.height);
        }
        else if (state === `personN`) {
            image(middleBack, this.x, this.y, this.width, this.height);

        }
        else if (state === `personS`) {
            image(middleFront, this.x, this.y, this.width, this.height);
        }

        else if (state === `personSW`) {
            image(leftFront, this.x, this.y, this.width, this.height);

        }
        else if (state === `personSE`) {
            image(rightFront, this.x, this.y, this.width, this.height);

        }
        else if (state === `personNW`) {
            image(leftBack, this.x, this.y, this.width, this.height);

        }
        else if (state === `personNE`) {
            image(rightBack, this.x, this.y, this.width, this.height);

        }

    }

}

