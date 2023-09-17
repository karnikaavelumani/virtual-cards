let cake;
let candles = [];
let candleSpeed = 1;
let candlesCaught = 0;
let songTriggered = false;

function setup() {
  createCanvas(400, 400);
  cake = new Cake();
}

function draw() {
  background(220);
  
  cake.move();
  cake.display();
  
  if (!songTriggered) {
    if (frameCount % 60 === 0) {
      candles.push(new Candle());
    }
    
    for (let i = candles.length - 1; i >= 0; i--) {
      candles[i].fall();
      candles[i].display();
      
      if (candles[i].hits(cake)) {
        candles.splice(i, 1);
        candlesCaught++;
        candleSpeed += 0.5;
        
        if (candlesCaught === 45) {
          triggerSong();
        }
      }
    }
  }
  
  textSize(20);
  text("Candles Caught: " + candlesCaught, 20, 30);
}

function triggerSong() {
  // Code to trigger the birthday song audio
  songTriggered = true;
}

class Cake {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.width = 80;
    this.height = 50;
  }
  
  move() {
    this.x = mouseX;
    this.x = constrain(this.x, this.width / 2, width - this.width / 2);
  }
  
  display() {
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }
}

class Candle {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.width = 10;
    this.height = 20;
  }
  
  fall() {
    this.y += candleSpeed;
  }
  
  display() {
    fill(255, 255, 0);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }
  
  hits(cake) {
    if (this.y + this.height / 2 >= cake.y - cake.height / 2 &&
        this.x >= cake.x - cake.width / 2 &&
        this.x <= cake.x + cake.width / 2) {
      return true;
    } else {
      return false;
    }
  }
}