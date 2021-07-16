class snow{
    constructor(x, y, width, height) {
        var options = {
			restitution :0,
			friction :1,
			density : 2     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
		this.image = loadImage("snow5.webp");

        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,60,60 );
        pop();
      }
}