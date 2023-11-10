/**
9.4 Chains of inheritance
by A Desert Drawing
*/
"use strict";

let vehicles = [];
let numCars = 10;
let numMotorcycles = 10;
let numSportsCars = 3;

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < numCars; i++) {
        let x = random(0, width); //appear randomly on x axis
        let y = random(0, height); //appear randomly on y axis
        let car = new Car(x, y);
        vehicles.push(car);
    }
    for (let i = 0; i < numMotorcycles; i++) {
        let x = random(0, width); //appear randomly on x axis
        let y = random(0, height); //appear randomly on y axis
        let motorcycle = new Motorcycle(x, y);
        vehicles.push(motorcycle);
    }
    for (let i = 0; i < numSportsCars; i++) {
        let x = random(0, width); //appear randomly on x axis
        let y = random(0, height); //appear randomly on y axis
        let sportscar = new SportsCar(x, y);
        vehicles.push(sportscar);
    }
}

function draw() {
    background(0, 0, 0);

    for (let i = 0; i < vehicles.length; i++) {
        let vehicle = vehicles[i];
        vehicle.move();
        vehicle.wrap();
        vehicle.display();
    }
}


