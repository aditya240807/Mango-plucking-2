class stone{
    constructor(x,y,radius){
      var options={
          isStatic:true,
          restitution:0,
          
      }
      this.body = Bodies.circle(x,y,radius/2,options)
      this.radius = radius
      this.image = loadImage("stone.png");
      
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        strokeWeight(4);
        stroke("green");
        fill(255);
        image(this.image,0, 0, 40, 40);
        pop();
    }
}