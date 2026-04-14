import { useState, useRef, useCallback, useEffect } from 'react';
import { RotateCcw, Lock, Unlock } from 'lucide-react';
import { ScheduleHeader } from '@/components/ScheduleHeader';
import { SingleDaySchedule } from '@/components/SingleDaySchedule';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { InfoTables } from '@/components/InfoTables';
import { cn } from '@/lib/utils';

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

const Index = () => {
  const [is3DEnabled, setIs3DEnabled] = useState(false);
  const [sceneTilt, setSceneTilt] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragTilt, setDragTilt] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0, time: 0 });
  const animFrame = useRef<number>(0);

  // Inertia decay
  useEffect(() => {
    if (isDragging) return;
    if (Math.abs(velocity.x) < 0.1 && Math.abs(velocity.y) < 0.1) return;

    const decay = () => {
      setVelocity(prev => {
        const nx = prev.x * 0.92;
        const ny = prev.y * 0.92;
        setSceneTilt(t => ({
          x: clamp(t.x + ny * 0.3, -20, 20),
          y: clamp(t.y + nx * 0.3, -20, 20),
        }));
        if (Math.abs(nx) < 0.1 && Math.abs(ny) < 0.1) return { x: 0, y: 0 };
        animFrame.current = requestAnimationFrame(decay);
        return { x: nx, y: ny };
      });
    };
    animFrame.current = requestAnimationFrame(decay);
    return () => cancelAnimationFrame(animFrame.current);
  }, [isDragging, velocity]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (!is3DEnabled) return;
    const tag = (e.target as HTMLElement).tagName;
    if (tag === 'A' || tag === 'BUTTON' || (e.target as HTMLElement).closest('a, button')) return;
    
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setDragTilt({ ...sceneTilt });
    lastPos.current = { x: e.clientX, y: e.clientY, time: Date.now() };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, [sceneTilt, is3DEnabled]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    const sensitivity = 0.1;
    setSceneTilt({
      x: clamp(dragTilt.x + dy * sensitivity, -20, 20),
      y: clamp(dragTilt.y + dx * sensitivity, -20, 20),
    });
    const now = Date.now();
    const dt = now - lastPos.current.time;
    if (dt > 0) {
      setVelocity({
        x: (e.clientX - lastPos.current.x) / dt * 16,
        y: (e.clientY - lastPos.current.y) / dt * 16,
      });
    }
    lastPos.current = { x: e.clientX, y: e.clientY, time: now };
  }, [isDragging, dragStart, dragTilt]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const resetTilt = useCallback(() => {
    setSceneTilt({ x: 0, y: 0 });
    setVelocity({ x: 0, y: 0 });
  }, []);

  const toggle3D = useCallback(() => {
    setIs3DEnabled(prev => !prev);
    setIsDragging(false);
    setVelocity({ x: 0, y: 0 });
  }, []);

  const hasTilt = sceneTilt.x !== 0 || sceneTilt.y !== 0;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />

      {/* 3D Lock/Unlock button - top left */}
      <button
        onClick={toggle3D}
        className={cn(
          'fixed top-4 left-4 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium',
          'bg-card/90 backdrop-blur-sm border border-border/50 transition-all duration-300',
          is3DEnabled
            ? 'text-primary border-primary/30'
            : 'text-muted-foreground hover:text-foreground hover:border-primary/30'
        )}
      >
        {is3DEnabled ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
        3D {is3DEnabled ? 'ON' : 'OFF'}
      </button>

      {/* Reset button - fixed position */}
      <button
        onClick={resetTilt}
        className={cn(
          'fixed top-4 right-4 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium',
          'bg-card/90 backdrop-blur-sm border border-border/50 text-muted-foreground',
          'hover:text-foreground hover:border-primary/30 transition-all duration-300',
          hasTilt && is3DEnabled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
      >
        <RotateCcw className="w-3 h-3" />
        Reset View
      </button>

      {/* Drag hint */}
      <div className={cn(
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-xs',
        'bg-card/80 backdrop-blur-sm border border-border/50 text-muted-foreground',
        'opacity-0 animate-fade-in pointer-events-none',
        (hasTilt || !is3DEnabled) && 'hidden'
      )} style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
        ✋ Drag halaman untuk efek 3D
      </div>

      {/* 3D Scene */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={cn("relative z-10", is3DEnabled && "touch-none")}
        style={{
          perspective: '1500px',
          perspectiveOrigin: '50% 30%',
          cursor: is3DEnabled ? (isDragging ? 'grabbing' : 'grab') : 'auto',
        }}
      >
        <div
          style={{
            transform: `rotateX(${sceneTilt.x}deg) rotateY(${sceneTilt.y}deg)`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            transformStyle: 'preserve-3d',
          }}
        >
          <main className="container mx-auto px-4 py-8 md:py-12" style={{ transformStyle: 'preserve-3d' }}>
            <div style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}>
              <ScheduleHeader />
            </div>
            <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
              <SingleDaySchedule />
            </div>
            <div style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}>
              <InfoTables />
            </div>
          </main>

          <footer className="container mx-auto px-4 py-8 text-center" style={{ transform: 'translateZ(5px)' }}>
            <p className="text-muted-foreground text-sm opacity-0 animate-slide-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
