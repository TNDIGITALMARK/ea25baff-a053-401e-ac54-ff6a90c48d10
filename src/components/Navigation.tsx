'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="bg-[#3A4557] rounded-[20px] mt-4 px-8 py-4 flex items-center justify-between shadow-lg">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl tracking-wider">
            ELEVATE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white text-sm font-medium uppercase tracking-wide hover:text-blue-400 transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/categories/tech"
              className="text-white text-sm font-medium uppercase tracking-wide hover:text-blue-400 transition-colors"
            >
              TECH
            </Link>
            <Link
              href="/categories/fashion"
              className="text-white text-sm font-medium uppercase tracking-wide hover:text-blue-400 transition-colors"
            >
              FASHION
            </Link>
            <Link
              href="/blog"
              className="text-white text-sm font-medium uppercase tracking-wide hover:text-blue-400 transition-colors"
            >
              LIFESTYLE
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="bg-white text-[#1F2937] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-all">
              LOGIN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#3A4557] rounded-[20px] mt-2 px-8 py-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white text-sm font-medium uppercase tracking-wide hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/categories/tech"
                className="text-white text-sm font-medium uppercase tracking-wide hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                TECH
              </Link>
              <Link
                href="/categories/fashion"
                className="text-white text-sm font-medium uppercase tracking-wide hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FASHION
              </Link>
              <Link
                href="/blog"
                className="text-white text-sm font-medium uppercase tracking-wide hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                LIFESTYLE
              </Link>
              <button className="bg-white text-[#1F2937] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-all w-full mt-2">
                LOGIN
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
