
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  //spriteName = addImage(seaImg);

}
spriteName = addImage(seaImg);
if (seaImg.x<0) {
  seaImg.x = sea.width/2;
}
function draw() {
  background("blue");
 
}