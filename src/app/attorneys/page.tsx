import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sampleAttorneysData } from '@/data/attorneys';
import { ShieldCheck, MapPin, Languages, Briefcase, GraduationCap, ArrowRight, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'California Attorney Directory | Find Pre-Screened California Lawyers | CA Legal Source',
  description: 'Search our directory of verified California attorneys by practice area, county jurisdiction, and language preference.',
  alternates: {
    canonical: 'https://calegalsource.com/attorneys',
  },
};

export default function AttorneyDirectoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified California Legal Network</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              California Attorney Directory
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Explore participating attorneys in our California referral network. Each attorney is verified for active California State Bar licensure, practice experience, and geographic coverage.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleAttorneysData.map((attorney) => (
              <div
                key={attorney.id}
                className="bg-white rounded-2xl p-6 border border-[#cbd5e1] shadow-xs hover:shadow-md hover:border-[#3d7826] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-playfair text-xl font-bold text-[#0f233a] group-hover:text-[#3d7826] transition-colors">
                        {attorney.name}
                      </h2>
                      <p className="text-xs font-semibold text-gray-600 mt-0.5">{attorney.title}</p>
                      <p className="text-[11px] text-gray-400">{attorney.firm}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#edf7e8] text-[#3d7826] text-[10px] font-bold shrink-0">
                      <UserCheck className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {attorney.bio}
                  </p>

                  <div className="pt-2 space-y-2 text-xs text-gray-600 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-[#3d7826] shrink-0" />
                      <span className="truncate">{attorney.practiceAreas.join(', ')}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#3d7826] shrink-0" />
                      <span className="truncate">{attorney.countiesServed.slice(0, 2).join(', ')}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Languages className="w-3.5 h-3.5 text-[#3d7826] shrink-0" />
                      <span>{attorney.languages.join(', ')}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-gray-400">
                      <GraduationCap className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{attorney.education} • {attorney.barNumber}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/attorneys/${attorney.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#3d7826] hover:underline"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/#hero-intake"
                    className="px-3 py-1.5 rounded-lg bg-[#0f233a] hover:bg-[#162e4d] text-white font-semibold text-xs transition-colors"
                  >
                    Request Referral
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 text-center space-y-2">
            <h3 className="font-playfair text-lg font-bold text-[#0f233a]">
              Are You a California-Licensed Attorney?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
              Join our verified referral panels and connect with individuals seeking legal representation in your practice areas and counties.
            </p>
            <div className="pt-2">
              <Link
                href="/for-attorneys"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#3d7826] hover:underline"
              >
                <span>Learn About Attorney Panel Participation →</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
