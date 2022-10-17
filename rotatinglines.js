const start = 0;
var deg = 0;

function setup() {
  createCanvas(400, 400);
  noLoop();
}


function draw() {
  //background(200);
  //var s = second();
  //if (s<360) {
  //  fill(255,0,0);
  //  circle(s*6, 100, 50);
  //}
  translate(width/2, width/2);
  for (let i=0; i<=360; i+=0.1) {
    push();
    rotate(radians(i));
    
    stroke(int(random(256)), int(random(256)), int(random(256)));
    line(start, start, (start+width*sqrt(2))/2, start);
    pop();
    //deg+=0.1;
  }
}
