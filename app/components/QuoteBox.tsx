import { Quote } from "lucide-react";

interface QuoteBoxProps {
  quote: string;
  source: string;
  className?: string;
}

export default function QuoteBox({ quote, source, className = "" }: QuoteBoxProps) {
  return (
    <div className={`border-2 border-brand-gold rounded-lg p-6 bg-brand-gold/5 ${className}`}>
      <Quote className="w-10 h-10 text-brand-gold mb-4" strokeWidth={1.5} />
      <p className="text-brand-off-white-body italic text-lg mb-4 leading-relaxed">
        {quote}
      </p>
      <p className="text-brand-gold text-sm font-medium">
        {source}
      </p>
    </div>
  );
}
