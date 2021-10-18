const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope;
var rope2;
var rope3;
var rope4;
var rope5;





function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//creating bodies
	bob1 = new Bob (350, 400, 50);
	bob2 = new Bob (500, 400, 50);
	bob3 = new Bob (450, 400, 50);
	bob4 = new Bob (500, 400, 50);
	bob5 = new Bob (550, 400, 50);
	rope = new Rope (bob1.body, {x: 350, y: 100});
	rope2 = new Rope (bob2.body, {x: 400, y: 100});
	rope3 = new Rope (bob3.body, {x: 450, y: 100});
	rope4 = new Rope (bob4.body, {x: 500, y: 100});
	rope5 = new Rope(bob5.body, {x: 550, y: 100});
	


	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  drawSprites();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bob1.Body.bob1.body.position, {x: -30, y: 155});

	}
}
