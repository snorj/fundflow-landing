import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, Shield, Download, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="hero-content space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                <Zap className="w-4 h-4 mr-2" />
                Open Source & Privacy-First
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Take Control of Your{" "}
                <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  Financial Life
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                The open-source personal finance tool that keeps your data private and secure.
                Import your bank transactions, categorize expenses, and gain insights into your spending—all running locally on your computer.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="https://app.fundflow.dev" target="_blank">
                  🚀 Try Live Demo
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
            
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800">
                <Shield className="w-4 h-4 mr-2" />
                Privacy-first design
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800">
                💰 No subscription fees
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800">
                🔐 Your data stays yours
              </Badge>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-chart-2/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              <div className="app-preview transform hover:scale-105 transition-transform duration-300">
                <Card className="app-window shadow-2xl border-2 border-border/50 backdrop-blur-sm bg-card/95">
                  <div className="window-header bg-gradient-to-r from-muted/80 to-muted/60 backdrop-blur-sm">
                    <div className="window-controls">
                      <span className="control red shadow-sm"></span>
                      <span className="control yellow shadow-sm"></span>
                      <span className="control green shadow-sm"></span>
                    </div>
                    <div className="window-title font-semibold">FundFlow Dashboard</div>
                  </div>
                  <div className="window-content p-6">
                    <div className="mock-dashboard space-y-6">
                      <div className="mock-header text-2xl font-bold text-foreground">Dashboard</div>
                      <div className="mock-stats grid grid-cols-2 gap-4">
                        <div className="stat-card bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800">
                          <div className="stat-label text-green-700 dark:text-green-300">Total Balance</div>
                          <div className="stat-value text-green-900 dark:text-green-100 font-bold">$4,250.00</div>
                        </div>
                        <div className="stat-card bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800">
                          <div className="stat-label text-red-700 dark:text-red-300">This Month</div>
                          <div className="stat-value text-red-900 dark:text-red-100 font-bold">-$1,840.50</div>
                        </div>
                      </div>
                      <div className="mock-chart bg-gradient-to-r from-primary/20 via-chart-2/20 to-chart-3/20 border border-border/50 shadow-inner"></div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}