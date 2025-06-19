'use client'
import { ReactNode }    from 'react'
import { CartProvider } from './context/CartContext'
import CartSidebar      from './components/CartSidebar'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartSidebar />
    </CartProvider>
  )
}
