'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Search, ChevronRight } from 'lucide-react';
import { californiaCountiesData } from '@/data/counties';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function CaliforniaCoverage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const { language } = useLanguage();
  const t = translations[language].coverage;

  const regions = [
    'All',
    'Southern California',
    'Bay Area',
    'Central Valley',
    'Central Coast',
    'Sacramento Area',
    'Northern California',
    'Inland Empire',
  ];

  const filteredCounties = californiaCountiesData.filter((county) => {
    const matchesSearch = county.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      county.seat.toLowerCase().includes(searchQuery.toLowerCase()) ||
      county.majorCities.some(city => city.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRegion = selectedRegion === 'All' || county.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <section id="california-coverage" className="py-16 relative overflow-hidden bg-[#0f233a]/5">
      {/* Background Graphic Image */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image
          src="/california-coverage-bg.jpg"
          alt="California Skyline"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#cbd5e1] text-[#3d7826] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            {t.badge}
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0f233a] tracking-tight">
            {t.title}
          </h2>
          <div className="h-[3px] w-12 bg-[#3d7826] rounded-full mx-auto mt-2.5 mb-3"></div>
          <p className="text-gray-600 text-sm sm:text-base font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="bg-white/95 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-[#cbd5e1] shadow-sm max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-1/2">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-[#cbd5e1] rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] transition-colors"
              />
            </div>

            {/* Region Filter Chips */}
            <div className="w-full md:w-1/2 flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    selectedRegion === region
                      ? 'bg-[#3d7826] text-white shadow-xs'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Counties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCounties.slice(0, 16).map((county) => (
            <Link
              key={county.slug}
              href={`/california/${county.slug}`}
              aria-label={`View legal coverage directory for ${county.name}`}
              className="p-4 rounded-xl border border-[#cbd5e1] bg-white/95 backdrop-blur-xs hover:bg-white hover:border-[#3d7826] hover:shadow-lg transition-all duration-200 group flex items-start justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#3d7826]" />
                  <span className="font-bold text-sm text-[#0f233a] group-hover:text-[#3d7826] transition-colors">
                    {county.name}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500">
                  {county.region} • Seat: {county.seat}
                </p>
                <p className="text-[11px] text-gray-400 truncate max-w-[190px]">
                  {county.majorCities.slice(0, 3).join(', ')}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#3d7826] group-hover:translate-x-0.5 transition-all mt-1" />
            </Link>
          ))}
        </div>

        {/* Bottom Explorer Link */}
        <div className="mt-10 text-center">
          <Link
            href="/california"
            aria-label="Explore all 58 California county legal directories"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-white/95 backdrop-blur-xs border border-[#cbd5e1] text-xs sm:text-sm font-bold text-[#3d7826] hover:bg-[#edf7e8] transition-colors shadow-xs"
          >
            <span>{t.exploreAll}</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
