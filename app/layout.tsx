import type React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "./globals.css"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JeenLabs - Automation & Web Design Experts",
  description:
    "JeenLabs is a freelancing company specializing in automation, website development, and software development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} pt-16 md:pt-20`}>{children}</body>
    </html>
  )
}



import './globals.css'