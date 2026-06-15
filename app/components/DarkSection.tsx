import { ReactNode } from "react";

interface DarkSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function DarkSection({ children, className = "", id }: DarkSectionProps) {
  return (
    <section id={id} className={`w-full bg-brand-dark-green text-brand-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
