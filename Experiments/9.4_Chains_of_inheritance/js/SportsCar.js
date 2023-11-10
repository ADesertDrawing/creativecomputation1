class SportsCar extends Car {
    constructor(x, y) {
        super(x, y);
        this.vx = 15;
    }
    display() {
        super.display();
        push();
        fill(255, 255, 0);
        rectMode(CENTER);
        noStroke();
        rect(this.x, this.y - this.height / 10, this.width, this.height / 20);
        rect(this.x, this.y + this.height / 10, this.width, this.height / 20);
        pop();
    }
}