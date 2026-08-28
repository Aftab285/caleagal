import React from 'react';
import type { Metadata } from 'next';
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
import { getMultilingualMetadata } from '@/lib/i18nRoutes';

export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/',
  esPath: '/es',
  title: 'Abogados en California | Conexión con Abogados | CALegalSource',
  description: 'Cuéntenos sobre su situación legal y le ayudaremos a conectarse con un abogado calificado en California. Evaluación gratuita para asuntos calificados en los 58 condados.',
});

export default function SpanishHomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Spanish Hero with Intake Form */}
        <HeroSection />

        {/* 4 Trust Value Pillars */}
        <TrustValueSection />

        {/* How It Works Step-by-Step */}
        <HowItWorks />

        {/* Featured Practice Areas */}
        <PracticeAreasSection />

        {/* California 58 Counties Coverage */}
        <CaliforniaCoverage />

        {/* Why Trust CA Legal Source */}
        <WhyCALegalSource />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Final Conversion CTA */}
        <FinalCTA />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
