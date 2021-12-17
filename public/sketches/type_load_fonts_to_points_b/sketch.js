// load font with a link tag from inside  the index.html 
// file. (see sketch files).
// 
// for this example we use Krona One by by Yvonne Schüttler
// https://fonts.google.com/specimen/Krona+One
// 
// check the Sketch Files and the additional file
// KronaOne-Regular.ttf
//
// Note that this will work for the default renderer,
// however this does not work as expected with WEBGL and 
// Tthe following notification will be posted in the console:
// 
// You must load and set a font before drawing text. 
// See `loadFont` and `textFont` for more details. 
//
// see the following WEBGL type example.
// https://editor.p5js.org/sojamo/sketches/mvEZEFfB6

let points;
let font;

function preload() {
  font = loadFont("KronaOne-Regular.ttf");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(100);
  
  points = font.textToPoints('a', 0, 0, 150, {
    sampleFactor: 1,
    simplifyThreshold: 0
  });
  console.log(points.length);
}

function draw() {
  background(240);
  drawLetterShape();
  // drawLetterVertex();
}

function drawLetterVertex() {
  stroke(0,100);
  noFill();
  push();
  translate(0, height / 2);
  beginShape();
  let x = 0;
  let y = 0;
  let n = points.length;
  let angle = TWO_PI / (n);
  let scl = 3;
  
  for (let i = 0; i < n; i += 1) {
    x = points[i].x * scl + sin((frameCount + i) * 0.1) * 10;
    y = points[i].y * scl;
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

function drawLetterShape() {
  stroke(0,100);
  noFill();
  push();
  translate(width/8, height / 1.25);
  let x = 0;
  let y = 0;
  let n = points.length;
  let scl = 3; 
  for (let i = 0; i < n; i += 2) {
    x = points[i].x * scl + sin((frameCount + i) * 0.01) * 10;
    y = points[i].y * scl;
    push();
    translate(x, y);
    rotate((frameCount + i) * 0.01);
    rect(-10, 0, 40, 1);
    pop();
  }
  pop();
}