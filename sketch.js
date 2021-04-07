const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1, box2, box3, ball, ballImage, dustbinImage, slingshot;

function preload() {
    ballImage = loadImage("paper.png")
	dustbinImage = loadImage("dustbingreen.png")
}

function setup(){
    var canvas = createCanvas(800,550);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height-8, width, 10);

    box1 = new Box(600,480,10,80);
    box2 = new Box(650,528,110,10);
    box3 = new Box(700,480,10,80);
    
    ball = new Ball(100,100,50,50);

    Slingshot = new Launcher(ball.body,{x:200, y:250});
}

function draw(){
    background("pink");
    Engine.update(engine);

    ground.display();
 
    ball.display();
 
    Slingshot.display(); 

    image(dustbinImage, 600, 440, 100, 100);   
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    Slingshot.fly();
}