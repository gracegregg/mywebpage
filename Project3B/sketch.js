
//variables
let backgroundimage
let xpos
let ypos


function preload(){
  //load city image
  backgroundimage=loadImage('https://i.imgur.com/H5RfcG9.jpg')
}

function setup() {
  // create canvas
createCanvas(windowWidth,windowHeight)
  //static
noLoop()
noStroke()
}

function draw() {
  //drawing city backdrop
background(backgroundimage)

//random sized & placed rectangles
for(let i=0; i<width; i=i +50){
  ypos=random(0,height)
  xpos=random(0,width)
  height=random(300,600)
//random colore
  let rcol=random(0,255)
  let gcol=random(0,255)
  let bcol=random(0,255)
  fill(rcol,gcol,bcol,120)
  rect(xpos,ypos,60,height)
}
}
