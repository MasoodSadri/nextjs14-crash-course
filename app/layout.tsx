import type { Metadata } from 'next'

import localFont from 'next/font/local'

import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js 14',
  description: 'Next.js 14 Crash Course',
}

const vazirFont = localFont({
  src: '../public/font/Vazirmatn-Regular.woff2',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={` bg-slate-900 text-slate-200 ${vazirFont.className}`}>
        <main className='p-5'>{children}</main>
      </body>
    </html>
  )
}
