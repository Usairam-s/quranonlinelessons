import DarkSection from "./components/DarkSection";
import LightSection from "./components/LightSection";
import QuoteBox from "./components/QuoteBox";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";
import { BookOpen, Type, Languages, BookMarked, Hand, UserRound, Clock, Users, Video, GraduationCap, ClipboardCheck, MessageCircle, AtSign, Repeat, Sparkles } from "lucide-react";


export default function Home() {
  const teachings = [
    {
      icon: BookOpen,
      title: "Quran Recitation",
      description: "Learn to recite with proper Tajweed and beautiful pronunciation",
      link: "/courses/tajweed"
    },
    {
      icon: Type,
      title: "Alif Ba Ta (Qaida)",
      description: "Master Arabic letters and reading rules — the essential foundation",
      link: "/courses/qaida"
    },
    {
      icon: Languages,
      title: "Quran Translation",
      description: "Understand the meaning behind every verse you recite",
      link: "/courses/tafseer"
    },
    {
      icon: Repeat,
      title: "Hifz",
      description: "Memorise the Holy Qur'an with structured revision and one-on-one guidance",
      link: "/courses/hifz"
    },
    {
      icon: BookMarked,
      title: "Kalima & Tawheed",
      description: "Learn and memorize the foundational declarations of faith",
      link: "/courses/kalima-tawheed"
    },
    {
      icon: Hand,
      title: "Masnoon Du'ain",
      description: "Daily life supplications for every occasion",
      link: "/courses/masnoon-duas"
    }
  ];

  const features = [
    {
      icon: UserRound,
      title: "Female Teachers Available",
      description: "Sisters & girls learn in a safe, comfortable environment"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Morning, evening & weekend classes to fit your schedule"
    },
    {
      icon: Users,
      title: "All Ages Welcome",
      description: "From young children to adults — beginner to advanced"
    },
    {
      icon: Video,
      title: "Live Classes via Zoom",
      description: "Learn from anywhere, with real-time interaction"
    },
    {
      icon: GraduationCap,
      title: "Qur'an with Tajweed",
      description: "Learn to recite beautifully and correctly"
    },
    {
      icon: ClipboardCheck,
      title: "Personalized Attention",
      description: "One-on-one classes — no group sessions"
    }
  ];

  return (
    <>
      <DarkSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl mx-auto lg:mx-0">
            <div className="inline-block mb-6 px-6 py-2 border-2 border-brand-gold rounded-full text-brand-gold text-sm font-medium uppercase tracking-wide">
              One-on-One Live Classes
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-brand-white leading-tight">
              Learn Quran Online
            </h1>

            <p className="text-brand-off-white-body text-lg sm:text-xl mb-8 leading-relaxed">
              One-on-one live classes with experienced teachers. Female teachers available.
              Flexible timings for UK & Australia. Beginner to advanced. First class completely free.
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

              <a
                href="https://instagram.com/quran_online_lessons"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border-2 border-brand-gold text-brand-white font-semibold rounded-full hover:border-brand-gold-bright hover:text-brand-gold-bright transition-colors text-center min-h-[44px] flex items-center justify-center"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

          <div className="w-full">
            <ImagePlaceholder
              label="Open Quran on wooden rehal stand, dark green background, warm lighting"
              aspectRatio="square"
            />
          </div>
        </div>
      </DarkSection>

      {/* Prominent USP Trust Bar */}
      {/* <section className="w-full bg-brand-dark-green-text text-brand-white border-b border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { icon: UserRound, text: "Female Teachers Available" },
              { icon: Clock, text: "Flexible Timings" },
              { icon: Users, text: "All Ages Welcome" },
              { icon: Sparkles, text: "First Class FREE" }
            ].map((usp, idx) => {
              const Icon = usp.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center py-8 px-4 text-center ${idx !== 0 ? "lg:border-l lg:border-brand-gold/20" : ""
                    }`}
                >
                  <Icon className="w-10 h-10 text-brand-gold mb-3" strokeWidth={1.5} />
                  <span className="font-display font-bold text-brand-white text-base sm:text-lg leading-snug">
                    {usp.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      <LightSection id="what-we-teach">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark-green-text mb-4">
            What We Teach
          </h2>
          <p className="text-brand-body-cream text-lg">
            A complete curriculum — from the basics to advanced study, taught with care and patience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teachings.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.link || "#"}
                className="group p-6 border border-brand-gold border-opacity-30 rounded-lg block hover:border-brand-gold hover:border-opacity-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-brand-cream/50"
              >
                <Icon className="w-10 h-10 text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-bold text-brand-dark-green-text mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-body-cream text-sm leading-relaxed">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </LightSection>

      <DarkSection className="py-10 sm:py-14 md:py-16 lg:py-20">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white mb-12 text-center">
          Our Features
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <Icon className="w-8 h-8 text-brand-gold flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-semibold text-brand-white text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-brand-off-white-body text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-1/3">
            <QuoteBox
              quote="The best of you are those who learn the Qur'an and teach it."
              source="— Sahih Bukhari"
            />
          </div>
        </div>
      </DarkSection>

      <LightSection className="text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark-green-text mb-4">
          Start Your Journey With the Qur&apos;an Today
        </h2>
        <p className="text-brand-body-cream text-lg mb-8 max-w-2xl mx-auto">
          Book a free trial class — no commitment, just a conversation about your learning goals.
        </p>

        <a
          href="https://wa.me/923021771373"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors min-h-[44px] mb-12"
        >
          Book Free Trial on WhatsApp
        </a>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <a
            href="https://wa.me/923021771373"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center gap-3 px-6 py-4 border-2 border-brand-gold rounded-lg hover:border-brand-gold-bright transition-colors min-h-[44px]"
          >
            <MessageCircle className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
            <div className="text-left">
              <div className="text-brand-dark-green-text font-medium">WhatsApp</div>
              <div className="text-brand-body-cream text-sm">+92 302 177 1373</div>
            </div>
          </a>

          <a
            href="https://instagram.com/quran_online_lessons"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center gap-3 px-6 py-4 border-2 border-brand-gold rounded-lg hover:border-brand-gold-bright transition-colors min-h-[44px]"
          >
            <AtSign className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
            <div className="text-left">
              <div className="text-brand-dark-green-text font-medium">Instagram</div>
              <div className="text-brand-body-cream text-sm">@quran_online_lessons</div>
            </div>
          </a>
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
  );
}
