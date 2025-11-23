"use client"

import Link from "next/link"
import { Facebook, Youtube, Mail } from "lucide-react"

const products = [
  {
    label: "Bricks & Blocks",
    url: "#"
  },
  {
    label: "Furniture Kit",
    url: "#"
  },
  {
    label: "Weapon Kit",
    url: "#"
  },
]

const resources = [
  {
    label: "Tutorials",
    url: "#"
  },
  {
    label: "Gallery",
    url: "#"
  },
  {
    label: "FAQ",
    url: "#"
  }
]

const connect = [
  {
    icon: Facebook,
    url: process.env.NEXT_PUBLIC_SOCIALS_FACEBOOK || "#"
  },
  {
    icon: Youtube,
    url: "#"
  },
  {
    icon: Mail,
    url: "#"
  }
]

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-foreground-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">Miniature Valley Crafts (MVC)</h3>
            <p className="text-foreground-foreground/80">
              Crafting miniature worlds with passion, one brick at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Products</h4>
            <ul className="space-y-2 text-foreground-foreground/80">
              {products.map((product, id) => (
                <li key={id}>
                  <Link href="#" className="text-white hover:text-primary hover:underline transition-colors">
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-foreground-foreground/80">
              {resources.map((resource, id) => (
                <li key={id}>
                  <Link href="#" className="text-white hover:text-primary hover:underline transition-colors">
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              {connect.map((item, id) => (
                <Link
                  key={id}
                  href={item.url}
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-white/70 text-sm">
            © 2025 Miniature Valley Crafts (MVC). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
