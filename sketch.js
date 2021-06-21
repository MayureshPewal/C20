var tom, tomImg1, tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;
var bgImg

function preload() {
    //load the images here
 
    bgImg = loadImage("./images/garden.png")
    tomImg1 = loadImage("./images/cat1.png")
    jerryImg1 = loadImage("./images/mouse1.png")
    tomImg2 = loadAnimation("./images/cat2.png","./images/cat3.png")
    jerryImg2 = loadAnimation("./images/mouse2.png","./images/mouse3.png")
    tomImg3 = loadAnimation("./images/cat4.png")
    jerryImg3 = loadAnimation("./images/mouse4.png")
    


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(750,650,100,100)
    tom.addImage(tomImg1)
    tom.scale= 0.2
    
    jerry = createSprite(180,650,100,100)
    jerry.addImage(jerryImg1)
    jerry.scale= 0.15


}

function draw() {

background(bgImg);
    //Write condition here to evalute if tom and jerry collide

if(tom.x - jerry.x < (tom.width/2 - jerry.width/2)){
    tom.velocityX = 0

tom.addAnimation("last",tomImg3)
tom.changeAnimation("last")
tom.scale = 0.2

jerry.addAnimation("last",jerryImg3)
jerry.changeAnimation("last")


}












    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

 if(keyCode===LEFT_ARROW){

 tom.velocityX = -4
tom.addAnimation("running",tomImg2)
tom.changeAnimation("running")
 
jerry.addAnimation("dancing",jerryImg2)
jerry.changeAnimation("dancing")

 }









}
