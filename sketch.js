
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paperBall;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
	box1 = new Box(660,height-20,200,20);
  box2 = new Box(560,height-20,20,100);
	box3 = new Box(740,height-20,20,100);
	paperBall = new Paper(40,height-20,15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBall.velocityY = paperBall.velocity+0.5;
  drawSprites();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paperBall.display();
  keyPressed();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {	 
	   Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:7,y:-17});
	   
	 }
	 

   }

