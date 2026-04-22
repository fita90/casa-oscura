import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

const houseRules = [
  'Always use fresh citrus. Bottled juice is not allowed behind this bar.',
  'Stir what should be stirred. Shake what needs shaking. Know the difference.',
  'Ice is an ingredient. It dilutes, it chills, it shapes the drink.',
  'A cocktail is only as good as its weakest ingredient.',
  'Know the classic before you invent the variation.',
  'Never rush the first drink of the evening.',
]

const spirits = [
  { category: 'Gin', name: "Ford's Gin", note: 'Versatile and approachable — the house gin' },
  { category: 'Gin (Alt)', name: 'Beefeater', note: 'London Dry benchmark, always on the shelf' },
  { category: 'Rye', name: 'Rittenhouse Rye', note: 'High proof, essential for stirred drinks' },
  { category: 'Vodka', name: 'Reyka', note: 'Clean and cold — the only choice for a Vesper' },
  { category: 'Mezcal', name: '400 Conejos / Alipús', note: 'Espadín or Tobalá for the White Negroni' },
  { category: 'Vermouth', name: "Dolin Dry & Cinzano Rosso", note: 'The two vermouths always in the fridge' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-40 pb-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-bar-black/80" />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-bar-gold/40" />
            <span className="text-bar-gold text-xs tracking-[0.35em] uppercase">Our Story</span>
            <div className="h-px w-12 bg-bar-gold/40" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-bar-cream">About</h1>
        </div>
      </div>

      {/* Origin story — your exact words */}
      <section className="bg-bar-black py-20 lg:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-bar-cream mb-8">How It Started</h2>
          <div className="space-y-5 text-bar-muted leading-relaxed">
            <p>
              Bar Tovar did not open with fanfare. It began with a bottle of gin, a shaker purchased
              on impulse, and the slow-building suspicion that most bars were not making drinks well
              enough.
            </p>
            <p>
              The Negroni changed that. Three equal parts, stirred until cold, served correctly — the
              first cocktail that tasted exactly the way a cocktail should. Everything after it was an
              attempt to understand why, and to apply that standard to everything else.
            </p>
            <p>
              When the world closed during COVID, the experiment became deliberate. With nowhere else to
              go, Bar Tovar turned into a destination for a small group of regulars — part bar, part
              kitchen, part proving ground. Drinks were refined, ideas tested, standards raised.
            </p>
            <p>
              A few years and several hundred drinks later, it is still a small operation. Proper
              barware. Good ice. A shelf of carefully chosen spirits. Eight drinks we are genuinely
              proud to serve.
            </p>
          </div>
        </div>
      </section>

      {/* Inspiration + photos */}
      <section className="bg-bar-dark py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-bar-gold/50" />
                <span className="text-bar-gold text-xs tracking-[0.35em] uppercase">Inspiration</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-bar-cream mb-6 leading-tight">
                The Italian Aperitivo Tradition
              </h2>
              <div className="space-y-4 text-bar-muted leading-relaxed">
                <p>
                  Bar Tovar's style draws heavily from the Italian aperitivo tradition — the golden
                  hour ritual of bitter, beautiful drinks served before the meal, designed to slow the
                  evening down.
                </p>
                <p>
                  We admire the restraint of that tradition: a great drink needs three or four
                  ingredients at most. Complexity should come from quality, not quantity.
                </p>
                <p>
                  Beyond Italy, we look to the golden age of American cocktail culture and the
                  bartenders at Death & Co., Milk & Honey, and the Pegu Club — who proved that the
                  classics were worth protecting.
                </p>
              </div>
            </div>

            {/* Staggered images */}
            <div className="flex flex-col gap-4">
              <div className="aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1574631869744-23cc1789c0d5?auto=format&fit=crop&w=700&q=80"
                  alt="Cocktail detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video overflow-hidden ml-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=80"
                  alt="Bar detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* House Rules */}
      <section className="bg-bar-black py-20 lg:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8 bg-bar-gold/50" />
            <span className="text-bar-gold text-xs tracking-[0.35em] uppercase">House Rules</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-bar-cream mb-10">
            How We Do Things Here
          </h2>
          <ol className="space-y-6">
            {houseRules.map((rule, i) => (
              <li key={i} className="flex items-start gap-5 group">
                <span className="font-serif text-bar-gold text-lg shrink-0 w-6 mt-0.5 group-hover:text-bar-gold-light transition-colors">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <span className="text-bar-muted leading-relaxed group-hover:text-bar-cream/80 transition-colors">
                  {rule}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Favorite Spirits */}
      <section className="bg-bar-dark py-20 lg:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8 bg-bar-gold/50" />
            <span className="text-bar-gold text-xs tracking-[0.35em] uppercase">The Shelf</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-bar-cream mb-10">
            What We Actually Pour
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {spirits.map((spirit, i) => (
              <div
                key={i}
                className="border border-bar-gold/10 p-6 hover:border-bar-gold/30 transition-colors duration-300"
              >
                <span className="text-bar-gold text-[10px] tracking-[0.3em] uppercase">
                  {spirit.category}
                </span>
                <h3 className="font-serif text-lg text-bar-cream mt-1.5 mb-2">{spirit.name}</h3>
                <p className="text-bar-muted text-sm italic">{spirit.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
