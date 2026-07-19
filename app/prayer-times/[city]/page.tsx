import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { prayerCities } from "../data";
import { getTimings } from "../getTimings";
import DarkSection from "../../components/DarkSection";
import LightSection from "../../components/LightSection";
import Footer from "../../components/Footer";

export const revalidate = 21600;

interface PrayerCityPageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return prayerCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PrayerCityPageProps): Promise<Metadata> {
  const { city } = await params;
  const prayerCity = prayerCities.find((c) => c.slug === city);

  if (!prayerCity) {
    return { title: "City Not Found" };
  }

  return {
    title: prayerCity.title,
    description: prayerCity.description,
    openGraph: {
      title: prayerCity.title,
      description: prayerCity.description,
      type: "website",
    },
  };
}

const PRAYER_LABELS: { key: "Fajr" | "Sunrise" | "Dhuhr" | "Asr" | "Maghrib" | "Isha"; label: string }[] = [
  { key: "Fajr", label: "Fajr" },
  { key: "Sunrise", label: "Sunrise" },
  { key: "Dhuhr", label: "Dhuhr" },
  { key: "Asr", label: "Asr" },
  { key: "Maghrib", label: "Maghrib" },
  { key: "Isha", label: "Isha" },
];

export default async function PrayerCityPage({ params }: PrayerCityPageProps) {
  const { city } = await params;
  const prayerCity = prayerCities.find((c) => c.slug === city);

  if (!prayerCity) {
    notFound();
  }

  const prayerData = await getTimings(prayerCity.city, prayerCity.apiCountry);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": prayerCity.title,
    "description": prayerCity.description,
    "about": {
      "@type": "EducationalOrganization",
      "name": "Quran Online Lessons",
      "sameAs": "https://instagram.com/quran_online_lessons",
    },
    "areaServed": {
      "@type": "City",
      "name": `${prayerCity.city}, ${prayerCity.country}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <DarkSection>
        <div className="mb-8 flex items-center gap-2 text-sm text-brand-gold/80">
          <Link href="/" className="hover:text-brand-gold-bright transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/prayer-times" className="hover:text-brand-gold-bright transition-colors">
            Prayer Times
          </Link>
          <span>/</span>
          <span className="text-brand-white font-medium">{prayerCity.city}</span>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-brand-gold rounded-full text-brand-gold text-sm font-medium uppercase tracking-wide">
            Free Tool · Updated Daily
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-brand-white leading-tight">
            Prayer Times in {prayerCity.city}
          </h1>

          <p className="text-brand-off-white-body text-lg sm:text-xl mb-2 leading-relaxed">
            Accurate Salah timings for {prayerCity.city}, {prayerCity.country} — Fajr, Dhuhr, Asr, Maghrib and Isha.
          </p>
          {prayerData && (
            <p className="text-brand-gold text-base">
              {prayerData.gregorianDate} · {prayerData.hijriDate}
            </p>
          )}
        </div>
      </DarkSection>

      {/* Timings Section */}
      <LightSection>
        {prayerData ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {PRAYER_LABELS.map(({ key, label }) => (
                <div
                  key={key}
                  className="text-center border border-brand-gold/30 rounded-2xl px-4 py-6 bg-white/40"
                >
                  <p className="font-display text-lg font-semibold text-brand-dark-green-text mb-2">
                    {label}
                  </p>
                  <p className="text-brand-body-cream text-xl font-bold">
                    {prayerData.timings[key]}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-brand-body-cream text-sm mt-6">
              Times shown for {prayerCity.city} ({prayerData.timezone})
            </p>
          </>
        ) : (
          <p className="text-center text-brand-body-cream text-lg max-w-xl mx-auto">
            Prayer times are temporarily unavailable for {prayerCity.city}. Please try again shortly.
          </p>
        )}
      </LightSection>

      {/* City Switcher */}
      <DarkSection className="py-10 md:py-12">
        <p className="text-center text-brand-off-white-body text-sm mb-6 uppercase tracking-wide">
          Other Cities
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {prayerCities
            .filter((c) => c.slug !== prayerCity.slug)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/prayer-times/${c.slug}`}
                className="px-5 py-2 border-2 border-brand-gold text-brand-gold rounded-full hover:bg-brand-gold hover:text-brand-black transition-colors text-sm font-medium"
              >
                {c.city}
              </Link>
            ))}
        </div>
      </DarkSection>

      {/* Cross-link CTA */}
      <LightSection className="text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark-green-text mb-4">
          Raising a Family in {prayerCity.city}?
        </h2>
        <p className="text-brand-body-cream text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          We teach live, one-on-one online Quran classes for children and adults across {prayerCity.city} —
          Hifz, Tajweed, Qaida, Tafseer and more. Female teachers available. First class completely free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={`/${prayerCity.citySlugLink}`}
            className="w-full sm:w-auto px-8 py-4 border-2 border-brand-gold text-brand-dark-green-text rounded-full hover:bg-brand-gold hover:text-brand-black transition-colors font-semibold text-center min-h-[44px] flex items-center justify-center"
          >
            Online Quran Classes in {prayerCity.city}
          </Link>
          <a
            href="https://wa.me/923021771373"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors text-center min-h-[44px] flex items-center justify-center"
          >
            Book Free Trial on WhatsApp
          </a>
        </div>
      </LightSection>

      <Footer />
    </>
  );
}
