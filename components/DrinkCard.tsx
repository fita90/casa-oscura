import type { Drink } from '@/types'

interface Props {
  drink: Drink
  onClick: (drink: Drink) => void
}

export default function DrinkCard({ drink, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(drink)}
      className="group text-left w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-bar-gold"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden mb-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-bar-black/40 group-hover:bg-bar-black/15 transition-all duration-500" />

        {/* Hover label */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-bar-cream text-[10px] tracking-[0.3em] uppercase border-b border-bar-gold pb-0.5">
            View Recipe →
          </span>
        </div>
      </div>

      {/* Meta */}
      <div>
        <span className="text-bar-gold text-[10px] tracking-[0.3em] uppercase">
          {drink.category}
        </span>
        <h3 className="font-serif text-xl text-bar-cream mt-1.5 mb-2 group-hover:text-bar-gold/90 transition-colors duration-200">
          {drink.name}
        </h3>
        <p className="text-bar-muted text-sm leading-relaxed line-clamp-2">{drink.description}</p>
      </div>
    </button>
  )
}
