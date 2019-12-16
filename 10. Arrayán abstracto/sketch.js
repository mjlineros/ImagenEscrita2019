
let foto;

function preload() {
  foto = loadImage('arrayán.jpg');
}


function setup() {
  createCanvas(foto.width, foto.height);
  rectMode(CENTER);
  noLoop();
}

let sp = 8; // spacer o "espaciador"

function draw() {
  background(255);
  noStroke();
  for (let y = 0; y < height; y += sp) {
    for (let x = 0; x < width; x += sp) {
      let col = foto.get(x, y);
      mitrazo(x, y, col);
    }
  }
}

function mitrazo(x, y, col){
 let b = brightness(col);
  let r = red(col);
  let g = green(col);
  let bl= blue (col);
  let n =  round(map(b, 0, 150, 40, 0));
  for(let i = 0; i < n; i++){
   let nx = random(-sp, sp);
    let ny = random(-sp, sp);
    
    let z = color (r*0, g+40, bl*50);
    let c = color(r+0, g*20, bl*5);
    fill(c);
  rect(x + nx, y + ny, 5, 2);
    fill(z);
    ellipse(x+nx+2,y+10+ny, -4, 2);
  } 
}