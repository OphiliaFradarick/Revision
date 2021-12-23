const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

function setup()
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  //CREATE HORIZONTAL GROUND
  hGround = new Ground(200, 380, 400, 10);

  //CREATE VERTICAL GROUND  
  VGround = new Ground(20, 200,10, 400);

}

function draw() 
{
  background("black");
  Engine.update(engine);

  hGround.showRect();
  VGround.showRect();
 
}