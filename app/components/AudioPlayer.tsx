"use client";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function AudioPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) { ref.current.pause(); setPlaying(false); }
    else { ref.current.play(); setPlaying(true); }
  };

  return (
    <div className="flex items-center gap-2 mt-2">
      <button
        onClick={toggle}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 hover:bg-brand-gold/20 transition-colors text-brand-gold text-xs font-medium"
      >
        {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        {playing ? "Pause" : "Listen"}
      </button>
      <audio ref={ref} src={src} onEnded={() => setPlaying(false)} />
    </div>
  );
}
