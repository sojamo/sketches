// Load fonts in WEBGL mode by uploading the font-file
// eg. ttf to your Sketch Files
// 
// check the Sketch Files and the additional file
// KronaOne-Regular.ttf
//
// You must load and set a font before drawing text. 
// See `loadFont` and `textFont` for more details. 
//
// if you are using the default renderer, you can use
// the link tag inside the index.html file, see example:
//
// https://editor.p5js.org/sojamo/sketches/yvc00Kv1x


let font;

function preload() {
  font = loadFont("KronaOne-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(font);
  textSize(windowWidth*0.1);
}

function draw() {
  background(240);
  fill(40);
  textAlign(CENTER);
  push();
  translate(0,tan(frameCount*0.01)*20);
  // rotateX(frameCount*0.01);
  rotateY(frameCount*0.01);
  text("Remix me", 0,0);
  pop();
}

