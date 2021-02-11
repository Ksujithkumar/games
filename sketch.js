const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,10)
    stand1 = new Ground(600,400,300,10)
    box1 = new Box(640,360,40,40)
    box2 = new Box(600,360,40,40)
    box3 = new Box(555,360,40,40)
    box4 = new Box(510,360,40,40)
    box5 = new Box(680,360,40,40)
    box6 = new Box(640,340,40,40)
    box7 = new Box(600,340,40,40)
    box8 = new Box(555,340,40,40)
    box9 = new Box(620,300,40,40)
    box10 = new Box(575,300,40,40)
    box11 = new Box(600,260,40,40)
    
    ball = new Ball(200,350,30,30)
    rope = new Rope(ball.body,{x:190,y:300})
}
function draw(){

    background(225);

    noStroke();
        textSize(35)
        fill("blue")
        text("drage he mouse  ",600,100)
   Engine.update(engine)
    
   ground.display();
   stand1.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   ball.display();
   rope.display();
   

   
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y: mouseY})
}


function mouseReleased(){
    rope.fly();
    
}