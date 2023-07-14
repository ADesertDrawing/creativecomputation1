/**
5.2 Functions with parameters
by A Desert Drawing
*/

function setup() {
    createCanvas(500,500);

}

function draw() {
    background(0,0,0);
    parallels(100,101,24,2,550,4);
    parallels(50,52,43,3,100,10);
    parallels(200,207,19,27,125,4);
    parallels(312,73,52,5,250,29);
}

function parallels(x,y,numLines,lineWidth,lineHeight,lineSpacing) {

    for (let i = 0; i < numLines; i++) {
      noStroke();
      fill(255); 
      rectMode(CENTER);
      rect(x,y,lineWidth,lineHeight);
      x = x + lineSpacing; 
    }
}
