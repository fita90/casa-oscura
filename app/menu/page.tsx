'use client'

import { useState, useMemo } from 'react'
import DrinkCard from '@/components/DrinkCard'
import DrinkModal from '@/components/DrinkModal'
import type { Drink } from '@/types'
import drinksData from '@/data/drinks.json'

const drinks = drinksData.drinks as Drink[]

export default function MenuPage() {
  const [selected, setSelected] = useState<Drink | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(drinks.map((d) => d.category)))],
    []
  )

  const filtered = useMemo(
    () =>
      activeCategory === 'All' ? drinks : drinks.filter((d) => d.category === activeCategory),
    [activeCategory]
  )

  return (
    <>
      {/* Page header */}
      <div className="bg-bar-dark pt-32 pb-16 px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-bar-gold/40" />
          <span className="text-bar-gold text-xs tracking-[0.35em] uppercase">Bar Tovar</span>
          <div className="h-px w-12 bg-bar-gold/40" />
        </div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-bar-cream mb-4">
          The Menu
        </h1>
        <p className="text-bar-muted text-sm max-w-sm mx-auto leading-relaxed mt-4">
          Fourteen drinks. Classics, variations, and one house original. Every recipe earned through repetition.
        </p>
      </div>

      {/* Category filter — sticky below navbar */}
      <div className="sticky top-[64px] lg:top-[80px] z-30 bg-bar-dark/95 backdrop-blur-sm border-t border-b border-bar-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-none py-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] tracking-[0.25em] uppercase whitespace-nowrap shrink-0 pb-0.5 transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'text-bar-gold border-b border-bar-gold'
                    : 'text-bar-muted hover:text-bar-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="bg-bar-black py-16 lg:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-12">
            {filtered.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} onClick={setSelected} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-bar-muted py-20 text-sm">No drinks in this category.</p>
          )}
        </div>
      </section>

      {/* Modal */}
      <DrinkModal drink={selected} onClose={() => setSelected(null)} />
    </>
  )
}
