//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var dogImage;
var happydogImage;
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  happydogImage = loadImage("images/dogImg1.png")
  
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
    
  dog = createSprite(240, 290, 50, 50);
  dog.addImage(dogImage);
  dog.scale = 0.20;
}


function draw() {  
  background(46, 139, 87);


  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogImage);
  }

  textSize(20);
  fill("white");
 
  text("Note: Press up arrow to feed puppy!", 10, 50);
  text(foodS, 400, 50)
  drawSprites();
  //add styles here


}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


