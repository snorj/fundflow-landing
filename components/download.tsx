"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Copy, Check, Terminal, Shield } from "lucide-react"

export function Download() {
  const [copied, setCopied] = useState(false)

  const copyInstallCommand = async () => {
    const command = 'curl -sSL https://fundflow.dev/install | bash'
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <section id="download" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            Get Started
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your preferred way to experience FundFlow
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="group relative overflow-hidden bg-gradient-to-br from-primary/5 to-chart-2/5 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="relative p-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Try Live Demo</h3>
                  <Badge variant="secondary" className="mt-1 text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                    Instant Access
                  </Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Experience FundFlow instantly with our live demo. Perfect for exploring features before self-hosting.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  No installation required
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  Explore all features
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  Sample data included
                </div>
              </div>
              
              <Button asChild size="lg" className="w-full group-hover:scale-105 transition-transform shadow-lg">
                <Link href="https://app.fundflow.dev" target="_blank">
                  <Rocket className="w-5 h-5 mr-2" />
                  Launch Demo
                </Link>
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Demo data resets daily • Don't use real financial information
              </p>
            </div>
          </Card>
          
          <Card className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
            <div className="relative p-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Self-Host</h3>
                  <Badge variant="secondary" className="mt-1 text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                    Recommended
                  </Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Install FundFlow locally for complete privacy and data control. One command setup with Docker.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  Complete data privacy
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  One-command installation
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  Works on all platforms
                </div>
              </div>
              
              <div className="bg-muted/50 border border-border rounded-lg overflow-hidden">
                <div className="flex items-center justify-between p-3 bg-muted/80 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Installation Command</span>
                  </div>
                  <Button 
                    onClick={copyInstallCommand}
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-1 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <code className="block p-4 text-sm font-mono text-foreground bg-card">
                  curl -sSL https://fundflow.dev/install | bash
                </code>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                Requires Docker • Works on Linux, macOS, Windows
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}