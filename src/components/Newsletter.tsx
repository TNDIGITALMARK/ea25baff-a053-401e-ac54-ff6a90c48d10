'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Simulate successful subscription
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="newsletter" className="max-w-[1200px] mx-auto px-6 sm:px-12 py-16">
      <div className="bg-gradient-to-r from-[#2D3748] to-[#1F2937] rounded-[20px] p-12 text-center shadow-2xl">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-[#3B82F6] p-4 rounded-full">
              <Mail size={32} className="text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-gray-300 mb-8">
            Subscribe for weekly lifestyle deals and exclusive product updates delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              required
            />
            <button
              type="submit"
              className="bg-[#3B82F6] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2563EB] transition-all shadow-lg hover:shadow-xl"
            >
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="text-green-400 mt-4 text-sm">
              ✓ Successfully subscribed! Check your inbox.
            </p>
          )}

          {status === 'error' && (
            <p className="text-red-400 mt-4 text-sm">
              ✗ Please enter a valid email address.
            </p>
          )}

          <p className="text-gray-400 text-xs mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
