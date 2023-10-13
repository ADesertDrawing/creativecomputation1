class Flower {

    // The constructor() sets up a flower's properties
    constructor(x, y, size, stemLength, petalColor) {
        // Position and size information
        this.x = x;
        this.y = y;
        this.size = size;
        this.stemLength = stemLength;
        this.stemThickness = 10;
        this.petalThickness = 10;
        this.maxPetalThickness = 10;
        this.maxSize = size;
        // Color information
        this.stemColor = {
            r: 50,
            g: 150,
            b: 50
        };
        this.petalColor = petalColor;
        this.centreColor = {
            r: 50,
            g: 0,
            b: 0
        };
        this.alive = true;
    }

    shrink() {
        let shrinkage = random(0, 0.1);
        this.size = this.size - shrinkage;
        this.petalThickness = this.petalThickness - shrinkage / 10;

        if (this.size <= 0 || this.petalThickness <= 0) {
            this.alive = false;
        }
    }

    pollinate() {
        let growth = random(0, 0.5);
        this.size = this.size + growth;
        this.petalThickness = this.petalThickness + growth / 10;

        this.size = constrain(this.size, 0, this.maxSize);
        this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);
    }

    // display()
    // Displays the flower on the canvas
    display() {
        push();
        // Set the stroke weight for the petals and the stem
        strokeWeight(this.stemThickness);
        // Draw a line for the stem
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