 var gameState=1;
 var babyi, thiefr, thiefl, policer , policel, craftingi ,bottlei, capi, milki;

function preload(){
  babyi =  loadImage("baby image.png");
  policer =  loadImage("police r.png");
  policel =  loadImage("police l.png");
  thiefr =  loadImage("thief r.png");
  thiefl =  loadImage("thief l.png");
  bottlei =  loadImage("bottle.png");
  capi = loadImage("cap.png");
  milki = loadImage("milk.png");
  craftingi =  loadImage("crafting.png");
  idci =  loadImage("idc.png");
}

function setup(){
  createCanvas(400,400);

 
  detect = createSprite(25,375,15,30);
  thief = createSprite(25,365,15,10);
  trap2 = createSprite(380,15,40,40); 
  trap = createSprite(360,35,80,80);
  diamond = createSprite(375,25,20,20);
  lazar = createSprite(100,0,200,5);
  lazar1 = createSprite(300,400,200,5);
  jail = createSprite(-200,-200,10,400);
  jail2 = createSprite(-200,-200,10,400);
  jail5 = createSprite(-200,-200,10,400);
  jail3 = createSprite(-200,-200,10,400);
  jail4 = createSprite(-200,-200,10,400);
  arrest = createSprite(-200,-200,400,400);
  police = createSprite(375,170,20,20);
  pollice = createSprite(20,270,20,20);
  policet = createSprite(440,270,20,20);
  pollicet = createSprite(-35,170,20,20);
  
  var wall = createSprite(165,60,400,10);
  var wall2 = createSprite(380,115,180,10);
  var wall3 = createSprite(80,115,200,10);
  var wall4 = createSprite(200,200,400,10);
  var wall5 = createSprite(250,180,30,50);

  wall.shapeColor="red";
  wall2.shapeColor="red";
  wall3.shapeColor="red";
  wall4.shapeColor="red";
  wall5.shapeColor="red";
    
  var tp1 = createSprite(0,180,20,50);
  var tp2 = createSprite(400,180,20,50);    
  tp1.shapeColor="green";
  tp2.shapeColor="green";

  wall.visible =false;
  wall2.visible =false;
  wall3.visible =false;
  wall4.visible =false;
  wall5.visible =false;

  baby = createSprite(500,500,20,20);
  wall6 = createSprite(500,500,100,10);
  wall7 = createSprite(500,500,10,100);
  w = createSprite(500,50,10,100);
  e = createSprite(600,100,250,10);
  r = createSprite(500,250,200,10);
  f = createSprite(500,200,150,10);
  d = createSprite(500,150,150,10);
  g = createSprite(500,125,10,50);
  b = createSprite(500,150,100,10);
  n = createSprite(500,175,10,50);
  h = createSprite(500,180,10,50);
  m = createSprite(500,230,100,10);
  s = createSprite(500,300,50,10);
  a = createSprite(500,363,30,125);
  z = createSprite(500,350,30,100);
  i = createSprite(500,300,50,10);
  o = createSprite(500,240,10,25);
  p = createSprite(500,250,25,10);
  bot = createSprite(500,5000,20,20);
  cap = createSprite(500,5000,20,20);
  milk = createSprite(500,5000,20,20);

  thief.addImage(thiefr);
  thief.scale = 0.07;

  baby.addImage(babyi);
  baby.scale = 0.2;

  milk.addImage(milki);
  milk.scale=0.1;

  cap.addImage(capi);
  cap.scale=0.1

  bot.addImage(bottlei);
  bot.scale=0.2

  police.addImage (policel);
  police.scale = 0.1;
  police.debug=true;
    
  pollice.addImage (policer);
  pollice.scale = 0.1;
  pollice.debug=true;

  
  arrest.shapeColor="green";
  lazar.shapeColor="red";
  lazar1.shapeColor="red";
  trap.shapeColor="green";
  trap2.shapeColor="green";
    
  
  diamond.shapeColor="lightblue";
  detect.shapeColor="green";
 
 
}

