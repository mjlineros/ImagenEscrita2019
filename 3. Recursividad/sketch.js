function setup() {
  createCanvas(400, 400);
  fill(147,112,216);
  strokeWeight(0.75);
}

function draw() {
  background(123,104,238);
  let niveles = round(map(mouseX, 0, width, 0, 4));
  recursiveCircle(width/2, height/2, 350, niveles);
}

function recursiveCircle(x, y, diam, levels){
  ellipse(x, y, diam);
  if(levels > 1){
    recursiveCircle(x-diam/4, y, diam/2, levels-1);
    recursiveCircle(x+diam/4, y, diam/2, levels-1);
    recursiveCircle(x, y-diam/4, diam/2, levels-1);
    recursiveCircle(x, y+diam/4, diam/2, levels-1);
  }
}