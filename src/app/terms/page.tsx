import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FileText } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-[900px] mx-auto px-6 sm:px-12 py-12">
        <div className="bg-white rounded-[20px] p-8 sm:p-12 shadow-lg">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-[#3B82F6] p-4 rounded-full">
                <FileText size={32} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-[#1F2937] mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using ELEVATE, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily access the materials on ELEVATE for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or mirror the materials on any other server</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Affiliate Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              ELEVATE participates in various affiliate marketing programs. This means we may earn commissions on products purchased through our links. Our affiliate relationships do not influence our editorial content or product recommendations. We only recommend products we believe will provide value to our readers.
            </p>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Content Accuracy</h2>
            <p className="text-gray-700 mb-6">
              The materials on ELEVATE are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties for a particular purpose. We do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of materials on our website.
            </p>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">External Links</h2>
            <p className="text-gray-700 mb-6">
              ELEVATE contains links to external websites and affiliate partners. We have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Pricing and Availability</h2>
            <p className="text-gray-700 mb-6">
              Product prices and availability are subject to change by the respective merchants. We strive to keep information accurate and up-to-date, but we cannot guarantee the accuracy of pricing or availability information displayed on our website.
            </p>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              In no event shall ELEVATE or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website, even if we or an authorized representative has been notified of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Modifications</h2>
            <p className="text-gray-700 mb-6">
              ELEVATE may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms of Service, please contact us through our contact page.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