function draw() {
background("green");

diamond.rotation=45;

if(gameState === 1){
  if (keyDown("space")) {
    lazar.velocityY=5;
    lazar1.velocityY=-5;
    police.velocityX=-3;
    
    pollice.velocityX = 3;
}

  if(thief.isTouching(trap)){
    trap.shapeColor="red";
  }
  
  if(thief.isTouching(trap2)){
    trap2.shapeColor="red";
  }
  
  if((trap2.shapeColor==="red")||
  (lazar.isTouching(thief)||lazar1.isTouching(thief))||
    (thief.isTouching(police))){
    lazar.velocityY=0;
    lazar1.velocityY=0;
    lazar.destroy();
    lazar1.destroy();
    diamond.destroy();
    police.destroy();
    pollice.destroy();
    policet.destroy();
   
    trap.destroy();
    trap2.destroy();
    pollicet.destroy();
   
    jail.x=200;
    jail.y=200;
    jail2.x=55;
    jail2.y=200;
    jail3.x=120;
    jail3.y=200;
    jail4.x=275;
    jail4.y=200;
    jail5.x=350;
    jail5.y=200;
    thief.x=200;
    thief.y=300;
    gameState=0;
  }
  
  if (thief.isTouching(detect)) {
  fill("black");
  textSize(25);
  text("Thief Detected",10,200);
  text("Press space to deploy security",10,220);
  }
  
  if (police.isTouching(pollicet)){
    police.x=375;
  }
  if (pollice.isTouching(policet)) {
    pollice.x = 25;
  }

}

  if(gameState === 0){
    fill("red");
    textSize(50);
    text("Thief Was Arrested",0,200);

    fill("blue");
    textSize(40);
    text("Press 'Q' to break out",0,50);
  }
  
  
  if(keyWentDown("Q")&&gameState === 0){
    jail.destroy();
    jail2.destroy();
    jail3.destroy();
    jail4.destroy();
    jail5.destroy();
    gameState=2;
  }
  
  if (gameState === 2) {
    thief.x=200;
    thief.y=25;
  
    gameState=3;
  }
  
  if(gameState === 3 || gameState === 1 || gameState === 4){
    if (keyDown("up")) {
    thief.y=thief.y-3;
  }

  if (keyDown("down")) {
    thief.y=thief.y+3;
   
  }

  if (keyDown("right")) {
    thief.x=thief.x+3;
   
    thief.addImage(thiefr)
  }

  if (keyDown("left")) {
    thief.x=thief.x-3;
     thief.addImage(thiefl)
  }
  }
  
  if(gameState === 3){
    wall.visible =true;
    wall2.visible =true;
    wall3.visible =true;
    wall4.visible =true;
    wall5.visible =true;


    if (thief.isTouching(wall)||
    thief.isTouching(wall2)||
    thief.isTouching(wall3)||
    thief.isTouching(wall5)) {
      thief.x=200;
      thief.y=25;
    }
    
    if (thief.isTouching(wall4)) {
      fill("blue");
      textSize(25);
      text("Need police uniform and Gun",50,250);
      tp1.shapeColor="blue";
      tp2.shapeColor="brown";
    }
    
    if(thief.isTouching(tp1)){
      wall.x=1000;
      wall2.x=500;
      wall3.x=500;
      wall4.x=1000;
      wall5.x=500;
      tp1.x=500;
      tp2.x=500;
      tp2.y=180;
      thief.x=200;
      thief.y=25;
      gameState=4;
    }
  }
  
  if(thief.x>175&&thief.x<225 && thief.y>20&&thief.y<45 && gameState === 4){
    fill("blue");
    textSize(20);
    text("We need to distract the baby with milk",30,180);
  }
  
  if(gameState === 4){
    var craft = createSprite(100,350,20,20)
    craft.addImage(craftingi);
    craft.scale=0.7;
   
    wall6.x=375;
    wall6.y=300;
    wall7.x=275;
    wall7.y=350;
    baby.x=310;
    baby.y=300;
    bot.x=40;
    bot.y=40;
    milk.x=30;
    milk.y=185;
    cap.x=350;
    cap.y=275
    w.x=100;
    e.x=175;
    r.x=300;
    f.x=200;
    g.x=295;
    b.x=300;
    h.x=125;
    d.x=75;
    m.x=50;
    o.x=100;
    p.x=90;
    s.x=25;
    a.x=10;
    z.x=185;
    i.x=175;
    baby.depth=34;
  }
  
  
  
  edges = createEdgeSprites();
  thief.bounceOff(edges);

  lazar.bounceOff(edges);
  lazar1.bounceOff(edges);

  drawSprites();

  fill(0);
  textSize(10);
  text(mouseX + "," + mouseY, mouseX,mouseY);
}
