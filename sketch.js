var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(500,300,100,50);

  fixedrect.velocityX=2;
  fixedrect.velocityY=2;

  movingrect.velocityX=2;
  movingrect.velocityY=2;

  fixedrect.shapeColor="orange";
  movingrect.shapeColor="green";
}

function draw() {
  background("yellow");

movingrect.x=mouseX;
movingrect.y=mouseY;

if(movingrect.x-fixedrect.x<=(movingrect.width/2+fixedrect.width/2)&&fixedrect.x-movingrect.x<=(movingrect.width/2+fixedrect.width/2)){
  fixedrect.velocityX*=-1;
  movingrect.velocityX*=-1;
}

if(movingrect.y-fixedrect.y<=(movingrect.height/2+fixedrect.height/2)&&fixedrect.y-movingrect.y<=(movingrect.height/2+fixedrect.height/2)){
fixedrect.velocityY*=-1;
movingrect.velocityY*=-1;
}

  drawSprites();
}