var box ;
function setup() {
  createCanvas(400,400);
 // box = createSprite(200,200,20,100);
  //box.shapeColor = "blue";
}

function draw() 
{
  background(255);
  drawSprites();
  if(keyIsDown (RIGHT_ARROW)) {
    background("red");
  }
  if(keyIsDown (LEFT_ARROW)) {
    background("yellow");
  }
  if(keyIsDown (UP_ARROW)) {
    background("green");
  }
  if(keyIsDown (DOWN_ARROW)) {
    background("blue");
  }
}



var name = createSprite(200,200);