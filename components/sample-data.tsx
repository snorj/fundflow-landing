import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, PiggyBank, CreditCard, TrendingUp, Check, Download } from "lucide-react"

export function SampleData() {
  const sampleFiles = [
    {
      href: "/sample-data/checking_account_usd.csv",
      title: "Checking Account (USD) - 48 transactions",
      icon: Building
    },
    {
      href: "/sample-data/savings_account_usd.csv", 
      title: "Savings Account (USD) - 37 transactions",
      icon: PiggyBank
    },
    {
      href: "/sample-data/credit_card_eur.csv",
      title: "Credit Card (EUR) - 39 transactions",
      icon: CreditCard
    },
    {
      href: "/sample-data/investment_account_eur.csv",
      title: "Investment Account (EUR) - 43 transactions",
      icon: TrendingUp
    }
  ]

  const features = [
    "Realistic merchant transactions (groceries, restaurants, etc.)",
    "Multiple account types (checking, savings, credit, investment)", 
    "Multiple currencies (USD, EUR)",
    "Various payment methods and transaction types"
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 via-muted/30 to-background relative">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container">
        <div className="text-center mb-16 space-y-4 scroll-animate">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 scroll-animate animate-delay-100">
            <Download className="w-4 h-4 mr-2" />
            Sample Data
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold scroll-animate animate-delay-200">Try It with Sample Data</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed scroll-animate animate-delay-300">
            Download realistic sample data to test FundFlow&apos;s features with USD and European transactions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto scroll-animate-scale animate-delay-400">
          <Card className="p-8 space-y-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Realistic Sample Data</h3>
                <p className="text-muted-foreground">160+ realistic transactions across multiple accounts and currencies</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sampleFiles.map((file, index) => (
                <Link key={index} href={file.href} download className="group flex items-center space-x-3 p-4 bg-muted/50 hover:bg-muted/80 rounded-lg border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <file.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {file.title}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}