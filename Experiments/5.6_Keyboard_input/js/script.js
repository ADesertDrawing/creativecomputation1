/**
5.6 Keyboard input
by A Desert Drawing
*/

let circle = {
    x: 250,
    y: 250,
    vx: 0,
    vy: 0,
    speed: 5,
    size: 100
  }
  
  function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(0);
  
    // First check for horizontal movement
    // Is the left arrow pressed?
    if (keyIsDown(LEFT_ARROW)) {
      // If it is, set the x velocity to be negative
      circle.vx = -circle.speed;
    }
    // Otherwise is the right arrow pressed?
    else if (keyIsDown(RIGHT_ARROW)) {
      // If it is, set the x velocity to be positive
      circle.vx = circle.speed;
    }
    // If neither of those keys are pressed...
    else {
      // Then set the x velocity to 0 to stop moving horizontally
      circle.vx = 0;
    }
  
    // Do the same thing with vertical movement and the UP and DOWN keys
    if (keyIsDown(UP_ARROW)) {
      circle.vy = -circle.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      circle.vy = circle.speed;
    }
    else {
      circle.vy = 0;
    }
  
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
  
    ellipse(circle.x, circle.y, circle.size);
  }

