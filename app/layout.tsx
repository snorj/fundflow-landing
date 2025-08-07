import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: "--font-inter",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FundFlow - Take Control of Your Financial Life",
      description: "The open-source personal finance tool that keeps your data private and secure. Import transactions, categorise expenses, and gain insights into your spending.",
  openGraph: {
    title: "FundFlow - Privacy-First Personal Finance",
    description: "Open-source personal finance management with complete data privacy",
    type: "website",
    url: "https://fundflow.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
              <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      {/* <Analytics /> */}
    </body>
    </html>
  );
}
