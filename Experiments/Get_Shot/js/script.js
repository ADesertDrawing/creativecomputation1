/**
Get Shot
by A Desert Drawing

After a brief break, an attempt to make a thing to review what 
I've learnt, refresh my memory, and to try to put a few elements 
working together.

This simulates the "gunbarrel" introduction of Bond films, where the viewer 
gets shot by Bond. The object of the game is to move your mouse around so
you find him and he shoots you. Weird eh? Don't blame me. 
Blame broccoli.
*/

"use strict";

let state = 'title'; //Can be: title, playing, bondyShotYou, restart

//This will be the white gunbarrel thing at the beginning of Bond 
//films which will follow the mouse position
let user = {
    x: undefined,
    y: undefined,
    size: 100
  };
  
  // This is bondy. He'll be hiding around in random positions. 
  // The scamp. He's just a circle atm to denote where he is.
  let bondy = {
    x: undefined,
    y: undefined,
    size:100
  };  

 // This is the image of bondy shooting you after you find him.
  let bondybang = {
    x: undefined,
    y: undefined,
    size:100
  };

  //This is the gunshot sound when bondy shoots you
  let gunsound;

// //Check to see if he's shot you yet
//   let hasHeBeenYet = false;

  function preload() {
//Preloading the pic & sound of bondy shooting you
    bondybang = loadImage('assets/images/bondybang.png')
    gunsound = loadSound('assets/sounds/gunsound.mp3');
  }

function setup() {
    createCanvas(windowWidth,windowHeight);
//Makes an unseen circle to represent where bondy is hiding
    push();   
    bondy.x = random(0,width);
    bondy.y = random(0,height);
    fill(255);
    stroke(0);
    ellipse(bondy.x,bondy.y,bondy.size);
    pop();
}
function draw() {
    background(0); 
    if (state === 'title') {
        title();
    }
    else if (state === 'playing') {
        playing(); 
    }
    else if (state === 'bondyShotYou') {
        bondyShotYou();
    }


//Makes a white circle following the mouse position
function playing () {
user.x = mouseX;
user.y = mouseY;
push();
fill(255);
noStroke();
ellipse(user.x,user.y,user.size);
pop();

//Check the distance between the 2 circles
let d = dist(bondy.x,bondy.y,user.x,user.y);

// Now we can ask if they're overlapping, show pic and stop
    if (d < bondy.size/2 + user.size/2) {
        bondyShotYou ();
    }
}

}

//Shows bondy shooting you, plays a gunshot sound and displays message
function bondyShotYou () {
    image(bondybang,user.x-50,user.y-50);
    gunsound.play();

//Make blood drip down the screen
//TBC

    push();
    textSize(24);
    fill(120);
    textAlign(CENTER,CENTER);
    text(`Bondy shot you. Tut. \n Refresh to try again. \n \n (He'll do it again though, you know.)`,width/2,height-100);
    pop();
    mousePressed();
    noLoop();
    
}

//Make the title function
function title() {
    textSize(24);
    fill(80);
    textAlign(CENTER,CENTER);
    text(`Find Bondy. \n Beware, though. \n He WILL shoot you. \n He always does it. \n\n Click to start.`,width/2,height/2);
}
//Go from title to simulation when user clicks mouse
function mousePressed() {
    if (state === 'title') {
        state = 'playing';
    }
    else if (state === 'bondyShotYou') {
        state = 'title';
    }
}
