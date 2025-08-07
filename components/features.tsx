import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Brain, CreditCard, TrendingUp, Settings, Globe } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Complete Privacy",
      description: "Your financial data never leaves your computer. No cloud storage, no third-party access, complete control.",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-900/10",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      icon: Brain, 
      title: "Smart Categorization",
      description: "Automatic transaction categorization with intelligent vendor matching and customizable rules.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/10",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      icon: CreditCard,
      title: "Multi-Account Support", 
      description: "Import from multiple banks, credit cards, and accounts. Support for multiple currencies.",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/10",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      icon: TrendingUp,
      title: "Insightful Analytics",
      description: "Beautiful charts and reports to understand your spending patterns and financial trends.",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/10",
      borderColor: "border-orange-200 dark:border-orange-800"
    },
    {
      icon: Settings,
      title: "Easy Setup",
      description: "One-command installation with Docker. No complex configuration or technical expertise required.",
      color: "from-gray-500 to-slate-600",
      bgColor: "bg-gray-50 dark:bg-gray-900/10",
      borderColor: "border-gray-200 dark:border-gray-800"
    },
    {
      icon: Globe,
      title: "Open Source", 
      description: "Fully open source with transparent code. Contribute, customize, or audit as needed.",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/10",
      borderColor: "border-indigo-200 dark:border-indigo-800"
    }
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">Why Choose FundFlow?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built with privacy, simplicity, and powerful features in mind
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`group relative overflow-hidden ${feature.bgColor} ${feature.borderColor} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
              <div className="p-8 space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              {/* Hover effect gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}