/**
Survive!
by A Desert Drawing
*/


"use strict";
let timer = 0;


//     `'Tis a bit.`,
//     'You can go now.',
//     'Nothing interesting is going to happen here.',
//     '',
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

    push();
    textSize(40);
    textAlign(CENTER);
    fill(255);
    if (timer > 5 && timer <= 10) {
        text(`This is a game where the timer is your score.`, width / 2, height - 100);
    }
    else if (timer > 14 && timer <= 18) {
        text(`You're thinking:\n"How long is this going to go on for?"`, width / 2, height - 100);
    }
    else if (timer > 22 && timer <= 26) {
        text(`You play the game as long as you're alive.`, width / 2, height - 100);
    }
    else if (timer > 30 && timer <= 34) {
        text(`You're doing well`, width / 2, height - 100);
    }
    else if (timer > 37 && timer <= 43) {
        text(`Like that story about John Cage being asked why\nthe ambient noise of people didn't bother him.`, width / 2, height - 100);
    }
    else if (timer > 45 && timer <= 50) {
        text(`"Well", he responds. "They're just playing my piece."`, width / 2, height - 100);
    }
    else if (timer > 53 && timer <= 56) {
        text(`You're playing the game now.`, width / 2, height - 100);
    }
    else if (timer > 59 && timer <= 62) {
        text(`Forever.`, width / 2, height - 100);
    }
    else if (timer > 66 && timer <= 70) {
        text(`Enjoy the game.`, width / 2, height - 100);
    }
    else if (timer > 73 && timer <= 80) {
        text(`Good luck.`, width / 2, height - 100);
    }
}


