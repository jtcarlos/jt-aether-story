import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Notification from "@components/Notification"

import "../styles/globals.css"
import Link from "next/link"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
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
        <Notification
          message={
            <p>
              Checkout my other works and projects by visiting my website at{" "}
              <Link className="underline" href="https://www.jtcarlos.com" target="_blank">
                www.jtcarlos.com
              </Link>
              .
            </p>
          }
          callToAction="See GitHub Repository"
        />
        {children}
      </body>
    </html>
  )
}
