import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sree Balasu - Portfolio",
  description: "Product Data Analyst + AI noodler",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
