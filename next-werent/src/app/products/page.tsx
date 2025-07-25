import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductList from '@/components/product/ProductList';
import { products } from '@/lib/data';

export default function ProductsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">All Products</h1>
          <p className="text-gray-600">
            Browse our collection of premium products available for rent.
          </p>
        </div>
        
        {/* Filter and Sort Options (can be expanded later) */}
        <div className="flex flex-wrap justify-between items-center mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-700 mr-2">Filter by:</span>
            <select className="border rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="cameras">Cameras</option>
              <option value="audio">Audio</option>
            </select>
          </div>
          
          <div>
            <span className="text-gray-700 mr-2">Sort by:</span>
            <select className="border rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="newest">Newest</option>
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