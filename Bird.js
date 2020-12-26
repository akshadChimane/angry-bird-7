class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.trj=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if (this.body.velocity.x>10&&this.body.position.x>220){
    var pos = [this.body.position.x,this.body.position.y]; 
    this.trj.push(pos);}
    for(var i =0; i<this.trj.length;i++){ 
    image(this.smoke,this.trj[i][0],this.trj[i][1]); }

    super.display();
  }
}
