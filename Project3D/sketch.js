

//variables
let backgroundimage
let yposn
let offset=0.0

function preload(){
//load wave images
  backgroundimage=loadImage('https://i.imgur.com/yZ8IoL7.jpg')
}

function setup() {
  // create canvas
createCanvas(windowWidth,windowHeight);
//no circle outline
noStroke()
//static
noLoop()
}

function draw() {
  //wave picture as backdrop
background(backgroundimage)

//drawing circles with noise function
for(let i=0; i<width; i=i +50){
  yposn=noise(offset)*height
//fill shade of purple
  fill(200,0,255,100)
  circle(i,yposn,20)
  offset=offset+0.005
  }
//drawing circles with noise function
  for(let i=0; i<width; i=i +50){
    yposn=noise(offset)*height
//fill shade of blue
    fill(0,50,200,100)
    circle(i,yposn,30)
    offset=offset+0.03
}
//drawing circles with noise function
for(let i=0; i<width; i=i +50){
  yposn=noise(offset)*height
//fill shade of blue
  fill(0,0,200,100)
  circle(i,yposn,70)
  offset=offset+0.01
}
//drawing circles with noise function
for(let i=0; i<width; i=i +50){
  yposn=noise(offset)*height
//fill shade of blue
  fill(0,100,255,100)
  circle(i,yposn,40)
  offset=offset+0.004
}
//drawing circles with noise function
for(let i=0; i<width; i=i +50){
  yposn=noise(offset)*height
//fill shade of purple
  fill(155,0,255,100)
  circle(i,yposn,60)
  offset=offset+0.006
}
//drawing circles with noise function
for(let i=0; i<width; i=i +50){
  yposn=noise(offset)*height
//fill shade of blue
  fill(0,0,255,100)
  circle(i,yposn,20)
  offset=offset+0.006
}
}
