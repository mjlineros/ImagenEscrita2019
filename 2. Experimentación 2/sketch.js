function setup() {
  createCanvas(640, 470);
  fill(255,0,200)
  background(0);
}

function draw() {
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 800, 80));
  stroke(255);
  rect(mouseX, mouseY, 10, 100);
}
