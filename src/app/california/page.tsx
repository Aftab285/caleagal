import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { californiaCountiesData } from '@/data/counties';
import { MapPin, ChevronRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'California Counties Legal Directory | All 58 Counties | CA Legal Source',
  description: 'Explore legal help and attorney matching services across all 58 California counties, including Los Angeles, San Diego, Orange County, Santa Clara, and Alameda.',
  alternates: {
    canonical: 'https://www.calegalsource.com/california',
  },
};

export default function CaliforniaHubPage() {
  const regions = [
    'Southern California',
    'Bay Area',
    'Central Valley',
    'Central Coast',
    'Northern California',
    'Sierra / Northern Mountains'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Statewide Coverage</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              California County Legal Directory
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Legal matters in California are governed by specific county Superior Court jurisdictions. Explore attorney referral coverage and legal resources across all 58 California counties.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-12">
          {regions.map((region) => {
            const countiesInRegion = californiaCountiesData.filter((c) => c.region === region);
            return (
              <div key={region} className="space-y-4">
                <h2 className="font-playfair text-2xl font-bold text-[#0f233a] border-b border-gray-200 pb-2">
                  {region}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {countiesInRegion.map((county) => (
                    <Link
                      key={county.slug}
                      href={`/california/${county.slug}`}
                      className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#3d7826] hover:shadow-sm transition-all group flex items-start justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#3d7826]" />
                          <h3 className="font-bold text-sm text-[#0f233a] group-hover:text-[#3d7826] transition-colors">
                            {county.name}
                          </h3>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-1">
                          County Seat: {county.seat} • Pop: {county.population}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#3d7826] mt-1" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
