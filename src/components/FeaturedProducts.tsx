'use client';

import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Time Redefined',
    image: '/generated/product-smartwatch.jpg',
    price: '$299',
    rating: 4.9,
    review: 'Style meets performance',
    affiliateUrl: 'https://example.com/smartwatch?ref=elevate',
  },
  {
    id: 2,
    name: 'Pure Sound Experience',
    image: '/generated/product-headphones.jpg',
    price: '$349',
    rating: 4.8,
    review: 'Premium audio quality',
    affiliateUrl: 'https://example.com/headphones?ref=elevate',
  },
  {
    id: 3,
    name: 'Innovation in Hand',
    image: '/generated/product-phone.jpg',
    price: '$899',
    rating: 4.7,
    review: 'Cutting-edge technology',
    affiliateUrl: 'https://example.com/phone?ref=elevate',
  },
  {
    id: 4,
    name: 'Essential Elegance',
    image: '/generated/product-backpack.jpg',
    price: '$189',
    rating: 4.6,
    review: 'Urban professional essential',
    affiliateUrl: 'https://example.com/backpack?ref=elevate',
  },
];

export function FeaturedProducts() {
  return (
    <section id="products" className="max-w-[1200px] mx-auto px-6 sm:px-12 py-16">
      <h2 className="text-3xl font-bold text-[#1F2937] mb-12">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-[16px] p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
          >
            {/* Product Image */}
            <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Product Name */}
            <h3 className="text-lg font-semibold text-[#1F2937] mb-2">{product.name}</h3>

            {/* Review */}
            <p className="text-sm text-gray-600 mb-4 italic">&quot;{product.review}&quot;</p>

            {/* View Deal Button */}
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#3B82F6] text-white text-center py-3 rounded-lg text-sm font-medium uppercase tracking-wide hover:bg-[#2563EB] transition-all"
            >
              VIEW DEAL
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
