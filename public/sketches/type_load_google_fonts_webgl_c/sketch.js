// Load fonts in WEBGL mode by uploading the font-file
// eg. ttf to your Sketch Files
// 
// You must load and set a font before drawing text. 
// See `loadFont` and `textFont` for more details. 
//
// if you ar eusing the default renderer, you can use
// the link tag inside the index.html file, see example:
//
// https://editor.p5js.org/sojamo/sketches/yvc00Kv1x


let font;
let tiles;
let n = 16;
let bg, fg;

function preload() {
  font = loadFont("KronaOne-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  bg = color(255);
  fg = color(0);
  tiles = [];
  
  let w = windowWidth/n;
  for (let i = 0; i < n; i++) {
    let tile = createGraphics(w, 400);
    tile.background(bg);
    tile.textFont(font);
    tile.textSize(120);
    tiles.push(tile);
  }
  console.log(document.getElementsByClassName("preview-nav").style)
}

function draw() {
  background(bg);
  scale(3.0 + sin(frameCount*0.01) * 1.5);
  translate(-width / 2, -height / 4);
  lights();
  let w = windowWidth/n;
  tiles.forEach((tile, i) => {
    tile.background(bg);
    let x = (sin((frameCount + i * 10) * 0.04) * 20) - i * w;
    let y = 200 + tan((frameCount + i * 10) * 0.01) * 20;
    tile.fill(fg);
    tile.text("Code Type", x, y);
    push();
    translate(i * w, 200, i);
    // rotateX((frameCount + i * n) * 0.01);
    rotateY((frameCount + i * 20) * 0.01);
    translate(0, -200);
    image(tile, 0, 0);
    pop();
  });
}