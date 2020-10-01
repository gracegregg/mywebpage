


function setup() {
//canvas size full screen
createCanvas(windowWidth,windowHeight);
//background color black
background(0);
}


function draw() {
  //circles all across the screen to resemble gumballs
  for(let i=0; i<width; i=i+100){
    for(let j=0; j<height; j=j+100){
      circle(i,j,100);


      //if the up arrow is pressed the gumballs turn blue
      if(keyIsPressed&keyCode===UP_ARROW){
        let rcol = random(0,255);
        let gcol = random(0,255);
        let bcol = random(0,255);
        fill(rcol,255,255);
  }
      //if a key isn't pressed gumballs will be multicolor
          else{
            let rcol = random(0,255);
            let gcol = random(0,255);
            let bcol = random(0,255);
            fill(rcol,gcol,bcol);
          }

    //if left arrow is pressed gumballs turn green
        if(keyIsPressed&keyCode===LEFT_ARROW){
          let rcol = random(0,255);
          let gcol = random(0,255);
          let bcol = random(0,255);
          fill(rcol,255,100);
      }

      //if right arrow is pressed gumballs turn pink
      if(keyIsPressed&keyCode===RIGHT_ARROW){
        let rcol = random(0,255);
        let gcol = random(0,255);
        let bcol = random(0,255);
        fill(255,gcol,255);
  }

  //if down arrow is pressed gumballs turn red
  if(keyIsPressed&keyCode===DOWN_ARROW){
    let rcol = random(0,255);
    let gcol = random(0,255);
    let bcol = random(0,255);
    fill(255,gcol,100);
}



  }
  }



  }
