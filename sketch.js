var trex, trex_running, trex_collided, cloud;
var ground, invisibleGround, groundImage, cloudImage, invisibleGround;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudImage = loadImage("cloud.png")
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;

  //creating a invisible ground
  invisibleGround = createSprite(300,188,600,15);
  invisibleGround.visible=false

  //spawning clouds
  
}

function draw() {
  background(255);

  //jump when the space button is pressed
  if (keyDown("space")&&trex.y>100) { 
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  ground.velocityX=-3 

  spawn_Cloud();

  //console.log(cloud.x||cloud.y)

  trex.collide(invisibleGround);
  drawSprites();
}

function spawn_Cloud () {
  if(frameCount%60 === 0){
  cloud = createSprite (600,100,20,20)
  cloud.addImage(cloudImage)
  cloud.velocityX=-2
  cloud.scale=0.1
  cloud.y=Math.round(random(80,120))
  cloud.depth=trex.depth
  trex.depth=trex.depth+1
}
}



