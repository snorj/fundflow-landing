import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Plane, RotateCcw, TrendingUp, Check, Download } from "lucide-react"

export function SampleData() {
  const sampleFiles = [
    {
      href: "/sample-data/file1_aud_may_pretrip.csv",
      title: "May Pre-Trip (AUD) - 46 transactions",
      description: "Australian bank account - groceries, dining, transport, and trip preparation",
      icon: Building
    },
    {
      href: "/sample-data/file2_eur_europe_trip.csv", 
      title: "Europe Trip (EUR) - 41 transactions",
      description: "Wise EUR account - Amsterdam, Berlin, and Rome travel expenses",
      icon: Plane
    },
    {
      href: "/sample-data/file3_aud_overlap_return.csv",
      title: "Return & Overlap (AUD) - 35 transactions",
      description: "Back to Australia - overlapping dates show duplicate detection",
      icon: RotateCcw
    },
    {
      href: "/sample-data/file4_aud_august_optimized.csv",
      title: "August Optimised (AUD) - 37 transactions",
      description: "End of summer - demonstrates improved auto-categorisation",
      icon: TrendingUp
    }
  ]

  const features = [
    "Realistic Australian university student spending patterns",
    "Multi-currency setup: Australian bank + Wise EUR travel account", 
    "European travel expenses across Netherlands, Germany, and Italy",
    "Progressive vendor learning and smart duplicate detection"
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
            Realistic university student spending data from May to August, including a European summer trip
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto scroll-animate-scale animate-delay-400">
          <Card className="p-8 space-y-4 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Australian University Student Dataset</h3>
                <p className="text-muted-foreground">159 real-world transactions showing typical spending patterns, multi-currency travel, and progressive categorisation</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sampleFiles.map((file, index) => (
                <Link key={index} href={file.href} download className="group flex flex-col space-y-2 p-4 bg-muted/50 hover:bg-muted/80 rounded-lg border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <file.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {file.title}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-13 leading-relaxed">
                    {file.description}
                  </p>
                </Link>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-border">
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