import React from 'react';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import ProductDetail from '@/components/product/ProductDetail';
import { getProductById, getReviewsForProduct, products } from '@/lib/data';

type Props = {
  params: { id: string }
}

// Generate static params untuk semua produk
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Menggunakan fungsi page async untuk menangani params
export default async function ProductPage(props: Props) {
  // Pastikan params sudah di-await
  const { params } = props;
  const { id: idString } = params;
  
  // Konversi id ke number dengan cara yang aman
  const id = parseInt(idString, 10);
  
  // Get product data
  const product = getProductById(id);
  
  // If product not found, show 404 page
  if (!product) {
    notFound();
  }
  
  // Get reviews for this product
  const reviews = getReviewsForProduct(id);
  
  return (
    <MainLayout>
      <ProductDetail product={product} reviews={reviews} />
    </MainLayout>
  );
}