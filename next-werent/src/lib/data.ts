import { Product, Review } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "/testimage.webp",
    description: "Experience premium sound quality with our latest wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding. Perfect for music lovers and professionals alike."
  },
  {
    id: 2,
    name: "Professional DSLR Camera",
    price: 1299.99,
    image: "/testimage.webp",
    description: "Capture stunning photos and videos with this professional-grade DSLR camera. Features a 24.2MP sensor, 4K video recording, and advanced autofocus system."
  },
  {
    id: 3,
    name: "Ultrabook Laptop",
    price: 1499.99,
    image: "/testimage.webp",
    description: "Powerful and lightweight ultrabook with the latest processor, 16GB RAM, 512GB SSD, and stunning 4K display. Perfect for professionals on the go."
  },
  {
    id: 4,
    name: "Smart Home Hub",
    price: 199.99,
    image: "/testimage.webp",
    description: "Control your entire smart home with this central hub. Compatible with all major smart home devices and voice assistants."
  }
];

export const reviews: Record<number, Review[]> = {
  1: [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Amazing sound quality! The noise cancellation works perfectly.",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Sarah Smith",
      rating: 4,
      comment: "Great headphones, very comfortable for long listening sessions.",
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Mike Johnson",
      rating: 5,
      comment: "Best purchase I've made this year. Highly recommended!",
      date: "2024-01-08"
    }
  ],
  2: [
    {
      id: 1,
      name: "Emily Chen",
      rating: 5,
      comment: "Excellent camera! The image quality is outstanding.",
      date: "2024-01-20"
    },
    {
      id: 2,
      name: "David Wilson",
      rating: 4,
      comment: "Great camera for both photography and videography.",
      date: "2024-01-18"
    }
  ],
  3: [
    {
      id: 1,
      name: "Alex Rodriguez",
      rating: 5,
      comment: "Super fast and lightweight. Battery life is amazing!",
      date: "2024-01-22"
    }
  ],
  4: [
    {
      id: 1,
      name: "Jessica Lee",
      rating: 4,
      comment: "Easy to set up and works with all my smart devices.",
      date: "2024-01-25"
    },
    {
      id: 2,
      name: "Robert Brown",
      rating: 3,
      comment: "Good product but the app could use some improvements.",
      date: "2024-01-23"
    }
  ]
};

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getReviewsForProduct(productId: number): Review[] {
  return reviews[productId] || [];
}