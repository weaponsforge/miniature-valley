"use client"

export function Products() {
  const products = [
    {
      name: "Hand-Crafted Brick Set",
      size: "Size: 1cm × 0.5cm",
      description: "Premium medieval stone-like cardboard bricks perfect for building authentic miniature structures.",
      image: "/hand-crafted-miniature-bricks.jpg",
    },
    {
      name: "Medieval Furniture Kit",
      size: "Scale 1:100",
      description: "Detailed wooden doors, windows, tables, chairs and furniture with colored finishes for your castle scenes.",
      image: "/miniature-medieval-door.jpg",
    },
    {
      name: "Fantasy Sword & Weapon Kit",
      size: "Scale 1:144",
      description:
        "Miniature weapons made of popsicle stick and guides for crafting fantasy swords, spears, and magical weapons with acrylics.",
      image: "/fantasy-sword-weapon-kit.jpg",
    },
    {
      name: "Inspirations",
      size: "References",
      description: "Visual layouts, inspirations and reviews from various games and anime.",
      image: "/textured-paper-miniature-crafting.jpg",
    },
    {
      name: "Handcrafting Guides",
      size: "Informational",
      description:
        "Specialized cutting tools designed for detailed miniature work, weaponry assembly, and fine details.",
      image: "/miniature-crafting-tools.jpg",
    }
  ]

  return (
<section id="products" className="py-20 md:py-32 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
        Our Products
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Carefully curated components for every step of your miniature journey.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, idx) => (
        <div
          key={idx}
          className="group rounded-2xl overflow-hidden bg-white border border-border hover:border-primary/50 transition-all hover:shadow-lg"
        >
          <div className="relative h-64 overflow-hidden bg-muted">
            {/* Image Container */}
            <div className="w-full h-full overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="bg-white/50 px-3 py-2 rounded-md text-lg font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6">
            <div className="mb-2">
              <span className="text-sm font-semibold text-accent">{product.size}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
            <button className="w-full py-2 px-4 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary/20 transition-colors">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  )
}
