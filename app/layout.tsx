import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "./components/theme-provider"

export const metadata: Metadata = {
  title: "Hot Wheels Store",
  description: "Hot Wheels and toy car e-commerce store",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
