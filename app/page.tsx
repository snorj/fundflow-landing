import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VideoDemo } from "@/components/video-demo"
import { DemoNotice } from "@/components/demo-notice"
import { DemoGuide } from "@/components/demo-guide"
import { Screenshots } from "@/components/screenshots"
import { SupportedBanks } from "@/components/supported-banks"
import { Features } from "@/components/features"
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
        <DemoGuide />
        <Screenshots />
        <SupportedBanks />
        <Features />
        <SampleData />
        <Download />
      </main>
      <Footer />
    </div>
  );
}