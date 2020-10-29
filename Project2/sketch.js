
//Halloween scene elements
let backdrop
let house
let housexpos=325
let houseypos=100
let bat
let batxpos=50
let batypos=50
let batxspeed=10
let batyspeed=10
let ghost
let face


function preload(){
//Loading the images
  backdrop=loadImage('https://i.imgur.com/uPvpon8.jpg')

  house=loadImage('https://i.imgur.com/yD8G2DZ.png')

  bat=loadImage('https://i.imgur.com/gm8ZCQl.png')

  ghost=loadImage('https://i.imgur.com/exG3x8d.png')

  pumpkin=loadImage('https://i.imgur.com/ZmbYQy8.png')

  face=loadImage('https://i.imgur.com/KQD41rl.png')

  }

function setup() {
  //Canvas width & Heighth
createCanvas(windowWidth,windowHeight)

}



function draw() {
//Drawing spooky background
background(backdrop)
//Drawing House in middle of canvas
image(house,housexpos,houseypos)
//Drawing 2 pumpkins on either side of house
image(pumpkin,150,700,pumpkin.width/5,pumpkin.height/5)
image(pumpkin,1175,700,pumpkin.width/5,pumpkin.height/5)
//Drawing bat wherever the mouse moves
image(bat,mouseX,mouseY,bat.width/5,bat.height/5)


//When the ENTER key is pressed, the transformation occurs
if(keyIsPressed & keyCode === ENTER){
//House shakes
  housexpos=random(270,300)
//Entire canvas has a darker tint
  tint(0,154,206,126)
//Pumpkins faces appear
  image(face,180,740,face.width/5,face.height/5)
  image(face,1200,740,face.width/5,face.height/5)
//Ghost appears
  image(ghost,1000,300,ghost.width/2,ghost.height/2)
}

//If the ENTER button isn't pressed, everything goes back to normal
else{
  noTint()
}


}
