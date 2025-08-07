import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="hero-content">
            <h1 className="hero-title">
              Take Control of Your{" "}
              <span className="highlight">Financial Life</span>
            </h1>
            <p className="hero-subtitle">
              The open-source personal finance tool that keeps your data private and secure.
              Import your bank transactions, categorize expenses, and gain insights into your spending—all running locally on your computer.
            </p>
            
            <div className="hero-actions">
              <Button asChild size="lg" className="btn-primary">
                <Link href="https://app.fundflow.dev" target="_blank">
                  🚀 Try Live Demo
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="btn-secondary">
                <Link href="#download">
                  📥 Download & Self-Host
                </Link>
              </Button>
            </div>
            
            <div className="hero-features">
              <Badge variant="secondary" className="feature-badge">
                ✅ Privacy-first design
              </Badge>
              <Badge variant="secondary" className="feature-badge">
                ✅ No subscription fees
              </Badge>
              <Badge variant="secondary" className="feature-badge">
                ✅ Your data stays yours
              </Badge>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="app-preview">
              <Card className="app-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                  <div className="window-title">FundFlow Dashboard</div>
                </div>
                <div className="window-content">
                  <div className="mock-dashboard">
                    <div className="mock-header">Dashboard</div>
                    <div className="mock-stats">
                      <div className="stat-card">
                        <div className="stat-label">Total Balance</div>
                        <div className="stat-value">$4,250.00</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-label">This Month</div>
                        <div className="stat-value">-$1,840.50</div>
                      </div>
                    </div>
                    <div className="mock-chart"></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}