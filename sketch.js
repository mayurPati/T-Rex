var box;
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,40,20)

}

function draw() 
{
  background(30);
if(keyDown("down_arrow"))
{
  box.position.y = (box.position.y + 10);
}  
if(keyDown("right_arrow"))
{
  box.position.x = (box.position.x + 10);
}
if(keyDown("up_arrow"))
{
  box.position.y = (box.position.y - 10);
}
if(keyDown("left_arrow"))
{
  box.position.x = (box.position.x - 10);
}
drawSprites();
}




