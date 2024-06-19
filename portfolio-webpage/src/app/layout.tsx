import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Alexandre Tonin',
  description: 'Olá, bem-vindo ao meu portfólio! Me chamo Alexandre Tonin, desenvolvedor web fullstack, atualmente cursando Engenharia de Software. Explore meu trabalho e projetos.',
  icons: '/icon2.png'
}

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="pt-br" className='sr'>
      <head>
        <meta property="og:title" content="Alexandre Tonin | Desenvolvedor Web Fullstack" />
          <meta property='og:description' content='Olá, bem-vindo ao meu portfólio! Me chamo Alexandre Tonin, desenvolvedor web fullstack, atualmente cursando Engenharia de Software. Explore meu trabalho e projetos.'/>
          <meta property='og:url' content='https://alexandretonin.com/' />
          <meta property='og:type' content='website' />
      </head>
      <body className='bg-[#0d1117]'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
