class Constraint{
    constructor(A, B){
        var options = {
            bodyA:A,
            pointB:B,
            length:234
        }
        this.sling = C.create(options);
        W.add(world, this.sling);
    }
    display(){
        var pos = this.sling.bodyA.position;
        var pos1 = this.sling.pointB;
        stroke("white");
        line(pos.x, pos.y, pos1.x, pos1.y);
    }
}