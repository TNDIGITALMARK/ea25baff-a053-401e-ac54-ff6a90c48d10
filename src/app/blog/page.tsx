import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Calendar, Clock } from 'lucide-react';

export const dynamic = 'force-dynamic';

const articles = [
  {
    id: 1,
    title: 'Top 10 Lifestyle Gadgets of 2025',
    excerpt: 'Discover the must-have tech products that are revolutionizing modern living this year. From smartwatches to premium audio, we\'ve curated the best.',
    date: 'January 15, 2025',
    readTime: '8 min read',
    slug: 'top-10-lifestyle-gadgets-2025',
    category: 'Tech',
  },
  {
    id: 2,
    title: 'Style Meets Tech: Must-Have Gear This Year',
    excerpt: 'The perfect fusion of fashion and technology for the contemporary professional. Learn how to blend style with cutting-edge functionality.',
    date: 'January 12, 2025',
    readTime: '6 min read',
    slug: 'style-meets-tech-gear',
    category: 'Fashion',
  },
  {
    id: 3,
    title: 'Minimalist Tech Setup for Modern Professionals',
    excerpt: 'How to create a clean, efficient workspace that boosts productivity and style. Less clutter, more focus, maximum impact.',
    date: 'January 8, 2025',
    readTime: '5 min read',
    slug: 'minimalist-tech-setup',
    category: 'Lifestyle',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1F2937] mb-4">Lifestyle Insights</h1>
          <p className="text-gray-600 text-lg">
            Expert reviews, buying guides, and lifestyle tips to help you make informed decisions.
          </p>
        </div>

        {/* Featured Article */}
        <div className="bg-gradient-to-r from-[#2D3748] to-[#1F2937] rounded-[20px] p-8 sm:p-12 text-white mb-12 shadow-2xl">
          <span className="inline-block bg-[#3B82F6] px-4 py-1 rounded-full text-xs font-medium uppercase tracking-wide mb-4">
            Featured
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {articles[0].title}
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            {articles[0].excerpt}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-300 mb-6">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{articles[0].date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>{articles[0].readTime}</span>
            </div>
          </div>
          <Link
            href={`/blog/${articles[0].slug}`}
            className="inline-block bg-white text-[#1F2937] px-8 py-3 rounded-lg text-sm font-medium uppercase tracking-wide hover:bg-gray-100 transition-all shadow-lg"
          >
            Read Article →
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="bg-white rounded-[16px] p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-blue-100 text-[#3B82F6] px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                  {article.category}
                </span>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Clock size={12} />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#1F2937] mb-3 group-hover:text-[#3B82F6] transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <Calendar size={12} />
                <span>{article.date}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-[20px] p-8 sm:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly lifestyle tips, product reviews, and exclusive deals delivered to your inbox.
          </p>
          <Link
            href="/#newsletter"
            className="inline-block bg-white text-[#3B82F6] px-8 py-3 rounded-full text-sm font-medium uppercase tracking-wide hover:bg-gray-100 transition-all shadow-lg"
          >
            Subscribe Now
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
