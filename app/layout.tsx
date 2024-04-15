import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Football booking",
    "Soccer reservations",
    "Joval app",
    "Team slot booking",
    "Individual football slots",
    "Seamless football reservations",
    "User-friendly sports app",
    "Football scheduling",
    "Easy football slot booking",
    "Joval platform",
    "Soccer time slots",
    "football reservations",
    "football reservations Abuja",
    "football reservations abj",
    "Team football reservations",
    "Online football booking",
    "Soccer pitch reservations",
    "Joval football app",
    "Team sports slots",
    "Individual player bookings",
    "Football slot availability",
    "User-friendly football scheduling",
    "Team game reservations",
    "Joval sports app",
    "Football field bookings",
    "Soccer slot reservations",
    "Team sports scheduling",
    "Individual football game slots",
    "Seamless soccer reservations",
    "Joval booking system",
    "Football pitch slots",
    "Team scheduling app",
    "Soccer match bookings",
    "User-friendly team reservations",
    "Joval football slot booking",
    "Team sports availability",
    "Individual soccer slots",
    "Easy football reservations",
    "Joval soccer app",
    "Football game slots",
    "Soccer team scheduling",
    "Team sports reservations",
    "Joval football scheduling",
    "User-friendly soccer app",
    "Football pitch reservations",
    "Soccer slot availability",
    "Team game slot booking",
    "Individual football time slots",
    "Seamless team sports scheduling",
    "Joval soccer slot bookings",
    "Soccer field reservations",
    "Easy team football slots",
    "User-friendly Joval app"
  ],
  authors: [
    {
      name: "Godwin Dan",
      url: "",
    },
  ],
  creator: "Godwin Dan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.url,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.url],
    creator: "@Godwin Dan",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
           <div >
              <div className=" justify-start items-start mt-6 ">
                {/* <SiteHeader /> */}
                {/* Changing the Site Header for the User Header */}
                <main >{children}</main>
              </div>
            </div>
          </ThemeProvider>
          </body>
    </html>
  );
}

// relative flex min-h-screen flex-col bg-background
// className={cn(
//   "min-h-screen bg-background font-sans antialiased",
//   inter.className
// )}
