class GuyHead {


    // constructor() sets up our starting properties
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 40;
        this.vx = 0;
        this.vy = 0;
        this.speed = 5;
        this.jitteriness = 0.1; // How likely the head is to change direction

    }

    move() {
        // First check if we should change direction
        let r = random(0, 1);
        if (r < this.jitteriness) {
            this.vx = random(-this.speed, this.speed);
            this.vy = random(-this.speed, this.speed);
        }


        // Update position with velocity to actually move
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;


        // Constrain to the canvas plus or minus a couple of pixels
        this.x = constrain(this.x, -5, 905);
        this.y = constrain(this.y, -5, 455);
    }
    // display() draws the head onto the canvas
    display() {
        push();
        image(guyHead, 0, 0);
        pop();
    }
}