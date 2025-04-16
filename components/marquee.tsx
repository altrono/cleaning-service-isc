"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  speed?: number
  pauseOnHover?: boolean
  reverse?: boolean
  children: React.ReactNode
}

export default function Marquee({
  className,
  speed = 40,
  pauseOnHover = true,
  reverse = false,
  children,
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const progressRef = useRef<number>(0)

  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return

    const marqueeWidth = marqueeRef.current.offsetWidth
    const contentWidth = contentRef.current.offsetWidth

    // Clone content if it's shorter than the container
    if (contentWidth < marqueeWidth) {
      const cloneCount = Math.ceil(marqueeWidth / contentWidth) + 1
      for (let i = 0; i < cloneCount; i++) {
        const clone = contentRef.current.cloneNode(true) as HTMLDivElement
        marqueeRef.current.appendChild(clone)
      }
    }

    const animate = () => {
      if (!marqueeRef.current) return

      progressRef.current += speed / 1000

      // Reset when we've moved a full content width
      if (progressRef.current >= contentWidth) {
        progressRef.current = 0
      }

      // Apply the transform
      const translateX = reverse ? progressRef.current : -progressRef.current
      marqueeRef.current.style.transform = `translateX(${translateX}px)`

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [speed, reverse])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      cancelAnimationFrame(animationRef.current)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover && marqueeRef.current) {
      animationRef.current = requestAnimationFrame(function animate() {
        if (!marqueeRef.current) return

        progressRef.current += speed / 1000

        // Reset when we've moved a full content width
        if (contentRef.current && progressRef.current >= contentRef.current.offsetWidth) {
          progressRef.current = 0
        }

        // Apply the transform
        const translateX = reverse ? progressRef.current : -progressRef.current
        marqueeRef.current.style.transform = `translateX(${translateX}px)`

        animationRef.current = requestAnimationFrame(animate)
      })
    }
  }

  return (
    <div
      className={cn("overflow-hidden whitespace-nowrap", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={marqueeRef} className="inline-block">
        <div ref={contentRef} className="inline-block">
          {children}
        </div>
      </div>
    </div>
  )
}
