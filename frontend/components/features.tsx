"use client"

import { Hammer as Hammer2, Palette, Zap, Sword } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Hammer2,
      iconColor: "!text-orange-500",
      title: "DIY Materials",
      description:
        "Use everyday accessible materials—popsicle sticks, acrylics, cutters, folders, boards, and glue to create your masterpieces.",
    },
    {
      icon: Palette,
      iconColor: "!text-pink-500",
      title: "Endless Creativity",
      description:
        "From medieval buildings to fantasy, games, and anime weaponry, express your artistic vision with our premium handcrafted components or by reading our informative guides.",
    },
    {
      icon: Sword,
      iconColor: "!text-lime-500",
      title: "Fantasy Games Crafting",
      description:
        "Master the art of miniature weapon creation inspired by fantasy games and anime characters with  tools and guides.",
    },
    {
      icon: Zap,
      iconColor: "!text-yellow-500",
      title: "Quick Mastery",
      description:
        "Our products are designed for both beginners and experienced artisans. Start building today with our comprehensive guides.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-secondary/3">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Why Choose Miniature Valley?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe miniature crafting should be accessible, inspiring, and rewarding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-border hover:border-primary/50 transition-all shadow-lg bg-neutral-50"
              >
                <div className="mb-4 inline-block p-3 border rounded-lg bg-fd-muted shadow-md">
                  <Icon className={`w-6 h-6 text-primary ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
