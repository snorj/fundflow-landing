import Link from "next/link"
import { Card } from "@/components/ui/card"

export function SampleData() {
  const sampleFiles = [
    {
      href: "/sample-data/checking_account_usd.csv",
      title: "🏦 Checking Account (USD) - 48 transactions"
    },
    {
      href: "/sample-data/savings_account_usd.csv", 
      title: "💰 Savings Account (USD) - 37 transactions"
    },
    {
      href: "/sample-data/credit_card_eur.csv",
      title: "💳 Credit Card (EUR) - 39 transactions"
    },
    {
      href: "/sample-data/investment_account_eur.csv",
      title: "💼 Investment Account (EUR) - 43 transactions"
    }
  ]

  const features = [
    "✅ Realistic merchant transactions (groceries, restaurants, etc.)",
    "✅ Multiple account types (checking, savings, credit, investment)", 
    "✅ Multiple currencies (USD, EUR)",
    "✅ Various payment methods and transaction types"
  ]

  return (
    <section className="sample-data">
      <div className="container">
        <h2 className="section-title">Try It with Sample Data</h2>
        <p className="section-subtitle">Download realistic sample data to test FundFlow's features with Australian and European transactions</p>
        
        <div className="sample-downloads">
          <Card className="download-card">
            <h3 className="text-xl font-semibold mb-4 text-foreground">🏦 Realistic Sample Data</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              160+ realistic transactions across multiple accounts and currencies including groceries, restaurants, transport, and more
            </p>
            
            <div className="download-files">
              {sampleFiles.map((file, index) => (
                <Link
                  key={index}
                  href={file.href}
                  className="download-link"
                  download
                >
                  {file.title}
                </Link>
              ))}
            </div>
            
            <div className="sample-features">
              {features.map((feature, index) => (
                <div key={index} className="sample-feature">
                  {feature}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}