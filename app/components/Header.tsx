"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, BookOpen, FileText, Info } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Courses", href: "/#what-we-teach", icon: BookOpen },
    { label: "Blog", href: "/blog", icon: FileText },
    { label: "About", href: "/about", icon: Info },
    // { label: "Free Trial", href: "/free-trial" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-dark-green border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Text Based */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center leading-none gap-1">
              {/* Large Q */}
              <span className="font-display text-5xl sm:text-6xl font-bold text-brand-gold group-hover:text-brand-gold-bright transition-colors leading-none">Q</span>
              
              {/* Stacked text: uran, Online, Classes */}
              <div className="flex flex-col justify-center leading-none gap-0.5">
                <span className="font-display text-sm sm:text-base font-bold text-brand-white group-hover:text-brand-gold transition-colors leading-none">uran</span>
                <span className="font-body text-[10px] sm:text-xs text-brand-off-white-body group-hover:text-brand-gold transition-colors tracking-wide leading-none">Online</span>
                <span className="font-body text-[10px] sm:text-xs text-brand-off-white-body group-hover:text-brand-gold transition-colors tracking-wide leading-none">Classes</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-brand-white hover:text-brand-gold transition-all duration-300 tracking-wide flex items-center gap-2 group relative py-1"
                >
                  <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop only) + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/923021771373"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex bg-brand-gold text-brand-black rounded-full px-4 py-2 text-sm font-semibold hover:bg-brand-gold-bright transition-colors"
            >
              Book Free Trial
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-brand-white hover:text-brand-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-3 pb-3 border-t border-brand-gold/20 pt-3">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-body text-sm text-brand-white hover:text-brand-gold transition-all duration-300 tracking-wide flex items-center gap-3 group py-1 hover:pl-2"
                  >
                    <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile CTA Button - Full Width */}
              <a
                href="https://wa.me/923021771373"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-brand-gold text-brand-black rounded-full px-4 py-3 text-sm font-semibold hover:bg-brand-gold-bright transition-colors text-center mt-2"
              >
                Book Free Trial
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
