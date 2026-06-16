"use client";

import { useState } from "react";
import DarkSection from "../components/DarkSection";
import type { City } from "../cities/data";

interface FAQSectionProps {
  city: City;
}

export default function FAQSection({ city }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <DarkSection>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white mb-12 text-center">
        {city.faqHeading}
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {city.faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-brand-gold/20 pb-4"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left flex justify-between items-start gap-4 cursor-pointer group"
            >
              <h3 className="font-semibold text-brand-white text-lg group-hover:text-brand-gold transition-colors">
                {faq.question}
              </h3>
              <span className="text-brand-gold text-2xl flex-shrink-0">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-brand-off-white-body text-base leading-relaxed mt-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </DarkSection>
  );
}
