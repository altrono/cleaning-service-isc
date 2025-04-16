"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Package Generator", path: "/package-generator" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/isc-logo.png" alt="ISC Services Logo" width={40} height={40} className="h-10 w-auto rounded-xl" />
          <span className="text-xl font-bold text-primary">ISC Services</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.path ? "text-primary" : "text-muted-foreground",
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.path ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 w-full mt-2">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
