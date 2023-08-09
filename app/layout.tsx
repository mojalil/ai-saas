import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/components/ModalProvider'
import ToasterProvider from '@/components/ToasterProvider'
import CrispProvider from '@/components/CrispProvider'
import { APP_NAME } from '@/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'AI platform for music, video, text and more...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
