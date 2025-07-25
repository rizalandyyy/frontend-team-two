import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductList from '@/components/product/ProductList';
import { products } from '@/lib/data';

export default function ProductsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Exclusive Collection</h1>
          <p className="text-gray-600">
            Discover our curated selection of premium attire, meticulously chosen for your special occasions.
          </p>
        </div>
        
        {/* Sort Options */}
        <div className="flex flex-wrap justify-end items-center mb-8 p-4 rounded-lg">
          <div>
            <span className="text-gray-700 mr-2">Sort by:</span>
            <select className="border rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="newest">Latest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
        
        {/* Products Grid */}
        <ProductList products={products} />
      </div>
    </MainLayout>
  );
}