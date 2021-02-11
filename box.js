class Box{
    constructor(x,y,width,height){
        var options={
            restitution :0.8,
            friction: 0.8,
            density :0.06
        }

        this.body = Bodies.rectangle(x,y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        if(this.body.speed < 5){
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("lightblue");
        fill("blue");
        rect(0,0, this.width, this.height)
        pop();
  }
           else{
            push();
             World.remove(world, this.body);
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             pop();
           }
          }
       
    }
