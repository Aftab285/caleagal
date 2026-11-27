import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { all17PracticeAreasData } from '@/data/practiceAreas';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema, graph } from '@/lib/schema';
import { 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  Scale, 
  MapPin, 
  FileText, 
  HelpCircle, 
  Clock, 
  Lock, 
  Check, 
  ChevronRight,
  BookOpen
} from 'lucide-react';

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

  const { practiceAreaSlugMap, getMultilingualMetadata } = await import('@/lib/i18nRoutes');
  const esSlug = practiceAreaSlugMap[area.slug]?.es || area.slug;

  return getMultilingualMetadata({
    locale: 'en',
    enPath: `/practice-areas/${area.slug}`,
    esPath: `/es/areas-de-practica/${esSlug}`,
    title: area.seoTitle,
    description: area.metaDesc,
  });
}

export default async function PracticeAreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = all17PracticeAreasData.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const schema = graph(
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Practice Areas', path: '/practice-areas' },
      { name: area.name, path: `/practice-areas/${area.slug}` },
    ]),
    ...(area.faqs.length ? [faqSchema(area.faqs)] : []),
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <JsonLd data={schema} />
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* ========================================================================= */}
        {/* GLOBAL HERO STRUCTURE FOR SERVICE PAGES                                   */}
        {/* ========================================================================= */}
        <div className="bg-[#0f233a] text-white py-12 lg:py-16 relative overflow-hidden border-b border-[#162e4d]">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#85db61_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-5">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/practice-areas" className="hover:text-white transition-colors">Practice Areas</Link>
              <span>/</span>
              <span className="text-[#85db61] font-semibold">{area.name}</span>
            </div>

            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider border border-white/15">
              <Scale className="w-3.5 h-3.5 text-[#85db61]" />
              <span>{area.eyebrow}</span>
            </div>

            {/* Primary H1 Headline */}
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
              {area.h1}
            </h1>

            {/* Customized Subhead */}
            <p className="text-gray-200 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
              {area.subhead}
            </p>

            {/* Supporting Text Box */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-3xl text-xs sm:text-sm text-gray-300 leading-relaxed">
              {area.supportingText}
            </div>

            {/* Prominent Single Primary Hero CTA */}
            <div className="pt-2 max-w-lg">
              <Link
                href={`/intake?area=${encodeURIComponent(area.slug)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-bold text-base sm:text-lg transition-all duration-200 shadow-[0_10px_25px_rgba(61,120,38,0.4)] hover:shadow-[0_12px_30px_rgba(61,120,38,0.55)] hover:scale-[1.02] border border-[#52a632]/50 cursor-pointer"
              >
                <span>{area.primaryCta}</span>
                <ArrowRight className="w-5 h-5 text-[#85db61] shrink-0" />
              </Link>
            </div>

            {/* Small Trust Text Under CTA */}
            <p className="text-xs text-gray-300 pt-1 font-medium flex items-center gap-1.5 flex-wrap">
              <span>Free case review for qualifying matters</span>
              <span>•</span>
              <span>Confidential inquiry</span>
              <span>•</span>
              <span>Serving all 58 California counties</span>
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HERO TRUST ROW (4 PILLARS)                                               */}
        {/* ========================================================================= */}
        <div className="bg-[#eef2f6] border-b border-[#cbd5e1] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs font-semibold text-[#0f233a]">
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-[#cbd5e1] shadow-2xs">
                <MapPin className="w-4 h-4 text-[#3d7826] shrink-0" />
                <span>Serving All 58 California Counties</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-[#cbd5e1] shadow-2xs">
                <Lock className="w-4 h-4 text-[#3d7826] shrink-0" />
                <span>Confidential Case Inquiry</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-[#cbd5e1] shadow-2xs">
                <Scale className="w-4 h-4 text-[#3d7826] shrink-0" />
                <span>Qualified Attorney Matching</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-[#cbd5e1] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0" />
                <span>Free Case Review for Qualifying Matters</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN BODY CONTENT WITH STRUCTURED H2 SECTIONS                             */}
        {/* ========================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Section 1: Legal Help & Overview */}
              <section className="space-y-4">
                <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0f233a]">
                  California {area.name} Legal Help
                </h2>
                <div className="h-[3px] w-12 bg-[#3d7826] rounded-full"></div>
                <p className="text-gray-700 text-base leading-relaxed">
                  {area.overview}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  California law provides distinct legal frameworks and deadlines that govern {area.name.toLowerCase()} matters. Navigating local superior courts and state agencies requires thorough preparation and understanding of applicable statutory provisions.
                </p>
              </section>

              {/* Section 2: Common Issues */}
              <section className="space-y-5 p-6 sm:p-7 bg-[#f8fafc] rounded-2xl border border-gray-200 shadow-xs">
                <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0f233a]">
                  Common {area.name} Issues We Help With
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {area.commonIssues.map((issue, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-white p-3 rounded-xl border border-gray-200/80 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                      <span className="leading-snug">{issue}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: California Statutory Citations */}
              <section className="space-y-4">
                <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0f233a]">
                  Key California Statutory Citations & Legal Protections
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Matters in California are governed by specific state codes, statutory standards, and administrative procedures:
                </p>
                <div className="space-y-2.5">
                  {area.californiaLaws.map((law, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-gray-200 bg-white flex items-center gap-3 shadow-2xs">
                      <Scale className="w-5 h-5 text-[#3d7826] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-[#0f233a]">{law}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: When to Speak with a Lawyer */}
              <section className="space-y-4">
                <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0f233a]">
                  When Should You Consider Speaking With a California {area.name} Lawyer?
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Consulting an attorney early helps protect your statutory rights, avoid missing critical California filing deadlines, and evaluate the full scope of your matter:
                </p>
                <div className="space-y-3">
                  {area.whenToConsult.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-gray-200/80 text-xs sm:text-sm text-gray-700">
                      <span className="w-6 h-6 rounded-full bg-[#edf7e8] text-[#3d7826] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#d5edd0]">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ========================================================================= */}
              {/* MID-PAGE CALL TO ACTION BOX                                               */}
              {/* ========================================================================= */}
              <div className="p-6 sm:p-8 bg-[#0f233a] text-white rounded-2xl shadow-md space-y-4 relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>California Legal Intake</span>
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
                  Have Questions About Your {area.name} Matter?
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Tell us what happened. We’ll review your information and help connect you with a qualified California attorney handling cases in your county. Free case evaluations for qualifying matters.
                </p>
                <div className="pt-2">
                  <Link
                    href={`/intake?area=${encodeURIComponent(area.slug)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-xs sm:text-sm transition-all"
                  >
                    <span>{area.primaryCta}</span>
                    <ArrowRight className="w-4 h-4 text-[#85db61]" />
                  </Link>
                </div>
              </div>

              {/* Section 5: How CALegalSource Helps */}
              <section className="space-y-4">
                <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0f233a]">
                  How CALegalSource Helps You Connect With Legal Counsel
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  CA Legal Source operates a structured California attorney referral and matching service. We are committed to connecting individuals and small businesses with qualified attorneys who have verified State Bar licensure, practice-area panel eligibility, and geographic coverage in your specific county.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-1.5 shadow-2xs">
                    <p className="font-bold text-sm text-[#0f233a]">Verified Licensure</p>
                    <p className="text-xs text-gray-600">Attorneys must hold active California State Bar licenses in good standing.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-1.5 shadow-2xs">
                    <p className="font-bold text-sm text-[#0f233a]">County-Specific Match</p>
                    <p className="text-xs text-gray-600">Referrals are aligned with the local California Superior Court jurisdiction.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-1.5 shadow-2xs">
                    <p className="font-bold text-sm text-[#0f233a]">Fair Allocation</p>
                    <p className="text-xs text-gray-600">Cases are allocated based on practice qualifications, not lead bidding.</p>
                  </div>
                </div>
              </section>

              {/* Section 6: What Happens After You Submit Your Case */}
              <section className="space-y-4 p-6 bg-[#f8fafc] rounded-2xl border border-gray-200">
                <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0f233a]">
                  What Happens After You Submit Your Case?
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#3d7826] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-[#0f233a]">Step 1: Confidential Case Intake</strong>
                      <p className="text-gray-600 text-xs mt-0.5">You submit your matter details and California county through our secure online form.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#3d7826] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-[#0f233a]">Step 2: Legal Review & Panel Matching</strong>
                      <p className="text-gray-600 text-xs mt-0.5">Your inquiry is evaluated for practice area classification and geographic jurisdiction.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#3d7826] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-[#0f233a]">Step 3: Attorney Introduction</strong>
                      <p className="text-gray-600 text-xs mt-0.5">Where appropriate, an attorney or representative contacts you directly to discuss your legal options.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: FAQs */}
              {area.faqs && area.faqs.length > 0 && (
                <section className="space-y-4 pt-2">
                  <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0f233a]">
                    California {area.name} FAQs
                  </h2>
                  <div className="space-y-3">
                    {area.faqs.map((faq, idx) => (
                      <div key={idx} className="p-5 rounded-xl border border-gray-200 bg-white space-y-2 shadow-2xs">
                        <p className="font-bold text-sm text-[#0f233a] flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-[#3d7826] shrink-0" />
                          <span>{faq.question}</span>
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 8: Connect With a Lawyer Across Counties */}
              <section className="space-y-4 pt-4 border-t border-gray-200">
                <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0f233a]">
                  Connect With a California {area.name} Lawyer Across All 58 Counties
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  CA Legal Source provides attorney matching services statewide. Explore local California county directories and courthouse information:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  {(area.relatedCounties || [
                    { name: 'Los Angeles County', slug: 'los-angeles-county' },
                    { name: 'San Diego County', slug: 'san-diego-county' },
                    { name: 'Orange County', slug: 'orange-county' },
                    { name: 'San Francisco County', slug: 'san-francisco-county' }
                  ]).map((county) => (
                    <Link
                      key={county.slug}
                      href={`/california/${county.slug}`}
                      className="p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-white hover:border-[#3d7826] transition-all text-xs font-semibold text-[#0f233a] flex items-center justify-between group"
                    >
                      <span className="truncate">{county.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#3d7826] transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>

                {/* Related Legal Resource Guides */}
                {area.relatedGuides && area.relatedGuides.length > 0 && (
                  <div className="pt-3 space-y-2">
                    <p className="text-xs font-bold text-[#0f233a] uppercase tracking-wider">
                      Related California Legal Guides:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.relatedGuides.map((guide) => (
                        <Link
                          key={guide.slug}
                          href={`/legal-resources/${guide.slug}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#edf7e8] border border-[#d5edd0] text-xs text-[#2d5a1b] font-semibold hover:bg-[#d5edd0] transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-[#3d7826]" />
                          <span>{guide.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* Legal Disclaimer Box */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong>Legal Notice & Disclaimer:</strong> The information provided regarding California {area.name.toLowerCase()} law is for general informational and educational purposes only and does not constitute formal legal advice. CA Legal Source is an attorney referral and legal matching platform operated by DPA Attorneys at Law. Submitting an inquiry does not establish an attorney-client relationship. Free case reviews are available for qualifying matters subject to attorney panel availability.
              </div>

            </div>

            {/* Right Sidebar: Interactive Sticky Intake Trigger */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#f8fafc] p-6 sm:p-7 rounded-2xl border border-gray-200 space-y-5 sticky top-24 shadow-sm">
                <div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3d7826] uppercase tracking-wider mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Free Case Evaluation</span>
                  </div>
                  <p className="font-playfair text-xl font-bold text-[#0f233a]">
                    Need Help With a {area.name} Matter?
                  </p>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Submit your details and California county to request a free case evaluation with a qualified attorney handling cases like yours.
                  </p>
                </div>

                <Link
                  href={`/intake?area=${encodeURIComponent(area.slug)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:scale-[1.01]"
                >
                  <span>{area.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-[#85db61]" />
                </Link>

                <div className="pt-3 border-t border-gray-200 text-xs text-gray-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0" />
                    <span>Serving All 58 California Counties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0" />
                    <span>Confidential Case Inquiry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0" />
                    <span>Pre-Screened California Lawyers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0" />
                    <span>Free Evaluation for Qualifying Matters</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <Link
                    href="/how-it-works"
                    className="text-xs text-[#3d7826] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Learn how our matching process works</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
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
