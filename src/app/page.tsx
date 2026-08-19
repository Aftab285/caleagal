import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustValueSection from '@/components/TrustValueSection';
import HowItWorks from '@/components/HowItWorks';
import PracticeAreasSection from '@/components/PracticeAreasSection';
import CaliforniaCoverage from '@/components/CaliforniaCoverage';
import WhyCALegalSource from '@/components/WhyCALegalSource';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Utility Top Bar with Language Selector & Toll-Free Phone */}
      <TopBar />

      {/* 2. Navigation Header with Official Brand Logo & Dropdowns */}
      <Header />

      <main className="flex-grow">
        {/* 3. Hero Section with California Bay Bridge Silhouette & Interactive Multi-Step Intake Form */}
        <HeroSection />

        {/* 4. Trust / Value Understanding Section */}
        <TrustValueSection />

        {/* 5. How It Works (4 Clean Steps in 1 Line with Connecting Arrows) */}
        <HowItWorks />

        {/* 6. Practice Areas Grid (7 Featured Practice Area Cards + View All CTA) */}
        <PracticeAreasSection />

        {/* 7. Interactive California 58-County Coverage Explorer */}
        <CaliforniaCoverage />

        {/* 8. Why CA Legal Source Value Pillars */}
        <WhyCALegalSource />

        {/* 9. Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* 10. High-Impact Final Call to Action */}
        <FinalCTA />
      </main>

      {/* 11. Full Compliance & Navigation Footer */}
      <Footer />

      {/* 12. Persistent Mobile Sticky CTA */}
      <StickyMobileCTA />
    </div>
  );
}
