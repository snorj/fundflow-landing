import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export function VideoDemo() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            <Play className="w-4 h-4 mr-2" />
            Video Demo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">See FundFlow in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch a complete walkthrough of FundFlow's key features
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-chart-2/20 rounded-full blur-2xl"></div>
          
          <div className="relative bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe 
                style={{border:0}} 
                width="100%" 
                height="100%" 
                src="https://www.tella.tv/video/cmdnqbskc001z0bjm0ip1enxw/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0" 
                allowFullScreen 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}