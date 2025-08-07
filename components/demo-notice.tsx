import { TestTube } from "lucide-react"

export function DemoNotice() {
  return (
    <section className="demo-notice">
      <div className="container">
        <div className="notice-content">
          <TestTube className="notice-icon w-6 h-6 text-orange-500" />
          <span className="notice-text">
            Demo Mode: Don&apos;t use real financial data in the live demo. 
            For real use, download and self-host FundFlow.
          </span>
        </div>
      </div>
    </section>
  )
}