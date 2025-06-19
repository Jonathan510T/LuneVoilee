// app/context/CartContext.tsx
'use client'

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react'

/* ---------- types ---------- */

export type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  color?: 'green' | 'white' | 'black'
  size?: string
}

export type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, color?: CartItem['color'], size?: string) => void
  updateQty:  (id: string, qty: number, color?: CartItem['color'], size?: string) => void
  clearCart: () => void
  total: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

/* ---------- context ---------- */

const CartContext = createContext<CartContextType | undefined>(undefined)

/* ---------- provider ---------- */

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  /* add / merge identical variant rows ----------------------------------- */
  const addItem = (item: CartItem) => {
    setItems(prev => {
      const match = prev.find(
        i =>
          i.id    === item.id &&
          i.color === item.color &&
          i.size  === item.size
      )
      if (match) {
        return prev.map(i =>
          i.id    === item.id &&
          i.color === item.color &&
          i.size  === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }
      return [...prev, item]
    })
  }

  /* remove exact variant -------------------------------------------------- */
  const removeItem = (
    id: string,
    color?: CartItem['color'],
    size?: string
  ) =>
    setItems(prev =>
      prev.filter(
        i => !(i.id === id && i.color === color && i.size === size)
      )
    )

  /* update quantity for exact variant ------------------------------------- */
  const updateQty = (
    id: string,
    qty: number,
    color?: CartItem['color'],
    size?: string
  ) =>
    setItems(prev =>
      prev.map(i =>
        i.id === id && i.color === color && i.size === size
          ? { ...i, quantity: qty }
          : i
      )
    )

  const clearCart = () => setItems([])
  const total     = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const openCart  = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,      // ← addItem is back!
        removeItem,
        updateQty,
        clearCart,
        total,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

/* ---------- hook ---------- */

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside a CartProvider')
  return ctx
}
