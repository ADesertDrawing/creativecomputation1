/**
Survive!
by A Desert Drawing
*/


"use strict";
let timer = 0;
let state = `start`; //can be start, instruction1-14, end

let instruction1;
let instruction2;
let instruction3;
let instruction4;
let instruction5;
let instruction6;
let instruction7;
let instruction8;
let instruction9;
let instruction10;
let instruction11;
let instruction12;
let instruction13;
let instruction14;


// `You play the game as long as you're alive.`,
//     `Like John Cage responding to all ambient noise "Well, they're just playing my piece".`,
//     `You're playing my game now.`,
//     `Forever.`,
//     `Bit controlling?`,
//     `Bit creepy?`,
//     `'Tis a bit.`,
//     'You can go now.',
//     'Nothing interesting is going to happen here.',
//     'The interesting things are going to happen…',
//     "Y'know…",
//     'Out there.',
//     'Good luck.',



function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(0);
    push();
    textSize(200);
    textAlign(CENTER);
    fill(255);
    text('SURVIVE!', width / 2, height / 2 - 100);
    textSize(100);
    text('Score: ' + round(timer), width / 2, height / 2 + 200);
    timer += 1 / 60;
    pop();

    if (timer = 10) {
        instruction1();
    }

}

function instruction1() {
    push();
    textSize(50);
    text(`This is a game where the timer is your score.`, width / 2, height / 2 + 200);
    pop();
}