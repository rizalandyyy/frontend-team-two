import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import ProductList from '@/components/product/ProductList';
import { products } from '@/lib/data';

export default function Home() {
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className=" text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Elevate Your Style</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-800">
            Make a statement at your special events without the commitment. Experience our luxury attire collection, impeccably maintained for your most memorable occasions.
          </p>
          <Link href="/products">
            <button className="px-6 py-3 text-lg rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 bg-green-600 hover:bg-green-800 text-white focus:ring-green-500">
              Explore Collection
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Collection</h2>
            <Link href="/products" className="text-green-600 hover:text-green-700 font-medium">
              View All
            </Link>
          </div>
          <ProductList products={featuredProducts} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">The Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Select Your Statement Piece</h3>
              <p className="text-gray-600">
                Browse our exquisite collection of premium attire, from elegant gowns and formal suits to traditional ensembles crafted by renowned designers.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Customize Your Timeline</h3>
              <p className="text-gray-600">
                Choose your ideal rental duration and complete your reservation with our seamless, secure payment process.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Shine & Return</h3>
              <p className="text-gray-600">
                Receive your impeccably prepared garment, make an unforgettable impression at your event, then simply return it when your moment has passed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Renting?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who choose WeRent for their temporary product needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/auth/signup">
              <Button variant="primary" size="lg">
                Sign Up Now
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="secondary" size="lg">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </MainLayout>
  )
}
