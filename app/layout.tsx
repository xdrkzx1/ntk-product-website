import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Noshtek — The AI Platform Built for Enterprise',
  description:
    'Automate complex operations, integrate your SAP ecosystem, and surface insights that move your business forward.',
  openGraph: {
    title: 'Noshtek — The AI Platform Built for Enterprise',
    description: 'The intelligence layer modern enterprises rely on.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${openSans.variable} bg-black text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
