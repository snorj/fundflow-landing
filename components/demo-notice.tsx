import { TestTube } from "lucide-react"

export function DemoNotice() {
  return (
    <section className="demo-notice bg-orange-50/80 dark:bg-orange-950/50 border-y border-orange-200 dark:border-orange-800/50">
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