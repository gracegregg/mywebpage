//offset variable
let offset=0.0
let backgroundimage

function preload(){
  //loading mountain image
  backgroundimage=loadImage('https://i.imgur.com/viN33we.jpg')
}

function setup() {
  // creating canvas
createCanvas(windowWidth,windowHeight)
  // making it static
noLoop()
}

function draw() {
  //mountain background image
background(backgroundimage)

//yellow mountain #1
stroke(255,204,0,70)
for(let i=0; i<width; i=i + 1) {
  let lineh=noise(offset)*850
  let lineb=noise(offset)*1100
  line(i,lineb,i,lineh)
  offset=offset + 0.002
  offset=offset + 0.002
}
//blue mountain #1
stroke(0,0,255,70)
for(let i=0; i<width; i=i + 1) {
  let lineh=noise(offset)*400
  let lineb=noise(offset)*600
  line(i,lineb,i,lineh)
  offset=offset + 0.003
  offset=offset + 0.003
}
//pink mountain #1
stroke(255,0,120,70)
for(let i=0; i<width; i=i + 1) {
  let lineh=noise(offset)*600
  let lineb=noise(offset)*800
  line(i,lineb,i,lineh)
  offset=offset + 0.005
  offset=offset + 0.005
}
//green mountain #1
stroke(0,255,0,70)
for(let i=0; i<width; i=i + 1) {
  let lineh=noise(offset)*800
  let lineb=noise(offset)*1000
  line(i,lineb,i,lineh)
  offset=offset + 0.004
  offset=offset+0.004
}

}
