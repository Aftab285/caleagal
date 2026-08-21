import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, CheckCircle2, Scale, Users, FileCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For California Attorneys — Join Our Legal Referral Panel | CA Legal Source',
  description: 'Learn about participating on CA Legal Source practice-area panels across California. Review panel eligibility, State Bar requirements, and fair rotation standards.',
  alternates: {
    canonical: 'https://www.calegalsource.com/for-attorneys',
  },
};

export default function ForAttorneysPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Attorney Panel Information</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Connect With People Looking for Legal Help in California
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              CA Legal Source connects qualified California attorneys with individuals seeking assistance in their specific practice areas and geographic counties.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-12">
          {/* Panel Standards */}
          <section className="space-y-4">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">
              How Attorney Participation Works
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our platform matches prospective clients with attorneys based on objective criteria such as practice specialty, county jurisdiction, language capabilities, and fair panel rotation principles. We do not operate an auction model where the highest bidder receives leads.
            </p>
          </section>

          {/* Verification Criteria */}
          <section className="p-6 bg-[#f8fafc] rounded-2xl border border-gray-200 space-y-4">
            <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
              Attorney Panel Eligibility Standards
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                <span>Active California State Bar license in good standing with no active disciplinary suspensions.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                <span>Demonstrated experience and focus in the specific practice areas requested.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                <span>Current professional errors & omissions (malpractice) liability insurance where applicable.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                <span>Commitment to prompt, professional communication with referred clients within 24 hours.</span>
              </div>
            </div>
          </section>

          {/* Panel Inquiry Form Placeholder */}
          <section className="p-8 bg-white rounded-2xl border border-gray-200 shadow-2xs space-y-5">
            <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
              Request Attorney Panel Information
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              California-licensed attorneys interested in joining our referral network may submit their professional information for compliance review.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                <input type="text" placeholder="Attorney Name" className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">California State Bar #</label>
                <input type="text" placeholder="e.g. 123456" className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Law Firm / Practice Name</label>
                <input type="text" placeholder="Law Offices of..." className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Primary County</label>
                <input type="text" placeholder="e.g. Los Angeles, Orange" className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg" />
              </div>
            </div>
            <button
              type="button"
              className="px-6 py-2.5 rounded-lg bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-xs sm:text-sm transition-all"
            >
              Submit Panel Application
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
