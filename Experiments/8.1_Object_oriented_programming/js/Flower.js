class Flower {
    constructor() {
        // Position and size information
        this.x = random(0, width);
        this.y = random(0, height);
        this.size = 50;
        this.stemLength = 75;
        this.stemThickness = 10;
        this.petalThickness = 10;
        // Color information
        this.stemColor = {
            r: 50,
            g: 150,
            b: 50
        };
        this.petalColor = {
            r: 200,
            g: 50,
            b: 50
        };
        this.centreColor = {
            r: 50,
            g: 0,
            b: 0
        };
    }
    display() {
        push();
        // Draw a line for the stem
        strokeWeight(this.stemThickness);
        stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
        line(this.x, this.y, this.x, this.y + this.stemLength);
        // Draw a circle with a heavy outline for the flower
        strokeWeight(this.petalThickness);
        fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
        stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
        ellipse(this.x, this.y, this.size);
        pop();
    }
}