import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: "video" | "square" | "portrait";
  className?: string;
}

export default function ImagePlaceholder({
  label,
  aspectRatio = "video",
  className = "",
}: ImagePlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  return (
    <div
      className={`w-full ${aspectClasses[aspectRatio]} bg-brand-gold/10 border-2 border-dashed border-brand-gold/40 rounded-xl flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:bg-brand-gold/15 hover:border-brand-gold/60 ${className}`}
    >
      <ImageIcon className="w-12 h-12 text-brand-gold mb-3 animate-pulse" strokeWidth={1.5} />
      <span className="text-xs uppercase tracking-wider font-semibold text-brand-gold max-w-[85%] leading-relaxed">
        IMAGE NEEDED: {label}
      </span>
    </div>
  );
}

