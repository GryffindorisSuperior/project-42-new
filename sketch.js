var hr;
var mn;
var sc;
var scAngle, hrAngle, mnAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(200,200)
  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();  
  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  //seconds hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(0,0);
  pop();

  //minutes hand
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,75,0);
  translate(0,0);
  pop();

  //hours hand
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(0,0);
  pop();

  stroke(255,0,255);
  point(0,0);

  //drawing the arcs
  strokeWeight(10);
  noFill();

  //Seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  //Minutes
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  
  //Hours
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
}