let options = [
    "Choice 1",
    "Choice 2",
    "Choice 3",
    "Choice 4",
    "Choice 5",
    "Choice 6",
    "Choice 7",
    "Choice 8"
  ];
  let spinning = false;
  let angle = 0;
  let result = "";
  
  function setup() {
    createCanvas(400, 400);
    textFont("Arial");
    textAlign(CENTER, CENTER);
  }
  
  function draw() {
    background(220);
    
    // Draw the wheel
    translate(width / 2, height / 2);
    fill(255);
    ellipse(0, 0, 200, 200);
    
    // Draw the options
    textSize(20);
    fill(0);
    for (let i = 0; i < options.length; i++) {
      let theta = radians(i * 360 / options.length + angle);
      let x = 100 * cos(theta);
      let y = 100 * sin(theta);
      push();
      translate(x, y);
      rotate(theta + HALF_PI);
      text(options[i], 0, 0);
      pop();
    }
    
    if (spinning) {
      // Spin the wheel
      angle += 10;
      if (angle >= 360) {
        angle = 0;
        spinning = false;
        result = options[Math.floor(random(options.length))];
      }
    }
    
    // Display the result
    textSize(32);
    text(result, 0, 150);
  }
  
  function mousePressed() {
    if (!spinning) {
      spinning = true;
      result = "";
    }
  }
  