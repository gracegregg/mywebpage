
//MOON

//variables
let moonimg
let xoffset1
let xoffset2
let yoffset1
let yoffset2
let xpos1
let xpos2
let ypos1
let ypos2
let moonsound



function preload() {
//load night sky image
moonimg=loadImage('https://i.imgur.com/n7ou4y0.jpg')
moonsound=loadSound('https://gracegregg.github.io/mywebpage/SoundStuff/sunsound.wav')


}

function setup() {
//create canvas screen size
createCanvas(windowWidth,windowHeight)
//background night sky
background(moonimg)
//slow down rate of redrawing
frameRate(5)
//noise offset
xoffset1=(0.0)
yoffset1=(100)
xoffset2=(0.0)
yoffset2=(0.0)




}


function draw() {



//purple lines drawn in noise
xpos1=noise(xoffset1)*width
ypos1=noise(yoffset1)*height
xpos2=noise(xoffset2)*width
ypos2=noise(yoffset2)*height


strokeWeight(5)
stroke(170,0,255,100)
line(xpos1,ypos1,xpos2,ypos2)

xoffset1=xoffset1+0.01
yoffset1=yoffset1+0.01
xoffset2=xoffset2+0.01
yoffset2=yoffset2+0.01

//blue lines drawn in noise
xpos1=noise(xoffset1)*width
ypos1=noise(yoffset1)*height
xpos2=noise(xoffset2)*width
ypos2=noise(yoffset2)*height


strokeWeight(5)
stroke(0,0,200,100)
line(xpos1,ypos1,xpos2,ypos2)

xoffset1=xoffset1+0.01
yoffset1=yoffset1+0.01
xoffset2=xoffset2+0.01
yoffset2=yoffset2+0.01

//green lines drawn in noise
xpos1=noise(xoffset1)*width
ypos1=noise(yoffset1)*height
xpos2=noise(xoffset2)*width
ypos2=noise(yoffset2)*height


strokeWeight(5)
stroke(0,255,255,100)
line(xpos1,ypos1,xpos2,ypos2)

xoffset1=xoffset1+0.01
yoffset1=yoffset1+0.01
xoffset2=xoffset2+0.01
yoffset2=yoffset2+0.01

//white moon with no stroke in middle of screen
fill(255,70)
noStroke()
circle(windowWidth/2,windowHeight/2,250)

//if mouse is clicked stars appear randomly
if(mouseIsPressed){
for(let i=0; i<100; i=i+1){
xpos=random(0,width)
ypos=random(0,height)
circlesize=random(5,10)
fill(255,150)
circle(xpos,ypos,circlesize)
}

if(keyIsPressed & keyCode === ENTER){
moonsound.play()
}
}
}
