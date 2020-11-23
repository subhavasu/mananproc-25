class Box extends BaseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.image = loadImage("sprites/dustbin.png");
    }
  /* var options = {
       isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;

    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(pos.x,pos.y,this.width,this.height);
}*/
};