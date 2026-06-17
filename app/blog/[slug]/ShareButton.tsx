"use client"
import { useState } from "react"

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
      className="inline-flex items-center gap-2 px-5 py-2 border border-brand-gold/40 rounded-full text-brand-gold text-sm font-medium hover:border-brand-gold hover:bg-brand-gold/10 transition-all"
    >
      {copied ? (
        <>
          <span>✓</span>
          <span>Link Copied!</span>
        </>
      ) : (
        <>
          <span>↗</span>
          <span>Share</span>
        </>
      )}
    </button>
  )
}
