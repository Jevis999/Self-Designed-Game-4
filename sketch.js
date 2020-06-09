var player,battleship1,battleship2,space;
var BattleshipGroup,lightninggroup,lt;
var playeranim,lanim,bg,bs1,bs2,power;
var score = 0,enemy,BOSS,sheild,Hammer,lt;

function preload(){    
playeranim = loadImage("thor.png");
power = loadImage("Thor2.png");
lanim = loadImage("lightening.png");
bg = loadImage("space.jpg");
bs1= loadImage("bs1.png");
BOSS = loadImage("thanos2.png");
Hammer= loadImage("hammer.png");
}

function setup()
{ createCanvas(600,600);
   BattleshipGroup = new Group();
   player = new Thor();
   enemy = new Enemy();
  // player.body.addImage("thr",playeranim);
player.body.scale = 0.3;
   lightninggroup = new Group();
   Thanos=createSprite(300,-100,25,25);
   sheild=createSprite(300,-25,100,20);
   sheild.shapeColor ="yellow";
  
}
function draw() {
  background(bg);
textSize(30);
fill("red");
  text("SCORE : "+ score,400,50);
  sheild.x = Thanos.x;
  sheild.y = Thanos.y + 75;
  if(score>200){
    BattleshipGroup.destroyEach();
    
    Thanos.addImage("thanos",BOSS);
    Thanos.velocityY = 2;
    Thanos.scale = 0.25;
    if(frameCount%60===0){
      var bt = createSprite(Thanos.x,Thanos.y,20,30);
      bt.shapeColor ="red";
     // bt.debug = true;
     bt.setCollider("rectangle",-2,0,15,20);
     bt.velocityY = 4;
    }
}

  if(keyWentDown("space")){
     lt = createSprite(mouseX,450,30,30);
    lt.debug = true;
   lt.setCollider("rectangle",-2,0,15,20);
   if(score<200){lt.addImage("light",lanim);
  }else{
    lt.addImage("hammer",Hammer);
    lt.scale=0.25;
  }
    //lt.scale  = 0.5;                       
    lt.velocityY=-10;
    lt.lifetime = 45;
    lightninggroup.add(lt);
    player.body.addImage("thor",power);   
  }else{
    player.body.addImage("thr",playeranim); 
  }

 
 
  player.display();
 
  
  drawSprites();
}