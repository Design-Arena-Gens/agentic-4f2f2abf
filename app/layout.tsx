import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShaktiFlow Motivator',
  description: 'Daily fitness and yogic inspiration by Sheryl',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
