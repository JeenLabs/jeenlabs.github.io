"use client"

import Link from "next/link"
import type React from "react"
import { useRouter } from "next/navigation"
import { smoothScrollToElement, smoothScrollToTop } from "@/utils/smoothScroll"

export interface NavLinkItem {
  name: string
  path: string
}

interface NavLinkProps {
  link: NavLinkItem
  className?: string
  onClick?: () => void
}

export const NavLink: React.FC<NavLinkProps> = ({ link, className = "", onClick }) => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link.path.startsWith("#")) {
      e.preventDefault()
      const targetId = link.path.substring(1)
      smoothScrollToElement(targetId, 50)

      if (onClick) onClick()
    } else if (!link.path.startsWith("/")) {
      // External link, let the default behavior handle it
      if (onClick) onClick()
    } else {
      // Internal link to another page
      e.preventDefault()
      if (onClick) onClick()

      // Navigate to the page and scroll to top with animation
      router.push(link.path)
      smoothScrollToTop()
    }
  }

  return (
    <Link
      href={link.path}
      className={`cursor-pointer text-sm hover:text-jeenlabs-red ${className}`}
      onClick={handleClick}
    >
      {link.name}
    </Link>
  )
}

