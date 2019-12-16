let img;

function setup() {
  createCanvas(400, 400);
    background( 255)
  img = loadImage('perrito.jpg');
}

function draw() {

}
function mousePressed() {

  stamp(mouseX, mouseY)

  }

function stamp(){
let x = 40
let y = 80
o = random(1,50)
      image(img, mouseX-25, mouseY-50, x+o, y+o);


  }