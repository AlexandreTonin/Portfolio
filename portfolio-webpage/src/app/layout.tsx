import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alexandre Tonin Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <head><link
        rel="icon"
        href="/icon2.png"
        type="image/<generated>"
        sizes="<generated>"
      /></head>
      <body className='bg-[#0d1117]'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
