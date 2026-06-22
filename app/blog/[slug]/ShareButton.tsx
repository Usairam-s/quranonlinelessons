"use client"
import { useState } from "react"
import { Share2, Check, Link } from "lucide-react"

export function ShareButton() {
  const [copied, setCopied] = useState(false)

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
        copied
          ? "bg-brand-gold text-brand-black scale-105"
          : "bg-brand-gold/10 border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/20 hover:border-brand-gold hover:scale-105"
      }`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span>Link Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          <span>Share This Article</span>
        </>
      )}
    </button>
  )
}
