import React from 'react';
import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Legal Disclaimer | CA Legal Source',
  description: 'Legal disclaimers, California statutory notices, and attorney advertising disclosures for CA Legal Source.',
  alternates: {
    canonical: 'https://www.calegalsource.com/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <div>
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0f233a] tracking-tight">
              Legal Disclaimer & Disclosures
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              California Legal Disclosures & Informational Notice
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
            <section className="space-y-2 p-5 bg-amber-50/70 border border-amber-200 rounded-xl text-amber-950">
              <h2 className="font-playfair text-lg font-bold">General Informational Disclaimer</h2>
              <p>
                The materials and content on calegalsource.com are provided for general educational and informational purposes only. The information should not be construed as legal advice on any subject matter. You should not act or refrain from acting based on any content included in this site without seeking legal or other professional advice from an attorney licensed in California.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">No Guarantee of Results</h2>
              <p>
                Prior case results, testimonials, or descriptions of potential claims do not guarantee, warrant, or predict a similar outcome in your case. Every legal matter is unique and depends on the specific facts, applicable California law, and evidence.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">Referral Service Notice</h2>
              <p>
                CA Legal Source facilitates introductions between individuals and independent California attorneys. Referral allocations are determined based on objective criteria such as practice area, geography, and availability, and are not auctioned to the highest bidder.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">Statutes of Limitations & Urgent Deadlines</h2>
              <p>
                California law imposes strict time limits (&quot;Statutes of Limitations&quot;) within which legal claims and lawsuits must be filed. If you fail to file your claim within the statutory deadline, you may permanently lose your right to pursue legal remedies.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
