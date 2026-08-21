import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { californiaCountiesData } from '@/data/counties';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2, Phone, Building } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return californiaCountiesData.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const county = californiaCountiesData.find((c) => c.slug === slug);

  if (!county) {
    return { title: 'County Not Found | CA Legal Source' };
  }

  return {
    title: `${county.name} Legal Help & Attorney Referral | CA Legal Source`,
    description: `Find qualified California attorneys in ${county.name} covering ${county.majorCities.slice(0, 4).join(', ')}. Free case review and intake for qualifying matters.`,
    alternates: {
      canonical: `https://www.calegalsource.com/california/${county.slug}`,
    },
  };
}

export default async function CountyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const county = californiaCountiesData.find((c) => c.slug === slug);

  if (!county) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/california" className="hover:text-white">California Counties</Link>
              <span>/</span>
              <span className="text-[#85db61]">{county.name}</span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {county.name} Legal Help & Attorney Connection
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Serving residents across {county.majorCities.join(', ')} with pre-screened legal assistance under the jurisdiction of the {county.name} Superior Court.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/#hero-intake"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-sm transition-all"
              >
                <span>Start {county.name} Case Review</span>
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

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              <section className="space-y-4">
                <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">
                  Legal Services in {county.name}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Whether you are dealing with an employment dispute, a landlord-tenant conflict, personal injury, or family law matter in {county.name}, our network connects you with attorneys familiar with local court procedures, filing timelines, and local rules of court.
                </p>
              </section>

              <section className="p-6 bg-[#f8fafc] rounded-2xl border border-gray-200 space-y-4">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  Cities & Communities Served in {county.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-gray-700">
                  {county.majorCities.map((city, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#3d7826]" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  {county.name} Superior Court Jurisdiction
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Civil lawsuits, unlawful detainers, small claims, family law, and criminal matters in {county.name} are adjudicated through the California Superior Court system. County Seat: <strong>{county.seat}</strong>.
                </p>
              </section>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 space-y-4 sticky top-24">
                <h3 className="font-playfair text-lg font-bold text-[#0f233a]">
                  Get Connected in {county.name}
                </h3>
                <p className="text-xs text-gray-600">
                  Free confidential case evaluation for qualifying matters across {county.name}.
                </p>
                <Link
                  href="/#hero-intake"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-sm transition-all"
                >
                  <span>Start Free Case Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
