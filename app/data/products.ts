export type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string          // always *without* the leading “/”
  category: string
}

export type Category = { name: string; slug: string; color: string }

export const productsList: Product[] = [
  /* Hoodies -------------------------------------------------------------- */
  {
    id: 'product001',
    name: 'Lune Voilee Hoodie',
    price: 80,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente? Praesentium laboriosam eligendi, accusantium…',
    image: 'images/IMG_6502.jpg',   // ← uppercase JPG
    category: 'hoodies',
  },
  {
    id: 'product002',
    name: 'Lune Voilee Hoodie',
    price: 80,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente? Praesentium laboriosam eligendi, accusantium…',
    image: 'images/IMG_6502.jpg',
    category: 'hoodies',
  },
  {
    id: 'product003',
    name: 'Lune Voilee Hoodie',
    price: 80,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente? Praesentium laboriosam eligendi, accusantium…',
    image: 'images/IMG_6502.jpg',
    category: 'hoodies',
  },

  /* Shirts --------------------------------------------------------------- */
  {
    id: 'product004',
    name: 'Lune Voilee Shirt',
    price: 40,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente?...',
    image: 'images/IMG_6502.jpg',
    category: 'shirts',
  },
  {
    id: 'product005',
    name: 'Lune Voilee Shirt',
    price: 40,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente?...',
    image: 'images/IMG_6502.jpg',
    category: 'shirts',
  },
  {
    id: 'product006',
    name: 'Lune Voilee Shirt',
    price: 40,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente?...',
    image: 'images/IMG_6502.jpg',
    category: 'shirts',
  },
]


 export const categories: Category[] = [
 { name: 'Best Sellers', slug: 'best-sellers', color: '#FFFFFF' },
   { name: 'Hoodies',      slug: 'hoodies',      color: '#FFFFFF' },
   { name: 'Shirts',       slug: 'shirts',       color: '#FFFFFF' },
   { name: 'Pants',        slug: 'pants',        color: '#FFFFFF' },
 ]
