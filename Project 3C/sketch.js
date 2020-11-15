
//variables
let backgroundimage
let ypos1
let ypos2
let ypos3
let xpos1
let xpos2
let xpos3

function preload(){
//loading pyramid image
  backgroundimage=loadImage('https://i.imgur.com/2brmaRl.jpg')
}


function setup() {
  // creating canvas screen size
createCanvas(windowWidth,windowHeight);
//static
noLoop()
//no outline on triangles
noStroke()
}

function draw() {
  //Put draw code here
  background(backgroundimage)

  //drawing random sized & placed triangles
  for(let i=0; i<width; i=i +150){
//location of x & y
    xpos1=random(0,width)
    xpos2=random(0,width)
    xpos3=random(0,width)
  ypos1=random(0,height)
  ypos2=random(0,height)
  ypos3=random(0,height)
//random colors
  rcol=random(0,255)
  gcol=random(0,255)
  bcol=random(0,255)
  fill(rcol,gcol,bcol,100)
  triangle(xpos1,ypos1,xpos2,ypos2,xpos3,ypos3,)
  }



}
