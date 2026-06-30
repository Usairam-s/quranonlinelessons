import { Metadata } from "next";
import DarkSection from "../components/DarkSection";
import LightSection from "../components/LightSection";
import Footer from "../components/Footer";
import Image from "next/image";
import { FAQItem } from "./FAQItem";

export const metadata: Metadata = {
  title: "Female Quran Teacher Online | Live 1-on-1 Classes | Quran Online Lessons",
  description: "Find a qualified female Quran teacher online. Live one-on-one classes via Zoom for sisters, girls and children. Safe, comfortable learning environment. Book a free trial today.",
  openGraph: {
    title: "Female Quran Teacher Online | Live 1-on-1 Classes | Quran Online Lessons",
    description: "Find a qualified female Quran teacher online. Live one-on-one classes via Zoom for sisters, girls and children. Safe, comfortable learning environment. Book a free trial today.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "name": "Quran Online Lessons",
  "description": "Online Quran academy with qualified female teachers for sisters and girls worldwide",
  "sameAs": "https://instagram.com/quran_online_lessons",
  "telephone": "+923021771373"
};

export default function FemaleQuranTeacherPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <DarkSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl mx-auto lg:mx-0">
            <div className="inline-block mb-6 px-6 py-2 border-2 border-brand-gold rounded-full text-brand-gold text-sm font-medium uppercase tracking-wide">
              Female Teachers Available
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-brand-white leading-tight">
              Learn Quran Online with a Female Teacher
            </h1>

            <p className="text-brand-off-white-body text-lg sm:text-xl mb-8 leading-relaxed">
              A safe, comfortable learning environment for sisters and girls of all ages. Live one-on-one classes via Zoom with qualified female Quran teachers. First class completely free.
            </p>

            <a
              href="https://wa.me/923021771373"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors text-center min-h-[44px] flex items-center justify-center"
            >
              Book Free Trial on WhatsApp
            </a>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden min-h-[320px] md:min-h-[420px] lg:min-h-[500px] h-full">
            <Image
              src="https://res.cloudinary.com/dmx22dkwy/image/upload/v1781649895/How-to-choose-the-right-Quran-teacher_wicjdj.jpg"
              alt="Female Quran teacher teaching online - Quran Online Lessons"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </DarkSection>

      <LightSection>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark-green-text mb-8">
          Why a Female Teacher Makes a Difference
        </h2>

        <div className="max-w-4xl space-y-6 text-brand-body-cream text-lg leading-relaxed">
          <p>
            For many Muslim families, the gender of a Quran teacher is not a minor detail — it is a fundamental requirement. Sisters learning the Qur'an deserve a space where they feel completely at ease, where they can ask questions freely, recite without self-consciousness, and build a genuine relationship with their teacher. A female teacher provides exactly that environment — one built on comfort, trust, and shared understanding.
          </p>

          <p>
            This matters equally for young girls whose parents want to establish healthy learning habits from the very beginning. When a child's first experience of Quranic education is positive, safe, and encouraging, that relationship with the Qur'an stays with them for life. Our female teachers are experienced in teaching young children with patience, warmth, and the kind of gentle encouragement that makes learning stick.
          </p>

          <p>
            All of our female teachers are qualified, experienced, and deeply committed to the students they teach. Classes take place live, one-on-one, via Zoom — meaning sisters and girls across the UK, Australia, and beyond can access a trusted female Quran teacher from the comfort and privacy of their own home, at a time that suits their schedule.
          </p>
        </div>
      </LightSection>

      <DarkSection>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white mb-12 text-center">
          What Our Female Teachers Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-brand-gold/30 rounded-lg">
            <h3 className="font-bold text-brand-gold text-xl mb-3">
              Complete Privacy & Comfort
            </h3>
            <p className="text-brand-off-white-body text-base leading-relaxed">
              Learn from home via Zoom — no travel, no unfamiliar environment, just a trusted teacher and a comfortable space to learn.
            </p>
          </div>

          <div className="p-6 border border-brand-gold/30 rounded-lg">
            <h3 className="font-bold text-brand-gold text-xl mb-3">
              All Ages Welcome
            </h3>
            <p className="text-brand-off-white-body text-base leading-relaxed">
              From young girls in primary school to adult sisters and elders — our female teachers work with students at every level and every age.
            </p>
          </div>

          <div className="p-6 border border-brand-gold/30 rounded-lg">
            <h3 className="font-bold text-brand-gold text-xl mb-3">
              Complete Beginners Welcome
            </h3>
            <p className="text-brand-off-white-body text-base leading-relaxed">
              Never read Arabic before? No problem. We start from the very beginning — the Arabic alphabet, letter joining, and reading foundations — with patience and care.
            </p>
          </div>

          <div className="p-6 border border-brand-gold/30 rounded-lg">
            <h3 className="font-bold text-brand-gold text-xl mb-3">
              Full Curriculum
            </h3>
            <p className="text-brand-off-white-body text-base leading-relaxed">
              Hifz, Tajweed, Qaida, Tafseer, Kalima and Masnoon Du'ain — female teachers available for every subject we offer.
            </p>
          </div>

          <div className="p-6 border border-brand-gold/30 rounded-lg">
            <h3 className="font-bold text-brand-gold text-xl mb-3">
              Flexible Timings
            </h3>
            <p className="text-brand-off-white-body text-base leading-relaxed">
              Morning, evening and weekend slots available to fit around school, work, and family life — wherever you are in the world.
            </p>
          </div>

          <div className="p-6 border border-brand-gold/30 rounded-lg">
            <h3 className="font-bold text-brand-gold text-xl mb-3">
              Free Trial Class
            </h3>
            <p className="text-brand-off-white-body text-base leading-relaxed">
              Book a completely free first class with no commitment. Meet your teacher and see how online learning feels before making any decision.
            </p>
          </div>
        </div>
      </DarkSection>

      <LightSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark-green-text mb-10 text-center">
            Common Questions About Female Quran Teachers
          </h2>
          <div>
            <FAQItem question="Are all your female teachers qualified?" answer="Yes — all of our female teachers are experienced Quran educators who have studied the Qur'an formally and have significant teaching experience. We ensure every teacher is not only knowledgeable but also patient, encouraging, and skilled at working with students of different ages and levels." />
            <FAQItem question="Can my young daughter have a female teacher?" answer="Absolutely — many of our youngest students are girls whose parents specifically requested a female teacher. Our teachers are experienced in working with young children and know how to make learning feel fun, safe, and encouraging rather than pressured." />
            <FAQItem question="Are female teachers available for all subjects?" answer="Yes — female teachers are available across our full curriculum including Qaida, Tajweed, Hifz, Tafseer, Kalima and Masnoon Du'ain. When you book your free trial, simply let us know you would like a female teacher and we will arrange it." />
            <FAQItem question="How do I know the online environment is safe for my daughter?" answer="Classes take place via Zoom — a well-known, trusted platform that most families already use. Sessions are one-on-one between the teacher and your child. Parents are always welcome to sit in on any class, especially for younger children, and many parents do exactly that for the first few sessions until they feel completely comfortable." />
            <FAQItem question="What times are female teachers available?" answer="Female teachers are available across all our time slots — morning, evening and weekends — in UK and Australian timezones. When you message us on WhatsApp, let us know your preferred times and we will match you with a female teacher whose schedule fits yours." />
          </div>
        </div>
      </LightSection>

      <DarkSection className="text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white mb-4">
          Book a Free Class with a Female Teacher Today
        </h2>
        <p className="text-brand-off-white-body text-lg mb-8 max-w-2xl mx-auto">
          No commitment, no pressure — just a free first class so you can see how online learning works for your daughter or for yourself.
        </p>

        <a
          href="https://wa.me/923021771373"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors min-h-[44px] mb-4"
        >
          Book Free Trial on WhatsApp
        </a>

        <p className="text-brand-off-white-body text-sm">
          or follow us on Instagram @quran_online_lessons
        </p>
      </DarkSection>

      <Footer />
    </>
  );
}
