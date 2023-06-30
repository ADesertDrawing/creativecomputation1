/**
4.5 Loops beyond counting
by A Desert Drawing

Description
*/

"use strict";

let circle  = {
    x: undefined,
    y: undefined,
    size: 100
};

let dangerZone = {
    x: 250,
    y:250,
    size:150
};

/**
Description of setup
*/
function setup() {
    createCanvas(500,500);

    circle.x = random(0,width);
    circle.y = random(0,height);

    let d = dist(circle.x,circle.y,dangerZone.x,dangerZone.y);  
    while (d < circle.size/2 + dangerZone.size/2) {
        circle.x = random(0,width);
        circle.y = random(0,height);
        d = dist(circle.x,circle.y,dangerZone.x,dangerZone.y)
    }

}


/**
Description of draw()
*/
function draw() {
    background(0);
//Danger zone
    noFill();
    stroke(255,0,0);
    ellipse(dangerZone.x,dangerZone.y,dangerZone.size);

    fill(255);
    noStroke();
    ellipse(circle.x,circle.y,circle.size);
}