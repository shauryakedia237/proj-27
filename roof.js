class Roof {
    constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
		
		rectMode(CENTER)
			
			fill(128,128,128)
			rect(this.body.position.x,this.body.position.y,this.w, this.h);
		
			
    }
  }
