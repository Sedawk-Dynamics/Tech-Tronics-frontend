import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://tech-tronics.ai"),
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
  title: {
    default: "Techtronics - Next-Gen Technology Solutions",
    template: "%s | Techtronics",
  },
  description:
    "Next-Gen Technology Startup delivering cutting-edge IT solutions including Web Development, AI, DevOps, UI/UX Design, and more.",
  keywords: [
    "IT Solutions",
    "Web Development",
    "Artificial Intelligence",
    "DevOps",
    "UI/UX Design",
    "Software Development",
    "Quality Assurance",
    "CMS Development",
    "Digital Transformation",
  ],
  authors: [{ name: "Techtronics International" }],
  creator: "Techtronics International",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tech-tronics.ai",
    siteName: "Techtronics",
    title: "Techtronics - Next-Gen Technology Solutions",
    description:
      "Next-Gen Technology Startup delivering cutting-edge IT solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
