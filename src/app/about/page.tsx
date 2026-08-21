import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Target, Globe, Scale, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About CA Legal Source — California Legal Assistance Platform',
  description: 'Learn about CA Legal Source, our mission to simplify finding qualified legal counsel across California, and our commitment to transparency and bilingual accessibility.',
  alternates: {
    canonical: 'https://www.calegalsource.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Mission</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              About CA Legal Source
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Making it easier for people throughout California to understand where to turn when they need legal help.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-12">
          <section className="space-y-4">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0f233a]">
              Dedicated to California Legal Accessibility
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              CA Legal Source is a California-focused legal assistance and attorney referral platform. We bridge the gap between Californians facing challenging legal situations and qualified, pre-screened attorneys who handle their specific matter.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Unlike generic lead aggregators, our platform is built specifically around California statutory frameworks, all 58 county jurisdictions, and the bilingual needs of our diverse communities.
            </p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-[#f8fafc] rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#3d7826] flex items-center justify-center shadow-xs border border-gray-200">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-playfair text-lg font-bold text-[#0f233a]">100% Bilingual Platform</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Full English and Spanish capability across all informational guides, online intake flows, and attorney matching options.
              </p>
            </div>

            <div className="p-6 bg-[#f8fafc] rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#3d7826] flex items-center justify-center shadow-xs border border-gray-200">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-playfair text-lg font-bold text-[#0f233a]">Fair & Objective Standards</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Referrals are determined by legitimate criteria such as subject-matter experience, jurisdiction, and equitable panel rotation.
              </p>
            </div>
          </section>

          <div className="p-6 bg-[#0f233a] text-white rounded-2xl text-center space-y-4">
            <h3 className="font-playfair text-xl sm:text-2xl font-bold">
              Looking for Legal Assistance in California?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
              Start our guided intake today for a free case evaluation.
            </p>
            <Link
              href="/#hero-intake"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-xs sm:text-sm transition-all"
            >
              <span>Get Legal Help</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
