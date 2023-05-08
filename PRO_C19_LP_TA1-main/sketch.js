var backgroundImage, ground
var track, track1
var trainImage, train
var banditImage, bandit
var guardImage, guard
var throwingKnifeLeft, left
var throwingKnifeRight, right
var banditsGroup
var knifeGroup

function preload(){
 backgroundImage=loadImage("background.jpeg")
 track1=loadImage("trainTrack.png")
trainImage=loadImage("train.png")
banditImage=loadImage("motorCycle.png")
guardImage=loadImage("guard.png")
throwingKnifeLeft=loadImage("throwing_knife_left-removebg-preview.png")
throwingKnifeRight=loadImage("throwing_knife_right.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  ground=createSprite(750,300,width+100,height)
  ground.addImage(backgroundImage)
  ground.scale=7
  ground.velocityY=10

  track=createSprite(750,370,20,60)
  track.addImage(track1)
  track.scale=1.7
  track.velocityY=10

  train=createSprite(780,340,20,20)
  train.addImage(trainImage)

  guard=createSprite(770,340,5,5)
  guard.addImage(guardImage)
  guard.scale=0.5 

  knifeGroup=new Group()
  banditsGroup=new Group()  
  
}

function draw(){
  background(0);
  drawSprites()
  if(ground.y>500){
    ground.y=300
  }

  if(track.y>500){
    track.y=300
  }
bandits()

if(keyDown("s")){
  guard.y=guard.y+5
}

if(keyDown("w")){
  guard.y=guard.y-5
}

if(keyDown("left_arrow")){
  knife=createSprite(guard.x,guard.y,5,5)
  knife.addImage(throwingKnifeLeft)
  knife.scale=0.2
  knife.velocityX=-30
  knifeGroup.add(knife)
}

if(keyDown("right_arrow")){
  knife=createSprite(guard.x,guard.y,5,5)
  knife.addImage(throwingKnifeRight)
  knife.scale=0.2
  knife.velocityX=+30
  knifeGroup.add(knife)
}

if(knifeGroup.isTouching(banditsGroup)){
  knifeGroup.destroyEach()
  banditsGroup.destroyEach()
}
}

function bandits(){
if(frameCount%300==0){
  bandit=createSprite(150,height,20,20)
  bandit.addImage(banditImage)
  bandit.velocityY=-1
  bandit.x=Math.round(random(width/2-230,width/2+250))
  banditsGroup.add(bandit)
}
}