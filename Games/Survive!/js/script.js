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
    textSize(25);
    textAlign(CENTER);
    fill(255);
    if (timer > 5 && timer <= 10) {
        text(`This is a game where the timer is your score.`, width / 2, height - 100);
    }
    else if (timer > 15 && timer <= 20) {
        text(`You play the game as long as you're alive.`, width / 2, height - 100);
    }
    else if (timer > 25 && timer <= 30) {
        text(`Like John Cage responding to all ambient noise:\n "Well, they're just playing my piece".`, width / 2, height - 100);
    }
    else if (timer > 35 && timer <= 40) {
        text(`You're playing my game now.`, width / 2, height - 100);
    }
    else if (timer > 45 && timer <= 50) {
        text(`Forever.`, width / 2, height - 100);
    }
    else if (timer > 55 && timer <= 60) {
        text(`That's it.`, width / 2, height - 100);
    }
    else if (timer > 65 && timer <= 70) {
        text(`There's nothing else here for you.`, width / 2, height - 100);
    }
    else if (timer > 75 && timer <= 80) {
        text(`I hope you enjoy the game.`, width / 2, height - 100);
    }
    else if (timer > 85 && timer <= 90) {
        text(`Good luck.`, width / 2, height - 100);
    }
}
//     else if (timer > 55 && timer <= 60) {
//         text(`Bit controlling?`, width / 2, height - 100);
//     }
//     else if (timer > 65 && timer <= 70) {
//         text(`Bit creepy?`, width / 2, height - 100);
//     }
//     else if (timer > 75 && timer <= 80) {
//         text(`'Tis a bit.`, width / 2, height - 100);
//     }
//     else if (timer > 85 && timer <= 90) {
//         text(`You can go now.`, width / 2, height - 100);
//     }
//     else if (timer > 95 && timer <= 100) {
//         text(`Nothing interesting is going to happen here.`, width / 2, height - 100);
//     }
//     else if (timer > 105 && timer <= 110) {
//         text(`The interesting things are going to happen…`, width / 2, height - 100);
//     }
//     else if (timer > 115 && timer <= 120) {
//         text(`Y'know…`, width / 2, height - 100);
//     }
//     else if (timer > 125 && timer <= 130) {
//         text(`Out there.`, width / 2, height - 100);
//     }
//     else if (timer > 135 && timer <= 140) {
//         text(`Good luck.`, width / 2, height - 100);
//     }
//     pop();
// }


