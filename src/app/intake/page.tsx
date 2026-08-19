import React from 'react';
import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request California Legal Help | Free Case Intake & Attorney Matching',
  description: 'Submit your confidential California legal inquiry to be evaluated for connection with a qualified attorney handling your specific matter in your county.',
  alternates: {
    canonical: 'https://calegalsource.com/intake',
  },
};

export default function IntakePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Re-use the interactive multi-step Intake component */}
        <HeroSection />

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-[#3d7826] font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Encrypted & Confidential California Intake</span>
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0f233a]">
            What Happens After You Submit Your Request?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            1. Our intake team evaluates your practice area, California county jurisdiction, and specific case details.<br />
            2. Where appropriate, we match you with a pre-screened California attorney handling matters like yours.<br />
            3. A representative or participating attorney contacts you for an initial case review.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
