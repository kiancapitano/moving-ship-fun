var sea,ship,seaImg,shipImg

function preload(){
seaImg = loadImage ("sea.png")
shipImg = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg)
  sea.velocity.X = -6
  sea.scale = 0.3
  
  ship = createSprite(130,200,30,30)
  ship.addAnimation("shipMovement",shipImg)
  ship.scale = 0.5
}

function draw() {
  background("blue");
 
  sea.velocityX = -5;

  if(sea.x<0){
    sea.x = sea.width/8
  }
  drawSprites();
}