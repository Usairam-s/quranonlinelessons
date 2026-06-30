import type { Metadata } from "next";
import DarkSection from "../components/DarkSection";
import LightSection from "../components/LightSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us | Quran Online Lessons",
  description:
    "Learn about our online Quran academy and our experienced teachers. One-on-one live classes via Zoom for kids, adults and sisters worldwide.",
};

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
            We are a dedicated online Quran academy committed to helping Muslims
            around the world build a genuine, lasting connection with the Qur'an
            — one student at a time.
          </p>
        </div>
      </DarkSection>

      {/* PLACEHOLDER CONTENT */}
      {/* <LightSection>
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
      </LightSection> */}
      {/* OUR STORY */}
      <LightSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark-green-text mb-8">
            Our Story
          </h2>
          <p className="text-brand-body-cream text-lg leading-relaxed mb-6">
            We are not a large platform with dozens of unfamiliar tutors
            assigned at random. We are a small, closely connected team that has
            worked together for over 5 years — and it shows in how classes are
            run. Every student is known personally, not just by name on a
            schedule.
          </p>
          <p className="text-brand-body-cream text-lg leading-relaxed mb-6">
            Over the years we have taught the very young just beginning to
            recognise the Arabic alphabet, school-age children working through
            Tajweed and Hifz, adults returning to the Qur'an after years away,
            and elders seeking a deeper connection in the later chapters of
            their lives. Every age group is welcome here, and every student is
            taught according to their own pace.
          </p>
          <p className="text-brand-body-cream text-lg leading-relaxed">
            What makes us different is not technology or scale. It is
            consistency — the same teacher, the same care, and a genuine
            relationship built one class at a time.
          </p>
        </div>
      </LightSection>

      {/* MEET YOUR TEACHER */}
      <DarkSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-white mb-8 text-center">
            Meet Your Teacher
          </h2>
          <p className="text-brand-off-white-body text-lg leading-relaxed mb-6">
            With over 5 years of dedicated teaching experience, our teacher has
            guided students of every age and background — from young children
            taking their first steps with the Arabic alphabet, to adults and
            elders deepening their understanding of the Qur'an later in life.
          </p>
          <p className="text-brand-off-white-body text-lg leading-relaxed mb-6">
            Classes are never rushed and never one-size-fits-all. Each student's
            pace, personality, and goals shape how they are taught — which is
            only possible because our numbers are kept small and personal by
            design.
          </p>
          <p className="text-brand-off-white-body text-lg leading-relaxed">
            We believe the best Qur'an education does not come from a large
            impersonal platform. It comes from a teacher who knows your name,
            remembers your progress, and genuinely cares whether you succeed.
          </p>
        </div>
      </DarkSection>

      {/* CTA */}
      <DarkSection>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-white mb-6">
            Want to Learn More?
          </h2>
          <p className="text-brand-off-white-body text-lg mb-8 leading-relaxed">
            Book a free trial class and meet your teacher personally — the best
            way to understand who we are is to experience a class.
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

      <Footer />
    </>
  );
}
