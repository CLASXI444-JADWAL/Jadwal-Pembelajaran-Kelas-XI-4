import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  hue: number;
  size: number;
}

export function FluidEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -100, y: -100, px: -100, py: -100 });
  const animFrame = useRef(0);
  const hueRef = useRef(0);

  const spawnParticles = useCallback((x: number, y: number, px: number, py: number) => {
    const dx = x - px;
    const dy = y - py;
    const speed = Math.sqrt(dx * dx + dy * dy);

    const count = Math.min(Math.floor(speed * 0.3) + 1, 5);
    for (let i = 0; i < count; i++) {
      const spread = 30;
      particles.current.push({
        x: x + (Math.random() - 0.5) * spread,
        y: y + (Math.random() - 0.5) * spread,
        vx: dx * 0.15 + (Math.random() - 0.5) * 2,
        vy: dy * 0.15 + (Math.random() - 0.5) * 2,
        life: 1,
        maxLife: 60 + Math.random() * 80,
        hue: hueRef.current + (Math.random() - 0.5) * 60,
        size: 30 + Math.random() * 50,
      });
    }
    hueRef.current = (hueRef.current + 0.5) % 360;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const px = mouse.current.x;
    const py = mouse.current.y;
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
    spawnParticles(e.clientX, e.clientY, px, py);
  }, [spawnParticles]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    const px = mouse.current.x;
    const py = mouse.current.y;
    mouse.current.x = touch.clientX;
    mouse.current.y = touch.clientY;
    spawnParticles(touch.clientX, touch.clientY, px, py);
  }, [spawnParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const render = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = 'lighter';

      const ps = particles.current;
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life -= 1 / p.maxLife;

        if (p.life <= 0) {
          ps.splice(i, 1);
          continue;
        }

        const alpha = p.life * 0.12;
        const size = p.size * (0.5 + p.life * 0.5);

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
        gradient.addColorStop(0, `hsla(${p.hue}, 70%, 55%, ${alpha})`);
        gradient.addColorStop(0.4, `hsla(${p.hue + 20}, 60%, 35%, ${alpha * 0.5})`);
        gradient.addColorStop(1, `hsla(${p.hue + 40}, 40%, 15%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Keep particles capped
      if (ps.length > 300) {
        ps.splice(0, ps.length - 300);
      }

      animFrame.current = requestAnimationFrame(render);
    };

    animFrame.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMouseMove, handleTouchMove]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-25 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
