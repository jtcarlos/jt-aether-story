import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

import PageLayout from "@components/PageLayout"

import "../styles/globals.css"

config.autoAddCss = false /* eslint-disable import/first */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Home | Aether UI",
  description: "A React.js UI component that utilizes TailwindCSS designed to streamline front-end development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  )
}
