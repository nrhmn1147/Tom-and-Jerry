var bg;
var tom, tomImg1,tomImg2;
var jerry, jerry1, jerryImg1,jerryImg2;

function preload() {
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");

    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");

    bg = loadImage("images/garden.png");


}

function setup(){
    createCanvas(1000,800);

    tom = createSprite(875, 600);
    tom.addAnimation("tom", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(250, 630);
    jerry.addAnimation("jerry", jerryImg1);
    jerry.scale = 0.1;

}

function draw() {

    background(bg);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2) { 
        tom.addAnimation("tom3", tomImg3);
        tom.changeAnimation("tom3");
        jerry.addAnimation("jerry3", jerryImg3);
        jerry.changeAnimation("jerry3");

        tom.x = 340;
        tom.velocityX=0;
        
    }  
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");

        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.changeAnimation("jerryTeasing");

        tom.velocityX = -5; 
        jerry.frameDelay = 25;
    } 
}