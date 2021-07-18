class Stone {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':12
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
    this.width = width;
    this.height = height;
   
  }
  display(){
    var stonepos =this.body.position;
    push();
    translate(stone.x,stone.y);
    rectMode(CENTER);
    stroke("black");
    fill("blue");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
