"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function Hero() {
  const [textIndex, setTextIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const words = ["house", "castle", "town", "WORLD"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 600)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[700px] flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
      {/* Background image instead of SVG */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/miniature-valley-hero-background.jpg)",
        }}
      />

      {/* Content overlay with semi-transparent background */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="text-sm font-semibold text-accent tracking-widest uppercase drop-shadow-lg">
            From Our Valley to Your Imagination
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 text-balance leading-tight drop-shadow-lg">
          Miniature <span className="text-amber-300">Valley</span> Crafts
        </h1>

        <p className="text-lg md:text-xl text-white mb-12 text-balance max-w-2xl mx-auto leading-relaxed drop-shadow-md bg-white/10 rounded-lg px-6 py-4 backdrop-blur-sm">
          Building your dream{" "}
          <span
            key={textIndex}
            className={`inline-block text-amber-300 font-semibold w-24 ${
              isAnimating ? "animate-slide-up" : "animate-slide-up-in"
            }`}
          >
            {words[textIndex]}
          </span>{" "}
          one brick at a time
        </p>

        <p className="text-sm md:text-base text-white/90 mb-12 text-balance max-w-2xl mx-auto italic drop-shadow-md">
          In the palm of your hands
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#products"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity drop-shadow-md"
          >
            Explore Products
          </Link>
          <Link
            href="#inspiration"
            className="px-8 py-4 border-2 border-amber-300 text-white rounded-full font-semibold hover:bg-white/10 transition-colors drop-shadow-md bg-white/20 backdrop-blur-sm"
          >
            See Inspiration
          </Link>
        </div>
      </div>
    </section>
  )
}
