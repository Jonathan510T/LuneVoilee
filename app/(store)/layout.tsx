// app/(store)/layout.tsx
'use client'

import { ReactNode }  from 'react'
import Providers       from '../providers'
import Navigation      from '../components/Navigation'
import Footer          from '../components/Footer'

interface StoreLayoutProps {
  children: ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <Providers>
      <Navigation />
      <main className="pt-16"> 
        {/* pt-16 to push content below the fixed nav; adjust as needed */}
        {children}
      </main>
      <Footer />
    </Providers>
  )
}
