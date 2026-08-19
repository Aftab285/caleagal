import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { all17PracticeAreasData } from '@/data/practiceAreas';
import { Shield, ArrowRight, CheckCircle2, FileText, Scale, Phone, AlertCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return all17PracticeAreasData.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = all17PracticeAreasData.find((a) => a.slug === slug);

  if (!area) {
    return { title: 'Practice Area Not Found | CA Legal Source' };
  }

  return {
    title: area.seoTitle,
    description: area.metaDesc,
    alternates: {
      canonical: `https://calegalsource.com/practice-areas/${area.slug}`,
    },
    openGraph: {
      title: area.seoTitle,
      description: area.metaDesc,
      url: `https://calegalsource.com/practice-areas/${area.slug}`,
      siteName: 'CA Legal Source',
      type: 'article',
    },
  };
}

export default async function PracticeAreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = all17PracticeAreasData.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/practice-areas" className="hover:text-white">Practice Areas</Link>
              <span>/</span>
              <span className="text-[#85db61]">{area.name}</span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              California {area.name} Legal Help
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              {area.shortDesc}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/#hero-intake"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-sm transition-all"
              >
                <span>Request Attorney Connection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:8001234567"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#85db61]" />
                <span>Call (800) 123-4567</span>
              </a>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-10">
              {/* Overview */}
              <section className="space-y-4">
                <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0f233a]">
                  California {area.name} Law Overview
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {area.overview}
                </p>
              </section>

              {/* Common Issues */}
              <section className="space-y-4 p-6 bg-[#f8fafc] rounded-2xl border border-gray-200">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  Common Legal Matters in {area.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {area.commonIssues.map((issue, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* California Statutes */}
              <section className="space-y-4">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  Key California Statutory Citations & Protections
                </h3>
                <div className="space-y-2">
                  {area.californiaLaws.map((law, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-gray-200 bg-white flex items-center gap-3">
                      <Scale className="w-5 h-5 text-[#3d7826] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">{law}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* When to Consult */}
              <section className="space-y-4">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  When to Consider Speaking With a California Attorney
                </h3>
                <div className="space-y-2.5">
                  {area.whenToConsult.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-[#edf7e8] text-[#3d7826] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              {area.faqs.length > 0 && (
                <section className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                    Frequently Asked Questions About {area.name}
                  </h3>
                  <div className="space-y-3">
                    {area.faqs.map((faq, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-gray-200 bg-[#f8fafc] space-y-1.5">
                        <h4 className="font-bold text-sm text-[#0f233a]">{faq.question}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Legal Disclaimer Box */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong>Legal Notice:</strong> The information provided regarding California {area.name.toLowerCase()} law is for general informational and educational purposes only and does not constitute formal legal advice. Deadlines and statutory limitations apply in California legal matters.
              </div>
            </div>

            {/* Sidebar CTA & Intake Trigger */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 space-y-4 sticky top-24">
                <h3 className="font-playfair text-lg font-bold text-[#0f233a]">
                  Need Help with a {area.name} Matter?
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Start our free intake to provide your California county and matter details for attorney evaluation.
                </p>

                <Link
                  href="/#hero-intake"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-sm transition-all"
                >
                  <span>Start Free Case Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-3 border-t border-gray-200 text-[11px] text-gray-500 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3d7826]" />
                    <span>Serving All 58 California Counties</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3d7826]" />
                    <span>Free Initial Intake & Review</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3d7826]" />
                    <span>Confidential & Secure</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
