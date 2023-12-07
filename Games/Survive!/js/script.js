/**
Survive!
by A Desert Drawing
*/


"use strict";
//Starting the timer from the start at zero
let timer = 0;
//There's going to be a button!
let button;

function setup() {
    createCanvas(windowWidth, windowHeight);
    push();

    button = createButton('Reset');
    button.style('background-color', '#000000');
    button.style('border', '#ffffff');
    button.style('border', 'solid');

    button.size(80, 30);
    button.style('color', '#ffffff');
    button.style('font-weight', 'bold');
    button.style('font-size', '16px');
    button.style('border-radius', '8px');
    button.position(25, 25);
    pop();
}
//Adding the title and the score timer
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

    //Adding the texts according to the time
    push();
    textSize(40);
    textAlign(CENTER);
    fill(255);
    if (timer > 5 && timer <= 10) {
        text(`This is a game where the timer is your score.`, width / 2, height - 100);
    }
    else if (timer > 14 && timer <= 18) {
        text(`How long is this going to go on for, eh?`, width / 2, height - 100);
    }
    else if (timer > 22 && timer <= 26) {
        text(`You play the game as long as you're alive.`, width / 2, height - 100);
    }
    else if (timer > 30 && timer <= 34) {
        text(`(You're doing well)`, width / 2, height - 100);
    }
    else if (timer > 36 && timer <= 43) {
        text(`It's like that story about John Cage being asked why\nthe ambient noise of people didn't bother him.`, width / 2, height - 100);
    }
    else if (timer > 45 && timer <= 50) {
        text(`"Well", he says. "They're just playing my piece."`, width / 2, height - 100);
    }
    else if (timer > 53 && timer <= 56) {
        text(`So, that's it - you're playing it now.`, width / 2, height - 100);
    }
    else if (timer > 59 && timer <= 62) {
        text(`Forever.`, width / 2, height - 100);
    }
    else if (timer > 66 && timer <= 70) {
        text(`Enjoy the game.`, width / 2, height - 100);
    }
    else if (timer > 73 && timer <= 80) {
        text(`And good luck.`, width / 2, height - 100);
    }
}


