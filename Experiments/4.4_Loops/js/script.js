/**
4.4 Loops
by A Desert Drawing

Description
*/

"use strict";

let caterpillar = {
    x:100,
    y:250,
    segmentSize:50,
}

/**
Description of setup
*/
function setup() {
    createCanvas(500,500);
    
}


/**
Description of draw()
*/
function draw() {
    background(0);
    noStroke();
    fill(100,200,100);

    let x = caterpillar.x;
    let numSegments = 5;
    let segmentsDrawn = 0;

    while (segmentsDrawn < numSegments) {
        ellipse(x,caterpillar.y,caterpillar.segmentSize);
        x = x+40;
        segmentsDrawn = segmentsDrawn + 1;
    } 


}