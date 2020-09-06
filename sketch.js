var fixedRect, movingRect;

function setup()
{
    createCanvas(1200,800);
    fixedRect = createSprite(600,400,50,80);
    gameobject1 = createSprite(100,100,50,80);
    gameobject1.shapeColor = "yellow";
    gameobject2 = createSprite(200,100,50,80);
    fixedRect.shapeColor = "green";

    movingRect = createSprite(400,200,80,30);
    movingRect.shapeColor = "green";

}

function draw()
{
    background(0,0,0);
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;
    drawSprites();

   if ( isTouching(fixedRect,gameobject1))
   {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
   }
   else
   {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

   }
   
}

function isTouching(object1, object2)
{
    if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2) 
    {
        return true;
    }
    else
    {
       return false;
    }


}


