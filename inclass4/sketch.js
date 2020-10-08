
let xposList = [100,300,200,400,500]
let yposList = [300,600,800,200,400]
let yspeedList = [5,10,6,10,7]
let xspeedList = [5,10,6,10,7]


function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);


}

function draw() {
  //Put draw code here
  background(255);

  for(let i=0; i<xposList.length; i=i+1){
    fill(120,0,120)
    circle (xposList[i], yposList[i],50)

    xposList[i]=xposList[i]+xspeedList[i]
    yposList[i]=yposList[i]+yspeedList[i]

    if(xposList[i]>width){
      xspeedList[i]=-xspeedList[i]
    }
    if(xposList[i]<0){
      xspeedList[i]=-xspeedList[i]
    }
    if(yposList[i]>height){
      yspeedList[i]=-yspeedList[i]
    }
    if(yposList[i]<0){
      yspeedList[i]=-yspeedList[i]
    }
  }
}
