import type { Metadata } from "next"
import DarkSection from "../components/DarkSection"
import LightSection from "../components/LightSection"
import { MessageCircle, AtSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Book a Free Trial Class | Quran Online Lessons",
  description: "Book your free trial Quran class today. No commitment, no payment — just a live one-on-one class via Zoom so you can see if online learning is right for you.",
}

export default function FreeTrialPage() {
  return (
    <>
      {/* HERO */}
      <DarkSection>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-brand-white">
            Book Your Free Trial Class
          </h1>
          <p className="text-brand-off-white-body text-lg sm:text-xl mb-8 leading-relaxed">
            No commitment. No payment. Just a live, one-on-one Quran class via Zoom so you can experience online learning for yourself before making any decision.
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

      {/* HOW IT WORKS */}
      <LightSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark-green-text mb-12 text-center">
            How the Free Trial Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-brand-gold/30 rounded-xl p-8 text-center">
              <div className="font-display text-5xl text-brand-gold mb-4">01</div>
              <h3 className="font-bold text-brand-dark-green-text text-xl mb-3">
                Message Us on WhatsApp
              </h3>
              <p className="text-brand-body-cream text-sm leading-relaxed">
                Send us a message on WhatsApp telling us your name, your child's age (or your own age), and what you would like to learn — Qaida, Tajweed, Hifz, or anything else.
              </p>
            </div>

            <div className="border border-brand-gold/30 rounded-xl p-8 text-center">
              <div className="font-display text-5xl text-brand-gold mb-4">02</div>
              <h3 className="font-bold text-brand-dark-green-text text-xl mb-3">
                We Schedule Your Class
              </h3>
              <p className="text-brand-body-cream text-sm leading-relaxed">
                We will reply within a few hours to confirm a time that works for you. We offer morning, evening and weekend slots across UK and Australian timezones.
              </p>
            </div>

            <div className="border border-brand-gold/30 rounded-xl p-8 text-center">
              <div className="font-display text-5xl text-brand-gold mb-4">03</div>
              <h3 className="font-bold text-brand-dark-green-text text-xl mb-3">
                Join via Zoom — It's Free
              </h3>
              <p className="text-brand-body-cream text-sm leading-relaxed">
                At the agreed time, join the Zoom call and meet your teacher. The class is completely free — no card details, no commitment, no pressure.
              </p>
            </div>
          </div>
        </div>
      </LightSection>

      {/* WHAT TO EXPECT */}
      <DarkSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-white mb-10 text-center">
            What to Expect in Your First Class
          </h2>
          <div className="space-y-6">
            {[
              "Your teacher will introduce themselves and get to know your child or your own learning goals",
              "They will assess your current level — no test, just a friendly conversation and a little reading if applicable",
              "You will discuss what you want to achieve and how often you would like to have classes",
              "If you are happy to continue, you agree a regular schedule — if not, there is absolutely no obligation"
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0"></div>
                <p className="text-brand-off-white-body text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </DarkSection>

      {/* CONTACT OPTIONS */}
      <LightSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark-green-text mb-12 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="https://wa.me/923021771373"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-gold/30 rounded-xl p-8 text-center hover:border-brand-gold transition-colors"
            >
              <MessageCircle className="w-12 h-12 text-brand-gold mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-brand-dark-green-text text-xl mb-2">
                WhatsApp
              </h3>
              <p className="text-brand-dark-green-text text-lg font-semibold mb-2">
                +92 302 177 1373
              </p>
              <p className="text-brand-body-cream text-sm">
                Message us any time — we reply personally
              </p>
            </a>

            <a
              href="https://instagram.com/quran_online_lessons"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-gold/30 rounded-xl p-8 text-center hover:border-brand-gold transition-colors"
            >
              <AtSign className="w-12 h-12 text-brand-gold mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-brand-dark-green-text text-xl mb-2">
                Instagram
              </h3>
              <p className="text-brand-dark-green-text text-lg font-semibold mb-2">
                @quran_online_lessons
              </p>
              <p className="text-brand-body-cream text-sm">
                Follow us for daily Quran content
              </p>
            </a>
          </div>
        </div>
      </LightSection>

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
