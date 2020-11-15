
let backgroundimage
let xpos1
let ypos1
let xoffset1
let yoffset1
let xpos2
let ypos2
let xoffset2
let yoffset2
let xpos3
let ypos3
let xoffset3
let yoffset3

function preload(){
  backgroundimage=loadImage('https://i.imgur.com/FPzOW4I.jpg')
}

function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(backgroundimage)
noStroke()

xoffset1=(0.0)
yoffset1=(100)

xoffset2=(0.0)
yoffset2=(50)

xoffset3=(0.0)
yoffset3=(75)


}

function draw() {
  //Put draw code here

xpos1=noise(xoffset1)*width
ypos1=noise(yoffset1)*height

fill(175,0,255,50)
circle(xpos1,ypos1,20)

xoffset1=xoffset1+0.01
yoffset1=yoffset1+0.01

xpos2=noise(xoffset2)*width
ypos2=noise(yoffset2)*height

fill(0,0,255,50)
circle(xpos2,ypos2,20)

xoffset2=xoffset2+0.01
yoffset2=yoffset2+0.01

xpos3=noise(xoffset3)*width
ypos3=noise(yoffset3)*height

fill(255,0,120,50)
circle(xpos3,ypos3,20)

xoffset3=xoffset3+0.01
yoffset3=yoffset3+0.01

xpos4=random(0,width)
ypos4=random(0,height)
fill(255,50)
circle(xpos4,ypos4,10)







}
