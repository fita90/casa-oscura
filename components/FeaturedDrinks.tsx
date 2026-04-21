import Link from 'next/link'
import drinksData from '@/data/drinks.json'

export default function FeaturedDrinks() {
  const featured = drinksData.drinks.filter((d) => d.featured).slice(0, 3)

  return (
    <section className="bg-bar-black py-24 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-bar-gold/40" />
            <span className="text-bar-gold text-xs tracking-[0.35em] uppercase">The Classics</span>
            <div className="h-px w-10 bg-bar-gold/40" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bar-cream">
            Featured Drinks
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {featured.map((drink) => (
            <Link key={drink.id} href="/menu" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-bar-black/30 group-hover:bg-bar-black/10 transition-all duration-500" />
              </div>
              <div className="text-center">
                <span className="text-bar-gold text-xs tracking-[0.3em] uppercase">
                  {drink.category}
                </span>
                <h3 className="font-serif text-2xl text-bar-cream mt-1.5 mb-2">{drink.name}</h3>
                <p className="text-bar-muted text-sm leading-relaxed italic">{drink.tagline}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <Link
            href="/menu"
            className="inline-block border border-bar-gold/40 text-bar-gold text-xs tracking-[0.3em] uppercase px-10 py-4 hover:border-bar-gold hover:bg-bar-gold/5 transition-all duration-300"
          >
            See All Eight Drinks
          </Link>
        </div>
      </div>
    </section>
  )
}
