"use client"

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-primary/95 via-primary to-accent/80 p-12 md:p-16 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
          Ready to Start Creating?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of artisans and hobbyists who are crafting amazing miniature worlds. Start with our curated
          starter kits or explore individual components.
        </p>

        <h3 className="text-2xl text-white font-bold font-heading">
          Challenge your creativity!
        </h3>

        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Use our <u>guides and tutorials</u> in building your world with limitless imagination.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-primary-foreground text-primary rounded-full font-semibold hover:shadow-lg transition-shadow">
            Shop Now
          </button>
          <button className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold hover:bg-white/10 transition-colors">
            Get Inspired
          </button>
        </div>
      </div>
    </section>
  )
}
