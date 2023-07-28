/**
Curiosity in p5
by A Desert Drawing
*/

// A variable to store the font in
//let VT323Font;



// Load the font in preload
function preload() {
 // VT323Font = loadFont(`assets/fonts/VT323-Regular.ttf`);
}

let current = "introduction";

const story = {
  "introduction": {
    "main_text": "You are standing at the mouth of a cave.",
    "links": [
      "Enter the cave", "cave",
      "Run away", "ran away"
    ]
  },
  "cave": {
    "main_text": "You are inside the cave, it is very dark.",
    "links": []   
  },
  "ran away": {
    "main_text": "You are a terrible coward and will never learn anything about spelunking.",
    "links": []
  }
}

function setup() {
  createCanvas(200,200);
}



function draw() {
  background(255);

  //fill(0,255,0);
  // Use the font by passing the font variable as an argument to textFont()
  //text(VT323Font);

  text(0, 100, story[current].main_text);
  // Display the links
  for (let i = 0; i < story[current].links.length; i++) {
     // Display the links... though right now I'm realizing we'd need a way
     // to remember where the links lead, which is another layer of complexity... needs more though that I have time for this instant, but for now
     text(100, 100, story[current].links[i]);   
  }
}

