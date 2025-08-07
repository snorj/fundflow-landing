import Image from "next/image"
import { Card } from "@/components/ui/card"

export function Screenshots() {
  const screenshots = [
    {
      src: "/images/dashboard.png",
      alt: "FundFlow Dashboard",
      title: "📊 Dashboard Overview",
      description: "Get a complete view of your financial health with balance summaries, spending trends, and quick access to all features."
    },
    {
      src: "/images/transactions.png", 
      alt: "Transaction Management",
      title: "💳 Transaction Management",
      description: "Browse, search, and manage all your transactions with powerful filtering and sorting capabilities."
    },
    {
      src: "/images/categorization.png",
      alt: "Smart Categorization", 
      title: "🏷️ Smart Categorization",
      description: "Automatically categorize transactions with intelligent vendor matching and customizable rules."
    },
    {
      src: "/images/analytics.png",
      alt: "Financial Analytics",
      title: "📈 Financial Analytics", 
      description: "Understand your spending patterns with beautiful charts and detailed financial insights."
    },
    {
      src: "/images/upload.png",
      alt: "Easy Import",
      title: "📤 Easy Import",
      description: "Import transactions from multiple banks and accounts with simple CSV upload and processing."
    }
  ]

  return (
    <section className="screenshots">
      <div className="container">
        <h2 className="section-title">Explore FundFlow's Interface</h2>
        <p className="section-subtitle">Take a closer look at each feature with these real screenshots</p>
        
        <div className="screenshots-grid">
          {screenshots.map((screenshot, index) => (
            <Card key={index} className="screenshot-card">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
                loading="lazy"
              />
              <div className="screenshot-info">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{screenshot.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{screenshot.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}