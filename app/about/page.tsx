import type { Metadata } from "next"
import DarkSection from "../components/DarkSection"
import LightSection from "../components/LightSection"

export const metadata: Metadata = {
  title: "About Us | Quran Online Lessons",
  description: "Learn about our online Quran academy and our experienced teachers. One-on-one live classes via Zoom for kids, adults and sisters worldwide.",
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <DarkSection>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-brand-white">
            About Quran Online Lessons
          </h1>
          <p className="text-brand-off-white-body text-lg sm:text-xl leading-relaxed">
            We are a dedicated online Quran academy committed to helping Muslims around the world build a genuine, lasting connection with the Qur'an — one student at a time.
          </p>
        </div>
      </DarkSection>

      {/* PLACEHOLDER CONTENT */}
      <LightSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark-green-text mb-8">
            Our Story
          </h2>
          <p className="text-brand-body-cream text-lg leading-relaxed mb-10">
            We believe every Muslim deserves access to a qualified, trusted Quran teacher — regardless of where they live in the world. Our academy was founded with one purpose: to make that possible through live, personal, one-on-one online classes.
          </p>
          <div className="border border-brand-gold/40 rounded-xl p-8 text-center text-brand-body-cream">
            More about our teachers and our story coming soon.
          </div>
        </div>
      </LightSection>

      {/* CTA */}
      <DarkSection>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-white mb-6">
            Want to Learn More?
          </h2>
          <p className="text-brand-off-white-body text-lg mb-8 leading-relaxed">
            Book a free trial class and meet your teacher personally — the best way to understand who we are is to experience a class.
          </p>
          <a
            href="https://wa.me/923021771373"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors min-h-[44px]"
          >
            Book Free Trial on WhatsApp
          </a>
        </div>
      </DarkSection>

      <footer className="bg-brand-dark-green text-brand-off-white-body py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-display text-2xl text-brand-gold mb-2">
            Quran Online Lessons
          </h3>
          <p className="text-sm mb-4">
            Online Quran Academy — Live 1-on-1 Classes
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-sm mb-4">
            <a href="#" className="text-brand-gold hover:text-brand-gold-bright transition-colors">About</a>
            <span className="text-brand-gold/50">·</span>
            <a href="#" className="text-brand-gold hover:text-brand-gold-bright transition-colors">Courses</a>
            <span className="text-brand-gold/50">·</span>
            <a href="#" className="text-brand-gold hover:text-brand-gold-bright transition-colors">Free Trial</a>
            <span className="text-brand-gold/50">·</span>
            <a href="#" className="text-brand-gold hover:text-brand-gold-bright transition-colors">Contact</a>
          </div>

          <p className="text-xs">
            © 2025 Quran Online Lessons. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
