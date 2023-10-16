import '../../public/css/style.css'
import '../../public/css/mobile.css'
import '../../public/css/bootstrap.min.css'
import '../../public/css/all.min_1.css'
import '../../public/css/all.min_2.css'
import '../../public/css/aos.css'
import '../../public/css/all.min.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Security | Brand Boost Up',
  description: 'Boost your online security with us. We offer expert solutions to protect your digital assets, websites, and data. Stay secure and worry-free with SecurityBoostUp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
