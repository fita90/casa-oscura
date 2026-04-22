'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-bar-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-bar-black/20 via-transparent to-bar-black" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-14 bg-bar-gold/50" />
          <span className="text-bar-gold/80 text-xs tracking-[0.4em] uppercase">Est. 2024</span>
          <div className="h-px w-14 bg-bar-gold/50" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(4rem,12vw,9rem)] text-bar-cream leading-[0.9] tracking-tight mb-6">
          Bar
          <br />
          Tovar
        </h1>

        {/* Tagline */}
        <p className="text-bar-cream/50 text-xs md:text-sm tracking-[0.35em] uppercase mt-6 mb-14">
          Where the night finds its flavor
        </p>

        {/* CTA */}
        <Link
          href="/menu"
          className="inline-block border border-bar-gold text-bar-gold text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-bar-gold hover:text-bar-black transition-all duration-400 group"
        >
          View the Menu
        </Link>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
        <span className="text-bar-cream text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-bar-cream/60 animate-[pulse_2s_ease-in-out_infinite]" />
      </div>
    </section>
  )
}
