
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Diameter = 100

var rope1, rope2, rope3, roof, bobObject1, bobObject2, bobObject3;
function preload()
{
//	Diameter = 100

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof = new Roof(400, 150, 600,50);
	bobObject1 = new Bob(400,600,Diameter);
	bobObject2 = new Bob(bobObject1.x - Diameter,600,Diameter);
	bobObject3 = new Bob(bobObject1.x + Diameter,600, Diameter);
	
	var options = {

		bodyA: bobObject1.body, 
		bodyB: roof.body,
		pointB:{x:Diameter, y:0},

		stiffness: 0.04,
		length: 100
	}
	

	Engine.run(engine);

	

	var rope1 = Constraint.create (options);
	var rope2 = Constraint.create(options);
	var rope3 = Constraint.create(options);

	rope1 = new Rope (bobObject1.body, roof.body, 0, 0);
	rope2 = new Rope (bobObject2.body, roof.body, bobObject1.x - Diameter, 0);
	rope3 = new Rope (bobObject3.body, roof.body, bobObject1.x + Diameter, 0);
	World.add(World, rope1, rope2, rope3);

}


function draw() {
  rectMode(CENTER);
  background(255);
  
  //drawSprites();
  	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	
	strokeWeight(4);

	line(roof.body.position.x, roof.body.position.y, bobObject1.body.position.x, bobObject1.body.position.y);
	line(roof.body.position.x - Diameter, roof.body.position.y, bobObject2.body.position.x, bobObject2.body.position.y);
	line(roof.body.position.x + Diameter, roof.body.position.y, bobObject3.body.position.x, bobObject2.body.position.y);
}