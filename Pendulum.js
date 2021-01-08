class Pendulum{
    constructor(x, y){
        var options ={
            isStatic:false,
            restitution:1
        }
       this.bodies = B.rectangle(x, y, 50, 50, options);
       this.x = x
       this.y = y
       this.r = 78;
       W.add(world, this.bodies);
    }
    display(){
       var pos = this.bodies.position;
       var angle = this.bodies.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       noStroke();
       ellipse(0, 0, this.r);
       pop()
    }
}