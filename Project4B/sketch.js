
//SUN


//variables
let sunimg
let bezx1
let bezx2
let bezx3
let bezx4
let bezy1
let bezy2
let bezy3
let bezy4
let x1
let x2
let y1
let y2

function preload(){
//load sunrise background
  sunimg=loadImage('https://i.imgur.com/K0b2lPd.jpg')
}



function setup() {
//create canvas
createCanvas(windowWidth,windowHeight);
//sunrise as background
background(sunimg);
//stroke weight of bezier thin
strokeWeight(1)
//stroke color of bezier orange
stroke(255,100,0)
//bezier noise offset
offset=0.0
//bezier no fill
noFill()

}

function draw() {
//circle color yellow
fill(255,204,0,100)
//drawing circle in middle, medium size
circle(windowWidth/2,windowHeight/2,250)

//bezier drawn in noise
  bezx1=noise(offset)*width
  bezx2=noise(offset+10)*width
  bezx3=noise(offset+20)*width
  bezx4=noise(offset+30)*width

  bezy1=noise(offset+10)*height
  bezy2=noise(offset+20)*height
  bezy3=noise(offset+30)*height
  bezy4=noise(offset+40)*height

  bezier(bezx1,bezy1,bezx2,bezy2,bezx3,bezy3,bezx4,bezy4)
  offset=offset+0.008

//if mouse is clicked, sun rays appear
  if(mouseIsPressed){
    for(let i=0; i<100; i=i+1){
      let x1= random(0,width)
      let y1= random(0,height)
      let x2= width/2
      let y2= height/2
//sun ray color white, light opacity
      stroke(255,150)
//sun ray stroke thin
      strokeWeight(2)
//drawing rays
  line(x1,y1,x2,y2)
    }

}
}
