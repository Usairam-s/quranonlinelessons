import type { Metadata } from "next";
import DarkSection from "../components/DarkSection";
import LightSection from "../components/LightSection";
import Footer from "../components/Footer";
import TeacherAuthoritySection from "../components/TeacherAuthoritySection";

export const metadata: Metadata = {
  title: "About Us | Led by Khateeb Saleem Almas | Quran Online Lessons",
  description:
    "Learn about Quran Online Lessons, guided by Khateeb Saleem Almas with 30+ years of Islamic education. One-on-one live classes via Zoom for kids, adults, and sisters worldwide.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <DarkSection>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-brand-gold rounded-full text-brand-gold text-sm font-medium uppercase tracking-wide">
            Our Heritage &amp; Mission
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-brand-white">
            About Quran Online Lessons
          </h1>
          <p className="text-brand-off-white-body text-lg sm:text-xl leading-relaxed">
            Founded under the spiritual and pedagogical leadership of Khateeb Saleem Almas to provide authentic, one-on-one Quranic education with correct Tajweed and traditional adab.
          </p>
        </div>
      </DarkSection>

      {/* OUR STORY */}
      <LightSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark-green-text mb-8">
            Our Story &amp; Philosophy
          </h2>
          <p className="text-brand-body-cream text-lg leading-relaxed mb-6">
            We are not a mass-market commercial portal assigning random, unvetted freelancers to young learners. We are a family-led Islamic educational initiative rooted in over 30 years of authentic community scholarship.
          </p>
          <p className="text-brand-body-cream text-lg leading-relaxed mb-6">
            Every child and adult enrolled with us is known personally. We understand the unique challenges facing Muslim families in the UK, Australia, and Western nations—where finding patient, qualified teachers who speak clear English and uphold traditional Islamic values can be difficult.
          </p>
          <p className="text-brand-body-cream text-lg leading-relaxed">
            From the foundational Arabic letters of Noorani Qaida to full Tajweed mastery and Hifz, we ensure each student progresses with confidence, clarity, and genuine love for the Qur&apos;an.
          </p>
        </div>
      </LightSection>

      {/* MEET YOUR TEACHER / AUTHORITY */}
      <TeacherAuthoritySection />

      {/* CTA */}
      <LightSection>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark-green-text mb-6">
            Experience a Class with Us
          </h2>
          <p className="text-brand-body-cream text-lg mb-8 leading-relaxed">
            Book a free 30-minute class with us to discuss your learning goals, assess your level, and experience our teaching style firsthand.
          </p>
          <a
            href="https://wa.me/923021771373?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20book%20a%20free%20trial%20class."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors min-h-[44px]"
          >
            Book Free Trial on WhatsApp
          </a>
        </div>
      </LightSection>

      <Footer />
    </>
  );
}
