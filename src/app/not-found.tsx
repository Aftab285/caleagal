import React from 'react';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Compass, Search, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow flex items-center justify-center py-20 bg-[#f8fafc]">
        <div className="max-w-xl mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#edf7e8] text-[#3d7826] flex items-center justify-center mx-auto shadow-2xs">
            <Compass className="w-8 h-8" />
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0f233a]">
            We Couldn&apos;t Find That Page
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            The legal resource or page you are looking for might have been moved or updated. Explore our primary California legal directories below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Link
              href="/#hero-intake"
              className="p-3.5 rounded-xl border border-gray-200 bg-white hover:border-[#3d7826] hover:shadow-xs transition-all text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0f233a]"
            >
              <span>Get Legal Help</span>
              <ArrowRight className="w-4 h-4 text-[#3d7826]" />
            </Link>

            <Link
              href="/practice-areas"
              className="p-3.5 rounded-xl border border-gray-200 bg-white hover:border-[#3d7826] hover:shadow-xs transition-all text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0f233a]"
            >
              <span>17 Practice Areas</span>
              <ArrowRight className="w-4 h-4 text-[#3d7826]" />
            </Link>

            <Link
              href="/legal-resources"
              className="p-3.5 rounded-xl border border-gray-200 bg-white hover:border-[#3d7826] hover:shadow-xs transition-all text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0f233a]"
            >
              <span>California Legal Guides</span>
              <ArrowRight className="w-4 h-4 text-[#3d7826]" />
            </Link>

            <Link
              href="/california"
              className="p-3.5 rounded-xl border border-gray-200 bg-white hover:border-[#3d7826] hover:shadow-xs transition-all text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0f233a]"
            >
              <span>58 County Directory</span>
              <ArrowRight className="w-4 h-4 text-[#3d7826]" />
            </Link>
          </div>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#0f233a] text-white text-xs sm:text-sm font-semibold hover:bg-[#162e4d] transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
