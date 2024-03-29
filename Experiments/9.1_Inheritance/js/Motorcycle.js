class Motorcycle extends Vehicle {
    constructor(x, y) {
        super(x, y);
        this.width = 30;
        this.height = 10;
        this.vx = 10;
    }

    display() {
        push();
        rectMode(CENTER);
        noStroke();
        fill(255, 255, 0);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}