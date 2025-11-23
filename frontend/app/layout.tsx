import type React from "react"
import type { Metadata } from "next"
import { Amatic_SC, Geist, Geist_Mono, Solway } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _solway = Solway({ subsets: ["latin"], weight: ["400"] })
export const _amaticSc = Amatic_SC({ weight: ["400"] })

export const metadata: Metadata = {
  title: "Miniature Valley Crafts - Handmade DIY Miniature Building Supplies",
  description:
    "Discover handcrafted miniature building supplies from Miniature Valley Crafts. Create stunning medieval towns, fantasy weaponry, gunpla scenes, and intricate miniature worlds using accessible DIY materials.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
