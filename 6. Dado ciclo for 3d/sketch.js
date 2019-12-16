function setup() {
  createCanvas(400, 400,WEBGL);
}

function draw() {
  background(220,20,50);
  
for (var x = 0; x < width;x += 600){
  for (var y = 0; y < height;y += 600){
  rotateX(frameCount*0.03);
  rotateY(frameCount*0.03);
  box(x-100);
    let c = color(255)
     fill (c)
if(mouseIsPressed){
  sphere(100);
  
  }
  }
}
}