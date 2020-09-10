
let xpos = 100
let ypos = 50

let xpos2 = 100
let ypos2 = 200

let xpos3 = 100
let ypos3 = 350




function setup() {
  // put setup code here
createCanvas(500,500);
}

function draw() {
  // put drawing code here
background(0);
fill(255,0,0);
circle(xpos,ypos,50);
xpos = xpos + 3;

fill(0,255,0);
circle(xpos2,ypos2,50);
xpos2 = xpos2 + 3;

fill(0,0,255);
circle(xpos3,ypos3,50);
xpos3 = xpos3 + 3;
}
