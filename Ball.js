class Ball{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos1 =this.body.position;
        var testangle= this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y);
        angleMode(DEGREES)
        rotate(testangle)
        rectMode(CENTER);
        fill("brown");
        rect(pos1.x, pos1.y, this.width, this.height);
       pop()
      }
      upForce(){
       // if(keyCode===UP_ARROW){
          Matter.Body.applyForce(this.body,this.body.position,{x:0,y:-5})
        //}
      }

}