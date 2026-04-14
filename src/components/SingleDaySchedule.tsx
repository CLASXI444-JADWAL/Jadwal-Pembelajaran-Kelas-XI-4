import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { scheduleData } from '@/data/scheduleData';
import { ScheduleCard } from './ScheduleCard';
import { cn } from '@/lib/utils';

export function SingleDaySchedule() {
  const currentSchedule = scheduleData[0];
  const [activeIndex, setActiveIndex] = useState(() => getActiveIndex(currentSchedule.items));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(getActiveIndex(currentSchedule.items));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSchedule.items]);

  return (
    <div className="w-full max-w-2xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
      {/* Active Day Header */}
      <div
        className={cn(
          'glass-card mb-8 p-6 text-center relative overflow-hidden opacity-0 animate-scale-in ring-2 ring-primary/50'
        )}
        style={{
          animationDelay: '200ms',
          animationFillMode: 'forwards',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(15px)',
          boxShadow: '0 20px 60px -20px hsl(var(--primary) / 0.3), 0 8px 30px -10px rgba(0,0,0,0.4)',
        }}
      >
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <div className="relative" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight gradient-text">
              {currentSchedule.day}
            </h2>
            <Sparkles className="w-5 h-5 text-accent animate-bounce delay-150" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-primary font-semibold uppercase tracking-widest">Hari Ini</span>
          </div>
          <p className="text-muted-foreground mt-2">{currentSchedule.items.length} Subject</p>
        </div>
      </div>

      {/* Schedule Cards */}
      <div className="flex flex-col gap-5" style={{ transformStyle: 'preserve-3d' }}>
        {currentSchedule.items.map((item, index) => (
          <div
            key={item.id}
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${(currentSchedule.items.length - index) * 3}px)`,
            }}
          >
            <ScheduleCard
              item={item}
              index={index}
              isActive={activeIndex === index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function parseTime(time: string): number {
  const [hour, min] = time.split('.').map(Number);
  return hour * 60 + min;
}

function getActiveIndex(items: typeof scheduleData[0]['items']): number {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  const lastItem = items[items.length - 1];
  const lastEndTime = parseTime(lastItem.endTime);
  
  if (currentMinutes > lastEndTime) {
    return items.length - 1;
  }
  
  for (let i = 0; i < items.length; i++) {
    const startMinutes = parseTime(items[i].startTime);
    const endMinutes = parseTime(items[i].endTime);
    if (currentMinutes >= startMinutes && currentMinutes <= endMinutes) {
      return i;
    }
  }
  
  return -1;
}
