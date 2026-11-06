import Link from "next/link";
import Image from "next/image";
import { Award, BookOpen, CheckCircle2, ShieldCheck, MessageCircle } from "lucide-react";
import DarkSection from "./DarkSection";

interface TeacherAuthoritySectionProps {
  city?: string;
}

export default function TeacherAuthoritySection({ city }: TeacherAuthoritySectionProps) {
  const whatsappUrl = `https://wa.me/923021771373?text=${encodeURIComponent(
    city
      ? `Assalamu Alaikum, I would like to book a free trial Quran class for my child in ${city}.`
      : "Assalamu Alaikum, I would like to book a free trial Quran class."
  )}`;

  return (
    <DarkSection className="border-t border-b border-brand-gold/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-brand-gold/40 rounded-full text-brand-gold text-xs sm:text-sm font-medium uppercase tracking-wider mb-4 bg-brand-gold/10">
            <Award className="w-4 h-4 text-brand-gold" />
            <span>Experienced Islamic Scholarship</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white mb-4 leading-tight">
            Meet Your Head Teacher: <span className="text-brand-gold">Khateeb Saleem Almas</span>
          </h2>
          <p className="text-brand-off-white-body text-base sm:text-lg leading-relaxed">
            Over 30 years of dedicated service as a Khateeb, Islamic educator, and mentor—guiding families and children toward authentic Qur&apos;an recitation and character.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Teacher Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl border-2 border-brand-gold/60 bg-gradient-to-b from-brand-gold/15 via-brand-dark-green to-black/60 p-3 shadow-2xl overflow-hidden group">
              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-brand-dark-green shadow-inner">
                <Image
                  src="/khateeb-saleem-almas.jpeg"
                  alt="Khateeb Saleem Almas - Head of Islamic Studies & Tajweed at Quran Online Lessons"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Clean Label Under Photo */}
              <div className="pt-4 pb-2 text-center">
                <p className="font-display text-xl sm:text-2xl font-bold text-brand-white">
                  Khateeb Saleem Almas
                </p>
                <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mt-1">
                  Head Teacher · 30+ Years Khateeb
                </p>
              </div>
            </div>

            {/* Quick Badges Under Photo */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-4 text-xs">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-brand-gold/20 text-brand-white">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                <span>30+ Years Khateeb</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-brand-gold/20 text-brand-white">
                <BookOpen className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Authentic Tajweed</span>
              </div>
            </div>
          </div>

          {/* Right: Bio, Credentials & Teaching Philosophy */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="space-y-5 text-brand-off-white-body text-base sm:text-lg leading-relaxed">
              <p>
                Unlike large commercial directories that outsource classes to unvetted freelancers,{" "}
                <span className="text-brand-white font-semibold">Quran Online Lessons</span> was founded under the direct spiritual and academic guidance of{" "}
                <span className="text-brand-gold font-semibold">Khateeb Saleem Almas</span>.
              </p>

              <p>
                With more than three decades serving as a respected Khateeb and Islamic educator, he has guided generations of students—from young children sounding out their first Arabic letters in Noorani Qaida to adults perfecting advanced Tajweed rules and memorizing the Holy Qur&apos;an (Hifz).
              </p>

              {/* Quote Box */}
              <div className="p-6 rounded-2xl bg-brand-gold/10 border-l-4 border-brand-gold my-6">
                <p className="italic text-brand-white text-base sm:text-lg mb-3">
                  &ldquo;Teaching the Qur&apos;an is not about rushing through pages or mechanical reading. It is about planting the love of Allah&apos;s Book in young hearts, perfecting pronunciation (Makharij), and instilling Islamic adab (manners) that remain with a child for life.&rdquo;
                </p>
                <p className="text-brand-gold text-sm font-semibold tracking-wide">
                  — Khateeb Saleem Almas
                </p>
              </div>

              {/* Key Pillars */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-brand-white">
                    <strong className="text-brand-gold">1-on-1 Personalized Attention:</strong> Every student receives private, live instruction tailored specifically to their learning speed and personality.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-brand-white">
                    <strong className="text-brand-gold">Qualified Female Teachers Available:</strong> We provide dedicated, experienced female teachers for sisters and young girls in a safe, comfortable setting.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-brand-white">
                    <strong className="text-brand-gold">Designed for Western Schedules:</strong> Flexible evening and weekend class slots built to fit smoothly around UK, Australian, and international school timetables.
                  </p>
                </div>
              </div>

              {/* Quick Action Call to Action */}
              <div className="pt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-all text-center min-h-[48px] inline-flex items-center justify-center gap-2.5 shadow-lg hover:shadow-brand-gold/30 hover:scale-[1.02] text-base"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Let&apos;s Talk Now on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </DarkSection>
  );
}
