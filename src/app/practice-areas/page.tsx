import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { all17PracticeAreasData } from '@/data/practiceAreas';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'California Practice Areas | Find Legal Help Across 17 Legal Categories | CA Legal Source',
  description: 'Explore all 17 California legal practice areas supported by CA Legal Source, including employment law, personal injury, tenant rights, ADA, and family law.',
  alternates: {
    canonical: 'https://www.calegalsource.com/practice-areas',
  },
};

export default function PracticeAreasHub() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>California Legal Matching Service</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              California Legal Practice Areas
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              We connect California residents with qualified attorneys across 17 primary areas of law. Select your legal category to explore state-specific laws, rights, and referral options.
            </p>
          </div>
        </div>

        {/* 17 Practice Areas Grid */}
        <section className="py-16 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {all17PracticeAreasData.map((area) => (
                <div
                  key={area.id}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-2xs hover:shadow-md hover:border-[#3d7826]/40 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <h2 className="font-playfair text-xl font-bold text-[#0f233a] group-hover:text-[#3d7826] transition-colors">
                      {area.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {area.shortDesc}
                    </p>

                    <div className="pt-2">
                      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Common Issues Handled:
                      </div>
                      <ul className="space-y-1 text-xs text-gray-600">
                        {area.commonIssues.slice(0, 3).map((issue, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#3d7826] font-bold">•</span>
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3d7826] hover:underline"
                    >
                      <span>Explore {area.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/#hero-intake"
                      className="text-xs font-semibold text-gray-500 hover:text-[#0f233a]"
                    >
                      Get Matched →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
