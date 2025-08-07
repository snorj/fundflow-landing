"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

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
    <section id="download" className="download">
      <div className="container">
        <h2 className="section-title">Ready to Get Started?</h2>
        
        <div className="download-options">
          <Card className="option-card primary">
            <h3 className="text-xl font-semibold mb-4 text-foreground">🚀 Try Live Demo</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Experience FundFlow instantly with our live demo. Perfect for exploring features before self-hosting.
            </p>
            <Button asChild size="lg" className="mb-4">
              <Link href="https://app.fundflow.dev" target="_blank">
                Launch Demo
              </Link>
            </Button>
            <small className="text-muted-foreground text-sm">
              Demo data resets daily • Don't use real financial information
            </small>
          </Card>
          
          <Card className="option-card">
            <h3 className="text-xl font-semibold mb-4 text-foreground">📥 Self-Host (Recommended)</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Install FundFlow locally for complete privacy and data control. One command setup with Docker.
            </p>
            
            <div className="install-command">
              <code className="flex-1 p-4 bg-transparent text-foreground font-mono text-sm">
                curl -sSL https://fundflow.dev/install | bash
              </code>
              <Button 
                onClick={copyInstallCommand}
                className="copy-btn rounded-l-none"
                size="sm"
              >
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            
            <small className="text-muted-foreground text-sm">
              Requires Docker • Works on Linux, macOS, Windows
            </small>
          </Card>
        </div>
      </div>
    </section>
  )
}