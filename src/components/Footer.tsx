'use client';

import Link from 'next/link';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-2">ELEVATE</h3>
            <p className="text-gray-400 text-sm">The Smarter. Saner. Elegant.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
              CONTACT US
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
              PRIVACY
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
              TERMS
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#3B82F6] transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#3B82F6] transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#3B82F6] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#3B82F6] transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-xs mb-4 max-w-3xl">
            <strong>Affiliate Disclosure:</strong> This site contains affiliate links. We may earn a commission from qualifying purchases.
            Your support helps us curate the best products for you.
          </p>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} ELEVATE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
