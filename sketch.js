var cat
var mouse
function preload() {
    //load the images here
backgroundImage =loadImage("images/garden.png")
catImage1=loadAnimation("images/cat1.png")
catImage2=loadAnimation("images/cat2.png","images/cat3.png")
catImage4=loadAnimation("images/cat4.png")
mouseImage1=loadAnimation("images/mouse1.png")
mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImage4=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1200,1000);
    //create tom and jerry sprites here
cat = createSprite(1000,800)
cat.addAnimation("normalcat",catImage1)
cat.scale=0.2

mouse = createSprite(200,800)
mouse.addAnimation("normalmouse",mouseImage1)
mouse.scale=0.2
}
function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
if (cat.x-mouse.x<cat.width/2-mouse.width/2){
cat.addAnimation("lastImage",catImage4)
cat.velocityX=0
cat.x=300
cat.changeAnimation("lastImage")
mouse.addAnimation("last",mouseImage4)
mouse.changeAnimation("last")



}
    drawSprites();
}


function keyPressed(){
if (keyCode===LEFT_ARROW)
    cat.velocityX=-5
    cat.addAnimation("catruning",catImage2)
    cat.changeAnimation("catruning")
    mouse.addAnimation("mousetease",mouseImage2)
    mouse.changeAnimation("mousetease")

}
