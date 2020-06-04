class Drop{
    constructor(x,y){
        this.xPos=x;
        this.yPos=y;
        this.radiusX=random(3,30);
        this.radiusY=random(10,20);
    }
    display(){
        fill(random(18,255),random(80,255),random(18,255));
       ellipse(this.xPos,this.yPos,this.radiusX,this.radiusY);
       stroke("green");
       line(this.xPos,this.yPos,this.xPos,this.yPos+this.radiusY)

    }

    fall(){
        this.yPos=this.yPos+random(10,30)
        if(this.yPos>height){
            this.yPos=0;

        }
    }
}
