let max_distance;

function setup() {
  createCanvas(720,720);
  noStroke();
  max_distance = dist(4, 4, width,height);
}

function draw() {
  background(220,20,50);

  for (let i = 0; i <= width; i += 15){
    for (let j = 0; j <= height; j += 15) {    
      let size = dist(mouseX, mouseY, i, j);
      size = (size / max_distance) * 50;
      rect(i, j, size, size);
      fill(200);
    }
  }
}
