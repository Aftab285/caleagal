import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { legalGuidesData } from '@/data/legalGuides';
import { BookOpen, Clock, User, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'California Legal Resources & Guides | CA Legal Source',
  description: 'Authoritative, California-specific legal guides on overtime wage laws, tenant habitability rights, mold remedies, accident checklists, and consumer laws.',
  alternates: {
    canonical: 'https://www.calegalsource.com/legal-resources',
  },
};

export default function LegalResourcesHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>California Legal Knowledge Hub</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              California Legal Resources & Guides
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Explore in-depth, verified articles explaining California statutes, employee wage rules, tenant housing protections, and steps to protect your legal rights.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalGuidesData.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-[#3d7826]/40 transition-all flex flex-col justify-between group"
              >
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="px-2.5 py-1 rounded-md bg-[#edf7e8] text-[#3d7826] font-semibold text-[11px]">
                      {guide.practiceArea}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.readTime}
                    </span>
                  </div>

                  <h2 className="font-playfair text-xl font-bold text-[#0f233a] group-hover:text-[#3d7826] transition-colors leading-snug">
                    {guide.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {guide.summary}
                  </p>

                  <div className="pt-2 text-[11px] text-gray-400 space-y-0.5">
                    <p>Author: {guide.author}</p>
                    <p>Reviewed: {guide.lastReviewed}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <Link
                    href={`/legal-resources/${guide.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3d7826] hover:underline"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/#hero-intake"
                    className="text-xs font-semibold text-gray-400 hover:text-[#0f233a]"
                  >
                    Get Help →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
