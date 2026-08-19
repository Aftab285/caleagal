import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sampleAttorneysData } from '@/data/attorneys';
import { ShieldCheck, MapPin, Languages, Briefcase, GraduationCap, ArrowRight, UserCheck, CheckCircle2, Phone } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sampleAttorneysData.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const attorney = sampleAttorneysData.find((a) => a.slug === slug);

  if (!attorney) {
    return { title: 'Attorney Profile Not Found | CA Legal Source' };
  }

  return {
    title: `${attorney.name} | California Attorney Profile | CA Legal Source`,
    description: `${attorney.name} - ${attorney.title} at ${attorney.firm}. Practice areas: ${attorney.practiceAreas.join(', ')}. Serving ${attorney.countiesServed.join(', ')}.`,
    alternates: {
      canonical: `https://calegalsource.com/attorneys/${attorney.slug}`,
    },
  };
}

export default async function AttorneyProfileDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const attorney = sampleAttorneysData.find((a) => a.slug === slug);

  if (!attorney) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/attorneys" className="hover:text-white">Attorneys</Link>
              <span>/</span>
              <span className="text-[#85db61]">{attorney.name}</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <h1 className="font-playfair text-3xl sm:text-4xl font-bold tracking-tight">
                  {attorney.name}
                </h1>
                <p className="text-gray-300 text-sm sm:text-base font-medium">
                  {attorney.title} • {attorney.firm}
                </p>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#edf7e8] text-[#3d7826] text-xs font-bold shadow-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>{attorney.verificationStatus}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Profile Info */}
            <div className="lg:col-span-8 space-y-8">
              <section className="space-y-3">
                <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">
                  Professional Background
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {attorney.bio}
                </p>
              </section>

              <section className="p-6 bg-[#f8fafc] rounded-2xl border border-gray-200 space-y-4">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  Verified Credentials & State Bar Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
                  <div>
                    <span className="text-gray-400 block text-xs">State Bar Registration</span>
                    <strong className="text-gray-900">{attorney.barNumber}</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-xs">Admitted to California Bar</span>
                    <strong className="text-gray-900">{attorney.admittedYear} ({attorney.experienceYears} Years Experience)</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-xs">Legal Education</span>
                    <strong className="text-gray-900">{attorney.education}</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-xs">Languages Spoken</span>
                    <strong className="text-gray-900">{attorney.languages.join(', ')}</strong>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  Practice Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {attorney.practiceAreas.map((area, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-[#edf7e8] text-[#3d7826] font-semibold text-xs border border-[#cde8c5]">
                      {area}
                    </span>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  California Counties Served
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-gray-700">
                  {attorney.countiesServed.map((county, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#3d7826]" />
                      <span>{county}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 space-y-4 sticky top-24">
                <h3 className="font-playfair text-lg font-bold text-[#0f233a]">
                  Request a Case Review
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Submit your details confidentially to be matched with {attorney.name} or an appropriate panel member in your jurisdiction.
                </p>

                <Link
                  href="/#hero-intake"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-sm transition-all"
                >
                  <span>Start Free Case Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-2 text-center">
                  <a href="tel:8001234567" className="text-xs font-semibold text-[#0f233a] hover:text-[#3d7826] flex items-center justify-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#3d7826]" />
                    <span>(800) 123-4567</span>
                  </a>
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
