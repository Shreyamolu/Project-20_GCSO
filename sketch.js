var car,wall;
var speed,weight;


function setup() {
  
createCanvas(1600,400);

speed = random(55,90);
weight = random(400,1500);

car = createSprite(50,200,50,50);
car.velocityX = speed;

wall = createSprite(1500,200,60,height/2);
wall.shapeColor = color(80,80,80);



}


function preload() {

}

function draw() {
  background("black")

  if(wall.x - car.x < car.width/2 + wall.width/2)
    {
        car.velocityX = 0;
        var deformation = 0.5 * weight * speed * speed/22509;
        
        if(deformation > 180)
        {
          car.shapeColor = color (255,0,0);
        }

        if(deformation < 180 && deformation >100)
          {
            car.shapeColor = color (230,230,0);
          }
        if(deformation < 100)
          {
            car.shapeColor = color (0,255,0);
          }
    }


  drawSprites();
}












/*var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 5;

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;

}

function draw() {
  background("black"); 

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 )
 {
    movingRect.velocityX = movingRect.velocityX*(-1)
    fixedRect.velocityX = movingRect.velocityX*(-1)
 }
 if(fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2 && 
  movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2)
{
  movingRect.velocityY = movingRect.velocityY*(-1)
  fixedRect.velocityY = movingRect.velocityY*(-1)
}

  drawSprites();
}*/