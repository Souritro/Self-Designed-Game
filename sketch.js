 const Engine= Matter.Engine;
 const Bodies= Matter.Bodies;
 const World= Matter.World;
 var ball, ground, obstacle;
 var engine,world;
 var canvas;
 //var canvas;
 function preload(){

 }

 function setup(){
   // fill(rgb(0,0,0))
   canvas=createCanvas(1600,600)
    
    engine= Engine.create()
    world= engine.world;
    ground= new Ground(1,596,3200,20)
    ball= new Ball(200,100,40,60)
 }

 function draw(){
   background(0)
    Engine.update(engine)
    ground.display();
    ball.display()
    //isColliding()
  //  keyPressed()
  drawSprites()
 }
 function keyPressed(){
   if(keyCode===UP_ARROW){
     ball.upForce()
   }
   
 }
 //function isColliding(){
  //  if(ball.x-ground.x<ball.width/2){
    //   console.log("touching")
   // }
 //}



