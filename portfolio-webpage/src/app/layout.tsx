import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alexandre Tonin Portfolio',
  description: 'Olá, bem-vindo ao meu portfólio! Me chamo Alexandre Tonin, desenvolvedor front-end, atualmente cursando Engenharia de Software. Explore meu trabalho e projetos, onde transformo ideias em experiências digitais envolventes. Descubra como minha paixão pela programação e minha busca contínua por aprimoramento podem elevar a presença online de sua empresa. Vamos criar algo incrível juntos.',
  icons: '/icon2.png'
}

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en" className='sr'>
      <head></head>
      <body className='bg-[#0d1117]'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
