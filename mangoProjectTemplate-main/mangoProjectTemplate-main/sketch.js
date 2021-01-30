
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();
}

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = disr(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.body,false);
}
detectcollision(stoneObj,mango1);
detectcollision(stoneObj,mango2);
detectcollision(stoneObj,mango3);
detectcollision(stoneObj,mango4);
detectcollision(stoneObj,mango5);
}
function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPostion(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}

