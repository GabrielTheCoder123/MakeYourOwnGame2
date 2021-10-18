var shooter,shooterImg
var bg,backgroundImg
var invisibleGround,invisibleGround2


function preload(){
backgroundImg=loadImage("assets/background.png")
shooterImg= loadImage("assets/shooter.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(displayWidth/2,displayHeight/2-40,30,30)
  bg.addImage(backgroundImg)
  bg.scale=4.0
  bg.velocityX=-5
 
  shooter=createSprite(displayWidth-1500,displayHeight-300,50,50)
  shooter.addImage(shooterImg)
  shooter.scale=0.7
  
  invisibleGround=createSprite(200,380,3000,20)
  invisibleGround.visible=false
  
  invisibleGround2=createSprite(200,960,3000,20)
  invisibleGround2.visible=false



}





function draw() {
  background("BLUE");
  
  if(bg.x<-250){
    bg.x=bg.width/2
  }
  


  if(keyDown(UP_ARROW)){
    shooter.y-=5
  }
  if(keyDown(DOWN_ARROW)){
    shooter.y+=5
  }


  shooter.collide(invisibleGround)
  shooter.collide(invisibleGround2)
  drawSprites()


}
