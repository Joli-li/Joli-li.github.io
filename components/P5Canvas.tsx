import { useEffect, useRef } from 'react';
import Sketch from 'react-p5';
import type p5 from 'p5';

class Particle {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  lifeMax: number;
  life: number;
  lifeT: number;
  color: p5.Color;
  p5Instance: p5;

  constructor(p5Instance: p5, _x: number, _y: number, canvasHeight: number) {
    this.p5Instance = p5Instance;
    
    this.x = p5Instance.windowWidth + p5Instance.random(-p5Instance.windowWidth, p5Instance.windowWidth);
    this.y = 150 + p5Instance.random(-10, 10);

    this.lifeMax = p5Instance.random(1, 3);
    this.life = this.lifeMax;
    this.lifeT = 1.0;

    this.color = this.getRandomColor(197);

    this.velocityX = p5Instance.random(-1, 1);
    this.velocityY = p5Instance.random(-1, 1);
  }

  update(mainHue: number, canvasHeight: number) {
    const p = this.p5Instance;
    
    let timePassedSec = p.millis() / 1000.0;
    let dirNoiseValue = p.noise(this.x * 0.0005, this.y * 0.0003, timePassedSec * 0.5);

    let moveDirectionDegree = p.lerp(-66, 380, dirNoiseValue);
    let moveDirectionRadian = p.radians(moveDirectionDegree);

    let xMoveAmount = p.sin(moveDirectionRadian) * 1;
    let yMoveAmount = -p.cos(moveDirectionRadian) * 1;

    this.velocityX += xMoveAmount;
    this.velocityY += yMoveAmount;

    let decayRatio = p.lerp(0.92, 0.95, this.lifeT);

    this.velocityX *= 0.1;
    this.velocityY *= decayRatio;

    this.x += this.velocityX;
    this.y += this.velocityY;

    this.life -= p.deltaTime / 1000.0; // life decrease per second
    this.lifeT = this.life / this.lifeMax; // life 0.0 - 1.0

    if (this.life <= 0) {
      this.reborn(mainHue, canvasHeight);
    }
  }

  reborn(mainHue: number, canvasHeight: number) {
    const p = this.p5Instance;
    
    this.x = p.windowWidth / 2 + p.random(-p.windowWidth, p.windowWidth);
    this.y = 150 + p.random(-10, 10);

    this.velocityX = p.random(-6, 6);
    this.velocityY = p.random(-6, 6);

    this.lifeMax = p.random(1, 3);
    this.life = this.lifeMax;
    this.lifeT = 1.0;
  }

  draw() {
    const p = this.p5Instance;
    
    p.noStroke();
    p.fill(this.color);
    let drawSize = p.lerp(-10, 13, this.lifeT);
    p.ellipse(this.x, this.y, drawSize, drawSize);
  }

  getRandomColor(mainHue: number): p5.Color {
    const p = this.p5Instance;
    
    let colorH = mainHue + p.random(-20, 20);
    let colorS = p.random(40, 60);
    let colorB = p.random(75, 95);

    if (p.random(0, 1) < 0.2) {
      colorH += p.random(-160, 160);
      if (colorH > 360) colorH -= 360;
    }

    if (p.random(0, 1) < 0.12) {
      colorS = 0;
      colorB = 100;
    }

    return p.color(colorH, colorS, colorB, 0.08);
  }
}

interface P5CanvasProps {
  height?: number;
}

export function P5Canvas({ height = 500 }: P5CanvasProps) {
  let particles: Particle[] = [];
  let mainHue = 197;
  let canvasHeight = height;

  const setup = (p5: p5, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, canvasHeight).parent(canvasParentRef);
    p5.background(200);
    p5.colorMode(p5.HSB);

    let particleCount = 4500;
    for (let i = 0; i < particleCount; i++) {
      particles[i] = new Particle(p5, 500, 500, canvasHeight);
    }
  };

  const draw = (p5: p5) => {
    p5.background(0, 0, 10, 0.02);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update(mainHue, canvasHeight);
      particles[i].draw();
    }
  };

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, canvasHeight);
  };

  return (
    <div className="w-full overflow-hidden">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
}