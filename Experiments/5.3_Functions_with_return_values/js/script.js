/**
5.3 Functions with return values
by A Desert Drawing
*/

function setup() {
    createCanvas(500,500);

    let hotCelsius = toCelsius(100);
    let coldCelsius = toCelsius(10);
    console.log(`100 degrees Fahrenheit is ${hotCelsius} degrees Celsius.`);
    console.log(`10 degrees Fahrenheit is ${coldCelsius} degrees Celsius.`);
}

function draw() {
    background(0,0,0);
}

function toCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
