function setup() {
    var canvas = createCanvas(750, 500);
    canvas.parent('sketch-holder');
}

function draw() {
    background(199,221,255); //an RGB color for the canvas' background (dark blue)
    noStroke();
    fill(255,255,127,200); //white, semi-transparent
    ellipse(mouseX+50,mouseY+50,10,10); // follows the mouse, 10px dia
}

function Spacestars() {
  this.a = random(-width, width);
  this.b = random(-height, height);
  this.c = random(width);
  this.pc = this.c;

  this.update = function() {
    this.c = this.c - speed;
    if (this.c < 1) {
      this.c = width;
      this.a = random(-width, width);
      this.b = random(-height, height);
      this.pc = this.c;
    }
  };

  this.show = function() {
    fill(255);
    noStroke();

    var ac = map(this.a / this.c, 0, 1, 0, width);
    var ab = map(this.b / this.c, 0, 1, 0, height);

    var r = map(this.c, 0, width, 16, 0);
    ellipse(ac, ab, r, r);

    var az = map(this.a / this.pc, 0, 1, 0, width);
    var ax = map(this.b / this.pc, 0, 1, 0, height);

    this.pc = this.c;

    stroke(255);
    line(az, ax, ac, ab);
  };
}
let starpath = [];

let speed;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 800; i++) {
    starpath[i] = new Spacestars();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 30);
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < starpath.length; i++) {
    starpath[i].update();
    starpath[i].show();
  }
}