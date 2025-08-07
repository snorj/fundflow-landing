import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo flex items-center gap-2 mb-4">
              <Image
                src="/logos/logoLight.svg"
                alt="FundFlow Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h3 className="text-xl font-semibold">FundFlow</h3>
            </div>
            <p>Open-source personal finance management with complete privacy.</p>
          </div>
          
          <div className="footer-section">
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="flex flex-col space-y-2">
              <Link 
                href="https://github.com/snorj/FundFlow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub Repository
              </Link>
              <Link 
                href="https://github.com/snorj/FundFlow/blob/main/README.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Documentation
              </Link>
              <Link 
                href="https://github.com/snorj/FundFlow/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Report Issues
              </Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="font-semibold mb-4">Community</h4>
            <div className="flex flex-col space-y-2">
              <Link 
                href="https://github.com/snorj/FundFlow/discussions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Discussions
              </Link>
              <Link 
                href="https://github.com/snorj/FundFlow/blob/main/CONTRIBUTING.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contributing
              </Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 FundFlow. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  )
}