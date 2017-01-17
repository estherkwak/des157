
// setup();
// draw();

//gradient background with stars using a function and a for loop
//add mousePressed for a shooting star (that doesn't move yet)
var angle = 0; //angle of rotation for eyes
function setup() {
  var canvas = createCanvas(800, 250);
  canvas.parent('banner');
  background("#75a3d1");
  smooth();
  drawCreature(); //draw owl (minus eyes)
  changeEyeLeft(width/2, height/2); //initialize left eye
  changeEyeRight(width/2, height/2); //initialize right eye
  
  //drawEyeBalls();
}
function draw() {
  //drawCreature();
}

function drawCreature() {
  fill("#d9411e");
  ellipse(width/2, height/2 + 20, 165, 162); //draw the body
  fill("#fff452");
  //draw the nose
  triangle(width/2 - 20, height/2, width/2 + 20, height/2, width/2, height/2 + 30);
  drawArms(); //draws the arms
  drawFeet(); //draws the feet
  
  

}
function drawArms() {

  rect(width/2 - 95, height/2 + 30, 30, 40, 5);
  rect(width/2 + 65, height/2 + 30, 30, 40, 5);

}
function drawFeet() {
  beginShape();
  vertex(width/2 -20, height/2 + 75);
  vertex(width/2 - 20, height/2 + 90);
  vertex(width/2 - 38, height/2 + 120);
  vertex(width/2 , height /2 + 100);
  vertex(width/2 + 38, height /2 + 120);
  vertex(width/2 + 20, height / 2 + 90);
  vertex(width/2 + 20, height / 2 + 75);
  endShape();
}


function mouseMoved() {
  changeEyeLeft(mouseX, mouseY); //change pupils based on mouse movement
  changeEyeRight(mouseX, mouseY);
}

function changeEyeLeft(mx, my){
  push ();
  ellipseMode(CENTER);
  fill("#FFFFFF");
  translate(width/2 - 50, height/2 - 50);
  
  //calculate angle of rotation
  angle = atan2(mouseY-(height/2 - 100), mouseX-(width/2 - 100));
  stroke(0);
  ellipse(0, 0, 80, 80);
  rotate(angle); //rotate degrees to follow cursor
  fill(0);
  ellipse(15, 0, 48, 48);
  pop ();
}
function changeEyeRight(mx, my) {
  push();
  ellipseMode(CENTER);
  fill("#FFFFFF");
  translate(width/2 + 50, height/2 - 50);
  
  //calculate angle of rotation
  angle = atan2(mouseY-(height/2 - 100), mouseX-(width/2 + 100));
  //ellipse(mouseX, mouseY, 50, 50);
  ellipse(0, 0, 80, 80);
  rotate(angle); //rotate degrees to follow cursor
  fill(0);
  ellipse(15, 0, 48, 48);
  pop ();
}

