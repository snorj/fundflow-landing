"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, CreditCard, Tags, TrendingUp, Upload, ChevronLeft, ChevronRight } from "lucide-react"

export function Screenshots() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const screenshots = [
    {
      src: "/images/Dashboard.png",
      alt: "FundFlow Dashboard",
      title: "Dashboard Overview",
      description: "Get a complete view of your financial health with balance summaries, spending trends, and quick access to all features.",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      src: "/images/financial_visualisation.png", 
      alt: "Transaction Management",
      title: "Transaction Management",
      description: "Browse, search, and manage all your transactions with powerful filtering and sorting capabilities.",
      icon: CreditCard,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      src: "/images/categorization.png",
      alt: "Smart Categorisation",
      title: "Smart Categorisation",
      description: "Automatically categorise transactions with intelligent vendor matching and customisable rules.",
      icon: Tags,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      src: "/images/charts.png",
      alt: "Financial Analytics",
      title: "Financial Analytics", 
      description: "Understand your spending patterns with beautiful charts and detailed financial insights.",
      icon: TrendingUp,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      src: "/images/Upload.png",
      alt: "Easy Import",
      title: "Easy Import",
      description: "Import transactions from multiple banks and accounts with simple CSV upload and processing.",
      icon: Upload,
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }, [screenshots.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }, [screenshots.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 4000)
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, nextSlide])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const currentScreenshot = screenshots[currentSlide]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-background relative">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container">
        <div className="text-center mb-16 space-y-4 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground scroll-animate animate-delay-100">
            Explore FundFlow's Interface
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate animate-delay-200">
            See how each feature works with real screenshots
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main carousel container */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main slide display - Screenshot focused */}
            <div className="mb-12 scroll-animate-scale animate-delay-300">
              {/* Large Screenshot Display */}
              <div className="relative mb-8">
                <Card className="overflow-hidden shadow-xl border bg-card">
                  <div className="aspect-video relative">
                    <Image
                      src={currentScreenshot.src}
                      alt={currentScreenshot.alt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </Card>
                
                {/* Navigation arrows on sides */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border shadow-lg hover:bg-primary hover:text-primary-foreground z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border shadow-lg hover:bg-primary hover:text-primary-foreground z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Content below screenshot */}
              <div className="text-center space-y-4 max-w-3xl mx-auto scroll-animate animate-delay-400">
                <div className="flex items-center justify-center gap-2">
                  <currentScreenshot.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {currentSlide + 1} of {screenshots.length}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {currentScreenshot.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {currentScreenshot.description}
                </p>
              </div>
            </div>

            {/* Clean thumbnail navigation */}
            <div className="flex justify-center gap-2">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-md transition-all duration-300 ${
                    index === currentSlide 
                      ? 'ring-2 ring-primary scale-105' 
                      : 'hover:scale-102 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="w-20 h-12 relative">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Simple progress indicator */}
            <div className="mt-6 flex justify-center gap-2">
              {screenshots.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}