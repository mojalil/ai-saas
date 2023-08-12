import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/components/ModalProvider'
import ToasterProvider from '@/components/ToasterProvider'
import CrispProvider from '@/components/CrispProvider'
import { APP_NAME , APP_DESCRIPTION} from '@/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: 'https://ai-saas.vercel.app/ai-saas-logo-5.png',
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Add metadata to the <head> of the page
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      
        
        <ModalProvider />
        <ToasterProvider />
        <CrispProvider />
        {children}</body>
    </html>
    </ClerkProvider>
  )
}
