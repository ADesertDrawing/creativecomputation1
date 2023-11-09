/**
9.1 Inheritance
by A Desert Drawing
*/
"use strict";

let cars = [];
let numCars = 10;

let motorcycles = [];
let numMotorcycles = 10;

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < numCars; i++) {
        let x = random(0, width); //appear randomly on x axis
        let y = random(0, height); //appear randomly on y axis
        let car = new Car(x, y);
        cars.push(car);
    }
    for (let i = 0; i < numMotorcycles; i++) {
        let x = random(0, width); //appear randomly on x axis
        let y = random(0, height); //appear randomly on y axis
        let motorcycle = new Motorcycle(x, y);
        motorcycles.push(motorcycle);
    }
}

function draw() {
    background(0, 0, 0);

    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];
        car.move();
        car.wrap();
        car.display();
    }

    for (let i = 0; i < motorcycles.length; i++) {
        let motorcycle = motorcycles[i];
        motorcycle.move();
        motorcycle.wrap();
        motorcycle.display();
    }
}