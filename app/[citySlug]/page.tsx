import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cities } from "../cities/data";
import DarkSection from "../components/DarkSection";
import LightSection from "../components/LightSection";
import Footer from "../components/Footer";
import FAQSection from "./FAQSection";

interface CityPageProps {
  params: Promise<{ citySlug: string }>;
}

export function generateStaticParams() {
  return cities.map((city) => ({
    citySlug: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  
  if (!city) {
    return {
      title: "City Not Found",
    };
  }

  return {
    title: city.title,
    description: city.description,
    openGraph: {
      title: city.title,
      description: city.description,
      type: "website",
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "name": "Quran Online Lessons",
    "description": city.description,
    "areaServed": {
      "@type": "City",
      "name": city.schemaServiceArea
    },
    "url": "https://quranonlinelessons-seven.vercel.app",
    "sameAs": "https://instagram.com/quran_online_lessons",
    "telephone": "+923021771373",
    "priceRange": "£"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": city.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <DarkSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl mx-auto lg:mx-0">
            <div className="inline-block mb-6 px-6 py-2 border-2 border-brand-gold rounded-full text-brand-gold text-sm font-medium uppercase tracking-wide">
              ONLINE QURAN CLASSES · {city.city}, {city.country}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-brand-white leading-tight">
              {city.heroHeading}
            </h1>

            <p className="text-brand-off-white-body text-lg sm:text-xl mb-8 leading-relaxed">
              {city.heroSubtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full">
              <a
                href="https://wa.me/923021771373"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors text-center min-h-[44px] flex items-center justify-center"
              >
                Book Free Trial on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden min-h-[320px] md:min-h-[420px] lg:min-h-[500px] h-full">
            <Image
              src={city.imageUrl}
              alt={`Online Quran classes in ${city.city} - Quran Online Lessons`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </DarkSection>

      {/* Local Intro Section */}
      <LightSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark-green-text mb-8 text-center">
            {city.localIntroHeading}
          </h2>
          <div className="space-y-6">
            {city.localIntroContent.map((paragraph, index) => (
              <p
                key={index}
                className="text-brand-body-cream text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </LightSection>

      {/* Features Section */}
      <DarkSection>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white mb-12 text-center">
          {city.featuresHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {city.features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="font-semibold text-brand-gold text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-white text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* Courses Overview Section */}
      <LightSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark-green-text mb-4">
            {city.coursesHeading}
          </h2>
          <p className="text-brand-body-cream text-lg mb-8 leading-relaxed">
            {city.coursesIntro}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/courses/hifz"
              className="px-6 py-3 border-2 border-brand-gold text-brand-dark-green-text rounded-full hover:bg-brand-gold hover:text-brand-black transition-colors font-medium"
            >
              Hifz
            </Link>
            <Link
              href="/courses/tajweed"
              className="px-6 py-3 border-2 border-brand-gold text-brand-dark-green-text rounded-full hover:bg-brand-gold hover:text-brand-black transition-colors font-medium"
            >
              Tajweed
            </Link>
            <Link
              href="/courses/qaida"
              className="px-6 py-3 border-2 border-brand-gold text-brand-dark-green-text rounded-full hover:bg-brand-gold hover:text-brand-black transition-colors font-medium"
            >
              Qaida
            </Link>
            <Link
              href="/courses/tafseer"
              className="px-6 py-3 border-2 border-brand-gold text-brand-dark-green-text rounded-full hover:bg-brand-gold hover:text-brand-black transition-colors font-medium"
            >
              Tafseer
            </Link>
          </div>
        </div>
      </LightSection>

      {/* FAQ Section */}
      <FAQSection city={city} />

      {/* Final CTA Section */}
      <LightSection className="text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark-green-text mb-4">
          {city.ctaHeading}
        </h2>
        <p className="text-brand-body-cream text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          {city.ctaSubtext}
        </p>
        <a
          href="https://wa.me/923021771373"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors min-h-[44px] mb-4"
        >
          Book Free Trial on WhatsApp
        </a>
        <p className="text-brand-body-cream text-sm">
          or follow us on Instagram{" "}
          <a
            href="https://instagram.com/quran_online_lessons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:text-brand-gold-bright transition-colors"
          >
            @quran_online_lessons
          </a>
        </p>
      </LightSection>

      <Footer />
    </>
  );
}
