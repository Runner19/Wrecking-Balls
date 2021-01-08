class Boxes{
    constructor(x, y){
        this.width = 70;
        this.height = 70;
        this.x = x;
        this.y = y;
        this.body = B.rectangle(x, y, 70, 70);
        W.add(world, this.body);
    }
    display(){
        push()
        stroke("green");
        strokeWeight(5);
        fill("yellow");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}