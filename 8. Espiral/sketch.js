let angle = 0;
  let r = 8;

let spin = 0.03;
let grow = spin * 4;

function setup() {
  createCanvas(500, 500);
  background(220,20,60);
  frameRate(60);
}

function draw() {
  angle += spin;
  r = r + grow;
  var x = cos(angle)*r;
  var y = sin(angle)*r;
  translate(250,250);
  //line(0, 0, x, y);
  fill(255);
  ellipse(x, y, 30, 30);

}