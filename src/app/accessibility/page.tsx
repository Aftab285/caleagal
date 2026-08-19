import React from 'react';
import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Accessibility Statement (WCAG 2.1 AA) | CA Legal Source',
  description: 'Our commitment to digital accessibility for individuals with disabilities in accordance with WCAG 2.1 AA and ADA Title III guidelines.',
  alternates: {
    canonical: 'https://calegalsource.com/accessibility',
  },
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <div>
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0f233a] tracking-tight">
              Accessibility Statement
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              Commitment to Web Content Accessibility Guidelines (WCAG 2.1 Level AA)
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">Our Commitment to Accessibility</h2>
              <p>
                CA Legal Source is committed to ensuring digital accessibility for all users, including individuals with disabilities. We continuously improve user experience for everyone and apply the relevant accessibility standards under the Web Content Accessibility Guidelines (WCAG 2.1 AA) and the Americans with Disabilities Act (ADA Title III).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">Measures Taken to Support Accessibility</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>High-contrast color palettes ensuring readable text across all viewports.</li>
                <li>Full keyboard navigation support across interactive forms and menus.</li>
                <li>Semantic HTML5 elements and ARIA attributes for screen reader compatibility.</li>
                <li>Responsive layouts accommodating text resizing without loss of functionality.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-playfair text-xl font-bold text-[#0f233a]">Feedback & Contact</h2>
              <p>
                If you encounter any accessibility barriers on calegalsource.com or require assistance completing an intake questionnaire, please contact our accessibility coordinator at <strong>accessibility@calegalsource.com</strong> or call <strong>(800) 123-4567</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
