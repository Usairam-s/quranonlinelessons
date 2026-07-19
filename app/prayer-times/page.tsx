import { Metadata } from "next";
import Link from "next/link";
import { prayerCities } from "./data";
import DarkSection from "../components/DarkSection";
import LightSection from "../components/LightSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Prayer Times UK & Australia | Free Salah Timetable | Quran Online Lessons",
  description:
    "Free daily prayer times (Salah timings) for Birmingham, Bradford, Manchester, London, Sydney and Melbourne. Fajr, Dhuhr, Asr, Maghrib and Isha, updated daily.",
  openGraph: {
    title: "Prayer Times UK & Australia | Quran Online Lessons",
    description:
      "Free daily prayer times for Birmingham, Bradford, Manchester, London, Sydney and Melbourne.",
    type: "website",
  },
};

export default function PrayerTimesHubPage() {
  return (
    <>
      <DarkSection>
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-brand-gold rounded-full text-brand-gold text-sm font-medium uppercase tracking-wide">
            Free Tool
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-brand-white leading-tight">
            Prayer Times
          </h1>
          <p className="text-brand-off-white-body text-lg sm:text-xl leading-relaxed">
            Select your city for today&apos;s accurate Salah timings — Fajr, Dhuhr, Asr, Maghrib and Isha.
          </p>
        </div>
      </DarkSection>

      <LightSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {prayerCities.map((c) => (
            <Link
              key={c.slug}
              href={`/prayer-times/${c.slug}`}
              className="block text-center border-2 border-brand-gold/30 rounded-2xl px-6 py-8 hover:border-brand-gold hover:bg-white/40 transition-colors"
            >
              <p className="font-display text-2xl font-bold text-brand-dark-green-text mb-1">
                {c.city}
              </p>
              <p className="text-brand-body-cream text-sm">{c.country}</p>
            </Link>
          ))}
        </div>
      </LightSection>

      <DarkSection className="text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-white mb-4">
          Learning Quran Online
        </h2>
        <p className="text-brand-off-white-body text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Alongside prayer times, we teach live, one-on-one online Quran classes for children and adults —
          Hifz, Tajweed, Qaida, Tafseer and more. Female teachers available. First class completely free.
        </p>
        <a
          href="https://wa.me/923021771373"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors min-h-[44px]"
        >
          Book Free Trial on WhatsApp
        </a>
      </DarkSection>

      <Footer />
    </>
  );
}
