import React from 'react';
import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use | CA Legal Source',
  description: 'Terms and conditions governing the use of CA Legal Source legal referral and informational website.',
  alternates: {
    canonical: 'https://calegalsource.com/terms-of-use',
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <div>
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0f233a] tracking-tight">
              Terms of Use
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              Last Updated: January 1, 2025
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">1. Agreement to Terms</h2>
              <p>
                By accessing or using calegalsource.com (&quot;Site&quot;), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">2. Nature of Platform & No Legal Advice</h2>
              <p>
                CA Legal Source is a technology and legal assistance platform that facilitates connections between individuals and independent California-licensed attorneys. <strong>CA Legal Source is not a law firm, does not provide legal representation, and does not render legal advice.</strong> Information provided on this website is for general informational purposes only.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">3. No Attorney-Client Relationship</h2>
              <p>
                Transmitting information through our intake forms or communicating with CA Legal Source does not create an attorney-client relationship. An attorney-client relationship is formed only when you and an independent attorney execute a formal written retainer agreement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">4. Independent Legal Representation & Fees</h2>
              <p>
                Any legal services provided are performed solely by independent participating attorneys. Fee agreements, retainer terms, and case handling are agreed upon directly between you and the attorney. CA Legal Source does not direct or control the professional legal judgment of any participating attorney.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
