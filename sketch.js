var E = Matter.Engine;
var W = Matter.World;
var B = Matter.Bodies;
var C = Matter.Constraint;
var pendulum, box, ground, cons, blocks;

function setup(){
    createCanvas(1400, 650);
    engine = E.create();
    world = engine.world;

    //Bodies
    pendulum = new Pendulum(700, 350);
    ground = new Ground(700, 638);
    cons = new Constraint(pendulum.bodies, {x:438, y:200});
    box1 = new Boxes(900,100,70,70)
    box2 = new Boxes(900,100,70,70)
    box3 = new Boxes(900,100,70,70)
    box4 = new Boxes(900,100,70,70)
    box5 = new Boxes(900,100,70,70)
    box6 = new Boxes(900,100,70,70)
    box7 = new Boxes(800,100,70,70)
    box8 = new Boxes(800,100,70,70)
    box9 = new Boxes(800,100,70,70)
    box10 = new Boxes(800,100,70,70)
    box11= new Boxes(800,100,70,70)
    box12 = new Boxes(800,100,70,70)
    box13 = new Boxes(700,100,70,70)
    box14 = new Boxes(700,100,70,70)
    box15 = new Boxes(700,100,70,70)
    box16 = new Boxes(700,100,70,70)
    box17= new Boxes(700,100,70,70)
    box18 = new Boxes(700,100,70,70)
    box19= new Boxes(700,100,70,70)
    box20 = new Boxes(700,100,70,70)
}

function draw(){
    E.update(engine);
    background("black");
    rectMode(CENTER);
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
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    fill("orange");
    pendulum.display();
    fill("cyan");
    ground.display();
    cons.display();
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum.bodies, {x:mouseX, y:mouseY});
}