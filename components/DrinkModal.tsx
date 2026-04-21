'use client'

import { useEffect } from 'react'
import type { Drink } from '@/types'

interface Props {
  drink: Drink | null
  onClose: () => void
}

export default function DrinkModal({ drink, onClose }: Props) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = drink ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drink])

  // Escape key closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!drink) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal
      aria-label={drink.name}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bar-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="relative z-10 bg-bar-dark w-full max-w-5xl max-h-[92vh] overflow-y-auto border border-bar-gold/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center text-bar-muted hover:text-bar-cream transition-colors text-lg leading-none"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Image */}
          <div className="relative h-64 md:h-auto min-h-[280px] md:min-h-[560px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={drink.image}
              alt={drink.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-bar-dark/50 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-bar-dark via-transparent to-transparent md:hidden" />
          </div>

          {/* Details */}
          <div className="p-8 md:p-10 lg:p-12 overflow-y-auto">

            {/* Category + name */}
            <span className="text-bar-gold text-[10px] tracking-[0.35em] uppercase">
              {drink.category}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-bar-cream mt-2 mb-1">
              {drink.name}
            </h2>
            <p className="text-bar-muted text-sm italic mb-5">{drink.tagline}</p>
            <p className="text-bar-cream/65 text-sm leading-relaxed mb-8">{drink.description}</p>

            {/* Quick specs */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8 pb-8 border-b border-bar-gold/10">
              <div>
                <p className="text-bar-gold text-[10px] tracking-[0.3em] uppercase mb-1">Glassware</p>
                <p className="text-bar-cream/80 text-sm">{drink.glassware}</p>
              </div>
              <div>
                <p className="text-bar-gold text-[10px] tracking-[0.3em] uppercase mb-1">Garnish</p>
                <p className="text-bar-cream/80 text-sm">{drink.garnish}</p>
              </div>
              <div className="col-span-2">
                <p className="text-bar-gold text-[10px] tracking-[0.3em] uppercase mb-1">Tasting Notes</p>
                <p className="text-bar-cream/80 text-sm italic">{drink.tastingNotes}</p>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-bar-cream mb-4">Ingredients</h3>
              <ul className="space-y-2.5">
                {drink.ingredients.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-bar-cream/70">
                    <span className="text-bar-gold shrink-0 mt-px">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Method */}
            <div>
              <h3 className="font-serif text-lg text-bar-cream mb-4">Method</h3>
              <ol className="space-y-3.5">
                {drink.recipe.map((step, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-sm text-bar-cream/70">
                    <span className="font-serif text-bar-gold shrink-0 w-4 text-base leading-tight">
                      {i + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
