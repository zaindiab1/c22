const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,bodies,ground;


function setup() {
  createCanvas(800,800);
 
  engine = Engine.create();
  world = engine.world;
  bodies = engine.world;  

  var ground_options = {

    isStatic: true


  }

  ground = Bodies.rectangle(400,780,900,10,ground_options)
  World.add(world,ground);

  var ball_options = {
      restitution:1.0
  }
  
ball = Bodies.circle(200,100,100,ball_options);
World.add(world,ball);
}



function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,800,10)
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,100,100)
  drawSprites();
}



