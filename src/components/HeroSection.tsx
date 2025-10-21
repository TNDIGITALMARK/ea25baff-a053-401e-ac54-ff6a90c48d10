'use client';

import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative max-w-[1200px] mx-auto px-6 sm:px-12 mt-6">
      <div className="relative h-[500px] rounded-[20px] overflow-hidden shadow-2xl">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/generated/hero-lifestyle-tech.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-12 sm:px-16">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight mb-6 max-w-2xl animate-fade-in">
            FUTURE. CURATED.
            <br />
            <span className="text-white">UNLOCK YOUR POTENTIAL.</span>
          </h1>

          <Link
            href="#products"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg text-sm font-medium uppercase tracking-wide hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-fit"
          >
            DISCOVER TOP PICKS
          </Link>
        </div>
      </div>
    </section>
  );
}
