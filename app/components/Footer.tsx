import Link from "next/link";
import { Info, BookOpen, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark-green text-brand-off-white-body py-8 px-4 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Tagline */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center group justify-center mb-3">
            <div className="flex items-center leading-none gap-1">
              {/* Large Q */}
              <span className="font-display text-4xl sm:text-5xl font-bold text-brand-gold group-hover:text-brand-gold-bright transition-colors leading-none">Q</span>
              
              {/* Stacked text: uran, Online, Classes */}
              <div className="flex flex-col justify-center leading-none gap-0.5">
                <span className="font-display text-sm sm:text-base font-bold text-brand-white group-hover:text-brand-gold transition-colors leading-none">uran</span>
                <span className="font-body text-[10px] sm:text-xs text-brand-off-white-body group-hover:text-brand-gold transition-colors tracking-wide leading-none">Online</span>
                <span className="font-body text-[10px] sm:text-xs text-brand-off-white-body group-hover:text-brand-gold transition-colors tracking-wide leading-none">Classes</span>
              </div>
            </div>
          </Link>
          <p className="text-sm text-brand-off-white-body">
            Online Quran Academy — Live 1-on-1 Classes
          </p>
        </div>

        {/* Footer Links with Icons */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm mb-6">
          <Link 
            href="/about" 
            className="flex items-center gap-1.5 text-brand-gold hover:text-brand-gold-bright transition-colors group"
          >
            <Info className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>About</span>
          </Link>
          <span className="text-brand-gold/50">·</span>
          <Link 
            href="/#what-we-teach" 
            className="flex items-center gap-1.5 text-brand-gold hover:text-brand-gold-bright transition-colors group"
          >
            <BookOpen className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>Courses</span>
          </Link>
          <span className="text-brand-gold/50">·</span>
          <Link 
            href="/free-trial" 
            className="flex items-center gap-1.5 text-brand-gold hover:text-brand-gold-bright transition-colors group"
          >
            <Phone className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>Free Trial</span>
          </Link>
          <span className="text-brand-gold/50">·</span>
          <Link 
            href="/free-trial" 
            className="flex items-center gap-1.5 text-brand-gold hover:text-brand-gold-bright transition-colors group"
          >
            <Mail className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>Contact</span>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-center text-brand-off-white-body/70">
          © 2026 Quran Online Lessons. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
