var rightBoundary;
var leftBoundary;
function preload(){
  //pre-load images
runner_1 = loadAnimation("Runner-1.png","Runner-2.png");
road = loadAnimation("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  rightBoundary=createSprite(410,0,100,800);
  leftBoundary=createSprite(0,0,100,800); 
  runner = createSprite(50,100,20,50);
  runner.addAnimation(runner_1);
  Road = createSprite(200,100,400,20);
  Road.addAnimation(road);
  rightBoundary.visible = false;
  leftBoundary.visible = false;
}

function draw() {
  background(0);
  boy.x = World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
}
