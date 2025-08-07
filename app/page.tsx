import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VideoDemo } from "@/components/video-demo"
import { DemoNotice } from "@/components/demo-notice"
import { Screenshots } from "@/components/screenshots"
import { Features } from "@/components/features"
import { SupportedBanks } from "@/components/supported-banks"
import { SampleData } from "@/components/sample-data"
import { Download } from "@/components/download"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <VideoDemo />
        <DemoNotice />
        <Features />
        <Screenshots />
        <SupportedBanks />
        <SampleData />
        <Download />
      </main>
      <Footer />
    </div>
  );
}