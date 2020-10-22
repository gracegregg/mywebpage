
let img

function preload() {

img=loadImage('https://i.imgur.com/EEdJnL5.png')

}




function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(120,0,120);

}

function draw() {
  //Put draw code here
img.loadPixels()

for(let x=0; x < img.width; x=x+10){
  for(let y=0; y<img.height; y=y+10){
  let i=(x+y * img.width) *4
  let pixr = img.pixels[i+0]
  let pixg = img.pixels[i+1]
  let pixb = img.pixels[i+2]
  let pixa = img.pixels[i+3]

stroke(pixr,pixg,pixb,pixa)
line(x,y,x+10,y+10)




  }
}
}
