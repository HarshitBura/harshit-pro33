const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var boy,boyImg;
var backgroundImg;
var snow1;
var snowfall = [];

function preload(){
boyImg = loadImage ("ho3aq6nuk9gr383cjgqpuiqsil.png");
backgroundImg = loadImage ("snow1.jpg");
}
function setup() {
  createCanvas(1000,550);
  engine = Engine.create();
  world = engine.world;
  
  boy = createSprite(5, 370, 50, 50);
  boy.addImage("hello",boyImg);
  boy.scale=0.2;

  
 
}

function draw() {
  background(backgroundImg); 
  fill("green")
  textSize(20)
  text("Press lest and right arrow key to move boy and space key to stop the boy ",300,20) ;
  if(keyCode===LEFT_ARROW){
    boy.velocityX=-10;
  }
  else if(keyCode===RIGHT_ARROW){
    boy.velocityX=10
  }
  if(keyCode===32){
    boy.velocityX=0;
  }
  
  Engine.update(engine);

  drawSprites();
  if(frameCount%60===0){
    snowfall.push(new snow(random(10,1000),10,10,10));
  }

  for (var m = 0; m < snowfall.length; m++) {
    snowfall[m].display();
  }
}