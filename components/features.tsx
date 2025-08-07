import { Card } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: "🔒",
      title: "Complete Privacy",
      description: "Your financial data never leaves your computer. No cloud storage, no third-party access, complete control."
    },
    {
      icon: "📊", 
      title: "Smart Categorization",
      description: "Automatic transaction categorization with intelligent vendor matching and customizable rules."
    },
    {
      icon: "💳",
      title: "Multi-Account Support", 
      description: "Import from multiple banks, credit cards, and accounts. Support for multiple currencies."
    },
    {
      icon: "📈",
      title: "Insightful Analytics",
      description: "Beautiful charts and reports to understand your spending patterns and financial trends."
    },
    {
      icon: "⚙️",
      title: "Easy Setup",
      description: "One-command installation with Docker. No complex configuration or technical expertise required."
    },
    {
      icon: "🌐",
      title: "Open Source", 
      description: "Fully open source with transparent code. Contribute, customize, or audit as needed."
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Why Choose FundFlow?</h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card">
              <div className="feature-icon text-4xl mb-4 block">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}