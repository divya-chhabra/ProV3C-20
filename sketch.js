
const Engine = Matter.Engine; // helps us in creating universe and also updating the universe
const World = Matter.World; // helps us in adding the bodies to the engine's world.
const Bodies = Matter.Bodies; // helps us in creating different objects
const Body = Matter.Body;

let engine; // universe 
let world;
let ball;
let ground;

function setup()
{
  createCanvas(400,400);

  engine = Engine.create(); // will create the engine/universe
  world = engine.world;  

  var ball_properties = {
    restitution:0.9,
    airFriction:0.3
  }

  // var array = [1,2,3,4,];
  // var jsonvariable = { key:value, key:value };

  // var student = { name:"Saismita", age:12, class:"8th"}

  ball = Bodies.circle(200,100,10,ball_properties);

  World.add(world,ball);

  var ground_properties = {

      isStatic:true
  }

  ground = Bodies.rectangle(200,390,400,10,ground_properties);
  World.add(world,ground);

}

function draw() 
{
  background(51);
  Engine.update(engine);

  push ();
  fill ("red");
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y, 20);
  pop ();

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400, 10);

  
 
}

