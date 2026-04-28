import { useState, useRef } from 'react';
import { Calendar, GraduationCap, Sparkles, Star } from 'lucide-react';

export function ScheduleHeader() {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const formattedDate = today.toLocaleDateString('id-ID', options);
  
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height;
    const y = (e.clientX - rect.left) / rect.width;
    setTilt({ x: (x - 0.5) * -10, y: (y - 0.5) * 10 });
  };

  return (
    <header className="relative mb-12 text-center" style={{ perspective: '1200px' }}>
      {/* Animated decorations */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-8">
        <Star className="w-4 h-4 text-primary/40 animate-float" style={{ animationDelay: '0s' }} />
        <Star className="w-3 h-3 text-accent/40 animate-float-fast" style={{ animationDelay: '0.5s' }} />
        <Star className="w-4 h-4 text-primary/40 animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Icon with animation */}
      <div className="flex items-center justify-center gap-3 mb-4 opacity-0 animate-bounce-in" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
        <div className="relative">
          <GraduationCap className="w-12 h-12 text-primary animate-float-slow" />
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-glow-slow" />
        </div>
        <Sparkles className="w-6 h-6 text-accent animate-bounce" />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 opacity-0 animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <span className="gradient-text">Jadwal Pelajaran</span>
      </h1>
      
      <p className="text-muted-foreground text-lg md:text-xl mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
        Kelas XI-4 • Semester Genap 2025/2026
      </p>

      {/* 3D Date Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
        className="inline-flex glass-card px-6 py-4 items-center gap-4 opacity-0 animate-scale-in rounded-2xl"
        style={{
          animationDelay: '300ms',
          animationFillMode: 'forwards',
          transform: hovered
            ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(15px)`
            : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
          boxShadow: hovered
            ? '0 25px 50px -15px hsl(var(--primary) / 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
            : '0 4px 24px -4px rgba(0,0,0,0.3)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glass reflection */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: hovered
              ? `radial-gradient(circle at ${((tilt.y / 10) + 0.5) * 100}% ${((-tilt.x / 10) + 0.5) * 100}%, rgba(255,255,255,0.1) 0%, transparent 60%)`
              : 'none',
          }}
        />
        <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center relative overflow-hidden group"
          style={{ transform: hovered ? 'translateZ(30px)' : 'translateZ(0)', transition: 'transform 0.3s ease' }}>
          <Calendar className="w-7 h-7 text-primary relative z-10 transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-primary/10 animate-pulse" />
        </div>
        <div className="text-left" style={{ transform: hovered ? 'translateZ(20px)' : 'translateZ(0)', transition: 'transform 0.3s ease' }}>
          <p className="text-sm text-muted-foreground">Tanggal Hari Ini</p>
          <p className="font-bold text-foreground text-lg">Rabu, 29 April 2026</p>
        </div>
      </div>
    </header>
  );
}
