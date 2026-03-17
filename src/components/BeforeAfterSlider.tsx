import { useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  mirror?: boolean;
}

const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeLabel = "Antes",
  afterLabel = "Depois",
  alt = "Comparação antes e depois",
  mirror = false,
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(100);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const animRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Animação automática: oscila de 100% → 0% → 100% em loop
  const animate = useCallback((timestamp: number) => {
    if (isDragging.current) return;
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = (timestamp - startTimeRef.current) / 1000; // segundos
    const moveDuration = 5;  // segundos para mover (antes→depois ou depois→antes)
    const holdDuration = 7;  // segundos parado no "depois"
    const totalCycle = moveDuration + holdDuration + moveDuration; // 17s total
    const cycle = elapsed % totalCycle;
    let pos: number;
    if (cycle < moveDuration) {
      // indo: antes (100%) → depois (0%)
      pos = 100 - (cycle / moveDuration) * 100;
    } else if (cycle < moveDuration + holdDuration) {
      // parado no depois
      pos = 0;
    } else {
      // voltando: depois (0%) → antes (100%)
      pos = ((cycle - moveDuration - holdDuration) / moveDuration) * 100;
    }
    setPosition(pos);
    animRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [animate]);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    startTimeRef.current = null;
    animRef.current = requestAnimationFrame(animate);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    startTimeRef.current = null;
    animRef.current = requestAnimationFrame(animate);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[9/5] overflow-hidden rounded-sm select-none cursor-col-resize${mirror ? " scale-x-[-1]" : ""}`}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Foto DEPOIS (fundo) */}
      <img
        src={afterSrc}
        alt={`${alt} - depois`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Foto ANTES com transição suave */}
      <img
        src={beforeSrc}
        alt={`${alt} - antes`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          maskImage: `linear-gradient(to right, black ${position - 15}%, transparent ${position + 15}%)`,
          WebkitMaskImage: `linear-gradient(to right, black ${position - 15}%, transparent ${position + 15}%)`,
        }}
        draggable={false}
      />

      {/* Label Antes - sempre no canto superior esquerdo visual */}
      <span
        className={`absolute top-3 bg-black/50 text-white text-xs font-body tracking-widest uppercase px-2 py-1 rounded-sm pointer-events-none transition-opacity duration-500 ${mirror ? "right-3" : "left-3"} ${position > 50 ? "opacity-100" : "opacity-0"}`}
        style={mirror ? { transform: "scaleX(-1)" } : undefined}
      >
        {beforeLabel}
      </span>
      {/* Label Depois - sempre no canto superior direito visual */}
      <span
        className={`absolute top-3 bg-black/50 text-white text-xs font-body tracking-widest uppercase px-2 py-1 rounded-sm pointer-events-none transition-opacity duration-500 ${mirror ? "left-3" : "right-3"} ${position <= 50 ? "opacity-100" : "opacity-0"}`}
        style={mirror ? { transform: "scaleX(-1)" } : undefined}
      >
        {afterLabel}
      </span>
    </div>
  );
};

export default BeforeAfterSlider;
