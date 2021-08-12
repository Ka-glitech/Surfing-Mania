var canvas, backgroundImage;
var gameState = 0;
var sea;
var ob1Img, ob2Img, ob3Img, ob4Img;
var  obstacle1, obstacle2, obstacle3, obstacle4;
var surfer1Img, surfer1;


function preload(){
  backgroundImage = loadImage("images/seaBg.jpg");
  ob1Img = loadImage("images\obstacle1-removebg-preview.png")
  ob2Img = loadImage("C:\Users\Kaavya\Documents\Projects\WhiteHatJr\VS Code\carRacingStage3-master\carRacingStage3-master\images\obstacle2-removebg-preview.png")
  ob3Img = loadImage("carRacingStage3-master\images\obstacle3-removebg-preview.png");
  ob4Img = loadImage("carRacingStage3-master\images\obstacle4-removebg-preview.png");
  surfer1Img = loadImage("carRacingStage3-master\images\Surfer-removebg-preview (1).png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  // sea = createSprite((displayWidth-20)/2,(displayHeight-30)/2);
  // sea.addImage(backgroundImage)
  // sea.scale=1.5;
  
}


function draw(){
  background (0)
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  drawSprites()
}
