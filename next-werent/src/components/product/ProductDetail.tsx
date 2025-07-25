'use client';

import React from 'react';
import Image from 'next/image';
import { Product, Review } from '@/types';
import Button from '../ui/Button';
import ReviewList from './ReviewList';

interface ProductDetailProps {
  product: Product;
  reviews: Review[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, reviews }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-green-600 mb-6">${product.price.toFixed(2)}</p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Rental Details</h2>
            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li>Available in multiple sizes (S, M, L, XL)</li>
              <li>Minimum rental period: 3 days</li>
              <li>Professional dry cleaning service included</li>
              <li>Complimentary delivery and collection service</li>
            </ul>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <Button variant="primary" className="w-full md:w-auto">
              Rent Now
            </Button>
            <Button variant="secondary" className="w-full md:w-auto">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
      
      {/* Reviews Section */}
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ProductDetail;