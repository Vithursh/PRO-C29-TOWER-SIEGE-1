const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint


var engine, world;
var Ground1, Ground2; 
var Box1, Box2, Box3, Box4, Box5, Box6, Box7;
var slingShot;



function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
    world = engine.world;


    Ground1 = new Ground(450, 390, 900, 20);
    Ground2 = new Ground(200, 290, 300,20);
    Polygon1 = new Polygon(200,200,50,50);
    Box1 = new Box(200,235,30,40);
    Box2 = new Box(200,235,30,40);
    Box3 = new Box(200,235,30,40);
    Box4 = new Box(590,235,30,40);
    Box5 = new Box(590,235,30,40);
    Box6 = new Box(590,235,30,40);
    Box7 = new Box(590,235,30,40);
    slingShot = new Chain(Polygon1.body,{x: 200, y: 100});

    


    Engine.run(engine);
  
}



function draw(){
    background("Grey");
    Engine.update(engine);
    strokeWeight(4);
    Ground1.display();
    Ground2.display();
    Polygon1.display();
    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box6.display();
    Box7.display();
    slingShot.display();

}


function mouseDragged(){
    Matter.Body.setPosition(Polygon1.body,{x: mouseX, y: mouseY})

}


function mouseReleased(){
    slingShot.fly();
}
