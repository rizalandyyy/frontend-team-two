import { Product, Review } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Luxury Evening Gown",
    price: 299.99,
    image: "/testimage.webp",
    description: "Exquisite evening gown with intricate beadwork and sequin details. Elegant design with a flattering silhouette. Perfect for formal events, wedding receptions, or gala dinners."
  },
  {
    id: 2,
    name: "Premium Formal Suit",
    price: 199.99,
    image: "/testimage.webp",
    description: "Premium formal suit crafted from high-quality materials with impeccable tailoring. Available in classic black. Ideal for formal occasions, weddings, or important business presentations."
  },
  {
    id: 3,
    name: "Modern Kebaya",
    price: 249.99,
    image: "/testimage.webp",
    description: "Contemporary kebaya with traditional elements. Made from premium fabrics with beautiful embroidery details. Perfect for weddings, graduation ceremonies, or other formal events."
  },
  {
    id: 4,
    name: "Premium Batik",
    price: 149.99,
    image: "/testimage.webp",
    description: "Premium batik featuring exclusive patterns on high-quality silk. Comfortable to wear while maintaining an elegant appearance. Suitable for formal or semi-formal occasions."
  }
];

export const reviews: Record<number, Review[]> = {
  1: [
    {
      id: 1,
      name: "Anisa Wijaya",
      rating: 5,
      comment: "This gown is absolutely stunning! The quality of the fabric and the beadwork details are exquisite. I received countless compliments when I wore it to my friend's wedding.",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Dian Permata",
      rating: 4,
      comment: "An elegant gown that's comfortable to wear. The sizing was perfect and the delivery was right on schedule.",
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Ratna Sari",
      rating: 5,
      comment: "Renting this gown was absolutely worth it! The condition was like new and the price was very reasonable.",
      date: "2024-01-08"
    }
  ],
  2: [
    {
      id: 1,
      name: "Budi Santoso",
      rating: 5,
      comment: "Exceptional quality suit! It was perfect for my formal event. Many people asked where I rented such an impressive suit.",
      date: "2024-01-20"
    },
    {
      id: 2,
      name: "Andi Pratama",
      rating: 4,
      comment: "Beautiful suit with impeccable tailoring. The fit was perfect and the rental service was outstanding.",
      date: "2024-01-18"
    }
  ],
  3: [
    {
      id: 1,
      name: "Maya Indah",
      rating: 5,
      comment: "The modern kebaya is absolutely beautiful! The embroidery details are exquisite and the fabric was comfortable to wear all day. Perfect for my graduation ceremony.",
      date: "2024-01-22"
    }
  ],
  4: [
    {
      id: 1,
      name: "Jessica Lee",
      rating: 4,
      comment: "The batik ensemble is elegant and comfortable to wear. The pattern is unique and I received many compliments at my office event.",
      date: "2024-01-25"
    },
    {
      id: 2,
      name: "Robert Brown",
      rating: 5,
      comment: "The quality of this premium batik is extraordinary. The fabric is smooth and the design is captivating. I will definitely rent again.",
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