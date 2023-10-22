import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "ProSafeArabia: Your Trusted Safety Solutions Provider",
  description: 'At ProSafeArabia, your safety is our priority. We are dedicated to delivering top-tier safety solutions tailored to your needs. Our team is working diligently to introduce you to a range of high-quality safety and personal protective equipment. We can not wait to share our latest innovations with you, ensuring your peace of mind in every situation. Stay tuned for a safer tomorrow with ProSafeArabia.',
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
