
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var BoyHand
function preload()
{
	boyIMG = loadImage("boy.png")
}

function setup() {
	createCanvas(5000, 700);
    

	engine = Engine.create();
	world = engine.world;
  
 
stone1 = new stone(80,275,50,123);
stone1.body.scale = 0.4

 Boy = Bodies.rectangle(150,235,30,30);
 World.add(world,Boy)
 
 Matter.Body.setStatic(Boy,true)
 

 Tree = new tree(500,390,20,20);

 mango1 = new mango(400,100,50);
 mango2 = new mango(340,100,50);
 mango3 = new mango(300,80,50);
 mango4 = new mango(340,40,50);
 mango5 = new mango(380,30,50);

 
	//Create the Bodies Here.
 Ground = Bodies.rectangle(400,400,12222,50);
 World.add(world, Ground)

 sling = new SlingShot(stone1.body,{x:175,y:275})

 
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background("White");
 
  
  
  Matter.Body.setStatic(stone1.body, false)

  
  Tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling.display();
  rect(Ground.position.x,Ground.position.y,12222,50)
  Matter.Body.setStatic(Ground,true)
  image(boyIMG,Boy.position.x,Boy.position.y,200,200)
  stone1.display();
  
   
  
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
  //Matter.Body.setStatic(stone1.body,false)
}



function KeyPressed(){
   if(keyCode === 32){

    Matter.Body.setPosition(stone1.body,{x:400,y:100})
    
     
      sling.attach(stone1.body)
   }
}


