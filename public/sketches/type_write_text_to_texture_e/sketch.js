// for this example we use Krona One by by Yvonne Schüttler
// https://fonts.google.com/specimen/Krona+One
// check the Sketch Files and the additional file
// KronaOne-Regular.ttf
//
// see the following WEBGL type example.
// https://editor.p5js.org/sojamo/sketches/mvEZEFfB6

// for more details about how to handle fonts and text,
// do check the reference under Typography
// https://p5js.org/reference/


// text to texture
// one texture, different parts assigned to 
// different shapes.

let font;
let blocks;
let buffer;

function preload() {
  font = loadFont("KronaOne-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  
  buffer = createGraphics(512, 512);
  
  // drawing white text into buffer
  // background is black
  // 
  buffer.textFont(font);
  buffer.background(0);
  buffer.fill(255);
  buffer.textSize(80);
  buffer.textAlign(LEFT);
  buffer.text("Remix.", 0, 80);

  buffer.textSize(40); // textSize sets the size of the text 
  buffer.textAlign(LEFT); // textAlign aligns the text to the LEFT, CENTER or RIGHT
  buffer.textLeading(36); // textLeading adjusts the spacing between lines.

  let txt = "Here, “remixing” – an established term in the music domain – is very often used to describe the phenomenon of repurposing existing materials to create something new."

  buffer.text(txt, 0, 100, buffer.width, height);

}



function draw() {
  background(0);
   
  push();
  translate(-width/2,-height/2);
  let px = width/2 + sin(frameCount*0.01) *width * 0.4; //mouseX;
  let py = height/2 + cos(frameCount*0.005) * height * 0.4; // mouseY
  
  
  // using beginShape and endShape to display
  // different part of a texture per shape.
  // 
  texture(buffer);
  textureMode(NORMAL);
  
  beginShape();
  vertex(0, 0, 0, 0);
  vertex(px, 0, 0.5, 0);
  vertex(px, py, 0.5, 0.5);
  vertex(0, py, 0, 0.5);
  endShape();
  
  beginShape();
  vertex(px, 0, 0.5, 0);
  vertex(width, 0, 1, 0);
  vertex(width, py, 1, 0.5);
  vertex(px, py, 0.5, 0.5);
  endShape();
  
  beginShape();
  vertex(0, py, 0, 0.5);
  vertex(px, py, 0.5, 0.5);
  vertex(px, height, 0.5, 1);
  vertex(0, height, 0, 1);
  endShape();
  
  beginShape();
  vertex(px, py, 0.5, 0.5);
  vertex(width, py, 1, 0.5);
  vertex(width, height, 1, 1);
  vertex(px, height, 0.5, 1);
  endShape();
  pop();
  
  
}