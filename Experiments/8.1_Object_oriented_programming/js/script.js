/**
8.1 Object-oriented programming
by A Desert Drawing
*/
"use strict";

// Our garden
let garden = {
    // An array to store the individual flowers
    flowers: [],
    // How many flowers in the garden
    numFlowers: 20,
    // The color of the grass (background)
    grassColor: {
        r: 120,
        g: 180,
        b: 120
    }
};

function setup() {
    createCanvas(500, 500);

}

function draw() {
    background(0, 0, 0);
}

