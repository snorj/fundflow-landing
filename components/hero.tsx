"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Zap, BarChart3, CreditCard, Tags, TrendingUp, Upload } from "lucide-react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const screenshots = [
    {
      src: "/images/Dashboard.png",
      alt: "FundFlow Dashboard",
      title: "Dashboard Overview",
      description: "Complete view of your financial health with balance summaries and spending trends",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600"
    },
    {
      src: "/images/financial_visualisation.png", 
      alt: "Transaction Management",
      title: "Transaction Management",
      description: "Browse, search, and manage transactions with powerful filtering capabilities",
      icon: CreditCard,
      color: "from-green-500 to-emerald-600"
    },
    {
      src: "/images/categorization.png",
      alt: "Smart Categorisation",
      title: "Smart Categorisation",
      description: "Automatically categorise transactions with intelligent vendor matching",
      icon: Tags,
      color: "from-purple-500 to-violet-600"
    },
    {
      src: "/images/charts.png",
      alt: "Financial Analytics",
      title: "Financial Analytics", 
      description: "Understand spending patterns with beautiful charts and detailed insights",
      icon: TrendingUp,
      color: "from-orange-500 to-red-600"
    },
    {
      src: "/images/Upload.png",
      alt: "Easy Import",
      title: "Easy Import",
      description: "Import transactions from multiple banks with simple CSV upload",
      icon: Upload,
      color: "from-indigo-500 to-blue-600"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [screenshots.length])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 border-b border-border/50" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl animate-gentle-float"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-chart-2/20 dark:bg-chart-2/10 rounded-full blur-3xl animate-gentle-float-delayed"></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-chart-3/35 dark:bg-chart-3/20 rounded-full blur-2xl animate-slow-drift"></div>
      <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-chart-4/30 dark:bg-chart-4/15 rounded-full blur-2xl animate-slow-drift-delayed"></div>
      <div className="absolute top-2/3 left-1/6 w-16 h-16 bg-primary/35 dark:bg-primary/20 rounded-full blur-xl animate-subtle-pulse"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="hero-content space-y-8 scroll-animate-left">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Take Control of Your{" "}
                <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  Finances
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                The open-source personal finance tool that keeps your data private and secure.
                Import your bank transactions, categorise expenses, and gain insights into your spending, all running locally on your computer.
              </p>
            </div>
          </div>
          
          <div className="hero-visual scroll-animate-right">
            <div className="relative max-w-5xl mx-auto w-full">
              <div className="screenshot-carousel relative">
                <div className="relative overflow-hidden rounded-xl shadow-2xl bg-card border border-border">
                  <div className="relative aspect-video w-full">
                    {screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                    <div 
                      className="h-full bg-primary transition-all duration-4000 ease-linear"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>

                {/* Minimal dots indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-primary scale-125' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered buttons at bottom */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="group px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="https://app.fundflow.dev" target="_blank">
                <Zap className="w-5 h-5 mr-2" />
                Try Live Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-2 hover:bg-muted/50 transition-all duration-300">
              <Link href="#download">
                <Download className="w-5 h-5 mr-2" />
                Self-Host
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}