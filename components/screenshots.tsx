import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, CreditCard, Tags, TrendingUp, Upload } from "lucide-react"

export function Screenshots() {
  const screenshots = [
    {
      src: "/images/dashboard.png",
      alt: "FundFlow Dashboard",
      title: "Dashboard Overview",
      description: "Get a complete view of your financial health with balance summaries, spending trends, and quick access to all features.",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600"
    },
    {
      src: "/images/transactions.png", 
      alt: "Transaction Management",
      title: "Transaction Management",
      description: "Browse, search, and manage all your transactions with powerful filtering and sorting capabilities.",
      icon: CreditCard,
      color: "from-green-500 to-emerald-600"
    },
    {
      src: "/images/categorization.png",
      alt: "Smart Categorization", 
      title: "Smart Categorization",
      description: "Automatically categorize transactions with intelligent vendor matching and customizable rules.",
      icon: Tags,
      color: "from-purple-500 to-violet-600"
    },
    {
      src: "/images/analytics.png",
      alt: "Financial Analytics",
      title: "Financial Analytics", 
      description: "Understand your spending patterns with beautiful charts and detailed financial insights.",
      icon: TrendingUp,
      color: "from-orange-500 to-red-600"
    },
    {
      src: "/images/upload.png",
      alt: "Easy Import",
      title: "Easy Import",
      description: "Import transactions from multiple banks and accounts with simple CSV upload and processing.",
      icon: Upload,
      color: "from-indigo-500 to-blue-600"
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            Screenshots
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">Explore FundFlow's Interface</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a closer look at each feature with these real screenshots
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-2">
              <div className="relative overflow-hidden">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={400}
                  height={240}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${screenshot.color} flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                  <screenshot.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {screenshot.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {screenshot.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}