"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Amatic_SC } from 'next/font/google'

const amaticSc = Amatic_SC({
  subsets: ['latin'],
  weight: '700',
})

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("about")
  const [isUserClicking, setIsUserClicking] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isUserClicking) return

      const sections = ["about", "products", "inspiration", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveNav(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isUserClicking])

  const handleNavClick = (section: string) => {
    setActiveNav(section)
    setIsUserClicking(true)
    setTimeout(() => setIsUserClicking(false), 1000)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/miniature-valley-logo.png"
              alt="Miniature Valley Crafts"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <Link href="/" className={`text-4xl font-bold text-black ${amaticSc.className}`}>
              Miniature Valley Crafts
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              onClick={() => handleNavClick("about")}
              className={`relative text-foreground hover:text-primary transition-colors pb-1 group ${
                activeNav === "about" ? "text-primary" : ""
              }`}
            >
              About
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-opacity duration-200 ${activeNav === "about" ? "opacity-100" : "opacity-0"}`}
              ></span>
            </Link>
            <Link
              href="#products"
              onClick={() => handleNavClick("products")}
              className={`relative text-foreground hover:text-primary transition-colors pb-1 group ${
                activeNav === "products" ? "text-primary" : ""
              }`}
            >
              Products
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-opacity duration-200 ${activeNav === "products" ? "opacity-100" : "opacity-0"}`}
              ></span>
            </Link>
            <Link
              href="#inspiration"
              onClick={() => handleNavClick("inspiration")}
              className={`relative text-foreground hover:text-primary transition-colors pb-1 group ${
                activeNav === "inspiration" ? "text-primary" : ""
              }`}
            >
              Inspiration
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-opacity duration-200 ${activeNav === "inspiration" ? "opacity-100" : "opacity-0"}`}
              ></span>
            </Link>
            <Link
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className={`relative text-foreground hover:text-primary transition-colors pb-1 group ${
                activeNav === "contact" ? "text-primary" : ""
              }`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-opacity duration-200 ${activeNav === "contact" ? "opacity-100" : "opacity-0"}`}
              ></span>
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_SOCIALS_FACEBOOK || ""}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              Shop Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="#about" className="block px-4 py-2 text-foreground hover:text-primary">
              About
            </Link>
            <Link href="#products" className="block px-4 py-2 text-foreground hover:text-primary">
              Products
            </Link>
            <Link href="#inspiration" className="block px-4 py-2 text-foreground hover:text-primary">
              Inspiration
            </Link>
            <Link href="#contact" className="block px-4 py-2 text-foreground hover:text-primary">
              Contact
            </Link>
            <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity">
              Shop Now
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
