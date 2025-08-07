import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export function VideoDemo() {

  return (
    <section className="py-24 bg-slate-50 dark:bg-muted/50 relative overflow-hidden">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Subtle background animations */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200/60 dark:bg-blue-500/20 rounded-full blur-xl animate-gentle-float"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-slate-200/70 dark:bg-slate-400/20 rounded-full blur-2xl animate-slow-drift"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-slate-300/60 dark:bg-slate-300/20 rounded-full blur-lg animate-subtle-pulse"></div>
      
      <div className="container">
        <div className="text-center mb-16 space-y-4 scroll-animate">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 scroll-animate animate-delay-100">
            <Play className="w-4 h-4 mr-2" />
            Video Demo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold scroll-animate animate-delay-200">See FundFlow in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed scroll-animate animate-delay-300">
            Watch a complete walkthrough of FundFlow's key features
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto scroll-animate-scale animate-delay-400">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-chart-2/20 rounded-full blur-2xl"></div>
          
          <div className="relative bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl overflow-hidden shadow-2xl">
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