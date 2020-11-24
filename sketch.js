var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box2, box3, box1Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	//box1=createSprite(width/2,height -45,200,20);
	box2=createSprite(width/2 -100,height -90,20,100);
	box3=createSprite(width/2 +100,height -90,20,100);
	//box1.shapeColor=color(255, 0, 0);
	box2.shapeColor=color(255, 0, 0);
	box3.shapeColor=color(255, 0, 0);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1Body = Bodies.rectangle(width/2, height -45, 200, 20 , {isStatic:true} );
 	World.add(world, box1Body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill ("red")
  rect(width/2,height -45, 200, 20);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;
  if (packageBody.isStatic === true){
    packageSprite.x = helicopterSprite.x;
  }
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === DOWN_ARROW && helicopterSprite.x > box2.x && helicopterSprite.x < box3.x) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
    
  }

  if (keyCode === LEFT_ARROW) {
	helicopterSprite.x = helicopterSprite.x -10;
  }

  if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x = helicopterSprite.x +10;
  }
}



