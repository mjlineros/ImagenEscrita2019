

let r=10
let a=0
let c=5

function setup () {
  createCanvas (500,500)
  background(255);

}

function draw () {
  
  translate(250,250)

let x = r+c * cos(a)
  
let y = r+c * sin(a)

fill(0);
ellipse(x,y,10,10)
 
c+=0.08  
a+=0.6
}