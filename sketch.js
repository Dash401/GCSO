var car, wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  wall = createSprite(1000,200,60,200);
  speed  = random(55,90);
  weight = random(400,1500);
  car.shapeColor = "blue";
 wall.shapeColor= color(200,100,100);
 car.velocityX=speed;
 deformation = (0.5*weight*speed*speed)/22500;
}



function draw()
 {
  background(0);  
  if(wall.x - car.x < (car.width+wall.width/2) )
  {
    console.log(deformation)
    car.velocityX = 0;
    if(deformation < 100)
    {
      car.shapeColor = color(0,255,0);
    }
    if(deformation <= 180 && deformation > 99)
    {
      car.shapeColor = color(230,230,0);
    }
    if(deformation > 180)
    {
      car.shapeColor = color(255,0,0);
    }    
  }
  drawSprites();
}