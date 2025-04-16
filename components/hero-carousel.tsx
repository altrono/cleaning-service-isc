"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const carouselItems = [
  {
    id: 1,
    title: "Professional Home Cleaning",
    subtitle: "Experience spotless living spaces with our thorough cleaning services",
    image: "/isc-staff.png",
    alt: "Professional house cleaning service showing cleaners working in a living room",
  },
  {
    id: 2,
    title: "Commercial Office Cleaning",
    subtitle: "Create a clean, productive environment for your business",
    image: "/isc-staff.png",
    alt: "Office cleaning service with professional cleaners in corporate environment",
  },
  {
    id: 3,
    title: "Deep Cleaning & Sanitization",
    subtitle: "Thorough cleaning and sanitization for a healthier environment",
    image: "/isc-staff.png",
    alt: "Deep cleaning service with professional equipment and cleaning staff",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const nextSlide = () => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setDirection(index > currentSlide ? "right" : "left")
    setIsAnimating(true)
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 750) // Match this with the CSS transition duration

    return () => clearTimeout(timer)
  }, [currentSlide])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentSlide, isAnimating])

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 mix-blend-multiply z-10" />

      {/* Carousel Items */}
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 transition-all duration-700 ease-in-out",
            index === currentSlide
              ? "opacity-100 translate-x-0 z-0"
              : direction === "right"
                ? index === (currentSlide - 1 + carouselItems.length) % carouselItems.length
                  ? "opacity-0 -translate-x-full z-0"
                  : "opacity-0 translate-x-full z-0"
                : index === (currentSlide + 1) % carouselItems.length
                  ? "opacity-0 translate-x-full z-0"
                  : "opacity-0 -translate-x-full z-0",
          )}
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "transition-all duration-700 ease-in-out absolute",
                index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none",
              )}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-6">
                {item.title}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">{item.subtitle}</p>
              
            </div>
          ))}


          {/* Feature Badges
          <div className="flex flex-wrap gap-3 mt-20">
            <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" /> Professional Staff
            </div>
            <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" /> Eco-Friendly Products
            </div>
            <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" /> Satisfaction Guaranteed
            </div>
          </div> */}

          
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:inline-block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:inline-block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-slate-600">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
