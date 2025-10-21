import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { CategoryCards } from '@/components/CategoryCards';
import { BlogPreview } from '@/components/BlogPreview';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <CategoryCards />
      <BlogPreview />
      <Newsletter />
      <Footer />
    </div>
  );
}
