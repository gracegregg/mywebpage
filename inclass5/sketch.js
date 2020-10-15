
let catList=[]
let dogList=[]
let xpos1List=[]
let ypos1List=[]
let xpos2List=[]
let ypos2List=[]
let yspeed1List=[]
let yspeed2List=[]


function preload() {

  for (let i=0; i<10; i=i+1){
    catList[i]=loadImage('https://i.imgur.com/mlqK3Fg.png')
}
  for (let i=0; i<10; i=i+1){
    dogList[i]=loadImage('https://i.imgur.com/RzRBnH0.png')

  }
}


function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
for(let i=0; i<10; i=i+1){
  ypos1List[i]=0
  xpos1List[i]=random(0,width)
  yspeed1List[i]=random(1,20)
  ypos2List[i]=0
  xpos2List[i]=random(0,width)
  yspeed2List[i]=random(1,20)
}

}

function draw() {
  //Put draw code here
background(0,50,120)
imageMode(CENTER)

for(let i=0; i<10; i=i+1){
  image(catList[i],xpos1List[i],ypos1List[i],100,100)
  image(dogList[i],xpos2List[i],ypos2List[i],100,100)

  ypos1List[i]=ypos1List[i]+yspeed1List[i]
  ypos2List[i]=ypos2List[i]+yspeed2List[i]

if (ypos1List[i]>height){
  xpos1List[i]=random(0,width)
  ypos1List[i]=0
}
if (ypos2List[i]>height){
  xpos2List[i]=random(0,width)
  ypos2List[i]=0
}
}
}
