import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Shield } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-[900px] mx-auto px-6 sm:px-12 py-12">
        <div className="bg-white rounded-[20px] p-8 sm:p-12 shadow-lg">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-[#3B82F6] p-4 rounded-full">
                <Shield size={32} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-[#1F2937] mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              At ELEVATE, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Personal Data: Name, email address, and other contact information you provide</li>
              <li>Usage Data: Information about how you use our website</li>
              <li>Cookies and Tracking Technologies: Data collected through cookies and similar technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Send you newsletters and marketing communications (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage trends and optimize user experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Affiliate Disclosure</h2>
            <p className="text-gray-700 mb-6">
              This website contains affiliate links. We may earn a commission from qualifying purchases made through these links. This comes at no additional cost to you and helps us maintain this website and continue providing valuable content.
            </p>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-6">
              We may use third-party services for analytics, advertising, and affiliate tracking. These services may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-6">
              You have the right to access, update, or delete your personal information. You may also opt-out of marketing communications at any time by clicking the unsubscribe link in our emails.
            </p>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have questions about this Privacy Policy, please contact us through our contact page.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
