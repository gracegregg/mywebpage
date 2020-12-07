
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(0);
frameRate(10)
xoffset1=(0.0)
yoffset1=(100)
xoffset2=(0.0)
yoffset2=(0.0)
}

function draw() {
  //Put draw code here
  xpos1=noise(xoffset1)*1000
  ypos1=noise(yoffset1)*1000
  xpos2=noise(xoffset2)*1000
  ypos2=noise(yoffset2)*1000


  strokeWeight(5)
  stroke(170,0,255,70)
  line(xpos1,ypos1,xpos2,ypos2)

  xoffset1=xoffset1+0.01
  yoffset1=yoffset1+0.01
  xoffset2=xoffset2+0.01
  yoffset2=yoffset2+0.01
//
  xpos1=noise(xoffset1)*width
  ypos1=noise(yoffset1)*height
  xpos2=noise(xoffset2)*width
  ypos2=noise(yoffset2)*height


  strokeWeight(5)
  stroke(0,0,200,70)
  line(xpos1,ypos1,xpos2,ypos2)

  xoffset1=xoffset1+0.03
  yoffset1=yoffset1+0.03
  xoffset2=xoffset2+0.03
  yoffset2=yoffset2+0.03




}
