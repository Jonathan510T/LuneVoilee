export type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string    
  imageback: string    
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
    image: '/images/DSC_2069.JPG',
    imageback: '/images/DSC_2073.JPG',   
    category: 'hoodies',
  },
  {
    id: 'product002',
    name: 'Lune Voilee Hoodie',
    price: 80,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente? Praesentium laboriosam eligendi, accusantium…',
    image: '/images/DSC_2069.JPG',
    imageback: '/images/DSC_2073.JPG',   
    category: 'hoodies',
  },
  {
    id: 'product003',
    name: 'Lune Voilee Hoodie',
    price: 80,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente? Praesentium laboriosam eligendi, accusantium…',
    image: '/images/DSC_2069.JPG',
    imageback: '/images/DSC_2073.JPG',   
    category: 'hoodies',
  },

  /* Shirts --------------------------------------------------------------- */
  {
    id: 'product004',
    name: 'Lune Voilee Shirt',
    price: 40,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente?...',
    image: '/images/DSC_2069.JPG',
    imageback: '/images/DSC_2073.JPG',   
    category: 'shirts',
  },
  {
    id: 'product005',
    name: 'Lune Voilee Shirt',
    price: 40,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente?...',
    image: '/images/DSC_2069.JPG',
    imageback: '/images/DSC_2073.JPG',   
    category: 'shirts',
  },
  {
    id: 'product006',
    name: 'Lune Voilee Shirt',
    price: 40,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente?...',
    image: '/images/DSC_2069.JPG',
    imageback: '/images/DSC_2073.JPG',   
    category: 'shirts',
  },
]


 export const categories: Category[] = [
 { name: 'Best Sellers', slug: 'best-sellers', color: '#FFFFFF' },
   { name: 'Hoodies',      slug: 'hoodies',      color: '#FFFFFF' },
   { name: 'Shirts',       slug: 'shirts',       color: '#FFFFFF' },
   { name: 'Pants',        slug: 'pants',        color: '#FFFFFF' },
 ]
