import { Card } from "@/components/ui/card"

export function DemoGuide() {
  const steps = [
    {
      icon: "1️⃣",
      title: "Manual Setup",
      description: "Start with 46 uncategorized transactions and teach FundFlow your initial spending habits with smart rules."
    },
    {
      icon: "2️⃣",
      title: "Complex Scenarios", 
      description: "Handle a multi-currency Europe trip, tracking expenses across countries and currencies seamlessly."
    },
    {
      icon: "3️⃣",
      title: "System Learning",
      description: "Watch the system learn, automatically handle transaction overlaps, and merge messy vendor names with one click."
    },
    {
      icon: "4️⃣", 
      title: "Automated Insight",
      description: "Achieve 95%+ auto-categorization, with smart rules correctly identifying spending context (e.g. Amazon for books vs. electronics)."
    }
  ]

  return (
    <section className="demo-guide">
      <div className="container">
        <h2 className="section-title">From Chaos to Clarity in 4 Steps</h2>
        <p className="section-subtitle">See FundFlow&apos;s progressive automation turn a messy transaction history into organized financial insight.</p>
        
        <div className="demo-flow-condensed">
          {steps.map((step, index) => (
            <Card key={index} className="flow-step-condensed">
              <div className="flow-step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}