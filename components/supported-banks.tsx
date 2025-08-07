import Image from "next/image"
import { Card } from "@/components/ui/card"

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
    <section className="supported-banks">
      <div className="container">
        <h2 className="section-title">🏦 Connect to Your Banks (Coming Soon)</h2>
        <p className="section-subtitle">Direct bank connections are coming soon. For now, easily import your transactions via CSV.</p>
        
        <div className="banks-grid">
          {banks.map((bank, index) => (
            <Card key={index} className="bank-logo">
              <Image
                src={bank.src}
                alt={bank.alt}
                width={80}
                height={40}
                className="max-h-10 max-w-full object-contain opacity-80"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}