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

// setup() creates the canvas and the flowers in the garden
function setup() {
    createCanvas(600, 600);

    // Create our flowers by counting up to the number of the flowers
    for (let i = 0; i < garden.numFlowers; i++) {
        // Create a new flower
        let flower = new Flower();
        // Add the flower to the array of flowers
        garden.flowers.push(flower);
    }
}

// draw()
// Displays our flowers
function draw() {
    // Display the grass
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

    // Loop through all the flowers in the array and display them
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        flower.display();
    }
}

