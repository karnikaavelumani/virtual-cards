let tick = 0;
let open = false;
const closingPoint = 100;
let img;

function preload() {
  img = loadImage('giratina.png');
}

function setup() {
  createCanvas(500, 700);
}

function pokedexHalf(x, y) {
  fill(171, 5, 41);
  rectMode(CORNER);
  strokeWeight(1);
  rect(x, y, 250, 125, 0, 0, 20, 20);
  
  fill('#ADD8E6');
  arc(x + 125, y, 155, 155, 0, PI);
  fill('black');
  arc(x + 125, y, 150, 150, 0, PI);
  strokeWeight(0);
  fill('#ADD8E6');
  arc(x + 125, y-1, 100, 100, 0, PI);
  
}

function pokedex(x, y) {
  push();
  translate(x, y + tick);
  pokedexHalf(0, 0);
  pop();
  push();
  translate(x+250, y - tick);
  rotate(PI);
  pokedexHalf(0, 0);
  pop();
}

function content() {
  strokeWeight(0);
  fill('#ADD8E6');
  rect(143, 225, 225, 225);
  let title = 'Happy Birthday Iggy!';
  fill(0);
  textSize(15);
  text(title, 185, 250, 150, 150); 
  
  let content = 'Dear Iggy, thank you for being a wonderful friend. I am grateful to have some I can talk about Phoenix Wright with. You deserve endless happiness. - Karni';
  fill(0);
  textSize(12);
  text(content, 235, 300, 120, 150); 
  
  image(img, 140, 285, 100, 100);
}

function draw() {
  background('#ffdeff');
  let click = 'Click to Open the PokeDex!';
  fill(0);
  textSize(30);
  textStyle(BOLD);
  text(click, 45, 50, 500, 100); 
  content();
  pokedex(130, 340);
  
  if (open && tick < closingPoint) {
    tick += 1;
  } else if (!open && tick > 0) {
    tick -= 1;
  }
  
}

function mouseClicked() {
  open = !open;
}