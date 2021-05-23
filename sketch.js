var rover,rock,skyCrane,bg1,rocket
var rocketimg,bg1img

function preload()
{
rocketimg = loadImage("images/rocket sls.png")
bg1img = loadImage("images/bgearth.jpg")
}

function setup() {
	createCanvas(1536,754);
  
bg1 = createSprite(768,377,1536,754)
bg1.addImage(bg1img)
bg1.scale = 2
rocket = createSprite(730,500);
rocket.addImage(rocketimg)
rocket.scale = 0.4
  
}


function draw() {
  
  background(0);
  fill(255)
  text(mouseX+","+mouseY,mouseX,mouseY)
  drawSprites();
  if(rocket.velocityY <= -8){
    rocket.scale = rocket.scale-0.003


  }
}

function keyPressed(){
if(keyCode === 32){
  rocket.velocityY = -8
  

}

 }
