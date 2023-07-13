/**
4.10 Images
by A Desert Drawing

*/

let clownImage;

function preload() {
    clownImage = loadImage("assets/images/clown.png")
}

function setup() {
    createCanvas(500,500);

}

 
/**
Description of draw()
*/
function draw() {
    background(0,0,0);
    imageMode(CENTER);
    image(clownImage,mouseX,mouseY,50,50);

}