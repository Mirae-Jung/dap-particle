// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class ParticleSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle(x, y) {
    if (x !== undefined && y !== undefined) {
      this.particles.push(new Particle(x,y));
      //만약 x,y가 undefined가 아니면 particles배열에 Particle 클래스의 x,y값을 배열에 추가
    } else {
      this.particles.push(new Particle(this.origin.x, this.origin.y));
    }//아니면 Particle 클래스의 origin의 x,y값을 배열에 추가해서 리턴
  }//그래서 addParticle 이구나

  run() {
    // Run every particle
    // ES6 for..of loop
    for (let particle of this.particles) {
      particle.run();
    }//Particles배열을 반복할 동안 particle에 run함수 적용

    // Filter removes any elements of the array that do not pass the test
    this.particles = this.particles.filter(particle => !particle.isDead());
  }

  // A function to apply a force to all Particles
  // 모든 파티클에 force를 적용하는 함
  applyForce(f) {
    for (let particle of this.particles) {
      particle.applyForce(f);
    }
  }

  applyRepeller(r) {
    for (let particle of this.particles) {
      let force = r.repel(particle);
      particle.applyForce(force);
    }
  }

}
