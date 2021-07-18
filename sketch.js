const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, bouncyBall,hammer,rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
bouncyBall =new BouncyBall(100,200,20)
    plane = new Plane(600,height,1200,20)
    iron = new Iron(100,100);
    stone = new Stone(100,100);
    hammer = new Hammer(10,100);
    rubber = new Rubber(20,20,60);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
    bouncyBall.display();
    iron.display()  
    hammer.display();
    rubber.display();
 
}
