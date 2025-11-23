"use client"

export function Inspiration() {
  const gallery = [
    {
      title: "Medieval Castle Scene",
      image: "/miniature-medieval-castle-scene.jpg",
    },
    {
      title: "Fantasy Weapon Collection",
      image: "/fantasy-miniature-weapons-display.jpg",
    },
    {
      title: "Medieval Village",
      image: "/miniature-stone-village-buildings.jpg",
    }
  ]

  return (
    <section id="inspiration" className="py-20 md:py-32 px-4 bg-secondary/3">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Gallery of Creations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what's possible when artisans bring their vision to life with our materials.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden h-80 bg-muted">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-white/50 px-3 py-2 rounded-md text-lg font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Coming Soon
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-heading font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
