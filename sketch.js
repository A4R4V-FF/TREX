
function preload(){
  //pre-load images
  runner_1 = loadImage("Runner-1.png","Runner-2.png");
  road = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  Road = createSprite(200,100,400,20);
  Road.addImage(road);
  Road.velocityY = 4;
  Road.scale = 1.2;
  runner = createSprite(200,200,20,50);
  runner.addImage(runner_1);
  runner.scale = 0.1;
}

function draw() {
  background(0);
if(Road.y>400){
Road.y = height/2;
}
drawSprites();
}
