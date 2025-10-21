'use client';

import Link from 'next/link';
import { Smartphone, Watch, Shirt, Briefcase } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'TECH ESSENTIALS',
    icon: Smartphone,
    count: 47,
    href: '/categories/tech',
    bgColor: 'bg-[#2D3748]',
  },
  {
    id: 2,
    name: 'SMART LIFESTYLE',
    icon: Watch,
    count: 32,
    href: '/categories/lifestyle',
    bgColor: 'bg-[#374151]',
  },
  {
    id: 3,
    name: 'MODERN FASHION',
    icon: Shirt,
    count: 28,
    href: '/categories/fashion',
    bgColor: 'bg-[#1F2937]',
  },
  {
    id: 4,
    name: 'ACCESSORIES',
    icon: Briefcase,
    count: 41,
    href: '/categories/accessories',
    bgColor: 'bg-[#2D3748]',
  },
];

export function CategoryCards() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 sm:px-12 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link
              key={category.id}
              href={category.href}
              className={`${category.bgColor} rounded-[12px] p-8 flex flex-col items-center justify-center text-white hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl group`}
            >
              <IconComponent size={48} className="mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
                {category.name}
              </h3>
              <p className="text-xs text-gray-300">{category.count} Products</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
