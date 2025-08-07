import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2 } from "lucide-react"

export function SupportedBanks() {
  const banks = [
    {
      src: "/bank-logos/Commonwealth Bank of Australia_idow7DUGyL_1.png",
      alt: "Commonwealth Bank",
      name: "Commonwealth Bank"
    },
    {
      src: "/bank-logos/ANZ_idgCH6o_Ov_1.png", 
      alt: "ANZ Bank",
      name: "ANZ Bank"
    },
    {
      src: "/bank-logos/National Australia Bank - NAB_idE9SSUJFU_1.png",
      alt: "NAB",
      name: "NAB"
    },
    {
      src: "/bank-logos/westpac.png",
      alt: "Westpac", 
      name: "Westpac"
    },
    {
      src: "/bank-logos/ing.png",
      alt: "ING",
      name: "ING"
    },
    {
      src: "/bank-logos/upBank.png",
      alt: "Up Bank",
      name: "Up Bank"
    },
    {
      src: "/bank-logos/revolut.png",
      alt: "Revolut",
      name: "Revolut"
    },
    {
      src: "/bank-logos/Wise_Logo_1.png",
      alt: "Wise", 
      name: "Wise"
    },
    {
      src: "/bank-logos/PayPal_Symbol_Alternative_1.png",
      alt: "PayPal",
      name: "PayPal"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container">
        <div className="text-center mb-16 space-y-4 scroll-animate">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 scroll-animate animate-delay-100">
            <Building2 className="w-4 h-4 mr-2" />
            Bank Support
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold scroll-animate animate-delay-200">Connect to Your Banks</h2>
          <div className="space-y-2 scroll-animate animate-delay-300">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Direct bank connections are coming soon. For now, easily import your transactions via CSV.
            </p>
            <Badge variant="outline" className="px-3 py-1 text-sm bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800">
              Coming Soon
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {banks.map((bank, index) => (
            <Card key={index} className={`group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm scroll-animate animate-delay-${(index + 4) * 100}`}>
              <div className="flex items-center justify-center h-16">
                <Image
                  src={bank.src}
                  alt={bank.alt}
                  width={80}
                  height={40}
                  className="max-h-12 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}