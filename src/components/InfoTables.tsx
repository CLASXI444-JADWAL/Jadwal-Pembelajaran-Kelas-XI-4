import { useState, useRef } from 'react';
import { cn } from "@/lib/utils";

function Card3D({ children, className, style, animDelay, direction = 'left', asLink, href }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animDelay: string;
  direction?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height;
    const y = (e.clientX - rect.left) / rect.width;
    setTilt({ x: (x - 0.5) * -12, y: (y - 0.5) * 12 });
  };

  const cardStyle: React.CSSProperties = {
    animationDelay: animDelay,
    animationFillMode: 'forwards',
    transform: hovered
      ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(15px) scale(1.02)`
      : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
    transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
    boxShadow: hovered
      ? '0 25px 50px -15px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
      : '0 4px 24px -4px rgba(0,0,0,0.3)',
    transformStyle: 'preserve-3d' as const,
    ...style,
  };

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
      className={cn(
        'relative overflow-hidden opacity-0 rounded-2xl border border-border/50 backdrop-blur-xl bg-card/60',
        direction === 'left' ? 'animate-slide-left' : 'animate-slide-right',
        className
      )}
      style={cardStyle}
    >
      {/* Glass reflection */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: hovered
            ? `radial-gradient(circle at ${((tilt.y / 12) + 0.5) * 100}% ${((-tilt.x / 12) + 0.5) * 100}%, rgba(255,255,255,0.12) 0%, transparent 60%)`
            : 'none',
        }}
      />
      <div className="relative" style={{ transform: 'translateZ(15px)' }}>
        {children}
      </div>
      {/* Edge highlight */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: hovered ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
          transition: 'border-color 0.3s ease',
        }}
      />
    </div>
  );

  if (asLink && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }
  return content;
}

export function InfoTables() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-5 mt-8" style={{ perspective: '1200px' }}>
      {/* Petugas Renungan */}
      <Card3D animDelay="600ms" direction="left" className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">📖</span>
          <h2 className="text-lg font-bold text-amber-400 uppercase tracking-wide">Petugas Renungan</h2>
        </div>
        <div className="space-y-3 text-foreground/90">
          <p><span className="font-semibold">Lagu Renungan : </span></p>
          <p><span className="font-semibold">Pelita, Doa : </span></p>
          <p><span className="font-semibold">Doa Pulang : </span></p>
        </div>
      </Card3D>

      {/* Tugas */}
      <Card3D animDelay="750ms" direction="right" className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">📚</span>
          <h2 className="text-lg font-bold text-amber-400 uppercase tracking-wide">Tugas</h2>
        </div>
        
        <div className="space-y-4 text-foreground/90">
          <a 
            href="https://www.notion.so/Agenda-WorkSpace-XI4-23134da2b55b801685b5e6938454b07c?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-semibold text-base py-3 px-6 border-2 border-pink-500/70 rounded-lg hover:bg-pink-500/20 transition-colors"
          >
            WorkSpace XII-5
          </a>
          
          <div className="space-y-2">
            <h3 className="text-pink-400 font-bold">MAPEL WAJIB</h3>
            <a 
              href="https://www.notion.so/24d34da2b55b80d48b7ed95137a780da?v=24d34da2b55b805996c0000c10c56883&source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-semibold text-base py-3 px-6 border-2 border-pink-500/70 rounded-lg hover:bg-pink-500/20 transition-colors w-full"
            >
              <span>🤓</span> List Tugas XII-5 Mapel Wajib
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="text-pink-400 font-bold">File File PPTX Pembelajaran</h3>
            <a 
              href="https://drive.google.com/drive/folders/1hrVoZT5AgHYv21Vi5gnUCE0tZqP10nBY?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-semibold text-base py-3 px-6 border-2 border-pink-500/70 rounded-lg hover:bg-pink-500/20 transition-colors w-full"
            >
              CLICK DISINI
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="text-pink-400 font-bold">Jadwal PH</h3>
            <a 
              href="https://www.notion.so/24e34da2b55b8032979ee54179cd6830?v=24e34da2b55b800bbefe000cf9cb58aa&source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-semibold text-base py-3 px-6 border-2 border-pink-500/70 rounded-lg hover:bg-pink-500/20 transition-colors w-full"
            >
              <span>📅</span> Kalender PH 🗓️📕 (Wajib+Pilihan)
            </a>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Semua Tabel Dalam Tabel Tugas Bisa Di Click Ya
          </p>
        </div>
      </Card3D>

      {/* Pelita Renungan */}
      <Card3D
        animDelay="900ms"
        direction="left"
        asLink
        href="https://drive.google.com/drive/folders/1E3tU84Il7QHWtM4NaDCLVwM8froP4L5N?usp=sharing"
        className="p-6"
        style={{ background: 'linear-gradient(135deg, rgba(219,39,119,0.4), rgba(124,58,237,0.4))' }}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-1">Pelita Renungan</h2>
          <span className="text-white/80 underline hover:text-white transition-colors text-sm">
            CLICK DISINI
          </span>
        </div>
      </Card3D>
    </div>
  );
}
