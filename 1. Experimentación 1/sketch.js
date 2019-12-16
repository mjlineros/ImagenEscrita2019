function setup() {
  createCanvas(400, 400);
  background(0);
}
function draw(){
  fill(250,180,20)
  ellipse (200,200,80)
  push();
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis()/7000, 120));
  circle(0, 0, 30);
  pop();
  
}


