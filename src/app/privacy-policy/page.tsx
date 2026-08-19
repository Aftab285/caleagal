import React from 'react';
import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy & California Privacy Notice (CCPA/CPRA) | CA Legal Source',
  description: 'California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) privacy notice and data protections for CA Legal Source users.',
  alternates: {
    canonical: 'https://calegalsource.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <div>
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0f233a] tracking-tight">
              Privacy Policy & California Privacy Disclosures
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              Last Updated: January 1, 2025 | Effective for California Residents under CCPA / CPRA
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">1. Introduction & Scope</h2>
              <p>
                CA Legal Source (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates calegalsource.com to help California consumers understand legal options and facilitate connections with participating attorneys. We take user privacy seriously and maintain strict safeguards regarding personal and inquiry information.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">2. Information We Collect</h2>
              <p>When you use our online intake, we collect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Contact Identifiers:</strong> Name, telephone number, email address.</li>
                <li><strong>Geographic Data:</strong> California county, city, and ZIP code.</li>
                <li><strong>Case Inquiry Information:</strong> Details and narratives describing your legal issue, timeline, and preferred communication language.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">3. How We Use & Share Your Information</h2>
              <p>
                We use collected information solely to evaluate your legal matter, determine appropriate practice-area panels, and connect you with participating California attorneys who may be able to assist you. <strong>We do not sell your personal information or sensitive case details to third-party marketing brokers.</strong>
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">4. California Consumer Privacy Rights (CCPA / CPRA)</h2>
              <p>Under the California Consumer Privacy Act as amended by the CPRA, California residents have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Right to Know / Access:</strong> Request disclosure of the categories and specific pieces of personal information collected.</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal information, subject to legal record retention requirements.</li>
                <li><strong>Right to Correct:</strong> Request correction of inaccurate personal records.</li>
                <li><strong>Non-Discrimination:</strong> Exercise your privacy rights without facing discriminatory service or pricing.</li>
              </ul>
              <p>
                To submit a verified California consumer privacy request, email <strong>privacy@calegalsource.com</strong>.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">5. Security & Encryption</h2>
              <p>
                We implement industry-standard administrative, physical, and technical safeguards, including HTTPS SSL encryption in transit, secure database controls, and role-based access restrictions.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
