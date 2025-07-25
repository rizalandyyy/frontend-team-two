'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductList from '@/components/product/ProductList';
import CustomDropdown from '@/components/ui/CustomDropdown';
import { products } from '@/lib/data';

export default function ProductsPage() {
  const [sortOption, setSortOption] = useState('newest');
  
  const sortOptions = [
    { value: 'newest', label: 'Latest Arrivals' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popular', label: 'Most Popular' }
  ];

  const handleSortChange = (value: string) => {
    setSortOption(value);
    // Here you would implement the actual sorting logic
  };
  
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
        <div className="flex flex-wrap justify-end items-center mb-2 p-4 border-gray-100">
          <CustomDropdown 
            options={sortOptions} 
            defaultValue={sortOption}
            onChange={handleSortChange}
            label="Sort by:"
          />
        </div>
        
        {/* Products Grid */}
        <ProductList products={products} />
      </div>
    </MainLayout>
  );
}