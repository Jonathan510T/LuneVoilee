export type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
}

// New Category type definition
export type Category = {
  name: string
  slug: string
  color: string
}

export const productsList: Product[] = [
  // Hoodies
  {
    id: 'product001',
    name: 'Lune Voilee Hoodie',
    price: 80,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente? Praesentium laboriosam eligendi, accusantium, iure id molestiae nobis repellendus, placeat ut at nulla voluptas quasi quisquam!',
    image: 'images/IMG_6502.jpg',
    category: 'hoodies',
  },
  {
    id: 'product002',
    name: 'Lune Voilee Hoodie',
    price: 80,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente? Praesentium laboriosam eligendi, accusantium, iure id molestiae nobis repellendus, placeat ut at nulla voluptas quasi quisquam!',
    image: 'images/IMG_6502.jpg',
    category: 'hoodies',
  },
  {
    id: 'product003',
    name: 'Lune Voilee Hoodie',
    price: 80,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente? Praesentium laboriosam eligendi, accusantium, iure id molestiae nobis repellendus, placeat ut at nulla voluptas quasi quisquam!',
    image: 'images/IMG_6502.jpg',
    category: 'hoodies',
  },

  //shirts
  {
    id: 'product004',
    name: 'Lune Voilee Shirt',
    price: 40,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente? Praesentium laboriosam eligendi, accusantium, iure id molestiae nobis repellendus, placeat ut at nulla voluptas quasi quisquam!',
    image: 'images/IMG_6502.jpg',
    category: 'shirts',
  },
  {
    id: 'product005',
    name: 'Lune Voilee Shirt',
    price: 40,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente? Praesentium laboriosam eligendi, accusantium, iure id molestiae nobis repellendus, placeat ut at nulla voluptas quasi quisquam!',
    image: 'images/IMG_6502.jpg',
    category: 'shirts',
  },
  {
    id: 'product006',
    name: 'Lune Voilee Shirt',
    price: 40,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos repellendus molestiae mollitia sapiente? Praesentium laboriosam eligendi, accusantium, iure id molestiae nobis repellendus, placeat ut at nulla voluptas quasi quisquam!',
    image: 'images/IMG_6502.jpg',
    category: 'shirts',
  },
]

// Add categories array
export const categories: Category[] = [
  {
    name: 'Hoodies',
    slug: 'hoodies',
    color: '#FFFFFF',
  },
  {
    name: 'Shirts',
    slug: 'shirts',
    color: '#FFFFFF',
  },
  {
    name: 'Pants',
    slug: 'pants',
    color: '#FFFFFF',
  },
]
