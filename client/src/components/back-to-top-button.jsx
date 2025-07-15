"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const toggleVisibility = useCallback(() => {
    const scrolled = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const progress = (scrolled / scrollHeight) * 100 || 0

    setIsVisible(scrolled > 300) // Show button after scrolling 300px
    setScrollProgress(progress)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [toggleVisibility])

  // SVG circle properties
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg 
      hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 
      focus:outline-none focus:ring-4 focus:ring-violet-300 border-2 border-violet-400
        flex items-center justify-center w-12 h-12" 
      aria-label="Scroll to top"
    >
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 40"> 
        <circle
          className="text-white opacity-30"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="20"
          cy="20"
        />
        
        <circle
          className="text-white"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="20"
          cy="20"
          style={{ transition: "stroke-dashoffset 0.3s ease-out" }}
        />
      </svg>
      
      <ArrowUp className="w-6 h-6 z-10" />
    </button>
  )
}
