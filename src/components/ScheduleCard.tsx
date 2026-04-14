import { useState, useRef } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { ScheduleItem, subjectColors, subjectIcons } from '@/data/scheduleData';
import { cn } from '@/lib/utils';

interface ScheduleCardProps {
  item: ScheduleItem;
  isActive?: boolean;
  index: number;
}

export function ScheduleCard({ item, isActive = false, index }: ScheduleCardProps) {
  const colors = subjectColors[item.subjectType];
  const icon = subjectIcons[item.subjectType];
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -20,
      y: (x - 0.5) * 20,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden opacity-0 cursor-pointer',
        'rounded-2xl border border-border/50',
        'backdrop-blur-xl bg-card/60',
        isActive && 'ring-2 ring-purple-500/70',
        index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'
      )}
      style={{
        animationDelay: `${index * 150 + 300}ms`,
        animationFillMode: 'forwards',
        perspective: '1000px',
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(20px) scale(1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
        transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
        boxShadow: isHovered
          ? `0 25px 60px -15px hsl(var(--primary) / 0.3), 0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`
          : isActive
            ? `0 10px 40px -10px hsl(262 83% 58% / 0.3), 0 4px 20px -5px rgba(0,0,0,0.3)`
            : `0 4px 24px -4px rgba(0,0,0,0.3)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glass reflection layer */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${((tilt.y / 20) + 0.5) * 100}% ${((-tilt.x / 20) + 0.5) * 100}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
            : 'none',
          transition: 'background 0.15s ease-out',
        }}
      />

      {/* Active glow underlay */}
      {isActive && (
        <div className="absolute inset-0 bg-purple-500/10 animate-pulse rounded-2xl" />
      )}

      <div className="relative p-5" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
        {/* Active indicator with pulse */}
        {isActive && (
          <div className="absolute top-0 right-0" style={{ transform: 'translateZ(40px)' }}>
            <span className="relative flex h-4 w-4">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-500"></span>
            </span>
          </div>
        )}

        {/* Subject Icon & Name */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className={cn(
              'w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2',
              colors.bg,
              colors.border
            )}
            style={{
              transform: isHovered ? 'translateZ(50px) scale(1.15) rotate(6deg)' : 'translateZ(0px)',
              transition: 'transform 0.3s ease',
              boxShadow: isHovered ? `0 8px 20px -4px hsl(var(--subject-${item.subjectType}) / 0.4)` : 'none',
            }}
          >
            {icon}
          </div>
          <div className="flex-1 min-w-0" style={{ transform: 'translateZ(20px)' }}>
            <h3 className={cn(
              'font-bold text-lg text-foreground truncate',
              isActive && 'gradient-text'
            )}
            style={{
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform 0.3s ease',
            }}>
              {item.subject}
            </h3>
            <span className={cn(
              'subject-badge inline-block mt-2 border',
              colors.bg,
              colors.text,
              colors.border
            )}
            style={{
              transform: isHovered ? 'translateZ(30px) scale(1.05)' : 'translateZ(0)',
              transition: 'transform 0.3s ease',
            }}>
              {item.subjectType}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 text-muted-foreground"
            style={{
              transform: isHovered ? 'translateX(8px) translateZ(15px)' : 'translateX(0)',
              transition: 'transform 0.3s ease 0.05s, color 0.3s ease',
              color: isHovered ? 'hsl(var(--foreground))' : undefined,
            }}>
            <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center"
              style={{
                boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
                transition: 'box-shadow 0.3s ease',
              }}>
              <Clock className="w-4 h-4" />
            </div>
            <span className="font-medium">{item.startTime} - {item.endTime}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground"
            style={{
              transform: isHovered ? 'translateX(8px) translateZ(10px)' : 'translateX(0)',
              transition: 'transform 0.3s ease 0.1s, color 0.3s ease',
              color: isHovered ? 'hsl(var(--foreground))' : undefined,
            }}>
            <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center"
              style={{
                boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
                transition: 'box-shadow 0.3s ease',
              }}>
              <MapPin className="w-4 h-4" />
            </div>
            <span>{item.room}</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--subject-${item.subjectType})), transparent)`,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Edge highlight */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: isHovered ? '1px solid rgba(255,255,255,0.15)' : '1px solid transparent',
          transition: 'border-color 0.3s ease',
        }}
      />
    </div>
  );
}
