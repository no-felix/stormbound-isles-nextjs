import React, { useRef, useEffect } from 'react';

// Animated aurora (polar lights) background for Hero section
const AURORA_COLORS = [
  'rgba(90,209,255,0.18)', // cyan
  'rgba(120,255,180,0.15)', // green
  'rgba(180,120,255,0.13)', // purple
  'rgba(255,255,255,0.10)'  // white
];

function randomBetween(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

type Aurora = {
  y: number;
  amplitude: number;
  frequency: number;
  speed: number;
  color: string;
  phase: number;
  width: number;
  height: number;
};

export default function HeroParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const auroras = useRef(
    Array.from({ length: 5 }, (_, i) => ({
      y: randomBetween(0.15, 0.7),
      amplitude: randomBetween(0.08, 0.18),
      frequency: randomBetween(1.2, 2.2),
      speed: randomBetween(0.08, 0.18),
      color: AURORA_COLORS[i % AURORA_COLORS.length],
      phase: randomBetween(0, Math.PI * 2),
      width: randomBetween(0.7, 1.1),
      height: randomBetween(0.12, 0.22)
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    function drawAurora(a: Aurora, t: number) {
      ctx!.save();
      ctx!.globalAlpha = 1;
      ctx!.beginPath();
      for (let x = 0; x <= width; x += 2) {
        const normX = x / width;
        const y =
          a.y * height +
          Math.sin(normX * Math.PI * a.frequency + a.phase + t * a.speed) * a.amplitude * height;
        if (x === 0) ctx!.moveTo(x, y);
        else ctx!.lineTo(x, y);
      }
      ctx!.lineTo(width, height);
      ctx!.lineTo(0, height);
      ctx!.closePath();
      const grad = ctx!.createLinearGradient(0, a.y * height, 0, a.y * height + a.height * height);
      grad.addColorStop(0, a.color);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx!.fillStyle = grad;
      ctx!.filter = 'blur(8px)';
      ctx!.fill();
      ctx!.filter = 'none';
      ctx!.restore();
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, width, height);
      // Background
      ctx!.fillStyle = '#181c2b';
      ctx!.fillRect(0, 0, width, height);
      // Auroras
      auroras.current.forEach(a => drawAurora(a, t / 1000));
      animationId = requestAnimationFrame(draw);
    }
    draw(0);
    // Resize
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ display: 'block', background: 'transparent' }}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
