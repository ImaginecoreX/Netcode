import type { Metadata } from 'next'
import { Roboto_Serif } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next';

const Serif = Roboto_Serif({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netcode',
  description: 'Crafting Digital Excellence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Serif.className}>
        {children}
        <SpeedInsights />
        </body>
    </html>
  )
}
