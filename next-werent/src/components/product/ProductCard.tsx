import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import Card from '../ui/Card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="h-full transition-transform hover:scale-105 cursor-pointer">
        <div className="relative w-full h-48 mb-4 bg-gray-200 rounded-md overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">{product.description}</p>
      </Card>
    </Link>
  );
};

export default ProductCard;