import { useEffect, useState, useMemo } from 'react';
import { FluidEffect } from './FluidEffect';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  type: 'star' | 'cross' | 'diamond' | 'burst';
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export function AnimatedBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [customBg, setCustomBg] = useState<string | null>(null);

  const stars = useMemo(() => {
    const starList: Star[] = [];
    for (let i = 0; i < 60; i++) {
      starList.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 2 + 2,
      });
    }
    return starList;
  }, []);

  useEffect(() => {
    const formats = ['background.jpeg', 'background.jpg', 'background.png', 'background.webp'];
    let found = false;
    let checked = 0;
    formats.forEach((file) => {
      const img = new Image();
      img.onload = () => {
        if (!found) {
          found = true;
          setCustomBg(`/${file}`);
        }
      };
      img.onerror = () => {
        checked++;
        if (checked === formats.length && !found) setCustomBg(null);
      };
      img.src = `/${file}`;
    });
  }, []);

  useEffect(() => {
    const colors = [
      'rgba(56, 189, 248, 0.4)',
      'rgba(168, 85, 247, 0.4)',
      'rgba(251, 191, 36, 0.5)',
      'rgba(244, 114, 182, 0.4)',
      'rgba(45, 212, 191, 0.4)',
      'rgba(134, 239, 172, 0.4)',
    ];
    const types: ('star' | 'cross' | 'diamond' | 'burst')[] = ['star', 'cross', 'diamond', 'burst'];
    const newSparkles: Sparkle[] = [];
    for (let i = 0; i < 40; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * 95 + 2.5,
        y: Math.random() * 90 + 5,
        size: Math.random() * 18 + 12,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 10,
        duration: Math.random() * 4 + 2.5,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }
    setSparkles(newSparkles);
  }, []);

  const renderSparkle = (sparkle: Sparkle) => {
    switch (sparkle.type) {
      case 'star':
        return (
          <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill={sparkle.color} style={{ filter: `drop-shadow(0 0 8px ${sparkle.color})` }} />
          </svg>
        );
      case 'cross':
        return (
          <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 24 24" fill="none">
            <path d="M12 2V22M2 12H22" stroke={sparkle.color} strokeWidth="2" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 6px ${sparkle.color})` }} />
          </svg>
        );
      case 'diamond':
        return (
          <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 24 24" fill="none">
            <path d="M12 2L22 12L12 22L2 12L12 2Z" fill={sparkle.color} style={{ filter: `drop-shadow(0 0 10px ${sparkle.color})` }} />
          </svg>
        );
      case 'burst':
        return (
          <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" fill={sparkle.color} />
            <path d="M12 2V6M12 18V22M2 12H6M18 12H22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke={sparkle.color} strokeWidth="1.5" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 6px ${sparkle.color})` }} />
          </svg>
        );
    }
  };

  return (
    <>
      {/* Layer 1 (bottom): Background image */}
      <div className="fixed inset-0 -z-30">
        {customBg ? (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${customBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-background/30" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-background" />
        )}
      </div>

      {/* Layer 2: Interactive fluid effect */}
      <FluidEffect />

      {/* Layer 2b: Gradient orbs & rings */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-glow-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/5 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-accent/5 rounded-full animate-spin-reverse" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>

      {/* Layer 3 (top): Sparkles & stars */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-firework"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {renderSparkle(sparkle)}
          </div>
        ))}
        {stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.3)',
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
