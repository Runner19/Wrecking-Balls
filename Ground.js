class Ground{
    constructor(x, y){
        var options = {
            isStatic:true
        }
       this.body = B.rectangle(x, y, 1400, 10, options)
       this.x = x;
       this.y = y;
       this.width = 1400;
       this.height = 24;
       W.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        rect(0, 0, this.width, this.height);
        pop();   
    }
}