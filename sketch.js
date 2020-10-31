var player
var enemy
var snitch1
var background
var enemy1

function preload(){
  bg = loadImage("bg.jpg");
  Player = loadImage("player.png")
  enemy = loadImage("enemy.png")
  snitch = loadImage("snitch.png")

}
function setup() {
  createCanvas(1200,600);
   
  player = createSprite(100,100,20,20) 
  player.addImage("Player",Player)
  player.scale = 0.2

  enemy1 = createSprite(1100,100,20,20) 
  enemy1.addImage("Enemy",enemy)
  enemy1.scale = 0.06

  snitch1 = createSprite(600,400)
  snitch1.addImage("Snitch",snitch )
  snitch1.scale=0.08
}

function draw() {
  background(bg); 
  fill  ("black")  
text("Press Space to Serve",600,500);

if(keyDown("space")){
snitch1.velocityX=-2
snitch1.velocityY=2

}
edges=createEdgeSprites()
snitch1.bounceOff(edges[3])
snitch1.bounceOff(edges[2])
snitch1.bounceOff(player)
snitch1.bounceOff(enemy1)


  enemy1.y=snitch1.y




if (keyDown("UP_ARROW")) {
  player.y=player.y-5;
}
if (keyDown("DOWN_ARROW")) {
  player.y=player.y+5;
}
if (snitch1.x<0){
 

  text("You Lose! Try again",500,200); 
}
if (snitch1.x<0){
  enemy1.y=200
}
  drawSprites();
}

