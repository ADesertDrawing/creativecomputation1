/**
5.5 States
by A Desert Drawing
*/

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
}
// Setting initial state to title
let state = `title`; //Possible states are: title, animation, ending


function setup() {
  createCanvas(500, 500);
  circle.vx = circle.speed; //make it move across the screen
  textSize(32);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(0);

if (state === `title`) { //which it is at the start
    title();
}

else if (state === `animation`) {
 animation();
 }

else if (state === `ending`) {
    ending();
}
}
function title() {
    fill(255);
    text(`Life.`,width/2,height/2);   //write "Life"
}

function animation() {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
  
    if (circle.x >width) { //if the circle reaches the right, 
      state = `ending`;   //change state to ending
    }
  
    ellipse(circle.x, circle.y, circle.size);   
}

function ending () {
  fill(127);
  text(`It's all over.`,width/2,height/2);  
}

function keyPressed() {
   if (state === `title`) { //if it's the initial state
    state = `animation`;  //and you press a key, start the animation state
   }

}
