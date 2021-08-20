var sea;
var ship;
var seaImg;
var shipImg1;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  //spriteName = addImage(seaImg);
  sea = createSprite(400,200);
  background("blue");
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.4;
  ship = createSprite(130,200,30,30);
  ship.addAnimation( "movingShip" , shipImg1);
  ship.scale = 0.3;
}



function draw() {
 background(0);
 sea.velocityX = -3;
  if (seaImg.x<0) {
    seaImg.x = sea.width/8;
  
}
drawSprites();
}