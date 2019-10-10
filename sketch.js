let drop = 10;
let ball1;
let ball2;
let ball3;
let rain = [];
let x;
let y;
let jbox;
let zap1;
let bolt1;
let bolt2;
let bolt3;
let bolt4;

function setup() {
  // put setup code here
  createCanvas(800,800);
  background(0);
  ball1 = new Dropball(width/2);
  ball2 = new Dropball(3*width/4);
  ball3 = new Dropball(width/4);
  jbox = new Shakebox;
  zap1 = new Zapline(width/2);
  bolt1 = new Bolt(width/4,height/4);
  bolt2 = new Bolt(width/4,3*height/4);
  bolt3 = new Bolt(3*width/4,height/4);
  bolt4 = new Bolt(3*width/4,3*height/4);
  for(let o = 0; o < 100; o++){
  	rain[o] = new Raindrop;
  }
}

function draw() {
	jbox.jitter();
	jbox.display();

	zap1.zap();
	zap1.display();
	bolt1.shake();
	bolt1.display();
	bolt2.shake();
	bolt2.display();
	bolt3.shake();
	bolt3.display();
	bolt4.shake();
	bolt4.display();

	if (keyIsPressed && key == 'a') {
	    ball1.move();
		ball1.display();
		ball2.move();
		ball2.display();
		ball3.move();
		ball3.display();
    }
    if (keyIsPressed && key == 's') {
	    for(let i = 0; i < 100;i++){
  			rain[i].display();
  			rain[i].update();
  		}
    }
    fill(0,10); //reverts collors 
  	rect(0,0,width, height); //Not too sure why this line changes so much
  


    if (keyIsPressed && key == 'd') {
    	x = width/2; //starting position of all strokes in the middle
  		y = 1; 
	    while(y<800){//y will go down to the bottom of the screen
     		let leX = x + int(random(-12,12)); //creates the jagged effects
     		let leY = y + 1;    
     		strokeWeight(2);
    		stroke(255,215,0); //gold
    		line(x,y,leX,leY);
     		x = leX; 
     		y = leY;  
  		}
 	 	y = y+1;
    }

  	
    
}

class Bolt{
	constructor(x_,y_){
		this.x = x_;
		this.y = y_
	}
	shake(){
		this.x += random(-1,1);
	}
	display() {
		stroke(255);
		line(this.x,this.y,this.x-20,this.y+40);
		line(this.x-20,this.y+40,this.x+10,this.y+60);
		line(this.x+10,this.y+60,this.x,this.y+100);
		line(this.x,this.y,this.x-10,this.y+40);
		line(this.x-10,this.y+40,this.x+20,this.y+60);
		line(this.x+20,this.y+60,this.x,this.y+100);

	}
}

class Zapline{
	constructor(pos) {
		this.x = pos;
		this.y = 0;
		this.yend = height;
	}

	zap() {
		this.x += random(-3,3);
	}
	display(){
		
		line(this.x,this.y,this.x,this.yend);
	}
}


class Raindrop {
	constructor(){
		this.x = random(0,width)
		this.y = 10;
	}
	display(){
		ellipse(this.x,this.y,2,10)
	}
	update(){
		this.y += 7;
	}

}

class Dropball {
	constructor(wid){
		this.x = wid;
		this.y = 10;
		this.w = 180;
		this.h = 180;
	}
	move(){
		this.y += 10;
		this.x += 5 *(-1);
		if (this.x == 0){
			this.x = width;
		}
		if (this.y == 800){
			this.y = drop;
		}

		
	}

	display(){
		fill(0);
		stroke(255);
		ellipse(this.x,this.y,this.w,this.h);
	}

}

class Shakebox {
	constructor() {
		this.x = width/2;
		this.y = height/2;
		this.d = 200;
	}
	jitter() {
		this.x += random(-5,5);
		this.y += random(-5,5);
	}
	display() {
		fill(255,215,0);
		stroke(255,255,230);
		ellipse(this.x,this.y,this.d,this.d);
	}
}


