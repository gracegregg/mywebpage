
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(0,0,255);


}

function draw() {
  //Put draw code here
for(let i=0; i<width; i=i+100){
  for(let j=0; j<height; j=j+100){
let rcol= random(0,255);
let gcol= random(0,255);
let bcol= random(0,255);
fill(rcol,gcol,255)
    rect(i,j,100);


  }

}

for(let i=0; i<width; i=i+20){
  for(let j=0; j<height; j=j+20){
    circle(i,j,20);
  }
}

}
