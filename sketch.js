var helicopterIMG, helicopterSprite, packageSprite,packageIMG, p1, p2, p3;
var packageBody,ground;
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
	
	var options = 
	{
		restitution : 1.0
	}
	  
	packageSprite=createSprite(width/2, 80, 10,10,options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	p1 = createSprite(width - 500, height - 80, 20, 100, {isStatic:true})
	p2 = createSprite(width - 400, height - 80, 20, 100, {isStatic:true})
	p3 = createSprite(width - 450, height - 35, 100, 20, {isStatic:true})

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.collide(p2)
  packageSprite.collide(p1)
  packageSprite.collide(p3)

 packageSprite.x = helicopterSprite.x

  keyPressed()
  keyPressed1()
  keyPressed2()
  drawSprites()
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW) 
 {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
	Matter.Body.setStatic(packageBody,false)
    
 }
}

function keyPressed1() 
{
 if (keyCode === RIGHT_ARROW) 
 {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
	helicopterSprite.x =helicopterSprite.x + 5
	
    
 }
}

function keyPressed2() 
{
 if (keyCode === LEFT_ARROW) 
 {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
	helicopterSprite.x =helicopterSprite.x - 5
    
 }
}