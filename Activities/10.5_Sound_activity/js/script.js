/**
10.5_Sound_activity
by A Desert Drawing
*/
"use strict";

let balls = [];

function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(0);
    //This sets up the array of balls, counting up 1 
    //until the max balls.length
    for (let i = 0; i < balls.length; i++) {
        //This creates a temp variable which gets the current element 
        //out of the array (`ball` at position `i`) andput it into 
        //the variable `balls` 
        let ball = balls[i];
        ball.move();
        ball.bounce();
        ball.display();
    }
}

function mousePressed() {
    createBall(mouseX, mouseY);
}

//Every time createBall gets called, a new ball is added to array
function createBall(x, y) {
    let ball = new Ball(x, y);
    balls.push(ball);
}

