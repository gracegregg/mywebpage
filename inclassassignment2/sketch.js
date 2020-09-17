
let xpos = 200;
let ypos = 50;
let xballspeed = 3;
let yballspeed = 3;


function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);


}

function draw() {
  //Put draw code here
  background(0,0,200);
  fill(200,0,0);
  circle(xpos,ypos,50);

  xpos = xpos + xballspeed;
  ypos = ypos + yballspeed;

  if (xpos > width) {
    xballspeed = -xballspeed;
  }

if (xpos < 0){
  xballspeed = -xballspeed;
}

if(ypos > height){
  yballspeed = -yballspeed;
}

if(ypos < 0){
  yballspeed = -yballspeed;
}

if(mouseIsPressed & dist(mouseX,mouseY,200,50) <25) {
xpos = random(0,width);
ypos = random(0,height);
}





}
