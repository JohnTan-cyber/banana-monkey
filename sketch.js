
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var BananaGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time"+survivalTime,100,50);
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  
  foodGroup=new Group();
  obstaclesGroup=new Group();
}



function draw() {
  background("lightblue")
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground)
  
  
  drawSprites();
}

function spawnBanana(){
 if (frameCount % 60 === 0) {
     banana = createSprite(600,100,40,10);
     banana.y = Math.round(random(10,60));
     banana.addImage(bananaImage);
     banana.scale = 0.5;
     banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 600;
    
    //adjust the depth
     banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //adding cloud to the group
    BananaGroup.add( banana);
    }

}

function spawnObstacles(){
  if (frameCount % 60 === 0){
   var obstacle = createSprite(400,165,10,40);
   obstacle.velocityX = -6 +3 * score/100
   
    
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 600;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }

  }
}

 




