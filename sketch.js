var canvas, backgroundImage,x;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var playerrank;
var form, player, game,end1;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  image1= loadImage("images/racing.jpg");
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw()
{
  background(ground);
  if(gameState === 0){
    imageMode(CENTER);
    image(image1,displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  }
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
    game.play();
  }
  if(gameState === 2){
   //clear();
    game.end();
  }
  
}
