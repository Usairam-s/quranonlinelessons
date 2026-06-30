import type { Metadata } from "next"
import Image from "next/image"
import DarkSection from "../components/DarkSection"
import LightSection from "../components/LightSection"
import Footer from "../components/Footer"
import { FAQItem } from "./FAQItem"

export const metadata: Metadata = {
  title: "Online Quran Classes for Kids | Live 1-on-1 | Quran Online Lessons",
  description: "Online Quran classes for kids of all ages. Live one-on-one classes via Zoom taught with patience and care. Female teachers available. Beginner to advanced. Book a free trial today.",
  openGraph: {
    title: "Online Quran Classes for Kids | Live 1-on-1 | Quran Online Lessons",
    description: "Online Quran classes for kids of all ages. Live one-on-one classes via Zoom taught with patience and care. Female teachers available. Beginner to advanced. Book a free trial today.",
    type: "website",
  },
}

export default function KidsQuranClassesPage() {
  return (
    <>
      {/* HERO */}
      <DarkSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="inline-block mb-6 px-6 py-2 border-2 border-brand-gold rounded-full text-brand-gold text-sm font-medium uppercase tracking-wide self-center lg:self-start">
              Classes for Kids
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-brand-white">
              Online Quran Classes for Kids
            </h1>
            <p className="text-brand-off-white-body text-lg sm:text-xl mb-8 leading-relaxed">
              Live one-on-one Quran classes for children of all ages — taught with patience, encouragement, and genuine care. Female teachers available. First class completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/923021771373"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors text-center min-h-[44px] flex items-center justify-center"
              >
                Book Free Trial on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden min-h-[320px] md:min-h-[420px] lg:min-h-[500px] h-full">
            <Image
              src="https://res.cloudinary.com/dmx22dkwy/image/upload/v1781651214/Important-Steps-Needed-To-Make-Your-Kids-Master-Quran_vrhhpl.jpg"
              alt="Child learning Quran online - Kids Quran Classes"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </DarkSection>

      {/* WHY ONLINE FOR KIDS */}
      <LightSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark-green-text mb-8">
            Why Online Quran Classes Work So Well for Children
          </h2>
          <p className="text-brand-body-cream leading-relaxed mb-6 text-base sm:text-lg">
            Children learn best when they feel safe, seen, and unhurried. In a typical group Quran class — whether at a local mosque or a madrasah — a teacher may have fifteen to twenty children in one session. Your child gets only a few minutes of direct attention, mistakes go uncorrected, and slower learners can fall behind without anyone noticing. One-on-one online classes change this completely. Every minute of every session is focused entirely on your child — their pace, their mistakes, their progress.
          </p>
          <p className="text-brand-body-cream leading-relaxed mb-6 text-base sm:text-lg">
            Learning via Zoom also removes the barriers that make consistent attendance difficult for busy families. No travel, no fixed location, no rushing from school to mosque and back. Your child sits down at home at the agreed time, the teacher joins, and learning happens — simply and consistently. That consistency is what actually builds a child's relationship with the Qur'an over time.
          </p>
          <p className="text-brand-body-cream leading-relaxed text-base sm:text-lg">
            Our teachers are experienced in working specifically with children — they know how to hold a young student's attention, how to make Arabic letters feel exciting rather than overwhelming, and how to celebrate small progress in a way that keeps children motivated. Many of our youngest students start with zero Arabic knowledge and are reading the Qur'an confidently within months.
          </p>
        </div>
      </LightSection>

      {/* WHAT WE OFFER */}
      <DarkSection>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-white mb-12 text-center">
          What We Offer for Kids
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Complete Beginners Welcome",
              description: "Never read Arabic before? Perfect. We start from the very first letter — Alif, Ba, Ta — and build from there with patience and encouragement."
            },
            {
              title: "Female Teachers Available",
              description: "Female teachers available for young girls. Many parents specifically request this and we always accommodate it."
            },
            {
              title: "Flexible Timings",
              description: "Classes scheduled around school hours, homework time, and weekend availability — whatever works for your family."
            },
            {
              title: "One-on-One Attention",
              description: "Every session is private and personal. Your child is never competing for attention with other students."
            },
            {
              title: "Full Curriculum for Kids",
              description: "Qaida, Tajweed, Hifz, Kalima, Masnoon Du'ain — age-appropriate lessons covering everything a child needs."
            },
            {
              title: "Free Trial Class",
              description: "Book a completely free first class. Let your child meet the teacher and experience online learning before you commit to anything."
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-brand-gold/20 bg-brand-dark-green-text/30">
              <h3 className="font-display text-lg font-bold text-brand-gold mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-off-white-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* FAQ */}
      <LightSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark-green-text mb-10 text-center">
            Questions From Parents About Kids Classes
          </h2>
          <div>
            <FAQItem
              question="What age can my child start Quran classes?"
              answer="Children can start as young as 4 or 5 years old — at this age we focus on simple letter recognition and short Surahs in a fun, gentle way. Most children begin formal Qaida reading between ages 5 and 7. There is no upper age limit — we also teach teenagers who are starting for the first time."
            />
            <FAQItem
              question="My child has a short attention span. Will online classes work?"
              answer="Our teachers are experienced in working with young children and know how to keep sessions engaging and varied. For younger children, we typically recommend shorter sessions (20 to 30 minutes) which are easier to focus through. Many parents are surprised at how well their child engages one-on-one compared to a group setting."
            />
            <FAQItem
              question="Can I sit with my child during the class?"
              answer="Absolutely — and for younger children, we encourage it, especially for the first few sessions. Having a parent present helps children feel secure and also means you can support your child's revision between lessons. As children grow more confident, most naturally prefer to have their own space with the teacher."
            />
            <FAQItem
              question="How long before my child can read the Qur'an?"
              answer="It varies by age, frequency of classes, and practice at home — but most children who attend regularly and practise between sessions are reading the Qur'an within 6 to 12 months of starting Qaida. Children who already know some Arabic letters often progress faster. Your child's teacher will give you regular updates on their progress."
            />
            <FAQItem
              question="What does my child need to join a class?"
              answer="Just a phone, tablet, or laptop with Zoom installed — most families already have this. A stable internet connection and a quiet corner at home is all that is needed. For Qaida students, the teacher will guide you on which book to get, usually available cheaply online or at a local Islamic bookshop."
            />
            <FAQItem
              question="How much do kids classes cost?"
              answer="The first class is completely free with no commitment. After that, pricing is kept simple and affordable for families. Message us on WhatsApp and we will discuss a schedule and fees that work for you."
            />
          </div>
        </div>
      </LightSection>

      {/* FINAL CTA */}
      <DarkSection>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-gold mb-6">
            Book a Free Class for Your Child Today
          </h2>
          <p className="text-brand-off-white-body text-lg mb-8 leading-relaxed">
            No commitment, no pressure — just a free first class so your child can meet their teacher and experience online Quran learning for themselves.
          </p>
          <a
            href="https://wa.me/923021771373"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors min-h-[44px]"
          >
            Book Free Trial on WhatsApp
          </a>
          <p className="mt-4 text-brand-off-white-body/60 text-sm">
            or follow us on Instagram @quran_online_lessons
          </p>
        </div>
      </DarkSection>

      <Footer />
    </>
  )
}
