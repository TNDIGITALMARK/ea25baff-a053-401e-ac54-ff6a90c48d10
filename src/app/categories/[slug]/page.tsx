import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Filter, Star } from 'lucide-react';

export const dynamic = 'force-dynamic';

const categoryData: Record<string, any> = {
  tech: {
    title: 'TECH ESSENTIALS',
    description: 'Cutting-edge technology products that enhance your digital lifestyle',
    products: [
      {
        id: 1,
        name: 'Minimalist Smartwatch',
        image: '/generated/product-smartwatch.jpg',
        price: '$299',
        rating: 4.9,
        review: 'Style meets performance in every detail',
        affiliateUrl: 'https://example.com/smartwatch?ref=elevate&utm_source=lifestyle_hub',
      },
      {
        id: 2,
        name: 'Premium Headphones',
        image: '/generated/product-headphones.jpg',
        price: '$349',
        rating: 4.8,
        review: 'Pure sound experience with noise cancellation',
        affiliateUrl: 'https://example.com/headphones?ref=elevate&utm_source=lifestyle_hub',
      },
      {
        id: 3,
        name: 'Innovation Smartphone',
        image: '/generated/product-phone.jpg',
        price: '$899',
        rating: 4.7,
        review: 'Cutting-edge technology at your fingertips',
        affiliateUrl: 'https://example.com/phone?ref=elevate&utm_source=lifestyle_hub',
      },
      {
        id: 4,
        name: 'Wireless Charging Stand',
        image: '/generated/product-smartwatch.jpg',
        price: '$89',
        rating: 4.8,
        review: 'Sleek and functional design',
        affiliateUrl: 'https://example.com/charger?ref=elevate&utm_source=lifestyle_hub',
      },
      {
        id: 5,
        name: 'Smart Home Hub',
        image: '/generated/product-phone.jpg',
        price: '$199',
        rating: 4.6,
        review: 'Control your home with intelligence',
        affiliateUrl: 'https://example.com/smarthub?ref=elevate&utm_source=lifestyle_hub',
      },
      {
        id: 6,
        name: 'Premium Earbuds Pro',
        image: '/generated/product-headphones.jpg',
        price: '$249',
        rating: 4.7,
        review: 'Crystal clear audio in compact form',
        affiliateUrl: 'https://example.com/earbuds?ref=elevate&utm_source=lifestyle_hub',
      },
    ],
  },
  fashion: {
    title: 'MODERN FASHION',
    description: 'Contemporary fashion pieces that blend style with functionality',
    products: [
      {
        id: 1,
        name: 'Smart Casual Blazer',
        image: '/generated/product-backpack.jpg',
        price: '$245',
        rating: 4.6,
        review: 'Perfect for hybrid work environments',
        affiliateUrl: 'https://example.com/blazer?ref=elevate&utm_source=lifestyle_hub',
      },
      {
        id: 2,
        name: 'Tech-Integrated Jacket',
        image: '/generated/product-backpack.jpg',
        price: '$289',
        rating: 4.7,
        review: 'Fashion meets functionality',
        affiliateUrl: 'https://example.com/jacket?ref=elevate&utm_source=lifestyle_hub',
      },
      {
        id: 3,
        name: 'Performance Sneakers',
        image: '/generated/product-backpack.jpg',
        price: '$159',
        rating: 4.8,
        review: 'Style and comfort combined',
        affiliateUrl: 'https://example.com/sneakers?ref=elevate&utm_source=lifestyle_hub',
      },
      {
        id: 4,
        name: 'Designer Tech Backpack',
        image: '/generated/product-backpack.jpg',
        price: '$189',
        rating: 4.7,
        review: 'Urban professional essential',
        affiliateUrl: 'https://example.com/backpack?ref=elevate&utm_source=lifestyle_hub',
      },
    ],
  },
  lifestyle: {
    title: 'SMART LIFESTYLE',
    description: 'Products that elevate your everyday living experience',
    products: [
      {
        id: 1,
        name: 'Smart Water Bottle',
        image: '/generated/product-smartwatch.jpg',
        price: '$79',
        rating: 4.5,
        review: 'Track your hydration intelligently',
        affiliateUrl: 'https://example.com/bottle?ref=elevate&utm_source=lifestyle_hub',
      },
      {
        id: 2,
        name: 'Portable Espresso Maker',
        image: '/generated/product-phone.jpg',
        price: '$129',
        rating: 4.6,
        review: 'Coffee shop quality anywhere',
        affiliateUrl: 'https://example.com/espresso?ref=elevate&utm_source=lifestyle_hub',
      },
      {
        id: 3,
        name: 'Minimalist Wallet',
        image: '/generated/product-backpack.jpg',
        price: '$49',
        rating: 4.8,
        review: 'Sleek design with RFID protection',
        affiliateUrl: 'https://example.com/wallet?ref=elevate&utm_source=lifestyle_hub',
      },
    ],
  },
  accessories: {
    title: 'ACCESSORIES',
    description: 'Essential accessories that complete your modern lifestyle',
    products: [
      {
        id: 1,
        name: 'Designer Tech Backpack',
        image: '/generated/product-backpack.jpg',
        price: '$189',
        rating: 4.7,
        review: 'Urban professional essential',
        affiliateUrl: 'https://example.com/backpack?ref=elevate&utm_source=lifestyle_hub',
      },
      {
        id: 2,
        name: 'Premium Leather Wallet',
        image: '/generated/product-backpack.jpg',
        price: '$89',
        rating: 4.6,
        review: 'Timeless elegance meets security',
        affiliateUrl: 'https://example.com/wallet?ref=elevate&utm_source=lifestyle_hub',
      },
      {
        id: 3,
        name: 'Smart Travel Organizer',
        image: '/generated/product-backpack.jpg',
        price: '$59',
        rating: 4.5,
        review: 'Keep everything perfectly organized',
        affiliateUrl: 'https://example.com/organizer?ref=elevate&utm_source=lifestyle_hub',
      },
    ],
  },
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryData[params.slug];

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#3B82F6] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1F2937] mb-4">{category.title}</h1>
          <p className="text-gray-600 text-lg">{category.description}</p>
          <p className="text-gray-500 text-sm mt-2">{category.products.length} curated products</p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-[12px] p-4 mb-8 shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-600">
            <Filter size={20} />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          <div className="flex space-x-4">
            <button className="text-sm text-gray-600 hover:text-[#3B82F6] transition-colors">
              Price
            </button>
            <button className="text-sm text-gray-600 hover:text-[#3B82F6] transition-colors">
              Rating
            </button>
            <button className="text-sm text-gray-600 hover:text-[#3B82F6] transition-colors">
              Popular
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {category.products.map((product: any) => (
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

              {/* Product Info */}
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">{product.name}</h3>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
              </div>

              {/* Review */}
              <p className="text-sm text-gray-600 mb-4 italic">&quot;{product.review}&quot;</p>

              {/* Price and Button */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#1F2937]">{product.price}</span>
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3B82F6] text-white px-6 py-2 rounded-lg text-sm font-medium uppercase tracking-wide hover:bg-[#2563EB] transition-all"
                >
                  VIEW DEAL
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
