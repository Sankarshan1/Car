var car,wall,ground,speed,weight;




function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500,380,20,height/2);
  wall.shapeColour= (80,80,80);
  
  car=createSprite(200,380,20,20);
  car.shapeColour= "white";
   ground=createSprite(400,380,800,20);
   speed=random(55,190)
   weight=random(400,1500)
  
}

function draw() {
  background(0,0,0);  
  car.collide(wall);

  ground.visible=false;


  car.velocityX=speed;


  if(wall.x-car.x<(car.width+wall.width/2)){

   car.velocityX=0;
   var deformation=0.5*width*speed*speed/22509;

   if(deformation<180){
     car.shapeColour=colour(225,0,0)
   }

   if(deformation<100){
     car.shapeColour=colour(0,255,0)
   }

   if(deformation<180 && deformation>100)
    car.shapeColour=colour(230,230,0)
  }







  drawSprites();
}