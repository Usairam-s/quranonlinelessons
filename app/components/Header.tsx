"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#what-we-teach" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    // { label: "Free Trial", href: "/free-trial" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-dark-green border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Quran Online Lessons"
              width={360}
              height={72}
              className="h-16 sm:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-brand-white hover:text-brand-gold transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/923021771373"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-brand-black rounded-full px-4 py-2 text-sm font-semibold hover:bg-brand-gold-bright transition-colors"
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
          <nav className="md:hidden mt-4 pb-4 border-t border-brand-gold/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-body text-sm text-brand-white hover:text-brand-gold transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
