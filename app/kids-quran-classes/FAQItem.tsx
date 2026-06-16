"use client"
import { useState } from "react"

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="py-5 border-b border-brand-gold/20">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left gap-4"
      >
        <span className="font-semibold text-brand-dark-green-text text-base sm:text-lg">
          {question}
        </span>
        <span className="text-brand-gold text-2xl font-light flex-shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="mt-3 text-brand-body-cream leading-relaxed text-sm sm:text-base">
          {answer}
        </p>
      )}
    </div>
  )
}
