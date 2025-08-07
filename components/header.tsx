"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  const navigation = [
    { name: "Features", href: "#features" },
    { name: "Download", href: "#download" },
    { name: "GitHub", href: "https://github.com/snorj/FundFlow", external: true },
  ]

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <Image
              src={theme === "dark" ? "/logos/logoLight.svg" : "/logos/logoLight.svg"}
              alt="FundFlow Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex nav-links">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link"
                {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                      {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}