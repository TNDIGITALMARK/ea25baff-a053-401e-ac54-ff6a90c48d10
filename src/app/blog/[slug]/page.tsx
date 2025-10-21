import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

const articles: Record<string, any> = {
  'top-10-lifestyle-gadgets-2025': {
    title: 'Top 10 Lifestyle Gadgets of 2025',
    date: 'January 15, 2025',
    readTime: '8 min read',
    author: 'Alex Rivera',
    excerpt: 'Discover the must-have tech products that are revolutionizing modern living this year.',
    content: [
      {
        type: 'paragraph',
        text: 'The year 2025 has brought us an incredible array of lifestyle gadgets that seamlessly blend technology with everyday living. From smart home devices to wearable tech, these innovations are designed to enhance your productivity, health, and overall quality of life.',
      },
      {
        type: 'heading',
        text: '1. Next-Generation Smartwatches',
      },
      {
        type: 'paragraph',
        text: 'Modern smartwatches have evolved far beyond simple fitness tracking. Today\'s devices offer comprehensive health monitoring, advanced sleep analysis, and seamless integration with your digital ecosystem. Our top pick combines elegant design with powerful functionality.',
      },
      {
        type: 'product',
        product: {
          name: 'Minimalist Smartwatch',
          image: '/generated/product-smartwatch.jpg',
          price: '$299',
          rating: 4.9,
          review: 'Style meets performance',
          affiliateUrl: 'https://example.com/smartwatch?ref=elevate&utm_source=blog',
        },
      },
      {
        type: 'heading',
        text: '2. Premium Audio Experience',
      },
      {
        type: 'paragraph',
        text: 'Whether you\'re working from home, commuting, or enjoying your favorite music, premium headphones have become an essential lifestyle accessory. Advanced noise cancellation technology creates your personal sound sanctuary anywhere.',
      },
      {
        type: 'product',
        product: {
          name: 'Pure Sound Experience',
          image: '/generated/product-headphones.jpg',
          price: '$349',
          rating: 4.8,
          review: 'Premium audio quality',
          affiliateUrl: 'https://example.com/headphones?ref=elevate&utm_source=blog',
        },
      },
      {
        type: 'heading',
        text: '3. The Ultimate Smartphone',
      },
      {
        type: 'paragraph',
        text: 'In 2025, smartphones continue to be the central hub of our digital lives. The latest models feature revolutionary camera systems, lightning-fast processing, and innovative AI capabilities that anticipate your needs before you even know them.',
      },
      {
        type: 'product',
        product: {
          name: 'Innovation in Hand',
          image: '/generated/product-phone.jpg',
          price: '$899',
          rating: 4.7,
          review: 'Cutting-edge technology',
          affiliateUrl: 'https://example.com/phone?ref=elevate&utm_source=blog',
        },
      },
      {
        type: 'heading',
        text: 'The Future of Lifestyle Tech',
      },
      {
        type: 'paragraph',
        text: 'As technology continues to evolve, these gadgets represent more than just tools – they\'re companions that enhance every aspect of modern life. From productivity to wellness, entertainment to connectivity, these devices are carefully curated to deliver maximum value.',
      },
      {
        type: 'paragraph',
        text: 'The key to choosing the right lifestyle gadget is understanding how it fits into your daily routine. Consider your priorities: Are you focused on health and fitness? Professional productivity? Creative pursuits? Each of these devices excels in specific areas while maintaining versatility.',
      },
    ],
  },
  'style-meets-tech-gear': {
    title: 'Style Meets Tech: Must-Have Gear This Year',
    date: 'January 12, 2025',
    readTime: '6 min read',
    author: 'Jordan Kim',
    excerpt: 'The perfect fusion of fashion and technology for the contemporary professional.',
    content: [
      {
        type: 'paragraph',
        text: 'In today\'s world, the line between fashion and technology has never been more blurred. Modern professionals demand products that not only perform exceptionally but also look stunning. This is where style truly meets functionality.',
      },
      {
        type: 'heading',
        text: 'The Tech Backpack Revolution',
      },
      {
        type: 'paragraph',
        text: 'Gone are the days of choosing between style and utility. Modern tech backpacks feature premium materials, thoughtful organization, and sleek designs that complement any professional wardrobe.',
      },
      {
        type: 'product',
        product: {
          name: 'Designer Tech Backpack',
          image: '/generated/product-backpack.jpg',
          price: '$189',
          rating: 4.7,
          review: 'Urban professional essential',
          affiliateUrl: 'https://example.com/backpack?ref=elevate&utm_source=blog',
        },
      },
      {
        type: 'heading',
        text: 'Wearable Technology That Impresses',
      },
      {
        type: 'paragraph',
        text: 'Wearable tech has matured into sophisticated accessories that enhance both your capabilities and your appearance. These devices prove that high-tech and high-fashion can coexist beautifully.',
      },
      {
        type: 'product',
        product: {
          name: 'Minimalist Smartwatch',
          image: '/generated/product-smartwatch.jpg',
          price: '$299',
          rating: 4.9,
          review: 'Style meets performance',
          affiliateUrl: 'https://example.com/smartwatch?ref=elevate&utm_source=blog',
        },
      },
    ],
  },
  'minimalist-tech-setup': {
    title: 'Minimalist Tech Setup for Modern Professionals',
    date: 'January 8, 2025',
    readTime: '5 min read',
    author: 'Sam Chen',
    excerpt: 'How to create a clean, efficient workspace that boosts productivity and style.',
    content: [
      {
        type: 'paragraph',
        text: 'The minimalist approach to technology isn\'t about having less – it\'s about having exactly what you need, beautifully organized. A well-curated tech setup can transform your productivity while creating a calming, inspiring workspace.',
      },
      {
        type: 'heading',
        text: 'Essential Tech for Minimalist Professionals',
      },
      {
        type: 'paragraph',
        text: 'Start with quality over quantity. Each device in your setup should serve multiple purposes and integrate seamlessly with your workflow. Here are the essentials that deliver maximum value with minimal clutter.',
      },
      {
        type: 'product',
        product: {
          name: 'Innovation in Hand',
          image: '/generated/product-phone.jpg',
          price: '$899',
          rating: 4.7,
          review: 'Cutting-edge technology',
          affiliateUrl: 'https://example.com/phone?ref=elevate&utm_source=blog',
        },
      },
    ],
  },
};

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-[800px] mx-auto px-6 sm:px-12 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#3B82F6] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-[20px] p-8 sm:p-12 shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1F2937] mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
            <div>
              By <span className="font-semibold text-[#3B82F6]">{article.author}</span>
            </div>
            <button className="ml-auto flex items-center space-x-2 text-[#3B82F6] hover:text-[#2563EB] transition-colors">
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((block: any, index: number) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {block.text}
                  </p>
                );
              }

              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-2xl font-bold text-[#1F2937] mt-12 mb-4">
                    {block.text}
                  </h2>
                );
              }

              if (block.type === 'product') {
                const product = block.product;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-[16px] p-6 my-8 border border-blue-100"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                      {/* Product Image */}
                      <div className="relative w-full sm:w-48 aspect-square rounded-lg overflow-hidden bg-white shadow-md flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-4"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 italic">
                          &quot;{product.review}&quot;
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <span className="text-3xl font-bold text-[#3B82F6]">{product.price}</span>
                          <a
                            href={product.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#3B82F6] text-white px-8 py-3 rounded-lg text-sm font-medium uppercase tracking-wide hover:bg-[#2563EB] transition-all shadow-md hover:shadow-lg"
                          >
                            VIEW PRODUCT →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 italic">
              Note: This article contains affiliate links. We may earn a commission from qualifying purchases, which helps us continue creating great content for you.
            </p>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(articles)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 2)
              .map(([slug, relatedArticle]) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="bg-white rounded-[12px] p-6 shadow-md hover:shadow-xl transition-all group"
                >
                  <h4 className="text-lg font-semibold text-[#1F2937] mb-2 group-hover:text-[#3B82F6] transition-colors">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{relatedArticle.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar size={12} className="mr-1" />
                    <span>{relatedArticle.date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={12} className="mr-1" />
                    <span>{relatedArticle.readTime}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
