var movingrect, fixedrect, gameObject1, gameObject2;
function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(800, 400, 80, 30);
  fixedrect = createSprite(600, 400, 50, 80);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
}

function draw() {
  background(0);  
  movingrect.x = World.mouseX;
   movingrect.y = World.mouseY;

   if(isTouching(movingrect,gameObject1)){
    movingrect.shapeColor = "red";
    gameObject1.shapeColor = "red";
   }
   else {
    movingrect.shapeColor = "green";
    gameObject1.shapeColor = "green"; 
   }
  drawSprites();
}
