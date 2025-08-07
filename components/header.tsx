"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

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
              src="/logos/logoDark.svg"
              alt="FundFlow Logo"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto block dark:hidden"
              priority
            />
            <Image
              src="/logos/logoLight.svg"
              alt="FundFlow Logo"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto hidden dark:block"
              priority
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
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
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