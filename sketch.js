var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  object1 = createSprite(100,260,20,20);
  object1.shapeColor = "yellow";
  object2 = createSprite(200,260,20,20);
  object2.shapeColor = "yellow";
  object3 = createSprite(300,260,20,20);
  object3.shapeColor = "yellow";
  object4 = createSprite(400,260,20,20);
  object4.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,object1)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
  
 
 bounceOff(movingRect,fixedRect);
 
  drawSprites();
}

