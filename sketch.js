// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let ps;
let repeller;
//변수 지정

function setup() {
  createCanvas(640, 360);
  ps = new ParticleSystem(createVector(width/2, 50));
  //ps = ParticleSystem의 클래스
  repeller = new Repeller(width/2, height / 2);
  //repeller = Repeller 클래스
}

function draw() {
  background(51);
  ps.addParticle(mouseX, mouseY);
  //ps에 addPartcle을 적용시키는데 마우스의 위치에 따라 달라짐

  // Apply gravity force to all Particles
  let gravity = createVector(0, 0.1);
  ps.applyForce(gravity);
  ps.applyRepeller(repeller);

  repeller.display();
  ps.run();
}
