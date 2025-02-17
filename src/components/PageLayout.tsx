"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Container, Navbar } from "aether-ui"

import Notification from "./Notification"

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
  const router = useRouter()

  return (
    <div className="page-layout h-full flex flex-col justify-between">
      <div>
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
        <Navbar
          logo={{
            width: 100,
            height: 100,
            imageAlt: "Aether UI Logo",
            imageSource: "./logo-long.png",
            onLogoClick: () => router.push("/"),
          }}
          isDrawerOpen={isNavbarOpen}
          setIsDrawerOpen={() => setIsNavbarOpen((isOpen) => !isOpen)}
          links={[
            { label: "Home", onClick: () => router.push("/") },
            { label: "Documentation", onClick: () => router.push("/documentation") },
            { label: "Changelog", onClick: () => router.push("/changelog") },
          ]}
        />
        <Container>{children}</Container>
      </div>
      {/* Footer goes here */}
    </div>
  )
}

export default PageLayout
