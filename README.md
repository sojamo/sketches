# Sketches

This repo contains p5js sketches which are hosted at [netlify](https://cid-sketches.netlify.app/) so that these sketches can be embedded as iframes into external sites. Most of these sketches are used for creative coding teaching purposes which are mostly embedded into slides using [slides.com](http://slides.com/sojamo).


## How to add a sketch

1. go to [editor.p5js.org](https://editor.p5js.org/) and make sure you are logged into your account
2. open the sketch you'd like to add to sketches
3. download the sketch
4. unzip downloaded sketch
5. delete files p5.js, p5.dom.js, p5.sound.min.js since we want to load them via cdn
6. open index.html and replace local _script src_ href with the public cdn equivalent pointing to the current p5js library version ( you can check the current p5js version [here](https://cdnjs.com/libraries/p5.js))
7. rename unzipped folder by removing timestamp reference
8. add folder to sketches
9. update git repo and deploy to netlify


