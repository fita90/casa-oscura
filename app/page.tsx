import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import FeaturedDrinks from '@/components/FeaturedDrinks'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FeaturedDrinks />

      {/* Bar introduction */}
      <section className="bg-bar-dark py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Text */}
            <div>
              <div className="flex items-center gap-4 mb-7">
                <div className="h-px w-8 bg-bar-gold/50" />
                <span className="text-bar-gold text-xs tracking-[0.35em] uppercase">The Bar</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-bar-cream mb-7 leading-tight">
                A Bar Built<br />on Obsession
              </h2>
              <p className="text-bar-muted leading-relaxed mb-4">
                Bar Tovar began with a bottle of gin, a shaker purchased on impulse, and the slow-building
                suspicion that most bars were not making drinks well enough.
              </p>
              <p className="text-bar-muted leading-relaxed mb-10">
                A few years and several hundred drinks later — proper barware, good ice, a shelf of
                carefully chosen spirits. Eight drinks we are genuinely proud to serve.
              </p>
              <Link
                href="/about"
                className="text-bar-gold text-xs tracking-[0.25em] uppercase border-b border-bar-gold/40 pb-0.5 hover:border-bar-gold transition-colors duration-200"
              >
                Our Story →
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1543109740-4bdb38fda756?auto=format&fit=crop&w=700&q=80"
                  alt="The bar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-bar-black/15" />
              </div>
              {/* Offset decorative border */}
              <div className="absolute -bottom-5 -right-5 w-full h-full border border-bar-gold/15 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-bar-black py-20 lg:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="h-px w-14 bg-bar-gold/30 mx-auto mb-10" />
          <blockquote className="font-serif text-2xl md:text-3xl text-bar-cream/75 italic leading-relaxed mb-6">
            "The cocktail is a civilized institution. It is the drink of leisure,{' '}
            <br className="hidden md:block" />
            of conversation, of the well-spent evening."
          </blockquote>
          <p className="text-bar-muted text-xs tracking-[0.3em] uppercase">— David Embury</p>
          <div className="h-px w-14 bg-bar-gold/30 mx-auto mt-10" />
        </div>
      </section>

      {/* Menu CTA banner */}
      <section
        className="relative py-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-bar-black/75" />
        <div className="relative z-10">
          <p className="text-bar-gold text-xs tracking-[0.4em] uppercase mb-5">
            Fourteen drinks, all earned
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-bar-cream mb-8">
            Explore the Full Menu
          </h2>
          <Link
            href="/menu"
            className="inline-block border border-bar-gold text-bar-gold text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-bar-gold hover:text-bar-black transition-all duration-300"
          >
            View Menu
          </Link>
        </div>
      </section>
    </>
  )
}
