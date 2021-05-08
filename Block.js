class Block{
    constructor(x, y) {
        super(x,y,20,20);
        this.visibility = 255;
        
      }
      display(){
        console.log(this.body.speed);
        if(this.body.speed < 3) {
           super.display();
        }
        else{
          World.remove(world,this.body);
          push();
          this.visiblity = this.visibility - 5;
          tint(255,this.visibility);
          pop();
        }
        
      }
}