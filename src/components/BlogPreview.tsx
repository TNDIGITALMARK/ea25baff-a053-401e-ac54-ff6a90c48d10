'use client';

import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Top 10 Lifestyle Gadgets of 2025',
    excerpt: 'Discover the must-have tech products that are revolutionizing modern living this year.',
    date: 'January 15, 2025',
    readTime: '8 min read',
    slug: 'top-10-lifestyle-gadgets-2025',
  },
  {
    id: 2,
    title: 'Style Meets Tech: Must-Have Gear This Year',
    excerpt: 'The perfect fusion of fashion and technology for the contemporary professional.',
    date: 'January 12, 2025',
    readTime: '6 min read',
    slug: 'style-meets-tech-gear',
  },
  {
    id: 3,
    title: 'Minimalist Tech Setup for Modern Professionals',
    excerpt: 'How to create a clean, efficient workspace that boosts productivity and style.',
    date: 'January 8, 2025',
    readTime: '5 min read',
    slug: 'minimalist-tech-setup',
  },
];

export function BlogPreview() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 sm:px-12 py-16 bg-white rounded-[20px] my-12 shadow-lg">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-[#1F2937]">Latest Insights</h2>
        <Link
          href="/blog"
          className="text-[#3B82F6] text-sm font-medium uppercase tracking-wide hover:text-[#2563EB] transition-colors"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group"
          >
            <div className="bg-gray-50 rounded-[12px] p-6 hover:bg-gray-100 transition-all hover:shadow-lg">
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3 group-hover:text-[#3B82F6] transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
