/**
5.4 Text
by A Desert Drawing
*/

let hello = {
    string: `Hello, world`,
    x:0,
    y: 0,
    vx: 5,
    vy: 1,
    size: 64
};

function setup() {
    createCanvas(500,500);

}

function draw() {
hello.x = hello.x + hello.vx;
hello.y = hello.y + hello.vy;

hello.size = hello.size + 1;

    background(0);
    textAlign(CENTER,CENTER);
    stroke(50,200,50);
    strokeWeight(5);
    textStyle(BOLD);
    textSize(hello.size);
    fill(200,50,200);
    text(hello.string,hello.x,hello.y);
}