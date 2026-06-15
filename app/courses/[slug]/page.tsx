import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { courses } from "../data";
import DarkSection from "../../components/DarkSection";
import LightSection from "../../components/LightSection";
import ImagePlaceholder from "../../../components/ImagePlaceholder";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      type: "website",
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Quran Online Lessons",
      "sameAs": "https://instagram.com/quran_online_lessons",
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
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-brand-gold/80">
          <Link href="/" className="hover:text-brand-gold-bright transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#what-we-teach" className="hover:text-brand-gold-bright transition-colors">
            Courses
          </Link>
          <span>/</span>
          <span className="text-brand-white font-medium">{course.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl mx-auto lg:mx-0">
            <div className="inline-block mb-6 px-6 py-2 border-2 border-brand-gold rounded-full text-brand-gold text-sm font-medium uppercase tracking-wide">
              ONLINE COURSE
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-brand-white leading-tight">
              {course.heroHeading}
            </h1>

            <p className="text-brand-off-white-body text-lg sm:text-xl mb-8 leading-relaxed">
              {course.heroSubtext}
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

          <div className="w-full">
            <ImagePlaceholder
              label={course.imagePlaceholderLabel}
              aspectRatio="video"
            />
          </div>
        </div>
      </DarkSection>

      {/* Body Content Section */}
      <LightSection>
        <div className="max-w-3xl mx-auto space-y-6">
          {course.bodyParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-brand-body-cream text-lg leading-relaxed text-justify sm:text-left"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </LightSection>

      {/* Closing CTA Section */}
      <DarkSection className="py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white mb-6">
            Ready to start with {course.name}?
          </h2>
          <p className="text-brand-off-white-body text-lg sm:text-xl mb-8 max-w-xl mx-auto leading-relaxed">
            Begin your one-on-one learning journey today. Get direct feedback, progress tracking, and lessons adjusted to your pace.
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

      {/* Footer */}
      <footer className="bg-brand-dark-green text-brand-off-white-body py-8 px-4 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-display text-2xl text-brand-gold mb-2">
            <Link href="/" className="hover:text-brand-gold-bright transition-colors">
              Quran Online Lessons
            </Link>
          </h3>
          <p className="text-sm mb-4">
            Online Quran Academy — Live 1-on-1 Classes
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-sm mb-4">
            <Link href="/" className="text-brand-gold hover:text-brand-gold-bright transition-colors">Home</Link>
            <span className="text-brand-gold/50">·</span>
            <Link href="/courses/tajweed" className="text-brand-gold hover:text-brand-gold-bright transition-colors">Tajweed</Link>
            <span className="text-brand-gold/50">·</span>
            <Link href="/courses/qaida" className="text-brand-gold hover:text-brand-gold-bright transition-colors">Qaida</Link>
            <span className="text-brand-gold/50">·</span>
            <Link href="/courses/tafseer" className="text-brand-gold hover:text-brand-gold-bright transition-colors">Tafseer</Link>
            <span className="text-brand-gold/50">·</span>
            <Link href="/courses/hifz" className="text-brand-gold hover:text-brand-gold-bright transition-colors">Hifz</Link>
          </div>

          <p className="text-xs">
            © 2025 Quran Online Lessons. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
