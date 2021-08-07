var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  // Moving background
  path=createSprite(width/2,windowHeight/2);
  path.addImage(pathImg);
  path.velocityY = windowHeight/100;


  //creating boy running
  boy = createSprite(windowWidth/2,windowHeight*0.95,windowWidth/20,windowHeight/20);
  boy.addAnimation("SahilRunning",boyImg);
  boy.scale=windowWidth/5000;
  
  
  cashG=new Group();
  diamondsG=new Group();
  jwelleryG=new Group();
  swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > windowHeight ){
    path.y = height/2*0.45;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=windowWidth/2;
        boy.y=windowHeight/2;
        boy.scale=windowWidth/667;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(windowWidth/20);
  fill(0);
  text("Treasure: "+ treasureCollection,windowWidth/2*0.75,windowHeight/13.33);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(width/8, height-height/8),height/10, width/40, height/40));
  cash.addImage(cashImg);
  cash.scale=windowHeight/3333.33;
  cash.velocityY = height/133.33;
  cash.lifetime = 700;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(width/8, height-height/8),height/10, width/40, height/40));
  diamonds.addImage(diamondsImg);
  diamonds.scale=windowHeight/13333.33;
  diamonds.velocityY = height/133.33;
  diamonds.lifetime = 700;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(width/8, height-height/8),height/10, width/40, height/40));
  jwellery.addImage(jwelleryImg);
  jwellery.scale= windowHeight/3076.92;
  jwellery.velocityY = height/133.33;
  jwellery.lifetime = 700;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(width/8, height-height/8),height/10, width/40, height/40));
  sword.addImage(swordImg);
  sword.scale=windowHeight/4000;
  sword.velocityY = height/133.33;
  sword.lifetime = 700;
  swordGroup.add(sword);
  }
}