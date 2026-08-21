import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { legalGuidesData } from '@/data/legalGuides';
import { ArrowRight, Clock, User, ShieldCheck, CheckCircle2, Scale, ExternalLink } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return legalGuidesData.map((g) => ({
    slug: g.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = legalGuidesData.find((g) => g.slug === slug);

  if (!guide) {
    return { title: 'Guide Not Found | CA Legal Source' };
  }

  return {
    title: `${guide.title} | CA Legal Source`,
    description: guide.summary,
    alternates: {
      canonical: `https://www.calegalsource.com/legal-resources/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.summary,
      url: `https://www.calegalsource.com/legal-resources/${guide.slug}`,
      siteName: 'CA Legal Source',
      type: 'article',
    },
  };
}

export default async function LegalGuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = legalGuidesData.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Article Header */}
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/legal-resources" className="hover:text-white">Legal Resources</Link>
              <span>/</span>
              <span className="text-[#85db61]">{guide.practiceArea}</span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {guide.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 pt-2 border-t border-gray-700/60">
              <span>Author: <strong>{guide.author}</strong></span>
              <span>•</span>
              <span>Reviewed By: <strong>{guide.reviewer}</strong></span>
              <span>•</span>
              <span>Last Reviewed: <strong>{guide.lastReviewed}</strong></span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {guide.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article Content & Citations */}
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-14">
          <div className="space-y-8">
            
            {/* Summary Box */}
            <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-200">
              <div className="text-xs font-bold text-[#3d7826] uppercase tracking-wider mb-1">
                Executive Summary
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {guide.summary}
              </p>
            </div>

            {/* Main Text Content */}
            <div className="prose prose-slate max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-normal">
              {guide.content}
            </div>

            {/* Official Statutory Citations Section */}
            <div className="p-6 rounded-2xl bg-[#edf7e8]/60 border border-[#cde8c5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0f233a]">
                <Scale className="w-4 h-4 text-[#3d7826]" />
                <span>Primary California Legal Authorities & Citations</span>
              </div>
              <div className="space-y-2">
                {guide.citations.map((cite, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs text-gray-700 bg-white p-3 rounded-lg border border-gray-200">
                    <span className="font-semibold">{cite.name} ({cite.codeRef})</span>
                    <a
                      href={cite.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3d7826] hover:underline flex items-center gap-1"
                    >
                      <span>Official Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* In-Article Referral CTA */}
            <div className="p-6 rounded-2xl bg-[#0f233a] text-white text-center space-y-4">
              <h3 className="font-playfair text-2xl font-bold">
                Facing a {guide.practiceArea} Issue in California?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
                Tell us what happened and explore options for connecting with an attorney who handles cases like yours.
              </p>
              <Link
                href="/#hero-intake"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-sm transition-all"
              >
                <span>Start Free Case Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-gray-500 text-center leading-relaxed">
              <strong>Disclaimer:</strong> This guide provides general legal information on California law and does not constitute formal legal advice. Deadlines apply to California legal claims.
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
