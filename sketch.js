
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy, boyImg;
var tree, treeImg;
var stone;
var slingShot;
var mango1, mango2, mango3, mango4, mango5, mango6;

var slingShot;

function preload()
{
  boyImg=loadImage("boy.png")
  treeImg=loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);

	boy = createSprite(600,635);
	boy.addImage(boyImg);
  boy.scale=0.1;

  tree = createSprite(1000,450);
	tree.addImage(treeImg);
  tree.scale=0.45;

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,40);

	stone = new Stone(545,575,20);

	mango1 = new Mango(1000, 400, 30);
	mango2 = new Mango(1000, 300, 30);
	mango3 = new Mango(900, 400, 30);
	mango4 = new Mango(1100, 400, 30);
	mango5 = new Mango(900, 300, 30);
	mango6 = new Mango(1100, 300, 30);

	slingShot = new slingshot(stone.body, {x: 545, y: 575});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  drawSprites();
  ground.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  slingShot.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);


 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingShot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:635, y:420}) 
	slingShot.attach(stone.body);
	}
  }

function detectcollision(lstone,lmango){

    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
      if(distance<=lmango.r+lstone.r)
      {
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }



